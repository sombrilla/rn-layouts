import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './cardCarousel.style';
import {metrics, colors} from '../../themes';
import Picture from '../Picture';
import Pages from '../../enum/Pages';

class CardCarousel extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {}

  handleCardPress = data => {
    const {navigation} = this.props;
    navigation.navigate(Pages.ARTICLE, {data});
  };

  renderItem = ({item}) => {
    const {image, title} = item;
    return (
      <TouchableOpacity onPress={() => this.handleCardPress(item)} style={styles.slide}>
        <View style={styles.slideContent}>
          <Picture style={styles.image} source={image} size={metrics.screen.width - 100} />
          <LinearGradient
            style={styles.gradient}
            colors={[colors.transparent, colors.blackHalf]}
            locations={[0.5, 0.8]}
          />
          <View style={styles.infoContainer}>
            <Text numberOfLines={2} style={styles.slideTitle}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {data, title} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Carousel
          data={data}
          contentContainerCustomStyle={styles.carousel}
          renderItem={this.renderItem}
          sliderWidth={metrics.screen.width}
          itemWidth={metrics.screen.width - 80}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>
    );
  }
}

CardCarousel.defaultProps = {
  title: 'Featured',
};

CardCarousel.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  navigation: PropTypes.any.isRequired,
};

export default CardCarousel;
