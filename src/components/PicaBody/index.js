import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import styles from './styles.module.css'

import NotFound from '../../routes/NotFound'
import PicaFooter from '../PicaFooter'

class PicaBody extends Component {
  render() {
    return (
      <div className={styles.PicaBody}>
        <Switch>
          { this.props.children }
          <Route component={NotFound} />
        </Switch>
        <PicaFooter />
      </div>
    )
  }
}

PicaBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default PicaBody
