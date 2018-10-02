import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  hasWatermark: PropTypes.bool,
  producer: PropTypes.string,
  color: PropTypes.oneOf(['white',
                          'eggshell-white',
                          'salmon']).isRequired,
  weight: (prop, attribute) => {
  const weight = prop[attribute]

    if (!weight) {
      return '`weight` prop is required.'
    }

    if (isNaN(weight)) {
      return '`weight` prop is not a number'
    }

    const validRange = weight < 300 && weight > 80

    if (!validRange) {
      return 'The `weight` prop validator does not check for the weight ranging between 80 and 300.'
    }

  }
}
