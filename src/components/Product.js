import React from 'react'
import PropTypes from 'prop-types'

let productColors = ['white', 'eggshell-white', 'salmon']

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(productColors).isRequired,
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
