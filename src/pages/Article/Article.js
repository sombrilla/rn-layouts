import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './article.style';

/**
 * Description
 * @author ?
 * @class Article
 */
export default class Article extends PureComponent {
  static propTypes = {
    navigation: PropTypes.any,
  };
  static defaultProps = {};
  static displayName = 'Article';

  // constructor(props){
  //   super(props)
  // }

  render() {
    const {navigation} = this.props;
    const data = navigation.getParam('data', []);

    const {title} = data;

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{title}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
