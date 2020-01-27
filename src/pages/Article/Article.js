import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Collapsible from 'react-native-collapsible';
import styles from './article.style';
import {metrics, colors} from '../../themes';
import CtaIcon from '../../components/CtaIcon';
import Picture from '../../components/Picture';
import Icon from '../../components/Icon';
import {numberToFraction} from '../../utils/numberUtils';

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

  constructor(props) {
    super(props);

    this.state = {
      isIngredientsOpen: false,
      contentHeight: undefined,
    };
  }

  handleClose = () => {
    const {navigation} = this.props;

    navigation.goBack();
  };

  handleOpenIngredients = () => this.setState({isIngredientsOpen: !this.state.isIngredientsOpen});

  renderIngredients = ({item}) => {
    const upperCaseName = item.name && item.name[0].toUpperCase() + item.name.slice(1);
    const upperCaseUnit = item.unit && item.unit[0].toUpperCase() + item.unit.slice(1);
    return (
      <View style={styles.ingredientBlock}>
        <Picture
          source={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
          size={70}
          style={styles.ingredientImage}
        />
        <View style={styles.ingredientInfo}>
          <Text style={styles.ingredientName}>{upperCaseName}</Text>
          <Text style={styles.ingredientAmount}>
            {numberToFraction(item.amount)} {upperCaseUnit}
          </Text>
        </View>
      </View>
    );
  };

  renderInstructions = ({item}) => (
    <View style={styles.instructionBlock}>
      <View style={styles.instructionInfo}>
        <Text style={styles.instructionStep}>Step {item.number}</Text>
        <Text style={styles.instructionCopy}>{item.step}</Text>
      </View>
    </View>
  );

  render() {
    const {navigation} = this.props;
    const {isIngredientsOpen} = this.state;
    const data = navigation.getParam('data', []);

    const {
      title,
      image,
      readyInMinutes,
      servings,
      healthScore,
      extendedIngredients,
      analyzedInstructions,
    } = data;

    return (
      <>
        <CtaIcon
          onPress={this.handleClose}
          iconName="close"
          iconColor={colors.white}
          iconSize={35}
          style={styles.closeButton}
          backgroundColor={colors.transparent}
        />
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Picture style={styles.image} source={image} size={metrics.screen.width} />
              <LinearGradient
                style={styles.gradient}
                colors={[colors.transparent, colors.blackHalf]}
                locations={[0.5, 0.8]}
              />
              <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.infoContainer}>
                <View style={styles.infoBlock}>
                  <Text style={styles.infoLabel}>READY IN</Text>
                  <Icon name="alarm" size={30} color={colors.blueGrey} />
                  <Text style={styles.infoCopy}>{readyInMinutes} minutes</Text>
                </View>
                <View style={styles.infoBlock}>
                  <Text style={styles.infoLabel}>SERVINGS</Text>
                  <Icon name="bowl" size={30} color={colors.blueGrey} />
                  <Text style={styles.infoCopy}>{servings}</Text>
                </View>
                <View style={styles.infoBlock}>
                  <Text style={styles.infoLabel}>HEALTH</Text>
                  <Icon name="cards-heart" size={30} color={colors.blueGrey} />
                  <Text style={styles.infoCopy}>{healthScore}/100</Text>
                </View>
              </View>
              <View style={styles.ingredientsContainer}>
                <TouchableOpacity
                  style={styles.ingredientsButton}
                  onPress={this.handleOpenIngredients}>
                  <Text style={styles.ingredientsTitle}>Ingredients</Text>
                  <Icon
                    name={isIngredientsOpen ? 'chevron-up' : 'chevron-down'}
                    size={30}
                    color={colors.blueGrey}
                  />
                </TouchableOpacity>
                <Collapsible collapsed={!isIngredientsOpen} style={styles.ingredientsWrapper}>
                  <FlatList
                    contentContainerStyle={styles.container}
                    data={extendedIngredients}
                    renderItem={this.renderIngredients}
                    keyExtractor={item => `${item.id}`}
                    scrollEnabled={false}
                  />
                </Collapsible>
              </View>
              <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>Instructions</Text>
                <FlatList
                  contentContainerStyle={styles.container}
                  data={analyzedInstructions[0].steps}
                  renderItem={this.renderInstructions}
                  keyExtractor={item => `${item.number}`}
                  scrollEnabled={false}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
