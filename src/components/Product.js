import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
    <div>

  <p>{this.props.producer}</p>
    </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

// const colors = ['white', 'eggshell-white', 'salmon']
Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool.isRequired,
  color: PropTypes.oneOf([
      "white",
      "eggshell-white",
      "salmon"
    ]).isRequired,
    weight: (props, propName) => {
      const weight = props[propName];

      if (weight === undefined) {
        return new Error('The `weight` prop is required.');
      }

      if (isNaN(weight)) {
        return new Error('The `weight` prop is not a number.');
      }

      const isValidWeight = weight > 80 && weight < 300;

      if (!isValidWeight) {
        return new Error('The `weight` prop should range between 80 and 300.');
      }
    },
  }

export default Product;
