// Detalhes.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/detalhes.css'; 

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
    <div id="comic-container-details">
      <h2 className="headerFont centerText">COMIC DETAILS</h2>
      <div id="comic-image-container-details">
        <img id="comic-image-details" alt="Comic Cover" src={selectedComic ? `${selectedComic.thumbnail.path}/portrait_uncanny.${selectedComic.thumbnail.extension}` : ''} />
      </div>
      <p id="comic-title-details">{selectedComic ? selectedComic.title : ''}</p>
      <p id="comic-description-details" className="centerText">{selectedComic ? (selectedComic.description === "" ? 'Descrição Indisponível': selectedComic.description):""}</p>
      <p><strong>Edição:</strong> <span id="comic-issue-details">{selectedComic ? `#${selectedComic.issueNumber}` : 'S/N'}</span></p>
      <p><strong>Série:</strong> <span id="comic-series-details">{selectedComic ? selectedComic.series.name : 'Série Indisponível'}</span></p>
      <p><strong>Preço:</strong> <span id="comic-price-details">{selectedComic ? `$${selectedComic.prices[0].price}` : 'Preço Indisponível'}</span></p>
      <p><strong>Páginas:</strong> <span id="comic-pages-details">{selectedComic ? (selectedComic.pageCount < 1 ? "Indisponível" : selectedComic.pageCount): ""}</span></p>
      <p><strong>Personagens:</strong> <span id="comic-characters-details">{selectedComic ? (getCharacterNames(selectedComic.characters.items) === "" ? 'Personagens Indisponíveis' : getCharacterNames(selectedComic.characters.items)):""}</span></p>
      <p className="centerText"><strong>Criadores:</strong> <span id="comic-creators-details">{selectedComic ? getCreatorNames(selectedComic.creators.items) : 'Criadores Indisponíveis'}</span></p>
      <p><strong>Evento:</strong> <span id="comic-event-details">{selectedComic ? (selectedComic.events.items.length > 0 ? selectedComic.events.items[0].name : 'Sem Evento Registado') : ''}</span></p>

      <button className='paddingTopBottom' onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default Detalhes;
