require("@nomiclabs/hardhat-waffle")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    hardhat:{
      chainId:1337,
    },
  },
  paths:{
    artifacts:"./src/artifacts",
  }
 
  
};
