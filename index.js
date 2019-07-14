import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';


const Style = {
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderColor: '#1676FC',
    borderRadius: 30,
  },
  radioNormal: {
    borderRadius: 10,
  },
  radioActive: {
    width: 20,
    height: 20,
    backgroundColor: '#1676FC',
  }
};

class AwsmRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      buttonColor: props.buttonColor || '#1676FC'
    };
  }
  render() {
    const innerSize = { width: 20, height: 20, borderRadius: 20 / 2 };
    const outerSize = { width: 20 + 10, height: 20 + 10, borderRadius: (20 + 10) / 2 };
    if (this.props.buttonSize) {
      innerSize.width = this.props.buttonSize;
      innerSize.height = this.props.buttonSize;
      innerSize.borderRadius = this.props.buttonSize / 2;
      outerSize.width = this.props.buttonSize + 10;
      outerSize.height = this.props.buttonSize + 10;
      outerSize.borderRadius = (this.props.buttonSize + 10) / 2;
    }
    if (this.props.buttonOuterSize) {
      outerSize.width = this.props.buttonOuterSize;
      outerSize.height = this.props.buttonOuterSize;
      outerSize.borderRadius = this.props.buttonOuterSize / 2;
    }
    let outerColor = this.props.buttonOuterColor;
    let innerColor = this.props.buttonInnerColor;
    const borderWidth = this.props.borderWidth || 3;
    if (this.props.buttonColor) {
      outerColor = this.props.buttonColor;
      innerColor = this.props.buttonColor;
    }
    const c = (
      <View
        style={[
        Style.radioNormal,
        this.props.isSelected && Style.radioActive,
        this.props.isSelected && innerSize,
        this.props.isSelected && { backgroundColor: innerColor }
        ]}
      />
    );

    const radioStyle = [
      Style.radio,
      {
        borderWidth,
        borderColor: outerColor
      },
      this.props.buttonStyle,
      outerSize
    ];

    if (this.props.disabled) {
      return (
        <View style={this.props.buttonWrapStyle} >
          <View style={radioStyle}>
            {c}
          </View>
        </View>
      );
    }

    return (
      <View style={this.props.buttonWrapStyle} >
        <TouchableOpacity
          accessible={this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          testID={this.props.testID}
          style={radioStyle}
          activeOpacity={0.6}
          onPress={() => this.props.onPress(this.props.obj.value, this.props.index)}
        >
         {c}
        </TouchableOpacity>
      </View>
    );
  }
}
 export default AwsmRadio;
