# 0xGlitch Documentation <img src="https://media.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif" width="60" height="60" />

## Website (Frontend Development)

<img src="https://mail.google.com/mail/u/0?ui=2&ik=e102735ac0&attid=0.1&permmsgid=msg-f:1751222691814510611&th=184d97c284351013&view=fimg&realattid=f_lb8c2xl70&disp=thd&attbid=ANGjdJ_uZQo5Xo6nBxCNQIDGpCAhkoEWpMinGFJ3sP1r2ARVjYaZKRMzx3o5pvrXvjRFrGex1-L_iQuHzRkB-tK8ZZnBNoECA9DZpuSw4HiZtasOTTAMYUbVMaMOFsU&ats=2524608000000&sz=w1920-h892" width="500" height="500">




## **Frameworks used : React**
## **Languages used : HTML, CSS, Javascipt**


## **Smart Contract (Solidity Development)**

### **1. Import and Inherit ERC721, Ownable Contract and Base64**

### ✅ For Code : [ERC721URIStorage Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/ERC721URIStorage.sol)
### ✅ For Code : [Ownable Smart Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/Ownable.sol)
### ✅ For Code : [Base64 Conversion Contract](https://github.com/Coollaitar/0xGlitch/blob/main/Import%20Contracts/Base64.sol)
-------------------------------------------------------------------------------------------------------------------------------------
- ERC721URIStorage Contract is a Standard token which is Inherited from ERC721 Contract.
- URIStorage Contract is used for storage of Metadata which have functions like tokenURI, burnToken, etc.  
-------------------------------------------------------------------------------------------------------------------------------------
- Ownable Contract have some functions that can be only accessed by Owner and it has `functions` like onlyOwner, CheckBalance, etc.
-------------------------------------------------------------------------------------------------------------------------------------
- Base64 Contract is used to **convert** SVG to String Image.
-------------------------------------------------------------------------------------------------------------------------------------

### **2. Functions**

### ✅ For Code : [Code]()

- Created a Constuctor which has 2 arguements and have fixed passed name ```SVG NFT, svgNFT```
-------------------------------------------------------------------------------------------------------------------------------------
### 1. `create()` Function which will create an NFT(Bill) which will be later sent to Customer as an Identity or Proof of *Warranty* or *Expiry*. Then we are storing imageURI in a variable and then later passing it into `_setTokenURI()` to set the token with particular URI.
    
### 2. `svgToImageURI()` Function returns Encoded ImageURI by using `abi.encodePacked()` Base64 Contract.

### 3. `formatTokenURI`
