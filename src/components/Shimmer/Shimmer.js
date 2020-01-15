import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Easing } from 'react-native';
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { loader } from './shimmer.style';
import { metrics } from '../../themes';
// import colors from '../../common/colors';

/**
 * Description
 * @author Carlos Arteaga
 * @class Shimmer
 */

export default class Shimmer extends PureComponent {
  constructor(props) {
    super(props);
    this.shimmer = new Animated.Value(0);
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    borderRadius: PropTypes.number,
    style: PropTypes.any,
  };

  static defaultProps = {
    borderRadius: 0,
    style: null,
  };

  componentDidMount() {
    this.cycleAnimation();
  }

  cycleAnimation() {
    this.shimmer.setValue(0);
    Animated.timing(this.shimmer, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.cycleAnimation());
  }

  getInterpolate = (inputRange, outputRange) =>
    this.shimmer.interpolate({
      inputRange,
      outputRange,
    });

  render() {
    const translate = {
      translateX: this.getInterpolate([0, 1], [-metrics.screen.width, metrics.screen.width]),
    };
    const containerStyles = [
      loader.container,
      { width: this.props.width },
      { height: this.props.height },
      { borderRadius: this.props.borderRadius },
      this.props.style,
    ];
    return (
      <View style={containerStyles}>
        <Animated.View
          style={[
            loader.shimmer,
            { width: metrics.screen.width, height: this.props.height, transform: [translate] },
          ]}
        >
          <Svg height={this.props.height} width={metrics.screen.width * 3}>
            <Defs>
              <LinearGradient
                id="grad"
                x1="0%"
                y1="0%"
                x2="30%"
                y2="0%"
                x3="70%"
                y3="0%"
                x4="100%"
                y4="0%"
              >
                <Stop offset="0%" stopColor="rgb(230,230,230)" stopOpacity="0" />
                <Stop offset="30%" stopColor="rgb(230,230,230)" stopOpacity="1" />
                <Stop offset="70%" stopColor="rgb(230,230,230)" stopOpacity="1" />
                <Stop offset="100%" stopColor="rgb(230,230,230)" stopOpacity="0" />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height={this.props.height} fill="url(#grad)" />
          </Svg>
        </Animated.View>
      </View>
    );
  }
}
