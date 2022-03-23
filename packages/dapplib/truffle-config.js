require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index release pitch purchase install enter obscure giggle'; 
let testAccounts = [
"0xb3c3857a633f1c171f29491ea032314cb5276ab2a7f3ce68ec90c3dcd0f989bb",
"0x340a88ecbe4aed208178ffe71833f1636635e5e16b30bd364f441045a902e3eb",
"0xde68053aebb1c3f797786443dd6bb8cbb8ff6bc750927d3adb80ee3e11582c47",
"0xf99ac9f22af7773ab6b2c79133d05fc2c27c0adb265de07f94f988231c3a2ebd",
"0xb84404455b49d87e24dd4bcfb851adafc589f534513da85fad2f04fad58aaf0b",
"0xf0a1ace32777b4773bc02127b55aaf4a004b62cf75e811cd302b68896a54f78f",
"0xb5484ebee50b8e077f19071da0d8da893ea1fc276014c9c3c6043ad4d6ff9b58",
"0xda5365da5a84268eac179a7a4b9247f01248dab28df9cfbc227e43adf51e16a2",
"0xdaee03b2b65d784aafd5da8edf2dcd2f714f29f51d7baae334ed71e3802b9f55",
"0x351eb077acf74668eb281ef035c5d562105afc5df708b4954f7487c739d5af98"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

