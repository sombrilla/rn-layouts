import React, {Component} from 'react';
import {View} from 'react-native';
// import PropTypes from 'prop-types';
import styles from './articleList.style';
import ArticleCard from '../ArticleCard';

class ArticleList extends Component {
  // constructor(props) {
  //   super(props);

  // };

  // componentDidMount() {

  // };

  render() {
    return (
      <View style={styles.container}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </View>
    );
  }
}

ArticleList.propTypes = {};

export default ArticleList;
