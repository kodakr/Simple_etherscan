import React from "react";



function Block4(){
    var cde = 4;

    


  return <div>
  <div className="card4">
    <div className="top">
      <form onSubmit={null}>
        <h1>Whale Tracker</h1>
        <input placeholder=""></input>
        <button className="plo" type="submit">Submit</button>
      </form>
    </div>

    <div className="bottom">
      <h2>{cde}</h2>
    </div>
  </div>
  </div>
}

export default Block4;