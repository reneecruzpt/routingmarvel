// Detalhes.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Detalhes = () => {
  const [selectedComic, setSelectedComic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera o quadrinho armazenado na localStorage
    const storedComic = JSON.parse(localStorage.getItem('selectedComic'));
    if (storedComic) {
      setSelectedComic(storedComic);
    }
  }, []);

  const getCharacterNames = (characters) => {
    return characters.map(character => character.name).join(', ');
  };

  const getCreatorNames = (creators) => {
    return creators.map(creator => `${creator.role}: ${creator.name}`).join(', ');
  };

  const handleGoBack = () => {
    // Navegar de volta à página anterior
    navigate('/quadrinho');
  };

  return (
    <div id="comic-container">
      <h2>Detalhes do Quadrinho Aleatório</h2>
      <div id="comic-image-container">
        <img id="comic-image" alt="Comic Cover" src={selectedComic ? `${selectedComic.thumbnail.path}/portrait_incredible.${selectedComic.thumbnail.extension}` : ''} />
      </div>
      <p id="comic-title">{selectedComic ? selectedComic.title : ''}</p>
      <p id="comic-description">{selectedComic ? selectedComic.description : ''}</p>
      <p><strong>Edição:</strong> <span id="comic-issue">{selectedComic ? `#${selectedComic.issueNumber}` : ''}</span></p>
      <p><strong>Série:</strong> <span id="comic-series">{selectedComic ? selectedComic.series.name : ''}</span></p>
      <p><strong>Preço:</strong> <span id="comic-price">{selectedComic ? `$${selectedComic.prices[0].price}` : ''}</span></p>
      <p><strong>Páginas:</strong> <span id="comic-pages">{selectedComic ? selectedComic.pageCount : ''}</span></p>
      <p><strong>Personagens:</strong> <span id="comic-characters">{selectedComic ? getCharacterNames(selectedComic.characters.items) : ''}</span></p>
      <p><strong>Criadores:</strong> <span id="comic-creators">{selectedComic ? getCreatorNames(selectedComic.creators.items) : ''}</span></p>
      <p><strong>Evento:</strong> <span id="comic-event">{selectedComic ? (selectedComic.events.items.length > 0 ? selectedComic.events.items[0].name : 'N/A') : ''}</span></p>

      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default Detalhes;
