import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import styles from './search.style';
import ArticleList from '../../components/ArticleList';

/**
 * Description
 * @author ?
 * @class Search
 */
export default class Search extends PureComponent {
  static navigatorStyle = {};
  static propTypes = {
    recipiesResults: PropTypes.array,
    loadingSearchRecipies: PropTypes.bool,
    searchRecipies: PropTypes.func,
  };
  static defaultProps = {};
  static displayName = 'Search';

  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  onChangeText = text => {
    this.setState({query: text});
  };

  submitQuery = query => {
    const {loadingSearchRecipies, searchRecipies} = this.props;
    if (!loadingSearchRecipies) {
      searchRecipies(query);
    }
  };

  render() {
    const {query} = this.state;
    const {recipiesResults} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.onChangeText(text)}
          onSubmitEditing={text => this.submitQuery(text)}
          value={query}
          placeholder="Search..."
          placeholderTextColor="grey"
        />
        <ArticleList entries={recipiesResults} />
      </View>
    );
  }
}
