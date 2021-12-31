import React, { useEffect } from "react";
// import { logo } from "../../assets/images/images";
import { IntroStyle } from "./intro-style";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { useState, useContext } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "../../components/Navbar";
import ItemDisplay from "../../components/ItemDisplay";
import ProductsNav from "../../components/ProductsNav";
import Menu from "../../components/Menu";
import { UIContext } from "../../context/ui";

const Intro = () => {
  let mySwiper = null;
  const [active, setActive] = useState(false);
  const { menuIsOpened } = useContext(UIContext)


  useEffect(() => {
    mySwiper = new Swiper(".swiper-container", {
      speed: 1000,
      direction: "vertical",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    });
  }, []);

  return (
    <IntroStyle>
      <Navbar />
      <ItemDisplay />
      <ProductsNav />
      

      {/* <div className={`header ${active ? "active" : ""}`}>
        <div className="header-menu" onClick={() => setActive(!active)}>
          X
        </div>
      </div>

      <div className="App">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="title">
          <h1>FrontEnd Utils </h1>
        </div>
        <div className="container-buttons">
          <p>--- boiler ReactJS ---</p>
        </div>

        <div className="slider-container">
          <div className="swiper-container">
            {/* <!-- Additional required wrapper --> */}
      {/* <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
      {/* <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
            </div> */}
      {/* <!-- If we need pagination --> */}
      {/* <div className="swiper-pagination"></div> */}

      {/* <!-- If we need scrollbar --> */}
      {/* <div className="swiper-scrollbar"></div>
          </div> */}
      {/* </div>
      </div> */}
      {/* <!-- If we need navigation buttons --> */}
      {/* // <div className="swiper-button-prev"></div>
      // <div className="swiper-button-next"></div>} */}
    </IntroStyle>
  );
};

export default Intro;
