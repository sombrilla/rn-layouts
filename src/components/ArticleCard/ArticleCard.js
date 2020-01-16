import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './articleCard.style';
import {metrics, colors} from '../../themes';
import Pages from '../../enum/Pages';
import Picture from '../Picture';

class ArticleCard extends Component {
  // constructor(props) {
  //   super(props);

  // };

  // componentDidMount() {

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
        <Picture source={thumbnail} size={metrics.screen.width / 2} />
        <LinearGradient
          style={styles.gradient}
          colors={[colors.transparent, colors.blackOverlay]}
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

ArticleCard.propTypes = {
  data: PropTypes.object,
  navigation: PropTypes.any,
};

export default withNavigation(ArticleCard);
