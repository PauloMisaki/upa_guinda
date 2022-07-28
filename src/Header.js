import React from "react";

function Header({ user }){
  return(
    <div>
    <header>
      Bem vindo à Guinda!
    </header>
    <h1>{user === 'Visitante' || user === '' ? 'Identifique-se, visitante' : `O que vai fazer, ${user} ?`}</h1>
    </div>
  )
}

export default Header;
