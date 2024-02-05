// App.jsx
import React from 'react';
import Navigate from './components/Navigate';
import MissionVision from './components/MissionVision';
import Feature from './components/Feature';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div data-spy="scroll" data-target="#navbar">
      <Navigate />
      <main>
      <AboutUs></AboutUs>
      <GetStarted/>
        {/* <MissionVision /> */}
        {/* <Feature /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;





// // App.jsx

// import React from 'react';
// import './App.css';
// import logo from './images/ecell_logo/ecell.png';
// import './styles/navbar.css';
// import AboutUs from './components/AboutUs';
// import GetStarted from './components/GetStarted';

// function App() {
//   const handleAboutUsClick = () => {
//     const aboutUsDiv = document.querySelector('.about-us-div');
//     if (aboutUsDiv) {
//       aboutUsDiv.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleGetStartedClick = () => {
//     const getStartedDiv = document.querySelector('.get-started-div');
//     if (getStartedDiv) {
//       getStartedDiv.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  

//   return (
//     <>
//       <div className="app-container">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <a className="navbar-brand" href="#">
//             <img src={logo} alt="Logo" width="auto" height="50" />
//           </a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item active">
//                 <a className="nav-link" href="/about_us" onClick={handleAboutUsClick}>ABOUT US <span className="sr-only">(current)</span></a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/get_started" onClick={handleGetStartedClick}>GET STARTED</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">ACHIEVEMENTS</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">EVENTS</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">PARTNERS</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">TEAM</a>
//               </li>
//             </ul>
//             <button className="btn btn-outline-danger my-2 my-lg-0 glow-on-hover">GET IN TOUCH</button>
//           </div>
//         </nav>
//         <div className="video-background">
//           <video autoPlay loop muted className="fullscreen-video">
//             <source src="src/videos/startup.mp4" type="video/mp4" />
//           </video>
//         </div>
//         <h1 className="welcome-text">The destination of innovation,</h1>
//         <h1 className='welcome-text'>the store house of ideas</h1>
//       </div>

      
//       <AboutUs />
//       <GetStarted />
//     </>
//   );
// }

// export default App;
