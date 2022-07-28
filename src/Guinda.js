import React from "react";
import InsideGuinda from './InsideGuinda'

function Guinda({ user }){
  return(
    <div>
      {user === 'Visitante' || user === '' ? 'Os visitantes só conseguem ver até aqui...' : <InsideGuinda user={user}/>}
    </div>
  )
}

export default Guinda;
