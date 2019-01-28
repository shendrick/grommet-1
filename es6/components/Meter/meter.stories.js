function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Meter, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';

var BarMeter = function BarMeter() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Meter, {
    type: "bar",
    background: "light-2",
    values: [{
      value: 30
    }]
  })));
};

var CircleMeter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CircleMeter, _React$Component);

  function CircleMeter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: 20
    });

    return _this;
  }

  var _proto = CircleMeter.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timer = setInterval(function () {
      var value = _this2.state.value;

      _this2.setState({
        value: value < 100 ? value + 8 : 20
      });
    }, 2000);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  _proto.render = function render() {
    var value = this.state.value;
    return React.createElement(Grommet, {
      theme: grommet
    }, React.createElement(Box, {
      align: "center",
      pad: "large"
    }, React.createElement(Meter, {
      type: "circle",
      background: "light-2",
      values: [{
        value: value,
        color: value > 50 ? 'accent-2' : 'accent-1'
      }]
    })));
  };

  return CircleMeter;
}(React.Component);

var LabelledMeter = function LabelledMeter() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Stack, {
    anchor: "center"
  }, React.createElement(Meter, {
    type: "circle",
    background: "light-2",
    values: [{
      value: 30
    }],
    size: "xsmall",
    thickness: "small"
  }), React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      bottom: 'xsmall'
    }
  }, React.createElement(Text, {
    size: "xlarge",
    weight: "bold"
  }, "30"), React.createElement(Text, {
    size: "small"
  }, "%")))));
};

storiesOf('Meter', module).add('Bar', function () {
  return React.createElement(BarMeter, null);
}).add('Circle', function () {
  return React.createElement(CircleMeter, null);
}).add('Labelled', function () {
  return React.createElement(LabelledMeter, null);
});