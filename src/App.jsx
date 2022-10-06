import React, {useState} from "react";
import GTy, {Foooting, Content, Block1} from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4"
import Doings from "./blockVariables";


function App() {
    







    return <div>
        <GTy />
        <Content />
       <div className="op">
       <Block1  />
        <Block2 />
       </div>
       <div className="ui">
        <Block3/>
        <Block4/>
       </div>
       <div>
       <Foooting />
       </div>
        
        
    </div>

}


export default App;