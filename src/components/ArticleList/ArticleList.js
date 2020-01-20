import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import styles from './articleList.style';
import ArticleCard from '../ArticleCard';

class ArticleList extends Component {
  // constructor(props) {
  //   super(props);

  // };

  // componentDidMount() {

  // };

  render() {
    const {entries} = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={entries}
        ListHeaderComponent={entries.length > 0 && <Text style={styles.title}>Results</Text>}
        renderItem={({item}) => <ArticleCard data={item} />}
        keyExtractor={item => item.title}
        numColumns={2}
      />
    );
  }
}

ArticleList.propTypes = {
  entries: PropTypes.array,
};

export default ArticleList;
