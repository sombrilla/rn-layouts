import {createSelector} from 'reselect';

export const getPopularRecipies = createSelector(
  state => state.recipies.recipies,
  recipies => recipies.filter(reicpe => reicpe.veryPopular === true),
);

export const getVeganRecipies = createSelector(
  state => state.recipies.recipies,
  recipies => recipies.filter(reicpe => reicpe.vegan === true),
);

export const getVegetarianRecipies = createSelector(
  state => state.recipies.recipies,
  recipies => recipies.filter(reicpe => reicpe.vegetarian === true),
);

export const getCheapRecipies = createSelector(
  state => state.recipies.recipies,
  recipies => recipies.filter(reicpe => reicpe.cheap === true),
);

export const getHealthyRecipies = createSelector(
  state => state.recipies.recipies,
  recipies => recipies.filter(reicpe => reicpe.veryHealthy === true),
);
