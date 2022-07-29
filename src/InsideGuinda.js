import React, { useState } from "react";
import original from './images/original.jpg'

function InsideGuinda({ user }){
  const [hidden, setHidden] = useState(true);
  const [secondLayerHidden, setSecondLayerHidden] = useState(true);
  const [thirdLayerHidden, setThirdLayerHidden] = useState(true);

  return(
    <div>
      {`Você está agora no saguão da guinda, ${user} !`}
      <p>A sua frente, está o quadro da guinda, com uma mensagem que aparenta ser importante...</p>
      <button onClick={() => (setHidden(false))}>Ler o aviso no quadro</button>
      <div>
        {hidden ? '' : 
          <div>
            <p>boys.<br/>We pressed the Upa Guinda Making Missions Diarias.<br/>For the upa Guinda, and have more bonuses in guinda.<br/>So We Begin the upa Guinda every day or when you have a little time.</p>
            <p>Você pode pressar a guinda everyday or only when you have a little time ?</p>
            <button onClick={() => (setSecondLayerHidden(false))}>Make Missions Diarias Everyday</button>
            <button onClick={() => (setSecondLayerHidden(false))}>Only When You Have A Little Time</button>
          </div>
        }
        {secondLayerHidden ? '' : 
          <div>
            <p>All help and Welcome.</p>
            <button onClick={() => (setThirdLayerHidden(false))}>Mostrar a mensagem original</button>
          </div>
        }
        {thirdLayerHidden ? '' : <img src={original} alt='Imagem Original'></img>}
      </div>
    </div>
  )
}

export default InsideGuinda;
