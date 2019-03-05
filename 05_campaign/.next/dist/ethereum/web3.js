'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//we're in a browser, metamask is running
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//on a server *OR* the user is not running metamask
	var infuraKey = process.env.INFURA_KEY;
	var infuraRinkebyEndpoint = 'https://rinkeby.infura.io/v3/' + infuraKey;
	var provider = new _web2.default.providers.HttpProvider(infuraRinkebyEndpoint);
	web3 = new _web2.default(provider);
}

exports.default = web3;

// CONTRACT ADDRESS:
// 0xB76B8eC573284E9A9A47C55b400d87E500B614C2
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJpbmZ1cmFLZXkiLCJwcm9jZXNzIiwiZW52IiwiSU5GVVJBX0tFWSIsImluZnVyYVJpbmtlYnlFbmRwb2ludCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN4RTtBQUNBO1FBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUhELE9BR08sQUFDTjtBQUNBO0tBQU0sWUFBWSxRQUFRLEFBQVIsSUFBWSxBQUE5QixBQUNBO0tBQU0sd0JBQXdCLGtDQUFrQyxBQUFoRSxBQUNBO0tBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQWdDLEFBQWhDLEFBQWpCLEFBQ0E7UUFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7QUFFRDs7a0JBQWUsQUFBZjs7QUFFQTtBQUNBIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JoZWVnZXIvZ28vc3JjL2dpdGh1Yi5jb20vcmhlZWdlci9ldGh1ZGVteS8wNV9jYW1wYWlnbiJ9