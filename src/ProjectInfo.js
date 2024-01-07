// ProjectInfo.js
import React from 'react';
import './styles/projectInfo.css'

const ProjectInfo = ({ projectInfo }) => {
  return (
    <div className='general-container project-info'>
      <h2 className='header2'>SOBRE A APP</h2>
      {projectInfo.map((item, index) => (
        <div key={index}>
          <p className='paragraph-margin'>
            Esta aplicação é desenvolvida em React versão: <span>{item.reactVersion}</span><br></br>
            Utiliza o Node.js na versão: <span className='marvel-font'>{item.nodeVersion}</span>
          </p>
          <p className='paragraph-margin'>
            Trabalha com base na API Marvel Developer disponível em<br></br><span className='marvel-font'>{item.apiUrl}</span>
          </p>
          <p className='paragraph-margin'>
            A aplicação é apresentada ao Professor <span className='marvel-font'>{item.professorName}</span>
            <br></br>Ministrante da Unidade Curricular&nbsp;<span className='marvel-font'>{item.ucInfo}</span>.
          </p>
          <p className='paragraph-margin'>
            Na instituição de ensino&nbsp;<span className='marvel-font'>{item.schoolInfo}</span>
          </p>
          <p className='paragraph-margin'>
            O curso é realizado em&nbsp;<span className='marvel-font'>{item.local}</span>
          </p>
          <p className='paragraph-margin'>
            Este projeto foi desenvolvido pelos alunos:<br></br><span className='marvel-font'>{item.students.join(', ')}.</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;
