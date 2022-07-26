import React, { useState } from 'react';
import './App.scss';
import { MainScreen, MobileMenu, TheFooter, TheHeader, ThePrizes, TheQuestions, TheRules, TheWinners } from './components';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from "aos";

function App() {
  const [show_menu, set_show_menu] = useState(false);

  const toggle = () => {
    if (show_menu) {
      document.body.classList.remove("fixed");
      document.body.style.overflow = "";
    } else {
      document.body.classList.add("fixed");
      document.body.style.overflow = "hidden";
    }

    set_show_menu(!show_menu);
  };

  AOS.init();


  return (
    <ParallaxProvider>
      <div className="App">
        <TheHeader toggle={toggle} />
        <MainScreen />
        <TheRules />
        <ThePrizes />
        <TheWinners />
        <TheQuestions />
        <TheFooter />

        <MobileMenu
          toggle={toggle}
          show={show_menu}
        />
      </div>

    </ParallaxProvider>
  );
}

export default App;
