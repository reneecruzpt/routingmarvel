// Quadrinho.js
import React, { useState, useEffect } from 'react';
import md5 from 'blueimp-md5';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Quadrinho = () => {
  const [comic, setComic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se já há um quadrinho na localStorage
    const storedComic = JSON.parse(localStorage.getItem('selectedComic'));

    if (storedComic) {
      setComic(storedComic);
    } else {
      // Se não houver quadrinho armazenado, carrega um novo
      loadRandomComic();
    }
  }, []);

  // A função gera um hash necessário para a solicitação da Marvel API
  const generateHash = (ts, privateKey, publicKey) => {
    const toBeHashed = ts + privateKey + publicKey;
    return md5(toBeHashed);
  };

  const loadRandomComic = () => {
    const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY || 'SUA_CHAVE_PUBLICA_AQUI';
    const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY || 'SUA_CHAVE_PRIVADA_AQUI';
    const apiUrl = 'https://gateway.marvel.com/v1/public/comics';

    const currentDate = new Date();
    const currentSeconds = currentDate.getSeconds();

    const ts = currentDate.getTime() + currentSeconds * 1000;
    // A API da Marvel exige que seja gerado um hash para que seja autorizado o retorno da request
    const hash = generateHash(ts, privateKey, publicKey);

    // Adicionado um random no offset para ampliar a busca por quadrinhos distintos
    const offset = Math.floor(Math.random() * 100) + 1;

    const limit = 100;

    const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        // Comics é o retorno do JSON
        // Por uma limitação da API Marvel, estão sendo retornados os mesmos 100 quadrinhos, porém
        const comics = data.data.results;
        console.log(comics);
        let randomComicIndex = Math.floor(Math.random() * comics.length);
        let randomComic = comics[randomComicIndex];

        while (randomComic.images.length === 0) {
          randomComicIndex = Math.floor(Math.random() * comics.length);
          // RandomComic é o retorno de um JSON com apenas 
          randomComic = comics[randomComicIndex];
        }

        // Armazena o quadrinho na localStorage
        localStorage.setItem('selectedComic', JSON.stringify(randomComic));
        setComic(randomComic);
      })
      .catch(error => {
        console.error('Error fetching comic:', error);
      });
  };

  // const getImageResolution = () => {
  //   if (comic && comic.thumbnail && comic.thumbnail.path && comic.thumbnail.extension) {
  //     const imageUrl = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`;

  //     const image = new Image();
  //     image.src = imageUrl;

  //     image.onload = () => {
  //       const resolution = {
  //         width: image.width,
  //         height: image.height
  //       };

  //       console.log('Resolução da imagem:', resolution);
  //     };
  //   }
  // };

  const redirectToDetails = () => {
    // Redirect to the details page using navigate
    navigate('/detalhes');
  };

  return (
    <div className="general-container comic-container">
      {/* A props é comic */}
      <h2 className="headerFont centerText">YOUR COMIC</h2>
      <div id="comic-image-container">
        <img id="comic-image" alt="Comic Cover" src={comic ? `${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}` : ''} />
      </div>
      <p id="comic-title">{comic ? comic.title : ''}</p>
      <p><strong>Edição:</strong> <span id="comic-issue">{comic ? `#${comic.issueNumber}` : 'Edição Indisponível'}</span></p>
      <p><strong>Preço:</strong> <span id="comic-price">{comic ? `$${comic.prices[0].price}` : 'Preço Indisponível'}</span></p>
      <div className='botoes-lado'>
        <button onClick={loadRandomComic}>New Comic</button>
        {/* <button onClick={getImageResolution}>Obter Resolução da Imagem</button> */}
        <button onClick={redirectToDetails}>More Details</button>
      </div>
    </div>
  );
};

export default Quadrinho;
