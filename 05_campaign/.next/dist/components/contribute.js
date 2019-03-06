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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rheeger/go/src/github.com/rheeger/ethudemy/05_campaign/components/contribute.js';


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								campaign = (0, _campaign2.default)(_this.props.address);

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 9:

								_routes.Router.replaceRoute('/campaigns/' + _this.props.address);
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:

								_this.setState({ loading: false, value: '' });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Contribution Amount'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Contribute!'));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udHJpYnV0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJDYW1wYWlnbiIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0w7VUFBUSxBQUNBLEFBQ1A7aUJBRk8sQUFFTyxBQUNkO1lBSE8sQUFHRSxBO0FBSEYsQUFDUCxXQUtELEE7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQO2tCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSxtQkFHTyx3QkFBUyxNQUFBLEFBQUssTUFIckIsQUFHTyxBQUFvQixBQUVyQzs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUxyQixBQUtWLEFBQWMsQUFBK0I7O3dCQUxuQzt3QkFBQTtlQVFjLGNBQUEsQUFBSyxJQVJuQixBQVFjLEFBQVM7O1lBQTFCO0FBUkcsNEJBQUE7d0JBQUE7d0JBVUgsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO2VBQzdCLFNBRGtDLEFBQ2xDLEFBQVMsQUFDZjtnQkFBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BWjNCLEFBVUgsQUFBbUMsQUFFakMsQUFBbUM7QUFGRixBQUN4QyxTQURLOztZQUtOOzt1QkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFmOUIsQUFlVCxBQUE2Qzt3QkFmcEM7QUFBQTs7WUFBQTt3QkFBQTt3Q0FpQlQ7O2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWpCckIsQUFpQlQsQUFBYyxBQUFvQjs7WUFHbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FwQnRCLEFBb0JWLEFBQWMsQUFBeUI7O1lBcEI3QjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7Ozs7MkJBdUJGO2dCQUNSOzswQkFDQyxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7ZUFBckI7aUJBQUEsQUFDQztBQUREO0lBQUEsa0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHdDQUFBLEFBQUM7V0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNsQjtjQUFVLGtCQUFBLEFBQUMsT0FBRDtZQUFXLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBeEMsQUFBVyxBQUFjLEFBQXNCO0FBRjFELEFBR0M7V0FIRCxBQUdPLEFBQ047bUJBSkQsQUFJZTs7ZUFKZjtpQkFIRixBQUNDLEFBRUMsQUFPRDtBQVBDO0FBQ0Msd0JBTUYsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQVZELEFBVUMsQUFDQTtBQURBO3VCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztlQUFwQztpQkFBQTtBQUFBO01BWkYsQUFDQyxBQVdDLEFBS0Y7Ozs7O0FBaEQyQixBLEFBbUQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjb250cmlidXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yaGVlZ2VyL2dvL3NyYy9naXRodWIuY29tL3JoZWVnZXIvZXRodWRlbXkvMDVfY2FtcGFpZ24ifQ==