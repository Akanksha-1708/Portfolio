import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Flip} from 'gsap/Flip';
import {useGSAP} from '@gsap/react';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/source-serif-4';
import App from './App.jsx';
import './styles.css';


// register to use gsap features 
gsap.registerPlugin(ScrollTrigger,Flip,useGSAP);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
)