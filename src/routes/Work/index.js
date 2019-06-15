import React, { Component } from 'react'
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'

import hairlair from '../../img/hairlairpage.jpg'
import thunderbird from '../../img/tbirdpage.jpg'
import ncba from '../../img/ncbapage.jpg'
import starday from '../../img/stardaypage.jpg'
import bam from '../../img/bampage.jpg'
import zachsshack from '../../img/zachsshackpage.jpg'

import './styles.css'

const items = [
  {
    src: hairlair,
    url: '/projects',
    altText: 'The Hair Lair',
    caption: 'Stay Simple',
    slideText: 'We encourage simple design powered by a robust back-end'
  },
  {
    src: thunderbird,
    altText: 'Thunderbird Bar',
    url: '/projects',
    caption: 'Connected Customers',
    slideText: 'Have your social media accounts seemlessly embedded in your site'
  },
  {
    src: ncba,
    altText: 'Nashville Classical Ballet Academy',
    url: '/projects',
    caption: 'Flexible Format',
    slideText: 'We make your content look just the way you want it to'
  },
  {
    src: starday,
    altText: 'Starday Tavern',
    url: '/projects',
    caption: 'Mobile Minded',
    slideText: 'Grailsoft products are designed to look great on all platforms'
  },
  {
    src: zachsshack,
    altText: `Zach's Shack`,
    url: '/projects',
    caption: 'Individual Insight',
    slideText: `We'll help you craft a product that will speak to your customers`
  },
  {
    src: bam,
    altText: 'Brick and Motor Pizza',
    url: '/projects',
    caption: 'Clear Content',
    slideText: 'We cut down on clutter to make your content pop'
  }
]

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a href={item.url}>
            <img src={item.src} alt={item.altText} style={{maxWidth: '70%', maxHeight: '60vh', margin: 'auto'}} />
            <CarouselCaption captionText={item.slideText} captionHeader={item.caption} className='d-block' />
          </a>
        </CarouselItem>
      )
    })

    return (
      <Container className='Work' style={{height: '80vh'}}>
        <Row style={{ paddingTop: '4vh' }}>
          <Col xl='12' >
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              interval='10000'
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
              <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col xl='12'>
            <h3>Powered by and Running on</h3>
          </Col>
          <Col xl='12' >
            <Container>
              <Row className='justify-content-center' >
                <Col>
                  <i className='fab fa-react' />
                </Col>
                <Col>
                  <i className='fab fa-aws' />
                </Col>
                <Col>
                  <i className='fab fa-python' />
                </Col>
                <Col>
                  <i className='fab fa-google' />
                </Col>
                <Col>
                  <i className='fab fa-js' />
                </Col>
                <Col>
                  <i className='fab fa-apple' />
                </Col>
                <Col>
                  <i className='fab fa-windows' />
                </Col>
                <Col>
                  <i className='fab fa-android' />
                </Col>
                <Col>
                  <i className='fab fa-java' />
                </Col>
                <Col>
                  <i className='fab fa-php' />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Work
