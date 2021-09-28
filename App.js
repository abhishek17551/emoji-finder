import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😂": "Laughing hard",
  "😎": "Chill,easy-going,carefree",
  "😗": "Kissing Face",
  "😜": "Playfulness",
  "😍": "Adoration,love",
  "😋": "Face Savoring Food",
  "😑": "Expressionless Face",
  "😞": "Disappointed Face",
  "🤓": "Nerd Face",
  "😠": "Angry Face",
  "🤥": "Lying Face"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "The emoji is not part of our DB!";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  var emojiList = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h2>Emoji Interpreter</h2>
      <input onChange={emojiInputHandler} />

      <div style={{ fontSize: "25px", padding: "1rem" }}>
        {" "}
        The emoji signifies : {meaning}{" "}
      </div>

      <h3> The emojis we know: </h3>

      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)} //syntax to traverse items in a lis
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {emoji} {"  "}
          </span>
        );
      })}
    </div>
  );
}
