"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require("../../ethereum/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _campaign = require("../../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require("../../routes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Ethereum&Solidity\\kickstartCopy\\pages\\campaigns\\show.js?entry";


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          minimumContribution = _props.minimumContribution,
          balance = _props.balance,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          manager = _props.manager;

      var items = [{
        header: manager,
        description: "The manager created this campaign and can create requests to withdraw money",
        meta: "Address of manager",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: minimumContribution,
        description: "Minimum Contribution(wei)",
        meta: "You must contribute at least this much wei to become an approver",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: requestsCount,
        description: "A request tries to withdraw money from the contract. Request must be approved by approvers",
        meta: "Number of requests",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: approversCount,
        description: "Number of people  who have already donated to this campaign",
        meta: "Number of approvers",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: _web2.default.utils.fromWei(balance, "ether"),
        description: "The balance is how much money  this campaign  has left  to spend.",
        meta: "Campaign balance (ether)",
        style: {
          overflowWrap: "break-word"
        }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Show Campaign"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "View Requests")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _campaign2.default)(props.query.address);

              case 2:
                campaign = _context.sent;
                _context.next = 5;
                return campaign.methods.getSummary().call();

              case 5:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 7:
              case "end":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJmYWN0b3J5IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7a0NBZ0JVO21CQU9SLEtBUFEsQUFPSDtVQVBHLEFBRVYsNkJBRlUsQUFFVjtVQUZVLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsdUJBSlUsQUFJVjtVQUpVLEFBS1Ysd0JBTFUsQUFLVjtVQUxVLEFBTVYsaUJBTlUsQUFNVixBQUdGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtxQkFGRixBQUdJLEFBQ0Y7Y0FKRixBQUlRLEFBQ047O3dCQU5VLEFBQ1osQUFLUyxBQUNTO0FBRFQsQUFDTDtBQU5KLEFBQ0UsT0FGVTtnQkFVWixBQUNVLEFBQ1I7cUJBRkYsQUFFZSxBQUNiO2NBSEYsQUFJSSxBQUNGOzt3QkFmVSxBQVVaLEFBS1MsQUFDUztBQURULEFBQ0w7QUFOSixBQUNFO2dCQVFGLEFBQ1UsQUFDUjtxQkFGRixBQUdJLEFBQ0Y7Y0FKRixBQUlRLEFBQ047O3dCQXhCVSxBQW1CWixBQUtTLEFBQ1M7QUFEVCxBQUNMO0FBTkosQUFDRTtnQkFRRixBQUNVLEFBQ1I7cUJBRkYsQUFHSSxBQUNGO2NBSkYsQUFJUSxBQUNOOzt3QkFqQ1UsQUE0QlosQUFLUyxBQUNTO0FBRFQsQUFDTDtBQU5KLEFBQ0U7Z0JBU1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7cUJBRkYsQUFHSSxBQUNGO2NBSkYsQUFJUSxBQUNOOzt3QkExQ0osQUFBYyxBQXFDWixBQUtTLEFBQ1MsQUFLcEI7QUFOVyxBQUNMO0FBTkosQUFDRTs7MkNBVUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFDOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBSUo7QUFKSTs0QkFJSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWZkLEFBQ0UsQUFFRSxBQVFFLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFRZjs7Ozs7MkdBbkc0QixBOzs7Ozs7O3VCQUVKLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEE7O21CQUF0QztBOzt1QkFDZ0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7bUJBQTlDO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCOzJCQUFTLFFBSEosQUFHSSxBQUFRLEFBQ2pCO2lDQUFlLFFBSlYsQUFJVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQUxYLEFBS1csQUFBUSxBQUN4QjsyQkFBUyxRQU5KLEFBTUksQUFBUSxBO0FBTlosQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBxQixBLEFBdUczQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L0V0aGVyZXVtJlNvbGlkaXR5L2tpY2tzdGFydENvcHkifQ==