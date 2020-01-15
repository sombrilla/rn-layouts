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
  static propTypes = {};
  static defaultProps = {};

  static displayName = 'Home';

  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <ScrollView>
        <ArticleList />
      </ScrollView>
    );
  }
}
