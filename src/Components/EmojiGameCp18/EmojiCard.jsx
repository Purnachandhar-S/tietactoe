import React from "react";

export default function EmojiCard(props) {
  const { cardDetails, EmojiClicked } = props;
  const onSelect = () => {
    EmojiClicked(cardDetails.id);
  };
  return (
    <li>
      <button onClick={onSelect}>
        <img src={cardDetails.emojiUrl} alt={cardDetails.emojiName} />
      </button>
    </li>
  );
}
