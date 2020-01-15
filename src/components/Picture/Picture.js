import React, {Component} from 'react';
import {View, ViewPropTypes, Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './picture.style';
import {loadImageSize} from '../../utils/imageUtils';
import Shimmer from '../Shimmer';
import {colors} from '../../themes';

const AnimatedShimmer = Animated.createAnimatedComponent(Shimmer);

class Picture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageWidth: 0,
      imageHeight: 0,
      imageLoaded: false,
    };

    this.imageOpacity = new Animated.Value(0);
    this.shimmerOpacity = new Animated.Value(1);
  }

  componentDidMount() {
    if (this.props.source) {
      this.setImageSize();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.source !== this.props.source || prevProps.size !== this.props.size) {
      this.setState({imageWidth: 0, imageHeight: 0}, this.setImageSize);
    }
  }

  getViewSize = size => (typeof size === 'number' ? {width: size, height: size} : size);

  setImageSize = async () => {
    const {source, size} = this.props;
    const viewSize = this.getViewSize(size);

    try {
      const sourceSize = await loadImageSize(source);
      const scale = Math.max(
        viewSize.width / sourceSize.width,
        viewSize.height / sourceSize.height,
      );

      this.setState({
        imageWidth: sourceSize.width * scale,
        imageHeight: sourceSize.height * scale,
      });
    } catch (error) {
      console.warn('loadImageSize error');
    }
  };

  onImageLoad = () => {
    Animated.timing(
      this.imageOpacity,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      },
      this.setState({imageLoaded: true}),
    ).start();

    Animated.timing(this.shimmerOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {source, size, style, shimmers} = this.props;
    const {imageWidth, imageHeight, imageLoaded} = this.state;

    const viewSize = this.getViewSize(size);

    return (
      <View
        style={[
          {
            backgroundColor: source ? undefined : colors.blackDetail,
            borderRadius: source ? undefined : 4,
          },
          styles.container,
          style,
          viewSize,
        ]}>
        {source ? (
          <>
            {!!imageWidth && !!imageHeight && (
              <Animated.Image
                source={typeof source === 'number' ? source : {uri: source}}
                onLoad={!imageLoaded ? this.onImageLoad : null}
                style={[styles.image, {opacity: this.imageOpacity}]}
              />
            )}
            {!imageLoaded && shimmers && (
              <AnimatedShimmer
                style={{opacity: this.shimmerOpacity, position: 'absolute'}}
                width={viewSize.width}
                height={viewSize.height}
              />
            )}
          </>
        ) : null}
      </View>
    );
  }
}

Picture.defaultProps = {
  shimmers: true,
};

Picture.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  ]).isRequired,
  style: ViewPropTypes.style,
  shimmers: PropTypes.bool,
};

export default Picture;
