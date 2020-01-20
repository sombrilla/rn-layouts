import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  UIManager,
  LayoutAnimation,
  FlatList,
} from 'react-native';
import styles from './home.style';
import FeaturedCard from '../../components/FeaturedCard';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

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

  componentDidUpdate = prevProps => {
    const {recipies} = this.props;

    if (prevProps.recipies !== recipies) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
  };

  renderLoader = () => (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingCopy}>Retrieving recipies</Text>
      <ActivityIndicator size="large" />
    </View>
  );

  render() {
    const {recipies, loadingRecipies} = this.props;

    if (loadingRecipies) {
      return this.renderLoader();
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={recipies}
          ListHeaderComponent={<Text style={styles.title}>Featured</Text>}
          renderItem={({item}) => <FeaturedCard data={item} />}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>
    );
  }
}
