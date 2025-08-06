import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="404 NotFound" />
          <h1>LOOKS LIKE YOU'RE LOST!!</h1>
          <p>The page you are looking for is not available.</p>
          <Link to={"/"}>
            Go to Home Page.{""}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};
export { NotFound };
