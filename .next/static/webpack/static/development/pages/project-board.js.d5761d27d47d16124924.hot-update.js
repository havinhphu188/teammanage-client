webpackHotUpdate("static\\development\\pages\\project-board.js",{

/***/ "./components/AssignMemberDialog.js":
/*!******************************************!*\
  !*** ./components/AssignMemberDialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AssignMemberDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\NextJs\\nextjs\\components\\AssignMemberDialog.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var AssignMemberDialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AssignMemberDialog, _React$Component);

  function AssignMemberDialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AssignMemberDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AssignMemberDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      members: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function (id) {});

    return _this;
  }

  _createClass(AssignMemberDialog, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.open === true) {
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:7900/api/get-unassigned-members', {
          params: {
            id: this.props.projectId
          }
        }).then(function (response) {
          _this2.setState({
            members: response.data,
            chosenMembers: Array(response.data.length).fill(false)
          });

          console.log(members);
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
        open: this.props.open,
        onClose: this.props.handleClose,
        "aria-labelledby": "form-dialog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "form-dialog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Assign New Member"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, {
        dense: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.state.members.map(function (member, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: member.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemText, {
          primary: member.member_name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemSecondaryAction, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox, {
          onChange: _this3.handleToggle(member.id),
          checked: _this3.state.chosenMembers[index],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        })));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.props.handleClose,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.props.handleClose,
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Add Member")));
    }
  }]);

  return AssignMemberDialog;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./node_modules/@material-ui/core/Avatar/Avatar.js":
false,

/***/ "./node_modules/@material-ui/core/Avatar/index.js":
false,

/***/ "./node_modules/@material-ui/core/BottomNavigation/BottomNavigation.js":
false,

/***/ "./node_modules/@material-ui/core/BottomNavigation/index.js":
false,

/***/ "./node_modules/@material-ui/core/BottomNavigationAction/BottomNavigationAction.js":
false,

/***/ "./node_modules/@material-ui/core/BottomNavigationAction/index.js":
false,

/***/ "./node_modules/@material-ui/core/Card/Card.js":
false,

/***/ "./node_modules/@material-ui/core/Card/index.js":
false,

/***/ "./node_modules/@material-ui/core/CardActionArea/CardActionArea.js":
false,

/***/ "./node_modules/@material-ui/core/CardActionArea/index.js":
false,

/***/ "./node_modules/@material-ui/core/CardActions/CardActions.js":
false,

/***/ "./node_modules/@material-ui/core/CardActions/index.js":
false,

/***/ "./node_modules/@material-ui/core/CardContent/CardContent.js":
false,

/***/ "./node_modules/@material-ui/core/CardContent/index.js":
false,

/***/ "./node_modules/@material-ui/core/CardHeader/CardHeader.js":
false,

/***/ "./node_modules/@material-ui/core/CardHeader/index.js":
false,

/***/ "./node_modules/@material-ui/core/CardMedia/CardMedia.js":
false,

/***/ "./node_modules/@material-ui/core/CardMedia/index.js":
false,

/***/ "./node_modules/@material-ui/core/Checkbox/Checkbox.js":
false,

/***/ "./node_modules/@material-ui/core/Checkbox/index.js":
false,

/***/ "./node_modules/@material-ui/core/Chip/Chip.js":
false,

/***/ "./node_modules/@material-ui/core/Chip/index.js":
false,

/***/ "./node_modules/@material-ui/core/CircularProgress/CircularProgress.js":
false,

/***/ "./node_modules/@material-ui/core/CircularProgress/index.js":
false,

/***/ "./node_modules/@material-ui/core/ClickAwayListener/ClickAwayListener.js":
false,

/***/ "./node_modules/@material-ui/core/ClickAwayListener/index.js":
false,

/***/ "./node_modules/@material-ui/core/Collapse/Collapse.js":
false,

/***/ "./node_modules/@material-ui/core/Collapse/index.js":
false,

/***/ "./node_modules/@material-ui/core/DialogContentText/DialogContentText.js":
false,

/***/ "./node_modules/@material-ui/core/DialogContentText/index.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanel/ExpansionPanel.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanel/index.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanelActions/ExpansionPanelActions.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanelActions/index.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary.js":
false,

/***/ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js":
false,

/***/ "./node_modules/@material-ui/core/Fab/Fab.js":
false,

/***/ "./node_modules/@material-ui/core/Fab/index.js":
false,

/***/ "./node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js":
false,

/***/ "./node_modules/@material-ui/core/FormControlLabel/index.js":
false,

/***/ "./node_modules/@material-ui/core/FormGroup/FormGroup.js":
false,

/***/ "./node_modules/@material-ui/core/FormGroup/index.js":
false,

/***/ "./node_modules/@material-ui/core/Grid/Grid.js":
false,

/***/ "./node_modules/@material-ui/core/Grid/index.js":
false,

/***/ "./node_modules/@material-ui/core/GridList/GridList.js":
false,

/***/ "./node_modules/@material-ui/core/GridList/index.js":
false,

/***/ "./node_modules/@material-ui/core/GridListTile/GridListTile.js":
false,

/***/ "./node_modules/@material-ui/core/GridListTile/index.js":
false,

/***/ "./node_modules/@material-ui/core/GridListTileBar/GridListTileBar.js":
false,

/***/ "./node_modules/@material-ui/core/GridListTileBar/index.js":
false,

/***/ "./node_modules/@material-ui/core/Hidden/Hidden.js":
false,

/***/ "./node_modules/@material-ui/core/Hidden/HiddenCss.js":
false,

/***/ "./node_modules/@material-ui/core/Hidden/HiddenJs.js":
false,

/***/ "./node_modules/@material-ui/core/Hidden/index.js":
false,

/***/ "./node_modules/@material-ui/core/Icon/Icon.js":
false,

/***/ "./node_modules/@material-ui/core/Icon/index.js":
false,

/***/ "./node_modules/@material-ui/core/InputAdornment/InputAdornment.js":
false,

/***/ "./node_modules/@material-ui/core/InputAdornment/index.js":
false,

/***/ "./node_modules/@material-ui/core/LinearProgress/LinearProgress.js":
false,

/***/ "./node_modules/@material-ui/core/LinearProgress/index.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemAvatar/index.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js":
false,

/***/ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js":
false,

/***/ "./node_modules/@material-ui/core/Menu/index.js":
false,

/***/ "./node_modules/@material-ui/core/MenuItem/MenuItem.js":
false,

/***/ "./node_modules/@material-ui/core/MenuItem/index.js":
false,

/***/ "./node_modules/@material-ui/core/MobileStepper/MobileStepper.js":
false,

/***/ "./node_modules/@material-ui/core/MobileStepper/index.js":
false,

/***/ "./node_modules/@material-ui/core/NativeSelect/index.js":
false,

/***/ "./node_modules/@material-ui/core/Popper/Popper.js":
false,

/***/ "./node_modules/@material-ui/core/Popper/index.js":
false,

/***/ "./node_modules/@material-ui/core/Radio/Radio.js":
false,

/***/ "./node_modules/@material-ui/core/Radio/index.js":
false,

/***/ "./node_modules/@material-ui/core/RadioGroup/RadioGroup.js":
false,

/***/ "./node_modules/@material-ui/core/RadioGroup/index.js":
false,

/***/ "./node_modules/@material-ui/core/Snackbar/Snackbar.js":
false,

/***/ "./node_modules/@material-ui/core/Snackbar/index.js":
false,

/***/ "./node_modules/@material-ui/core/SnackbarContent/SnackbarContent.js":
false,

/***/ "./node_modules/@material-ui/core/SnackbarContent/index.js":
false,

/***/ "./node_modules/@material-ui/core/Step/Step.js":
false,

/***/ "./node_modules/@material-ui/core/Step/index.js":
false,

/***/ "./node_modules/@material-ui/core/StepButton/StepButton.js":
false,

/***/ "./node_modules/@material-ui/core/StepButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/StepConnector/StepConnector.js":
false,

/***/ "./node_modules/@material-ui/core/StepConnector/index.js":
false,

/***/ "./node_modules/@material-ui/core/StepContent/StepContent.js":
false,

/***/ "./node_modules/@material-ui/core/StepContent/index.js":
false,

/***/ "./node_modules/@material-ui/core/StepIcon/StepIcon.js":
false,

/***/ "./node_modules/@material-ui/core/StepIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/StepLabel/StepLabel.js":
false,

/***/ "./node_modules/@material-ui/core/StepLabel/index.js":
false,

/***/ "./node_modules/@material-ui/core/Stepper/Stepper.js":
false,

/***/ "./node_modules/@material-ui/core/Stepper/index.js":
false,

/***/ "./node_modules/@material-ui/core/SwipeableDrawer/SwipeArea.js":
false,

/***/ "./node_modules/@material-ui/core/SwipeableDrawer/SwipeableDrawer.js":
false,

/***/ "./node_modules/@material-ui/core/SwipeableDrawer/index.js":
false,

/***/ "./node_modules/@material-ui/core/Switch/Switch.js":
false,

/***/ "./node_modules/@material-ui/core/Switch/index.js":
false,

/***/ "./node_modules/@material-ui/core/Tab/Tab.js":
false,

/***/ "./node_modules/@material-ui/core/Tab/index.js":
false,

/***/ "./node_modules/@material-ui/core/TableFooter/TableFooter.js":
false,

/***/ "./node_modules/@material-ui/core/TableFooter/index.js":
false,

/***/ "./node_modules/@material-ui/core/TablePagination/TablePagination.js":
false,

/***/ "./node_modules/@material-ui/core/TablePagination/TablePaginationActions.js":
false,

/***/ "./node_modules/@material-ui/core/TablePagination/index.js":
false,

/***/ "./node_modules/@material-ui/core/TableSortLabel/TableSortLabel.js":
false,

/***/ "./node_modules/@material-ui/core/TableSortLabel/index.js":
false,

/***/ "./node_modules/@material-ui/core/Tabs/ScrollbarSize.js":
false,

/***/ "./node_modules/@material-ui/core/Tabs/TabIndicator.js":
false,

/***/ "./node_modules/@material-ui/core/Tabs/TabScrollButton.js":
false,

/***/ "./node_modules/@material-ui/core/Tabs/Tabs.js":
false,

/***/ "./node_modules/@material-ui/core/Tabs/index.js":
false,

/***/ "./node_modules/@material-ui/core/Tooltip/Tooltip.js":
false,

/***/ "./node_modules/@material-ui/core/Tooltip/index.js":
false,

/***/ "./node_modules/@material-ui/core/Zoom/Zoom.js":
false,

/***/ "./node_modules/@material-ui/core/Zoom/index.js":
false,

/***/ "./node_modules/@material-ui/core/colors/amber.js":
false,

/***/ "./node_modules/@material-ui/core/colors/blue.js":
false,

/***/ "./node_modules/@material-ui/core/colors/blueGrey.js":
false,

/***/ "./node_modules/@material-ui/core/colors/brown.js":
false,

/***/ "./node_modules/@material-ui/core/colors/cyan.js":
false,

/***/ "./node_modules/@material-ui/core/colors/deepOrange.js":
false,

/***/ "./node_modules/@material-ui/core/colors/deepPurple.js":
false,

/***/ "./node_modules/@material-ui/core/colors/green.js":
false,

/***/ "./node_modules/@material-ui/core/colors/index.js":
false,

/***/ "./node_modules/@material-ui/core/colors/lightBlue.js":
false,

/***/ "./node_modules/@material-ui/core/colors/lightGreen.js":
false,

/***/ "./node_modules/@material-ui/core/colors/lime.js":
false,

/***/ "./node_modules/@material-ui/core/colors/orange.js":
false,

/***/ "./node_modules/@material-ui/core/colors/purple.js":
false,

/***/ "./node_modules/@material-ui/core/colors/teal.js":
false,

/***/ "./node_modules/@material-ui/core/colors/yellow.js":
false,

/***/ "./node_modules/@material-ui/core/index.es.js":
false,

/***/ "./node_modules/@material-ui/core/internal/SwitchBase.js":
false,

/***/ "./node_modules/@material-ui/core/internal/animate.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDownward.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/Cancel.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/CheckBox.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/CheckBoxOutlineBlank.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/CheckCircle.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/IndeterminateCheckBox.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/KeyboardArrowLeft.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/KeyboardArrowRight.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/RadioButtonChecked.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/RadioButtonUnchecked.js":
false,

/***/ "./node_modules/@material-ui/core/internal/svg-icons/Warning.js":
false,

/***/ "./node_modules/@material-ui/core/utils/requirePropFactory.js":
false,

/***/ "./node_modules/@material-ui/core/utils/unsupportedProp.js":
false,

/***/ "./node_modules/@material-ui/core/withMobileDialog/index.js":
false,

/***/ "./node_modules/@material-ui/core/withMobileDialog/withMobileDialog.js":
false,

/***/ "./node_modules/@material-ui/core/withWidth/index.js":
false,

/***/ "./node_modules/@material-ui/core/withWidth/withWidth.js":
false,

/***/ "./node_modules/normalize-scroll-left/lib/main.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false

})
//# sourceMappingURL=project-board.js.d5761d27d47d16124924.hot-update.js.map