import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
// import styles from './article.style';

/**
 * Description
 * @author ?
 * @class Article
 */
export default class Article extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.getParam('title', 'Article')}`,
  });
  static propTypes = {};
  static defaultProps = {};
  static displayName = 'Article';

  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <View>
        <Text>Article</Text>
      </View>
    );
  }
}
