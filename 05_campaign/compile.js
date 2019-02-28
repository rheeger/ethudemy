const path = require('path');
const fs = require('fs');
const solc = require('solc');


const lottoPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(lottoPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Campaign'];
