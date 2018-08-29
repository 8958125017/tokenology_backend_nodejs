

const ETHnodeURL = {
    
    ETHdecimals : 1000000000000000000,

    // for ETH geth  main net
    // connectETHnodeWS : "ws://103.201.142.41:8546",

    // server geth  for local development
    connectETHnodeWS : "ws://103.201.142.41:8556/",
    connectETHnodeHTTP : "http://103.201.142.41:8556/"

    // server geth running
    // connectETHnodeWS : "ws://198.54.119.56:8546",
    // connectETHnodeHTTP : "http://198.54.119.56:8546"

    //local host testrpc
    // connectETHnodeWS : "http://103.201.142.41:9546",
    // connectETHnodeHTTP : "http://103.201.142.41:9546"

    // Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
};


const gmailSMTPCredentials = {
    "type": "SMTP",
    "host": "smtp.zoho.com",
    "port": 465,
    "secure": true,
     "username": "support@kryptual.com",
    "password": "boosters"
};




const hostingServer ={
    // for local tseting server
    // serverName : 'http://103.201.142.41:4000/',
    // serverUiName  : 'http://103.201.142.41:90/krptual_dist/#/login'


    // serverName : 'https://www.kryptual.com:4000/',
    // serverUiName  : 'https://www.kryptual.com/Kryptual_signup/login'
    
    basePath : 'http://52.66.185.83/',
    serverName : 'http://52.66.185.83:4000/',
    serverUiName  : 'http://52.66.185.83/en/#/login'
    

    // serverUiName : 'http://103.201.142.41:90/Cryptual/cryptual/#/login',
    // serverName : 'https://bug-tracker-web.herokuapp.com'
}
const companyETHaddress = "0xwjdjhwdhjdksdjd";
const ethplorer = 'https://api.ethplorer.io/';
const readABIfromEtherscan = 'http://api-ropsten.etherscan.io/api?module=contract&action=getabi&';


var obj = { 
    gmailSMTPCredentials:gmailSMTPCredentials, 
    imagePaths: imagePaths,
    pagination: pagination,
    ETHnodeURL : ETHnodeURL,
    hostingServer: hostingServer,
    ethplorer : ethplorer,
    readABIfromEtherscan :readABIfromEtherscan,
    companyETHaddress : companyETHaddress
};

module.exports = obj;
