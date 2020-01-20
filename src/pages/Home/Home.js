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
  RefreshControl,
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
    loadingMoreRecipies: PropTypes.bool,
    retrieveRecipies: PropTypes.func,
    retrieveMoreRecipies: PropTypes.func,
  };
  static defaultProps = {};

  static displayName = 'Home';

  constructor(props) {
    super(props);

    this.page = 1;
  }

  componentDidMount = () => {
    this.fetchRecipies();
  };

  componentDidUpdate = prevProps => {
    const {recipies} = this.props;

    if (prevProps.recipies !== recipies) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
  };

  fetchRecipies = () => {
    const {retrieveRecipies} = this.props;
    retrieveRecipies();
  };

  renderLoader = () => (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingCopy}>Retrieving recipies</Text>
      <ActivityIndicator size="large" />
    </View>
  );

  handleLoadMore = () => {
    const {loadingMoreRecipies, retrieveMoreRecipies} = this.props;
    if (!loadingMoreRecipies) {
      this.page += 1;
      retrieveMoreRecipies(this.page);
    }
  };

  render() {
    const {recipies, loadingRecipies} = this.props;

    if (loadingRecipies) {
      return this.renderLoader();
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={recipies}
            ListHeaderComponent={<Text style={styles.title}>Featured</Text>}
            refreshControl={<RefreshControl refreshing={loadingRecipies} />}
            onEndReachedThreshold={0.4}
            onEndReached={this.handleLoadMore}
            renderItem={({item}) => <FeaturedCard data={item} />}
            keyExtractor={item => item.title}
          />
        </View>
      </SafeAreaView>
    );
  }
}
