import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function EmojiClicker() {
  const [Emoji, setEmoji] = useState([{ id: uuid(), emoji: "😭" }]);
  const addEmoji = () => {
    setEmoji(() => {
      return [...Emoji, { id: uuid(), emoji: "😁" }];
    });
  };
  const deleteEmoji = (id) => {
    setEmoji((oldEmojis) => {
      return oldEmojis.filter((e) => {
        return e.id !== id;
      });
    });
  };
  const makeAllHearts = () => {
    setEmoji((oldEmojis) => {
      return oldEmojis.map((e) => {
        return { ...e, emoji: "♥" };
      });
    });
  };
  return (
    <div>
      {Emoji.map((e) => {
        return (
          <span
            onClick={() => deleteEmoji(e.id)}
            key={e.id}
            style={{ fontSize: 100 }}
          >
            {e.emoji}
          </span>
        );
      })}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeAllHearts}>Make all hearts</button>
    </div>
  );
}
