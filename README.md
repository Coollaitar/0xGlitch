# 0xGlitch Documentation <img src="https://media.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif" width="60" height="60" />

## Website (Frontend Development) 💻

### **For Images : [Click Here](https://github.com/Coollaitar/0xGlitch/blob/main/Website%20Image/photo_6077852613807813935_y.jpg)**


### **Frameworks used : React**💻
### **Languages used : HTML, CSS, Javascript**💻
-------------------------------------------------------------------------------------------------------------------------------------
<img src="https://miro.medium.com/max/1400/1*VnBroXude86uW7GMPX1esQ.png" width="1000" height="550" />

## Protocols Used 🪧

### 1. Polygon : We have used Polygon Mumbai Testnet to deploy the contract as well as to interact with it
### 2. Push Protocol : We have used Push Protocol for getting Notifications and also for chat Implementation

## Notification 🔔

### Step 1 : Create a push channel and the follow the procedures for successful creation
### Step 2 : Here we have used sending Notifications via Smart Contract. 
### Step 3 : Import the Push Comm Interface and Send Notification Function giving the channel owner address as a Parameter.
```.sol
// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}
```
### Now add the following code in the Function you want to send the Notification 
```.sol
IPUSHCommInterface(EPNS_COMM_CONTRACT_ADDRESS_FOR_SPECIFIC_BLOCKCHAIN).sendNotification(
    YOUR_CHANNEL_ADDRESS, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
    to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
    bytes(
        string(
            // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
            abi.encodePacked(
                "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                "+", // segregator
                "3", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                "+", // segregator
                "Title", // this is notificaiton title
                "+", // segregator
                "Body" // notification body
            )
        )
    )
);

```
### Now Deploy the Contract and Interact with the Function

### Step 4 : Now visit the [Push Dapp](https://staging.push.org/#/channels) and check your Inbox

## 2. Integrating Push Chat 🧿

### Step 1 : Install @pushprotocol/uiweb and import in `app.js`
### Step 2 : Now in the function paste the following Code 
```.sol
<Chat
   account={"0x60E7c5F82744fEEcDE75B9771F0235CA8b9E4Bf0"}//user address
   supportAddress="0x6c32a3f4e13732E6b482Faeb52e78e2780734cBe" //support address
   apiKey="Zc423i0lYv.Cq3NIUgTpxbBhREUDFz79oTjEjqhc5FzhbQ0Oe8kXNaEyv20LehF6Xfgmog78j1H"
    env="staging"
 />
```
### Now put your address as user address and the address whom you want to send message as support address
### For API key please contact [PushProtocol](https://discord.gg/pushprotocol) 


-------------------------------------------------------------------------------------------------------------------------------------

## **Smart Contract (Solidity Development)** 🧑🏻‍💻

### 🔗**1. Import and Inherit ERC721, Ownable Contract and Base64**

### ✅ For Code : [ERC721URIStorage Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/ERC721URIStorage.sol)
### ✅ For Code : [Ownable Smart Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/Ownable.sol)
### ✅ For Code : [Base64 Conversion Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/Base64.sol)
-------------------------------------------------------------------------------------------------------------------------------------
- ERC721URIStorage Contract is a Standard token which is Inherited from ERC721 Contract.
- URIStorage Contract is used for storage of Metadata which have functions like tokenURI, burnToken, etc.  
-------------------------------------------------------------------------------------------------------------------------------------
- Ownable Contract have some functions that can be only accessed by Owner and it has `functions` like onlyOwner, CheckBalance, etc.
-------------------------------------------------------------------------------------------------------------------------------------
- Base64 Contract is used to **encode** or **transform** `bytes32` data into Base64 String representation.
-------------------------------------------------------------------------------------------------------------------------------------

### 🔗**2. Functions**

### ✅ For Code : [Code]()

- Created a Constuctor which has 2 arguements and have fixed passed name ```Shop Name, Product```
-------------------------------------------------------------------------------------------------------------------------------------
### 1. `create()` Function which will create an NFT(Bill) which will be later sent to Customer as an Identity or Proof of *Warranty* or *Expiry*. Then we are storing imageURI in a variable and then later passing it into `_setTokenURI()` to set the token with particular URI.
    
### 2. `svgToImageURI()` Function returns Encoded ImageURI by using `abi.encodePacked()` Base64 Contract.

### 3. `formatTokenURI()` Function takes an arguement of ImageURI and encodes the Json File having the SVG as Image attribute and returns the encoded Json File which is then passed to _setTokenURI along with tokenCounter.

### 4. `safeTransferFrom()` Function of `ERC721` is used to Transfer NFT(Bill) from Owner to Customer `(From => To (address))` and after that Customer will recieve Notification as Bill Generated Successfully using Push Protocol. 

-------------------------------------------------------------------------------------------------------------------------------------
## Code(Smart Contract) : 
```.sol
    // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


 // Importing Smart Contracts ERC721URIStorage, Ownable Contract, Base64 Contract

 
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "base64-sol/base64.sol";


contract SVGNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    uint256 public expiry;
    event CreatedSVGNFT(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("Shopkeeper Name", "Product Name")
    {
        tokenCounter = 0;
    }

    function create(string memory svg,uint256 token,uint256 expiry_d) public {
        expiry = expiry_d;
        _mint(msg.sender,token);
        string memory imageURI = svgToImageURI(svg);
        _setTokenURI(tokenCounter, formatTokenURI(imageURI));
        tokenCounter = tokenCounter + 1;
        emit CreatedSVGNFT(tokenCounter, svg);
    }
    
    function svgToImageURI(string memory aeiou) public pure returns (string memory) {
        // example:
        // <svg width='500' height='500' viewBox='0 0 285 350' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill='black' d='M150,0,L75,200,L225,200,Z'></path></svg>
        // data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTAwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI4NSAzNTAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nYmxhY2snIGQ9J00xNTAsMCxMNzUsMjAwLEwyMjUsMjAwLFonPjwvcGF0aD48L3N2Zz4=
        string memory baseURL = "data:image/svg+xml;base64,";
        // string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(svg))));
        return string(abi.encodePacked(baseURL,aeiou));
    }
   

    function time() public view returns (uint256) {
        return block.timestamp;
    }

    function userExpires() public view returns(uint256){
        if (block.timestamp <= expiry) {
            return expiry;
        } else {
            return 115792089237316195423570985008687907853269984665640564039457584007913129639935;//expired
        }
    }

    function formatTokenURI(string memory imageURI) public pure returns (string memory) {
        return string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                "SVG NFT", // You can add whatever name here
                                '", "description":"An NFT based on SVG!", "attributes":"", "image":"',imageURI,'"}'
                            )
                        )
                    )
                )
            );
    }
}
```
