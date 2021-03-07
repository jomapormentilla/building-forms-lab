import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <li key={ id }>{ band.name }</li>)

  render() {
    return(
      <div>
        <h1>Add Band:</h1>
        <BandInput addBand={ this.props.addBand } />
        <h1>Bands:</h1>
        { this.renderBands() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
