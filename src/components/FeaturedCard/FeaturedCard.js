import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './featuredCard.style';
import {metrics, colors} from '../../themes';
import Pages from '../../enum/Pages';
import Picture from '../Picture';

class FeaturedCard extends Component {
  // constructor(props) {
  //   super(props);

  // };

  handleCardPress = () => {
    const {navigation, data} = this.props;
    const {title} = data;
    navigation.navigate(Pages.ARTICLE, {title});
  };

  render() {
    const {data} = this.props;
    const {title, thumbnail, ingredients} = data;

    return (
      <TouchableOpacity onPress={this.handleCardPress} style={styles.container}>
        <Picture style={styles.image} source={thumbnail} size={metrics.screen.width - 20} />
        <LinearGradient
          style={styles.gradient}
          colors={[colors.transparent, colors.blackHalf]}
          locations={[0.5, 0.8]}
        />
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {ingredients}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

FeaturedCard.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.any.isRequired,
};

export default FeaturedCard;
