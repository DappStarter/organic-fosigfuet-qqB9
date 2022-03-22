require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note often unveil harvest depth outer slide'; 
let testAccounts = [
"0x8190b6fc9e96f837a6fccc9f34faa4f5cb08862fc53c8ed2fb4b326abc3a52b4",
"0xb01aeedfef66f8086641d49042187da5fd55d43aba82020b7102bfa17dba15bc",
"0x4277774dfa20b6f2ceef7b3bc0c110fb97430678a9f156610a06fdbf947a8cb6",
"0x55cb25dcebdbfa1a102374d056c1b8b4fe6899a381ad8537bdf5c9cb647b02ae",
"0x989493f9ecfd462bedae6b879c3b29b75f53f7469d2f16d2f7f8b7d11290b601",
"0xb226889d923b058a456734f514a460a757ed220d68519c168b59ddcfb1a20e47",
"0xa6cba3915eb2d7de89bf7830d75d9dfbb3b65998ae131a638f7e61818e72808c",
"0xab5fa8c4b6b6f16128e037a6dc7aab31188a52df14fcd132bc640045dd2e8a7c",
"0x3db34a952791838e20a9246ed05af410e3addb487714da6824fae43cb60aa0b7",
"0x1a54d37db0b0975fd9cbd67b60184b410b29b88af115384bb709cba148626a3c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

