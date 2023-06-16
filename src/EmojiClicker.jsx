import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function EmojiClicker() {
  const [Emoji, setEmoji] = useState([{ id: uuid(), emoji: "😭" }]);
  const addEmoji = () => {
    setEmoji(() => {
      return [...Emoji, { id: uuid(), emoji: "😁" }];
    });
  };
  return (
    <div>
      {Emoji.map((e) => {
        return (
          <span key={e.id} style={{ fontSize: 100 }}>
            {e.emoji}
          </span>
        );
      })}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
