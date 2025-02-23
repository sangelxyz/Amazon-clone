import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123"
            title="Hooked"
            price={1}
            rating={5}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="123"
            title="Hooked"
            price={1}
            rating={5}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="Hooked"
            price={1}
            rating={5}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="123"
            title="Hooked"
            price={1}
            rating={5}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="123"
            title="Hooked"
            price={1}
            rating={5}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="Hooked"
            price={1}
            rating={5}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
