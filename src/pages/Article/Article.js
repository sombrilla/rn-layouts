import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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

  // constructor(props){
  //   super(props)
  // }

  componentDidMount = () => {
    const {navigation} = this.props;
    console.log(navigation.getParam('data', []));
  };

  handleClose = () => {
    const {navigation} = this.props;

    navigation.goBack();
  };

  render() {
    const {navigation} = this.props;
    const data = navigation.getParam('data', []);

    const {title, image, readyInMinutes, servings, extendedIngredients} = data;

    return (
      <>
        <CtaIcon onPress={this.handleClose} iconName="close" style={styles.closeButton} />
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
              </View>
              <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsWrapper}>
                  {extendedIngredients.map(ingredient => {
                    const upperCaseName =
                      ingredient.name &&
                      ingredient.name[0].toUpperCase() + ingredient.name.slice(1);
                    const upperCaseUnit =
                      ingredient.unit &&
                      ingredient.unit[0].toUpperCase() + ingredient.unit.slice(1);
                    return (
                      <View style={styles.ingredientBlock}>
                        <Picture
                          source={`https://spoonacular.com/cdn/ingredients_100x100/${
                            ingredient.image
                          }`}
                          size={50}
                          style={styles.ingredientImage}
                        />
                        <View style={styles.ingredientInfo}>
                          <Text style={styles.ingredientName}>{upperCaseName}</Text>
                          <Text style={styles.ingredientAmount}>
                            {numberToFraction(ingredient.amount)} {upperCaseUnit}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
