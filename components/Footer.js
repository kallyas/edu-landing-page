/* eslint-disable */
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
          <a href="#">
            <p>Outbox</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
        </div>

        <div className="flex-4 address">
          <h3>Contact</h3>
          <p>
            The Outbox Hub <br />
            4th &amp; 6th Floor, <br />
            Soliz House, Lumumba Avenue, <br />
            Kampala, Uganda
          </p>
          <p>
            <a href="mailto:outboxedu@outbox.co.ug">outboxedu@outbox.co.ug</a>
          </p>
        </div>

        <div className="flex-5">
          <h3>Follow Us</h3>
          <div className="contact-icons">
            <a target="_blank" rel="noreferrer" href="https://web.facebook.com/OutboxEdu">
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/EduOutbox">
            <i className="fa-brands fa-twitter"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/outboxafrica">
            <i className="fa-brands fa-github"></i>
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
