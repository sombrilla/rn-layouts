import storage from 'redux-persist/es/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['app'],
  transforms: [],
};
