webpackHotUpdate(5,{

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(631);

var _layout2 = _interopRequireDefault(_layout);

var _campaign = __webpack_require__(1192);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(484);

var _web = __webpack_require__(1013);

var _web2 = _interopRequireDefault(_web);

var _contribute = __webpack_require__(1194);

var _contribute2 = _interopRequireDefault(_contribute);

var _routes = __webpack_require__(887);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/rheeger/go/src/github.com/rheeger/ethudemy/05_campaign/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/rheeger/go/src/github.com/rheeger/ethudemy/05_campaign/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42NTQ0NjM1ZDhmMGE4MWY4ZDdhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZjQyZTBlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250cmlidXRlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cdFx0Y29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcblxuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcblx0XHRcdG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXG5cdFx0XHRiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuXHRcdFx0cmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcblx0XHRcdGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuXHRcdFx0bWFuYWdlcjogc3VtbWFyeVs0XVxuXHRcdH07XG5cdH1cblxuXHRyZW5kZXJDYXJkcygpIHtcblx0XHRjb25zdCB7IG1pbmltdW1Db250cmlidXRpb24sIGJhbGFuY2UsIHJlcXVlc3RzQ291bnQsIGFwcHJvdmVyc0NvdW50LCBtYW5hZ2VyIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH0sXG5cdFx0XHRcdGhlYWRlcjogbWFuYWdlcixcblx0XHRcdFx0bWV0YTogJ0FkZHJlc3Mgb2YgTWFuYWdlcicsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduLCBhbmQgY2FuIHJlcXVlc3Qgd2l0aGRyYXdscydcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKG1pbmltdW1Db250cmlidXRpb24sICdldGhlcicpLFxuXHRcdFx0XHRtZXRhOiAnTWluaW11bSBDb250cmlidXRpb24nLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ1Nob3cgeW91ciBjb21tbWl0bWVudCEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSxcblx0XHRcdFx0bWV0YTogJ0V0aGVyIENvbnRyaWJ1dGVkJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdMb29rIGF0IGFsbCBkaXMgY2FzaCBob21pZSEnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IHJlcXVlc3RzQ291bnQsXG5cdFx0XHRcdG1ldGE6ICdWZW5kb3JzJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdUaGVzZSBwZW9wbGUgYXJlIHlldCB0byBnZXQgcGFpZCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXG5cdFx0XHRcdG1ldGE6ICdDb250cmlidXRvcnMnLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ1RoZXNlIGlkaW90cyB0aG91Z2h0IHRoaXMgd2FzIGEgZ29vZCBpZGVhYSdcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxoMz5DYW1wYWlnbiBTdW1tYXJ5PC9oMz5cblx0XHRcdFx0PEdyaWQ+XG5cdFx0XHRcdFx0PEdyaWQuUm93PlxuXHRcdFx0XHRcdFx0PEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxuXHRcdFx0XHRcdFx0PEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cblx0XHRcdFx0XHRcdFx0PENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cblx0XHRcdFx0XHRcdDwvR3JpZC5Db2x1bW4+XG5cdFx0XHRcdFx0PC9HcmlkLlJvdz5cblxuXHRcdFx0XHRcdDxHcmlkLlJvdz5cblx0XHRcdFx0XHRcdDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBwcmltYXJ5PlZpZXcgUmVxdWVzdHM8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvR3JpZC5Sb3c+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBRUE7QUFBQTtBQUZBO0FBS0E7QUFFQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFJQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7Ozs7Ozs7Ozs7QUF2RUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=