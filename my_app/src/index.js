import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Library from './chapter03/Library';
//import Clock from './chapter04/Clock';
//import CommentList from './chapter05/CommentList';
//import NotificationList from './chapter_06/NotificationList';
//import Accomodate from './chapter07/Accomodate';
//import ConfirmButton from './chapter08/ConfirmButton';
import LandingPage from './chapter09/LandingPage';

//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */ }
//     <Library/>
//   </React.StrictMode>
// );

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>,document.getElementById('root')
//   );
// }, 1000);

// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Accomodate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);





reportWebVitals();
