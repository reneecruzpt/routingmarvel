// //Navigation.js

// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route from react-router-dom
// import React, { useState, useEffect, useHistory } from 'react';
// import Home from './pages/Home';
// import Quadrinho from './pages/Quadrinho';
// import Detalhes from './pages/Detalhes';
// import Navigation from './Navigation';

// const App = () => {
// const [selectedPage, setSelectedPage] = useState('Home');

//   useEffect(() => {
//     if (selectedPage === 'Details') {
//       Navigation.history.push('/detalhes');
//     }
//   }, [selectedPage]);
//   const history = useHistory();

//   const handleSelectPage = (page) => {
//     setSelectedPage(page);
//     if (page === 'Detalhes') {
//       history.push('/detalhes');
//     }
//   };

//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li>
//               <button onClick={() => handleSelectPage('Home')}>Home</button>
//             </li>
//             <li>
//               <button onClick={() => handleSelectPage('Quadrinho')}>Gerar e Exibir Quadrinho</button>
//             </li>
//             <li>
//               <button onClick={() => handleSelectPage('Detalhes')}>Ver Detalhes</button>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" exact component={Home} />
//           <Route path="/quadrinho" component={Quadrinho} />
//           <Route path="/detalhes" component={Detalhes} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
