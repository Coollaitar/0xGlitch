import logo from './logo.svg';
import './App.css';
// import {useWeb3React} from "@web3-react/core"
import * as PushAPI from "@pushprotocol/restapi"
import {useState} from 'react'

import {ethers} from 'ethers'

function App() {

  const [isConnected, setIsConnected] = useState(false);
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }

  // const {account,library,chainId} = useWeb3React();
  
const PK = '6593744dcf28012359d292acb25448aa1787217663a5eae7e33c122e33989f0d'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
  // const signer = library.getSigner(account)
  async function opt(){
    console.log("Working");
    await PushAPI.channels.subscribe({
      signer,
      channelAddress: 'eip155:5:0x60E7c5F82744fEEcDE75B9771F0235CA8b9E4Bf0', // channel address in CAIP
      userAddress: 'eip155:5:0xb16e9ffDed2317A7c5aeF923140A4779eFB312D0', // user address in CAIP
      onSuccess: () => {
       console.log('opt in success');
      },
      onError: () => {
        console.error('opt in error');
      },
      env: 'staging'
    })
  }
  return (
<div className='content'>
  <header className='header'>0XGLITCH</header>
  {/* <h1 className='content'>
    tear your bills apart and come join us to make the billing system decentralized
  </h1>

  <button className="btn-1" onClick = {()=>opt()}>opt in </button>
  {isConnected ? (
        "connected"
      ) : (
        <button className="btn-2" onClick={() => connect()}>
          connect Wallet
        </button>
      )} */}

  <h1 className='para'>
    tear your bills apart and come join us to make the billing system decentralized
  </h1>
   <button className="btn-1" onClick = {()=>opt()}>opt in </button>
  {isConnected ? (
        "connected"
      ) : (
        <button className="btn-2" onClick={() => connect()}>
          connect Wallet
        </button>
      )}
  
</div>
  );

}

export default App;
