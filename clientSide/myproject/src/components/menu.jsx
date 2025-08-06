import React from "react";
import { data } from "../restApi.json";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR WESTERN DISHES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            iure fugit architecto culpa vitae accusamus animi aperiam maxime
            optio expedita. Neque optio laboriosam maiores, et cupiditate
            distinctio iste qui dolores error impedit fugiat porro. Repellat
            pariatur autem error eveniet, rem nam corporis enim, tenetur,
            accusamus tempora quod similique commodi a?
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.slice(0, 4).map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
        <div className="heading_section">
          <h1 className="heading">POPULAR INDIAN DISHES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            iure fugit architecto culpa vitae accusamus animi aperiam maxime
            optio expedita. Neque optio laboriosam maiores, et cupiditate
            distinctio iste qui dolores error impedit fugiat porro. Repellat
            pariatur autem error eveniet, rem nam corporis enim, tenetur,
            accusamus tempora quod similique commodi a?
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.slice(4, 8).map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
