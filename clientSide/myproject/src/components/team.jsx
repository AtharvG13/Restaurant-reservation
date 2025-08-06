import React from "react";
import { data } from "../restApi.json";

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            iure fugit architecto culpa vitae accusamus animi aperiam maxime
            optio expedita. Neque optio laboriosam maiores, et cupiditate
            distinctio iste qui dolores error impedit fugiat porro. Repellat
            pariatur autem error eveniet, rem nam corporis enim, tenetur,
            accusamus tempora quod similique commodi a?
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
