import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

class PicaPost extends React.Component {
	constructor(props) {
		super(props)
	}

	resizeMedia(media) {
    if ((media.width > 800) || (media.height > 800)){
      if(media.width >= media.height){
        return ('resize=width:800/' + media.handle)
      } else {
        return ('resize=height:800/' + media.handle)
      }
    } else {
      return media.handle
    }
	}
	
	handleTags(tags) {
		let taglist = ''
		tags.forEach((tag) => {
			taglist += (' | ' + tag.name) 
		})
		return taglist
	}

	parseDateString(string){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthVal = parseInt(string.slice(5,7)) - 1
    const month = months[monthVal]
		const day = parseInt(string.slice(8,10))
		const year = parseInt(string.slice(0,4))
    return month + ' ' + day + ', ' + year
  }

	render(){
		return(
			<Container>
				<Row>
					<Col xl='12'>
						<h4>{this.parseDateString(this.props.date) + this.handleTags(this.props.tags)}</h4>  
					</Col>
					<Col xl='12'>
						<h1>{this.props.title}</h1>
					</Col>
					<Col xl='12'>
						<h1>{this.props.author}</h1>
					</Col>
					<Col xl='12'>
						<img src={'https://media.graphcms.com/' + this.resizeMedia(this.props.image)} alt='test' />
					</Col>
					<Col xl='12'>
						<div dangerouslySetInnerHTML={{ __html: this.props.body }} />
					</Col>
				</Row>
			</Container>
		)
		}

}

PicaPost.defaultProps = {
		title: 'Sample Title',
		date: 'September 9th 2019',
		tags: 'TBA',
		author: 'Michael Jones',
		body: '<h1>SWEEEET DOG</h1>',
		image: 'https://i.imgur.com/ArRiBMs.png'
	}
	
	PicaPost.propTypes = {
		title: PropTypes.string,
		date: PropTypes.string,
		tags: PropTypes.string,
		author: PropTypes.string,
		body: PropTypes.string,
		image: PropTypes.string
	}

	export default PicaPost