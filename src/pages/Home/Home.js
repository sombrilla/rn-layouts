import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import CardCarousel from '../../components/CardCarousel';

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
    navigation: PropTypes.any.isRequired,
    recipies: PropTypes.array,
    loadingRecipies: PropTypes.bool,
    retrieveRecipies: PropTypes.func,
    veganRecipies: PropTypes.array.isRequired,
    popularRecipies: PropTypes.array.isRequired,
    cheapRecipies: PropTypes.array.isRequired,
    healthyRecipies: PropTypes.array.isRequired,
    vegetarianRecipies: PropTypes.array.isRequired,
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
    const {retrieveRecipies, recipies} = this.props;
    (!recipies || recipies.length <= 0) && retrieveRecipies(100);
  };

  renderLoader = () => (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingCopy}>Retrieving recipies</Text>
      <ActivityIndicator size="large" />
    </View>
  );

  goToSearch = () => {
    const {navigation} = this.props;

    navigation.navigate(Pages.SEARCH);
  };

  render() {
    const {
      // recipies,
      loadingRecipies,
      veganRecipies,
      vegetarianRecipies,
      cheapRecipies,
      popularRecipies,
      healthyRecipies,
    } = this.props;

    if (loadingRecipies) {
      return this.renderLoader();
    }

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.input} onPress={this.goToSearch}>
          <Text style={styles.inputCopy}>Search...</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {popularRecipies.length > 0 && <CardCarousel title="Popular" data={popularRecipies} />}
          {veganRecipies.length > 0 && <CardCarousel title="Vegan" data={veganRecipies} />}
          {vegetarianRecipies.length > 0 && (
            <CardCarousel title="Vegetarian" data={vegetarianRecipies} />
          )}
          {healthyRecipies.length > 0 && <CardCarousel title="Healthy" data={healthyRecipies} />}
          {cheapRecipies.length > 0 && <CardCarousel title="Cheap" data={cheapRecipies} />}
        </ScrollView>
      </View>
    );
  }
}
