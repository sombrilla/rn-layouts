import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, TextInput, View} from 'react-native';
import styles from './search.style';
import ArticleList from '../../components/ArticleList';
import CtaIcon from '../../components/CtaIcon';

/**
 * Description
 * @author ?
 * @class Search
 */
export default class Search extends PureComponent {
  static navigatorStyle = {};
  static propTypes = {
    navigation: PropTypes.any,
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

  componentDidMount = () => {
    this.input.focus();
  };

  onChangeText = text => {
    this.setState({query: text});
  };

  submitQuery = query => {
    const {loadingSearchRecipies, searchRecipies} = this.props;
    if (!loadingSearchRecipies) {
      searchRecipies(query);
    }
  };

  handleClose = () => {
    const {navigation} = this.props;

    navigation.goBack();
  };

  render() {
    const {query} = this.state;
    const {recipiesResults} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <CtaIcon onPress={this.handleClose} iconName="close" style={styles.closeButton} />
          <TextInput
            // eslint-disable-next-line no-return-assign
            ref={ref => (this.input = ref)}
            style={styles.input}
            onChangeText={text => this.onChangeText(text)}
            onSubmitEditing={event => this.submitQuery(event.nativeEvent.text)}
            value={query}
            placeholder="Search..."
            placeholderTextColor="grey"
          />
        </View>
        <ArticleList entries={recipiesResults} />
      </SafeAreaView>
    );
  }
}
