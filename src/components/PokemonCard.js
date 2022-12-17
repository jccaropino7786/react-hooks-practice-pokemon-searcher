import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from 'react'

function PokemonCard({id, name, hp, front, back}) {
  const [showImg, setShowImg] = useState(true)

  const handleClickAction = () => {
    setShowImg(currentValue => !currentValue)
  }
  // console.log(front)
  return (
    <Card>
      <div>
        <div className="image" onClick={handleClickAction} >
          {showImg ? <img src={front} alt="oh no!" /> : (
            <>
          <img src={back} alt="oh no!" />
          </>
          )}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp 
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
