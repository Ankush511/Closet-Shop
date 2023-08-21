import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Discover the epitome of style and comfort at Closet Shop, your ultimate online destination for exquisite clothing. Dive into a world of fashion where each garment tells a unique story of elegance and craftsmanship. Elevate your wardrobe today with Closet Shop and redefine your fashion journey with us.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          We value your thoughts and are eager to assist. Feel free to reach out to us at Closet Shop for any inquiries, concerns, or style advice. Our dedicated customer support team is here to provide you with top-notch service, ensuring your shopping experience is as seamless as slipping into your favorite outfit.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Closet-Shop</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;