import React from "react";



function Block2(){
    var cde = 2;
  return <div>
  <div className="card2">
    <div className="top">
      <form onSubmit={null}>
        <h1>TotalSupply</h1>
        <input placeholder="Contract Address(ERC20"></input>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div className="bottom">
      <h2>{cde}</h2>
    </div>
  </div>
  </div>
}

export default Block2;