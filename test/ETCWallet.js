let chai = require('chai');
let expect = chai.expect;
let ETCWallet = require('../index').ETCWallet;
let HDWallet = require('../index').HDWallet;
let testMnemonic = "noise sun announce usage lift task rocket flavor cube impact sample budget";
let testPassword = "test password";
let testPrivKey = "fc4bf939f44b26472029d5e06c73908a543f46d66a7d69c92ac07193b376ca0f";
let testPubKey = "5f419c06bade9ff3b4a2ddb68e86ceb1a6ffe0c8a6547cba6bb5819107ba4434e66c40ff9cf11e1339bbce2ad05aff615cffc606b7605975a0ff824d2e7c60e9";
let detHD = ETCWallet.getHDWallet(testMnemonic, testPassword);
describe('Wallet Tests', function() {
    this.timeout(15000);
    it('hd derivation should work - ETH', function() {
        expect(detHD.getPath()).to.equal(HDWallet.paths.ETC);
        expect(detHD.getWalletAt(0).getAddress()).to.equal("0x3a4FDb9A6Dd197116A8A156942b63013cc86662c");
        expect(detHD.getWalletAt(4).getAddress()).to.equal("0xb79672ab29C61Be5281fac41b729a6A40ACAC4a9");
        expect(detHD.getWalletAt(4).getPrivateKey().toString('hex')).to.equal("117e198eb3c26f6a0247750eee358d1c756bfb8fd3a9e174926a28421161fabd");
        expect(detHD.getWalletAt(0).getPrivateKey().toString('hex')).to.equal("7188260b6c123b0b58123db37e7be87a9b37ad82534e9e9635fd68fea17f83e2");
    });
});
