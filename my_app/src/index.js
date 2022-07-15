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
//import LandingPage from './chapter09/LandingPage';
//import AttendanceBook from './chapter10/AttendanceBook';
//import SignUp from './chapter11/SignUp';
//import Calculator from './chapter12/Calculator';
//import ProfileCard from './chapter13/ProfileCard';
//import DarkOrLight from './chapter14/DarkOrLight';
import Blocks from './chapter15/Blocks';

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
    <Blocks />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
