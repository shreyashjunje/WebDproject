import React from "react";
import { useState } from "react";

export default function ({ id, name, info, image, price, removetour }) {
  const [readmore, setreadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function handleReadmore() {
    setreadmore(!readmore);
  }

  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <h3>{price}</h3>
      </div>

      <div>
        {description}
        <span onClick={handleReadmore}>
          {readmore ? `show less` : `Read more`}
        </span>
      </div>

      <button
        onClick={() => {
          removetour(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
}
