// Quadrinho.js
import React, { useState, useEffect } from 'react';
import md5 from 'blueimp-md5';
import { useNavigate } from 'react-router-dom';

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

  const generateHash = (ts, privateKey, publicKey) => {
    const toBeHashed = ts + privateKey + publicKey;
    return md5(toBeHashed);
  };

  const loadRandomComic = () => {
    const publicKey = '186f909edc37adb13e9b97e98a806bec';
    const privateKey = 'd5ad5c902f3cb774a5587a241dedb7610f4c9f7d';
    const apiUrl = 'https://gateway.marvel.com/v1/public/comics';

    const currentDate = new Date();
    const currentSeconds = currentDate.getSeconds();

    const ts = currentDate.getTime() + currentSeconds * 1000;
    const hash = generateHash(ts, privateKey, publicKey);
    const offset = 1;
    const limit = 100;
    const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        const comics = data.data.results;
        console.log(comics);
        let randomComicIndex = Math.floor(Math.random() * comics.length);
        let randomComic = comics[randomComicIndex];

        while (randomComic.images.length === 0) {
          randomComicIndex = Math.floor(Math.random() * comics.length);
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

  const redirectToDetails = () => {
    // Redirect to the details page using navigate
    navigate('/detalhes');
  };

  return (
    <div id="comic-container">
      <h2>Quadrinho aleatório da Marvel</h2>
      <div id="comic-image-container">
        <img id="comic-image" alt="Comic Cover" src={comic ? `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}` : ''} />
      </div>
      <p id="comic-title">{comic ? comic.title : ''}</p>
      <p><strong>Edição:</strong> <span id="comic-issue">{comic ? `#${comic.issueNumber}` : ''}</span></p>
      <p><strong>Preço:</strong> <span id="comic-price">{comic ? `$${comic.prices[0].price}` : ''}</span></p>
      <button onClick={loadRandomComic}>Carregar quadrinho aleatório</button>
      <button onClick={redirectToDetails}>Ver Mais Informações</button>
    </div>
  );
};

export default Quadrinho;
