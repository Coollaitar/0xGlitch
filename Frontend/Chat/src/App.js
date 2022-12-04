
import './App.css'
import React from 'react';
import {useAccount} from "wagmi"
import { Chat } from "@pushprotocol/uiweb";

function App() {
//  const {adddress} = useAccount()
//  console.log(adddress)
  return (<div>
    <h1>please press the button to chat</h1>
    <Chat
   account={"0x60E7c5F82744fEEcDE75B9771F0235CA8b9E4Bf0"}//user address
   supportAddress="0x6c32a3f4e13732E6b482Faeb52e78e2780734cBe" //support address
   apiKey="Zc423i0lYv.Cq3NIUgTpxbBhREUDFz79oTjEjqhc5FzhbQ0Oe8kXNaEyv20LehF6Xfgmog78j1H"
    env="staging"
 />
    </div>
      
    

  );
}

export default App;
