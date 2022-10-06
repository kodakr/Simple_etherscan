import React from "react";
//import ReactDom from "react-dom";
import yr, {greeting} from "./solution";



function Heading() {return <header> <h1>Simple Etherscan </h1>
  </header>
}
function Foooting() {return <footer><p> Copyright {yr}</p>
  </footer>
}

function Content() {
  return <div className="note">
    <h1>Good {greeting} </h1>
    
  </div>
}

function Block1(){
  var cde = 1;
  // props ==== title, placeholder
  return <div>
  <div className="card1">
    <div className="top">
      <form onSubmit={null}>
        <h1>ETH Balance</h1>
        <input placeholder="ETH Address"></input>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div className="bottom">
      <h2>{cde}</h2>
    </div>

  
  </div>
    
  </div>
}



export default Heading;
export {Foooting, Content, Block1}