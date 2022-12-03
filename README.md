# 0xGlitch Documentation <img src="https://media.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif" width="60" height="60" />

## Smart Contract (Solidity Development)

### **1. Import and Inherit ERC721, Ownable Contract and Base64**

#### ✅ For Code : [ERC721URIStorage Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/ERC721URIStorage.sol)
#### ✅ For Code : [Ownable Smart Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/Ownable.sol)
#### ✅ For Code : [Base64 Conversion Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/Base64.sol)
-------------------------------------------------------------------------------------------------------------------------------------
- ERC721URIStorage Contract is a Standard token which is Inherited from ERC721 Contract.
- URIStorage Contract is used for storage of Metadata which have functions like tokenURI, burnToken, etc.  
-------------------------------------------------------------------------------------------------------------------------------------
- Ownable Contract have some functions that can be only accessed by Owner and no one other like onlyOwner, CheckBalance, etc.
-------------------------------------------------------------------------------------------------------------------------------------
- Base64 Contract is used to **convert** SVG to String Image.
-------------------------------------------------------------------------------------------------------------------------------------

### **2. About Code**

#### ✅ For Code : [Code]()

- Created a Constuctor which has 2 arguements and have fixed passed name ```SVG NFT, svgNFT```
-------------------------------------------------------------------------------------------------------------------------------------

- **Functions** : 
    1. `create()` Function which will create an NFT(Bill) which will be later sent to Customer as an Identity or Proof of *Warranty* or *Expiry*. Then we are storing imageURI and then later passing it into `_setTokenURI()`
    
    2. 
