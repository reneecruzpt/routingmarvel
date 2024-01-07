// Sobre.js
import React from 'react';
import ProjectInfo from '../ProjectInfo';
import projectInfo from '../ProjectInfo.json';

const Sobre = () => {
  return (
    <div>
      <ProjectInfo projectInfo={projectInfo} />
    </div>
  );
};

export default Sobre;
