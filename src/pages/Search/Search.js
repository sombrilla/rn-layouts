import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import styles from './search.style';

/**
 * Description
 * @author ?
 * @class Search
 */
export default class Search extends PureComponent {
  static navigatorStyle = {};
  static propTypes = {};
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

  render() {
    const {query} = this.state;
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.onChangeText(text)}
          value={query}
          placeholder="Search..."
          placeholderTextColor="grey"
        />
      </View>
    );
  }
}
