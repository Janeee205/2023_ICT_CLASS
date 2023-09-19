import React from "react";


function User() {

  let name = 'Jane';

  return (
    <div>
      <h1 className="introduce">안녕하세요😎 {name == 'Jueun' ? name : '고갱'}님!</h1>
    </div>
  )
}


export default User;