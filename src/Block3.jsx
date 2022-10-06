import React from "react";



function Block3(){
    var cde = 3;




  return <div>
  <div className="card3">
    <div className="top">
      <form onSubmit={null}>
        <h1>Latest Block</h1>
        {/* <input placeholder="Owner"></input>
        <input placeholder="Approved"></input> */}
        <button type="submit">Submit</button>
      </form>
    </div>

    <div className="bottom">
      <h2>{cde}</h2>
    </div>
  </div>
  </div>
}

export default Block3;