import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-flex-container text-center text-md-left">
        <div className="flex-1">
          <img alt="" className="footer-logo" src="./img/zuri-logo-full.svg" />
        </div>

        <div className="flex-3">
          <h3>Links</h3>
          <a href="https://flutterwave.com/store/zuriteam">
            <p>Store</p>
          </a>
          <a href="https://blog.zuri.team">
            <p>Blog</p>
          </a>
        </div>

        <div className="flex-4 address">
          <h3>Contact</h3>
          <p>
            8 Jubliee-CMD Road, Magodo, <br />
            Lagos State
          </p>
          <p>
            <a href="mailto:hello@zuri.com">hello@zuri.com</a>
          </p>
        </div>

        <div className="flex-5">
          <h3>Follow Us</h3>
          <div className="contact-icons">
            <a target="_blank" href="https://web.facebook.com/thezuriteam">
              <img alt="" src="./img/fb.png" />
            </a>
            <a target="_blank" href="https://twitter.com/theZuriTeam">
              <img alt="" src="./img/twitter.png" />
            </a>
            <a target="_blank" href="https://www.instagram.com/thezuriteam/">
              <img alt="" src="./img/IG.png" />
            </a>
            <a href="#">
              <img alt="" src="./img/in.png" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <hr className="m-3 md-0" />
      </div>

      <div className="mx-auto text-center copyright">
        <p> &#169; {new Date().getFullYear()} OUTBOX EDU TEAM </p>
      </div>
    </>
  );
};

export default Footer;
