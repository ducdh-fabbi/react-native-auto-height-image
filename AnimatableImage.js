import React from 'react';
import PropTypes from 'prop-types';
import { Image, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

function AnimatableImage(props) {
  const { animated, ...rest } = props;

  const ImageComponent = animated ? AnimatedFastImage : FastImage;

  return <ImageComponent {...rest} />;
}

AnimatableImage.propTypes = {
  ...Image.propTypes,
  animated: PropTypes.bool
};

AnimatableImage.defaultProps = {
  animated: false
};

export default AnimatableImage;
