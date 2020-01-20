import React from 'react';
import PropTypes from 'prop-types';
import {colors} from '../../themes';
import {IconSet} from '../../utils/iconUtils';

const Icon = ({style, name, size, color}) => (
  <IconSet style={style} name={name} size={size} color={color} />
);

Icon.defaultProps = {
  color: colors.black,
  size: 12,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default Icon;
