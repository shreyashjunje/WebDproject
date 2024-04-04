import React from "react";
import Card from "./Card";

export default function Tours({ tours,removetour}) {
  return (
    <div>
      <div>
        <h1>Plan with yash</h1>
      </div>

      <div>
        {tours.map((tour) => {
          return <Card {...tour} removetour={removetour}></Card>;
        })}
      </div>
    </div>
  );
}
