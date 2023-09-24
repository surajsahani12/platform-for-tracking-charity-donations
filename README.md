# Abstract
Charity organizations are susceptible to the same kinds of fraud that harm businesses because donors lack confidence in how their money is being used. The solution is to provide a unified platform for monitoring donations that will track all data related to donation transactions and donors. Lack of trust on the part of donors in how donations are used is a result of skepticism over how donations are used. Therefore, building a single platform for tracking donations that manage all information regarding gift transactions is essential since charities are vulnerable to fraud that affects corporations, such as executive misuse of funds and embezzlement.

# Problem Statement
* The problem with charity donations is the lack of transparency and trust in the donations process.
* Donors have every reasons to fear that charitable funds will not reach people who really need them.
* The problems of mistrus of donors and overloading of funds can be solved by oraganizing an external database, records in which are recorded in the blockchain
* Blockchain can help to increase transparency and accountability in the donation process, reduce transaction costs, and minimize the risk of fraud and correction.

#DAPP model
Following functions have been met:

* Beneficiary initiates a charity project in the DApp.
* Beneficiary requests funds from the charity project initiated by himself.
* Donor donates to the charity projects which he chooses.
* Donor is able to vote on the funding request for the charity project already participated.
* After the request for funds is approved, the funds are automatically transferred to the beneficiary's account.

# Technology Stack
* Frontend -> ReactJS, CSS
* Backend -> NodeJS, ExpressJS
* Database -> MongoDB
* Tools -> MongoCompass
* Blockchain Tech -> Solidity, Etherium, Metamask
* Hardhat

# Steps to run application
* Clone the repository
* Create a node app and install all dependencies
  npm init
* to run react app go to folder
  frontend -> client
  type command: npm start
* to run backend go to folder
* backend -> run nodemon index.js
* install MongoCompass and connect with localhost
* After this open new terminal and go to client folder
* Run command --> npx hardhat node
* Add these account address and its private key to metamask to use fake ethers.
* next run command: npx hardhat run --localhost scripts/deploy.js 
  (to deploy contract)

# Some Screenshots of Applications

Try this markdown:
*Home Page
![image](https://github.com/surajsahani12/platform-for-tracking-charity-donations/assets/100258775/48390371-0e34-4f25-a385-5d36129aafd4)

* Login/Register
![image](https://github.com/surajsahani12/platform-for-tracking-charity-donations/assets/100258775/c951ef53-8bb5-4bae-ab7f-4806e25d68f0)

* Dashboard page
  ![image](https://github.com/surajsahani12/platform-for-tracking-charity-donations/assets/100258775/cc43fd01-ecd6-4da7-890d-c90eaea0f52d)

* Project
  ![image](https://github.com/surajsahani12/platform-for-tracking-charity-donations/assets/100258775/a7aee3b0-fe3b-4d0e-bb8e-7291d7ad9765)

* New Campaign
  ![image](https://github.com/surajsahani12/platform-for-tracking-charity-donations/assets/100258775/6199db5b-20d9-470a-a4c1-91f199955a3e)



