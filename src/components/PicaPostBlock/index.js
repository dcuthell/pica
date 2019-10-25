import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import PicaButton from '../PicaButton'

class PicaPostBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isClosed: true
    }
  }

  renderDate(){
    let d = new Date(this.props.date)
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear())
  }

  renderTags(){
    let tags= ''
    this.props.tags.forEach((tag,index) => {
      if(index === 0){
        tags += tag.name
      } else {
        tags += ' | ' + tag.name
      }
    })
    return tags
  }

  render() {
    return (
      <div className={styles.PicaPostBlock}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.dateAndTags}>
             <p>{this.renderDate() + ' ' + this.renderTags()}</p>
            </div>
            <div className={styles.titleAndAuthor}>
              <h4>{this.props.title}</h4>
              <p>{'by ' + this.props.author}</p>
            </div>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: this.props.content }} />
            <PicaButton styles={{height: '10%'}}>
              <Link to={'/blog/' + this.props.route}>Read More</Link>
            </PicaButton>
          </div>
          <div className={styles.image} style={{backgroundImage: 'url(' + this.props.image + ')'}} />
        </div>
      </div>
    )
  }
}

PicaPostBlock.propTypes = {
  name: PropTypes.string,
  events: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  cardOpen: PropTypes.bool,
  section: PropTypes.bool
}

PicaPostBlock.defaultProps = {
  name: 'Mike Jones',
  events: ['Tons'],
  description: '<h1>None needed</h1>',
  image: 'https://thesource.com/wp-content/uploads/2018/07/1024x1024.jpg',
  route: 'no-route'
}

export default PicaPostBlock
