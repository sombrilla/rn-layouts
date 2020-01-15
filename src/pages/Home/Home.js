import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';
import styles from './home.style';
import ArticleList from '../../components/ArticleList';

/**
 * Description
 * @author ?
 * @class Home
 */
export default class Home extends PureComponent {
  static navigatorStyle = {};
  static propTypes = {
    recipies: PropTypes.array,
    loadingRecipies: PropTypes.bool,
    retrieveRecipies: PropTypes.func,
  };
  static defaultProps = {};

  static displayName = 'Home';

  // constructor(props){
  //   super(props)
  // }

  componentDidMount = () => {
    const {retrieveRecipies} = this.props;

    retrieveRecipies();
  };

  render() {
    // const {recipies, loadingRecipies} = this.props;

    return (
      <ScrollView>
        <ArticleList />
      </ScrollView>
    );
  }
}
