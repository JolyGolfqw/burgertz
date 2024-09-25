import { useState } from "react";
import "./ClientCard.css";
import InfoIcon from "../../icons/InfoIcon.jsx";

function ClientCard() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-front">
        <h3>РусГидро</h3>
        <InfoIcon width={50} height={50} fill="black" />
      </div>
      <div className="card-back">
        <h3>
          РАО <br /> Энергетические <br />
          системы Востока
        </h3>
        <p>Крупнейший поставщик тепловой и электроэнергии Дальнего Востока</p>
      </div>
    </div>
  );
}

export default ClientCard;
