import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ctaIcon.style';
import Icon from '../../components/Icon';

class CtaIcon extends Component {
  render() {
    const {onPress, size, iconName, iconColor, iconSize, backgroundColor, style} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {width: size, height: size, borderRadius: size / 2, backgroundColor},
          style,
        ]}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    );
  }
}

CtaIcon.defaultProps = {
  size: 50,
  backgroundColor: 'white',
  iconColor: 'black',
  iconSize: 20,
  iconName: 'comments',
};

CtaIcon.propTypes = {
  onPress: PropTypes.func,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  style: PropTypes.any,
};

export default CtaIcon;
