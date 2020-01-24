import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './article.style';
import {metrics, colors} from '../../themes';
import CtaIcon from '../../components/CtaIcon';
import Picture from '../../components/Picture';

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

  handleClose = () => {
    const {navigation} = this.props;

    navigation.goBack();
  };

  render() {
    const {navigation} = this.props;
    const data = navigation.getParam('data', []);

    const {title, image} = data;

    return (
      <>
        <CtaIcon onPress={this.handleClose} iconName="close" style={styles.closeButton} />
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Picture style={styles.image} source={image} size={metrics.screen.width} />
            <LinearGradient
              style={styles.gradient}
              colors={[colors.transparent, colors.blackHalf]}
              locations={[0.5, 0.8]}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}
