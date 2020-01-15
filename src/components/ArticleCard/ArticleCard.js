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
    const {navigation} = this.props;
    navigation.navigate(Pages.ARTICLE);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleCardPress} style={styles.container}>
        <Picture
          source={
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1000&q=80'
          }
          size={metrics.screen.width / 2}
        />
        <LinearGradient
          style={styles.gradient}
          colors={[colors.transparent, colors.blackOverlay]}
          locations={[0.5, 0.8]}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Description</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ArticleCard.propTypes = {
  navigation: PropTypes.any,
};

export default withNavigation(ArticleCard);
