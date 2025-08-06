import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container ">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>the only thing we're serious about is food </p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            iure fugit architecto culpa vitae accusamus animi aperiam maxime
            optio expedita. Neque optio laboriosam maiores, et cupiditate
            distinctio iste qui dolores error impedit fugiat porro. Repellat
            pariatur autem error eveniet, rem nam corporis enim, tenetur,
            accusamus tempora quod similique commodi a?
          </p>
          <Link to={"/"}>
            Explore our menu{""}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="./about.png" alt="about" />
        </div>
      </div>
    </section>
  );
}
