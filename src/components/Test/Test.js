import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './test.style';

class Test extends Component {

  constructor(props) {
    super(props);

  };

  componentDidMount() {

  };

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
};

Test.propTypes = {};

export default Test;
