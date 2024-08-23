import React, { useState } from "react";

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${
        flipped ? "bg-blue-200" : "bg-blue-100"
      } cursor-pointer shadow-lg rounded-lg p-4`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`text-center ${flipped ? "hidden" : "block"}`}>
        <p className="text-lg font-medium">{flashcard.question}</p>
      </div>
      <div className={`text-center ${flipped ? "block" : "hidden"}`}>
        <p className="text-lg font-medium">{flashcard.answer}</p>
      </div>
    </div>
  );
}

export default Flashcard;
