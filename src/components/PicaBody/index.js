import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import styles from './styles.css'

import NotFound from '../NotFound'

class PicaBody extends Component {
  render() {
    return (
      <div className={styles.RouterContent}>
        <Switch>
          { this.props.children }
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

PicaBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default PicaBody
