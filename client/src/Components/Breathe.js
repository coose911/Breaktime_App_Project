import React from "react";
import { Link } from "react-router-dom";
import "../Breathe.css";

const Breathe = () => {
  return (
    <>
      <p className="p-breath">Click on the bubble to return</p>
      <Link to="/">
        <section className="background">
          <div className="breathe"></div>
        </section>
      </Link>
    </>
  );
};

export default Breathe;
