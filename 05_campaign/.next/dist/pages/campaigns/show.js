'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _contribute = require('../../components/contribute');

var _contribute2 = _interopRequireDefault(_contribute);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rheeger/go/src/github.com/rheeger/ethudemy/05_campaign/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    minimumContribution = _props.minimumContribution,
			    balance = _props.balance,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount,
			    manager = _props.manager;

			var items = [{
				style: { overflowWrap: 'break-word' },
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this campaign, and can request withdrawls'
			}, {
				header: _web2.default.utils.fromWei(minimumContribution, 'ether'),
				meta: 'Minimum Contribution',
				description: 'Show your commmitment!'
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Ether Contributed',
				description: 'Look at all dis cash homie!'
			}, {
				header: requestsCount,
				meta: 'Vendors',
				description: 'These people are yet to get paid'
			}, {
				header: approversCount,
				meta: 'Contributors',
				description: 'These idiots thought this was a good ideaa'
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Campaign Summary'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement(_contribute2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, 'View Requests'))))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJCdXR0b24iLCJDYXJkIiwiR3JpZCIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBUSxBQUFNOztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztnQ0FnQlM7Z0JBQ29FLEtBRHBFLEFBQ3lFO09BRHpFLEFBQ0wsNkJBREssQUFDTDtPQURLLEFBQ2dCLGlCQURoQixBQUNnQjtPQURoQixBQUN5Qix1QkFEekIsQUFDeUI7T0FEekIsQUFDd0Msd0JBRHhDLEFBQ3dDO09BRHhDLEFBQ3dELGlCQUR4RCxBQUN3RCxBQUVyRTs7T0FBTTtXQUVHLEVBQUUsY0FEVixBQUNRLEFBQWdCLEFBQ3ZCO1lBRkQsQUFFUyxBQUNSO1VBSEQsQUFHTyxBQUNOO2lCQUxZLEFBQ2IsQUFJYztBQUpkLEFBQ0MsSUFGWTtZQVFKLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixxQkFENUIsQUFDUyxBQUF3QyxBQUNoRDtVQUZELEFBRU8sQUFDTjtpQkFWWSxBQU9iLEFBR2M7QUFIZCxBQUNDO1lBS1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBNEIsQUFDcEM7VUFGRCxBQUVPLEFBQ047aUJBZlksQUFZYixBQUdjO0FBSGQsQUFDQztZQUlELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFwQlksQUFpQmIsQUFHYztBQUhkLEFBQ0M7WUFJRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBekJGLEFBQWMsQUFzQmIsQUFHYyxBQUlmO0FBUEMsQUFDQzs7d0NBTUssQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHFDQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFBeUI7QUFBekI7V0FERCxBQUNDLEFBQXlCLEFBQUssQUFDOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxzQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztlQUFwQztpQkFKSCxBQUNDLEFBRUMsQUFDQyxBQUlGO0FBSkU7eUJBSUQsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFkTixBQUNDLEFBRUMsQUFRQyxBQUNDLEFBQ0MsQUFDQyxBQU9OOzs7Ozt3R0F4RTRCLEE7Ozs7O1lBQ3RCO0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7ZUFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7WUFBOUM7QTs7a0JBR0ksTUFBQSxBQUFNLE1BRFQsQUFDZSxBQUNyQjs4QkFBcUIsUUFGZixBQUVlLEFBQVEsQUFDN0I7a0JBQVMsUUFISCxBQUdHLEFBQVEsQUFDakI7d0JBQWUsUUFKVCxBQUlTLEFBQVEsQUFDdkI7eUJBQWdCLFFBTFYsQUFLVSxBQUFRLEFBQ3hCO2tCQUFTLFFBQUEsQSxBQU5ILEFBTVc7QUFOWCxBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUHdCLEEsQUE0RTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JoZWVnZXIvZ28vc3JjL2dpdGh1Yi5jb20vcmhlZWdlci9ldGh1ZGVteS8wNV9jYW1wYWlnbiJ9