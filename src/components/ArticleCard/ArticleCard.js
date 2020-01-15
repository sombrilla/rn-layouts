import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import PropTypes from 'prop-types';
import styles from './articleCard.style';
import {metrics} from '../../themes';
import Picture from '../Picture';

class ArticleCard extends Component {
  // constructor(props) {
  //   super(props);

  // };

  // componentDidMount() {

  // };

  render() {
    return (
      <View style={styles.container}>
        <Picture
          source={
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1000&q=80'
          }
          size={metrics.screen.width / 2.35}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Description</Text>
        </View>
      </View>
    );
  }
}

ArticleCard.propTypes = {};

export default ArticleCard;
