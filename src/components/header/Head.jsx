import React, { useEffect, useRef } from "react";
import "./head.css";
import { MdMenu } from "react-icons/md";
const Head = () => {
  let toggled = useRef(null);

  function handleMenu() {
    toggled.current.classList.toggle("listed");
  }

  function winSize() {
    if (window.innerWidth <= 768) {
      toggled.current.classList.add("listed");
     
    }
  }
  useEffect(() => {
    winSize();
  });

  return (
    <>
      <div className="logo">
        <img src="/img/vector-img.png" alt="music-logo" className="vector" />
      </div>
      <ul className="links" ref={toggled}>
        <li className="nav-links">Home</li>
        <li className="nav-links">Product</li>
        <li className="nav-links">Promo</li>
        <li className="nav-links">About</li>
        <li className="nav-links">Contact</li>
      </ul>
      <div className="btns-all">
        <button className="srch">
          <img src="/img/Search.png" alt="search" className="founding" />
        </button>
        <button
          className="menu"
          onClick={() => {
            handleMenu();
          }}
        >
          <MdMenu />
        </button>
      </div>
    </>
  );
};

export default Head;
