import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Flashcard from "./Flashcard";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    const { data, error } = await supabase.from("flashcards").select("*");
    if (error) console.log("error", error);
    else setFlashcards(data);
  };

  const handleAddFlashcard = async () => {
    const { data, error } = await supabase
      .from("flashcards")
      .insert([{ question, answer }]);
    if (error) {
      console.error("Error adding flashcard:", error);
    } else {
      // Check if 'data' is an array and has content before spreading it
      if (Array.isArray(data) && data.length > 0) {
        setFlashcards([...flashcards, ...data]);
      } else {
        // Log an error or handle the situation where data is not as expected
        console.error("Unexpected data format received:", data);
      }
      setQuestion("");
      setAnswer("");
    }
  };
  return (
    <div className="app container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Flashcards</h1>
      <div className="add-flashcard mb-8">
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="input input-bordered input-primary w-full max-w-md mb-2"
        />
        <input
          type="text"
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="input input-bordered input-primary w-full max-w-md mb-4"
        />
        <button
          onClick={handleAddFlashcard}
          className="btn btn-primary w-full max-w-md"
        >
          Add Flashcard
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcards.map((flashcard) => (
          <Flashcard key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    </div>
  );
}

export default App;
