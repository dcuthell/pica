import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import TBAArtistBlockFrame from '../../components/TBAArtistBlockFrame'
import PicaButton from '../../components/PicaButton'

import katja from '../../img/katja.jpg'
import TBALogo from '../../img/tba18_t-rhythm.svg'

export default function TBA (props) {
  return (

<Container className='TBA_new'>
  	<header style={{backgroundImage: 'url(' + katja + ')'}}>
  		<Row>
  			<Col md='12' style={{alignSelf: 'flex-start'}}>
	          <ul className='sprockets'>
			  	<li><span>2019</span></li>
	            <li><span>2019 <br />Time Based Art Festival</span></li>
	            <li><span>2019</span></li>
	            <li><span>2019 September 05&ndash;&#x2060;15</span></li>
	            <li><span>2019</span></li>
	            <li><span>2019</span></li>
	            <li class="collapsible-xs"><span>2019</span></li>
	            <li class="collapsible-md"><span>2019</span></li>
	          </ul>
			</Col>
			<Col md='12' style={{alignSelf: 'flex-end'}}>
				<h1 style={{ backgroundImage: 'url(' + TBALogo + ')'}}>TBA Festival</h1>
			</Col>
		</Row>
	</header>
	<section id='overview'>
		<Row>
			<Col lg={{size: '2', offset: '1'}} md={{size: '5', offset: '1'}} xs={{size: '5', offset: '1'}}>
				<h3>2019 <br />September <br />05&ndash;15</h3>
			</Col>
			<Col lg={{size: '2', offset: '1'}} md={{size: '5'}} xs={{size: '5'}}>
				<h3>Portland <br />Oregon <br />USA</h3>
			</Col>
		</Row>
		<Row>
			<Col xs='12'>
				<hr />
			</Col>
			<Col lg={{size: '7', offset: '4'}} sm={{size: '9', offset: '2'}} xs={{size: '10', offset: '1'}}>
				<p>PICA’s 17th Annual Time-Based Art Festival (TBA) gathers artists and audiences from around the world for ten days of contemporary performance, music, visual art, film, workshops, lectures, food, drink, conversation, and celebration. Immerse yourself in the art and ideas of our time.</p>
			</Col>
			<Col xs={{size: '10', offset: '1'}}>
				<ul className="taskList">
					<li><a href='#bxo'>Buy Tickets &amp; Passes &rarr;</a></li>
					<li><a href="https://drive.google.com/file/d/18TZ-KhumkqYhZ_yJQQFVZKKVDx4C7sbB/view" target="_new">Explore Catalog &rarr;</a></li>
				</ul>
			</Col>
		</Row>
	</section>
	<section id='programs'>
		<Row>
			<TBAArtistBlockFrame />
		</Row>
	</section>
	
	<section id='bxo'>
		<Row>
			<Col lg={{size: '3', offset: '1'}} md={{size: '5', offset: '1'}} xs={{size: '10', offset: '1'}}>
				<h3>For Tickets, Passes, and Information:</h3>
			</Col>
			<Col lg={{size: '4', offset: '0'}} md={{size: '5'}} xs={{size: '10', offset: '1'}}>
				<h3>Call <a href="tel:15032247422">503-&#x2060;224-&#x2060;PICA</a> or visit <a href="https://goo.gl/maps/QXDNmSfJRjNViPBA7" target="_new">15&nbsp;NE&nbsp;Hancock</a></h3>
			</Col>
		</Row>
	
		<Row>
			<Col xs='12'>
				<hr />
			</Col>
			<Col lg={{size: '3', offset: '4'}} md={{size: '5', offset: '1'}} xs={{size: '7', offset: '4'}}>
				<h4>Before the Festival</h4>
				<p>Thursdays and Fridays<br />
				12:00–6:00 PM<br />
				(starting August 15)</p>
				
				<p>Saturdays<br />
				12:00–4:00 PM</p>
				
				<p>Closed on Labor Day, Sept. 2<br />
				Open Sept. 3–4<br />
				12:00–6:00 PM</p>
			</Col>
			
			<Col lg={{size: '3'}} md={{size: '5', offset: '0'}} xs={{size: '7', offset: '4'}}>
				
				<h4>Box Office Open</h4>
				<p>Aug. 15–Sept. 15</p>
				
				<p><a href="https://goo.gl/maps/QXDNmSfJRjNViPBA7" target="_new">15 NE Hancock Street</a><br />
				Portland <br />
				<a href="tel:15032247422">503-&#x2060;224-&#x2060;PICA</a></p>
				
				<h4>During the Festival</h4>
				<p>Every day<br />
				12:00–late</p>
			</Col>
		
		</Row>
	</section>

	
	<section id='passInfo'>
		<Row>
            <Col xs={{size: '10', offset: '1'}}>
				<ul className="taskList">
					<li><a href='https://www.pica.org/tickets/tba19'>Buy a Festival Pass &rarr;</a></li>
					<li><a href="https://www.pica.org/eventlist" target="_new">Buy Tickets &rarr;</a></li>
					<li><a href="#faq">FAQ &rarr;</a></li>
				</ul>
			</Col>
			<Col lg={{size: '7', offset: '4'}} xs={{size:'10', offset:'1'}}>
				<h2>Late Night Pass</h2>
                <p><span>$48 Member/$60 General&nbsp;</span> All-access to Late Night shows.</p>

                <h2>Enthusiast Pass</h2>
                <p><span>$120 Member/$150 General&nbsp;</span> Tickets to six (6) mainstage performances of your choice plus all-access to exhibitions, Institute programs, and Late Night.*</p>

                <h2>Immersion Pass</h2>
                <p><span>$200 Member/$250 General&nbsp;</span> Priority admission to performances and unlimited access to exhibitions, Institute, and Late Night.</p>

                <h2>Patron Pass</h2>
                <p><span>$500 ($250 tax deductible)&nbsp;</span> Priority admission to all performances, festival concierge service, and unlimited access to exhibitions, Institute programs, and Late Night.</p>
                
                <PicaButton>
                  <a style={{display: 'inline-flex'}} href='https://www.pica.org/tickets/tba19'>Buy a Festival Pass &rarr;</a>
                </PicaButton>
                
                <p><small><br />* Reservations are strongly recommended to guarantee seating for all performances, including those that are free. Please see the FAQ below for more information or contact the TBA Box Office at 503-&#x2060;244-&#x2060;PICA (7422).</small></p>
            </Col>
        </Row>
	</section>
	
	<section id="faq">
		<Row>
			<Col xs={{size: '10', offset: '1'}}>
				<h3>FAQ</h3>
			</Col>
		</Row>
	
		<Row>
			<Col xs='12'>
				<hr />
			</Col>
		</Row>
	    <Row>
		    <Col lg={{size: '4', offset: '1'}} xs={{size: '10', offset: '1'}}>
	          <h4>WHERE IS THE BOX OFFICE?</h4>
	          <p>The TBA Box Office is located at PICA in Northeast Portland at 15 NE Hancock. </p>

	          <h4>IS THERE A SERVICE CHARGE ON TICKETS AND PASSES?</h4>
	          <p>A $3 transaction fee applies to all orders whether processed online by phone, or in-person. All payment methods, credit card, cash, and checks are subject to this fee</p>

	          <h4>CAN I SHARE MY PASS?</h4>
	          <p>No. Passes are non-transferable. Your name will be marked on your pass and you will be required to show ID with your pass at each venue.</p>

	          <h4>WHAT IF I FORGET MY PASS?</h4>
	          <p>You must purchase a ticket at the door.</p>

	          <h4>WHAT IF I LOSE MY PASS?</h4>
	          <p>Contact the Box Office immediately and we will help reissue a new pass.</p>

	          <h4>WHAT IF I ARRIVE LATE FOR A SHOW?</h4>
	          <p>As a general rule, there is no late seating. All shows begin promptly as listed. You must check in no later than 15 minutes before curtain to ensure seating, even with a pass reservation or pre-purchased individual ticket. At 15 minutes prior to curtain, any unclaimed seats will be opened up for individual ticket sales at the door. </p>

	          <h4>IF I BUY A TICKET, DOES MY CHILD GET IN FOR FREE?</h4>
	          <p>Yes, your child may attend for free if they can sit on your lap. Otherwise, you will need to purchase an additional ticket. Please note, while we welcome children and babies, we may have to ask you to wait in the lobby if there is any disturbance to the live performance.</p>
	        </Col>
	        
	        <Col lg={{size: '4'}} xs={{size: '10', offset: '1'}}>
	          <h4>WHICH SHOWS ARE APPROPRIATE FOR CHILDREN? CAN I BRING MY FAMILY?</h4>
	          <p>PICA supports freedom of speech for artists and the audiences’ right to choose what to see and hear. Due to the nature of live performance, we cannot prescreen all works for content. However, if you have specific concerns or questions, our Box Office staff can offer suggestions on shows. Young people are welcome at all shows that are not 21+ at their parents’ discretion.</p>

	          <h4>CAN YOU REFUND OR EXCHANGE MY TICKET?</h4>
	          <p>All ticket and pass sales are final. There are no refunds or exchanges.</p>

	          <h4>DO I HAVE TO MAKE A RESERVATION IF I HAVE A PASS?</h4>
	          <p>Yes, reservations are required for most performances at every pass level. You will make your reservations when purchasing your pass. Some performances are housed in limited-capacity venues. To ensure the best experience possible, reservations help us better anticipate audiences for each performance. For more information, visit pica.org or contact the Box Office.</p>

	          <h4>ARE EVENTS ADA ACCESSIBLE?</h4>
	          <p>All TBA:19 festival sites are accessible to people with mobility aids. If you have questions about the accessibility of a specific venue/location, including questions about parking, please contact the Box Office for information at  503-&#x2060;224-&#x2060;PICA (7422).</p>
	          </Col>
	    </Row>
	</section>
	
	
	
	
	
	
	
	
	
<style dangerouslySetInnerHTML={{__html:`
/**************
TBA PAGE STYLES
**************/
	
	body {overflow-x: hidden;}
	
	.TBA_new h2 { 
		font-size: 3.5rem;
		margin-top: 3.5rem;
		text-transform:uppercase;
	}
	.TBA_new p {
		font-size: 1.75rem;
		line-height: 2rem;
	}
	.TBA_new p span {
		opacity: 0.5;
	}
	.TBA_new h4 {
    font-size: 1.75rem;
    color: rgba(0,0,0,0.5); 
    line-height: 1.95rem; 
    margin: 1.95rem 0 0;
	}
	.TBA_new .PicaButton { 
    width: auto; 
    display: inline-block; 
    padding: 0.45rem 1rem 0.25rem; 
    font-size: 1.75rem; 
    text-transform: uppercase; 
    margin-top: 1rem; 
  }

			  
/******* HEADER *******/
			  
	.TBA_new.container { 
    padding: 0; 
    margin: 0; 
    width: calc(100vw - 240px); 
    max-width: initial; 
    overflow-x: hidden; 
    text-align: left; 
    color: #000;
  }
	
	.TBA_new header { 
    width: 100%; 
    height: 100vh; 
    background-size: cover; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    background-position: bottom left; 
  }
	.TBA_new header .row {
    height: 100%; 
    margin: 0; 
    padding: 2vh 1.5vw; 
    display: flex; 
    justify-content: space-between; 
  }
	
	.TBA_new ul.sprockets { 
    display: flex; 
    justify-content: space-between; 
    text-align: left; 
    list-style: none; 
    padding:0; 
    margin:0; 
    align-self: flex-start; 
  }
	.TBA_new ul.sprockets li span { 
    max-width: 2vw; 
    display:block; 
    text-transform: uppercase; 
    line-height:0.9; 
    font-size: 1.75rem; 
    color: white; 
    margin-left: -1vw; 
  }
	
	.TBA_new header h1 { 
    height: 50vh; 
    background-size: contain; 
    background-position: bottom center; 
    background-repeat: no-repeat; 
    text-indent: -5000px; 
    color: transparent; 
    background-color: transparent; 
  }


			 
/******* OVERVIEW *******/

	.TBA_new section#overview {
    padding: 10vh 0;
  }
	.TBA_new section#overview h2 {
    font-size: 5rem; 
    line-height: 5rem; 
    text-transform: uppercase; 
    letter-spacing: -0.1rem;
  }
  .TBA_new section#overview h3, 
  .TBA_new section#bxo h3, 
  .TBA_new section#faq h3 {
    font-size: 2.5rem; 
    line-height: 2.5rem; 
    text-transform: uppercase; 
    letter-spacing: -0.1rem; 
    padding: 1.375rem 0 0;
  }
	.TBA_new section#overview p {
    font-size: 3.5rem; 
    line-height:3.5rem;
  }
	
  .TBA_new section#overview hr, 
  .TBA_new section#bxo hr, 
  .TBA_new section#faq hr {
    border-top: 1px solid black; 
    margin: 3vh 0 4vh; 
    visibility: hidden;
  }
	
	.TBA_new ul.taskList {
    padding:0; 
    list-style:none; 
    font-size: 2.5rem; 
    line-height: 3rem; 
    margin-top: 4rem;
  }
	.TBA_new ul.taskList li {
    padding-top:1.5rem;
  }
		.TBA_new ul.taskList li:first-child a {
      background-color: #fff100; 
      padding: 0.5rem 0.5rem 0.35rem; 
      margin-left: -0.5rem;
    }
		.TBA_new ul.taskList li a {
      color:#000;
    }
			  
			  
			  
/******* PROGRAMS *******/

	.TBA_new section#programs { 
    background-color: #000; 
    color: #fff; 
    padding: 10vh 0; 
    min-height: 100vh;
  }
	
	.TBAArtistBlock_wrap > div > .d-flex.align-items-center::before { 
    content: ""; 
    display: block; 
    padding-top: 100%; 
  }
	.TBAArtistBlock_wrap:hover > div > .d-flex.align-items-center {
    -webkit-filter: url(#duotone_yellow); 
    -moz-filter: url(#duotone_yellow); 
    filter: url(#duotone_yellow); 
    cursor: pointer;
  }
	.TBAArtistBlock_wrap:hover > div > dl { 
    color: #fff100; 
    cursor: pointer; 
  }			  
				
			
/******* ARTIST BLOCK *******/
	.TBAArtistBlock {
    overflow: hidden;
  }
  .TBAArtistBlock .artistOverlay:hover, 
  .TBAArtistBlock .artistOverlay:hover dl {
    color: white;
  }
	
	.d-flex.align-items-center {
    text-align: center; 
    width: 95%; 
    border: 2px solid white; 
    margin: auto; 
    background-position: center center; 
    background-size: cover;
  }
	.TBAArtistBlock > dl {
    width: 95%; 
    margin: 0.25em auto; 
    position: relative; 
    font-size: 1.75rem; 
    line-height: 1.85rem;
  }
	.TBAArtistBlock > dl dt {
    font-weight:normal; 
    text-transform:uppercase;
  }
	.TBAArtistBlock > dl dd {
    text-transform:initial;
  }				
				
/******* BXO *******/
			        
    .TBA_new section#bxo {
      padding: 5vh 0 0; 
      background-color: #000; 
      color: #fff; 
      border-top: 2px solid white;
    }
    .TBA_new section#bxo a {
      color: #fff;
    }
    .TBA_new section#bxo h4 {
      color: rgba(255,255,255,0.5);
    }
    
    .TBA_new section#bxo hr, 
    .TBA_new section#faq hr {
      margin-bottom:0;
    }
				
				
/******* PASSES ********/
	.TBA_new section#passInfo {
    background: #000; 
    color: #fff; 
    padding: 3vh 0 10vh;
  }
	
	.TBA_new section#passInfo ul.taskList li a {
    color:#fff;
  }
  .TBA_new section#passInfo ul.taskList li:first-child a, 
  .TBA_new section#passInfo .PicaButton:hover {
    color:#000;
  }
	
	.TBA_new section#passInfo .PicaButton {
    border: 1px solid #fff100; 
    color: #fff100;
  }
					
			  
/******** FAQ *********/
	.TBA_new section#faq {
    padding: 10vh 0;
  }
					

/******** BREAKPOINT-A-PALOOZA *********/
@media screen and (min-width: 992px) and (max-width: 1199px) {
/* breakpoint-lg */
	html { font-size: 80%; }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
/* breakpoint-md */
	html { font-size: 70%; }
	.collapsible-md {display:none !important;}
}
@media screen and (min-width: 576px) and (max-width: 767px) {
/* breakpoint-sm */
	html { font-size: 60%; }
  .collapsible-md {display:none !important;}
  .TBA_new section#programs .row {margin-left: 0; margin-right: 0;}
}
@media screen and (max-width: 575px) {
/* breakpoint-xs */
	html { font-size: 60%; }
	.collapsible-xs, .collapsible-md {display:none !important;}
	.TBA_new.container {width: 100vw;}
	
	.TBA_new header {background-size: cover !important; height: 80vh;}
	.TBA_new ul.sprockets {margin-right: 5vw;}
	
	.TBA_new section#overview, .TBA_new section#programs, .TBA_new section#bxo {padding: 5vh 0;}
	
	.TBA_new section#programs .row {margin-left: 0; margin-right: 0;}
}

`}} />
		  
<span dangerouslySetInnerHTML={{__html:`
	<svg xmlns="http://www.w3.org/2000/svg">
		<defs>
			<filter id="duotone_yellow">
				<feColorMatrix type="matrix" result="grayscale" values="1 0 0 0 0
						                    1 0 0 0 0
						                    1 0 0 0 0
						                    0 0 0 1 0">
				</feColorMatrix>
				<feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
				<feFuncR type="table" tableValues="0 1"></feFuncR>
				<feFuncG type="table" tableValues="0 0.946"></feFuncG>
				<feFuncB type="table" tableValues="0 0"></feFuncB>
				<feFuncA type="table" tableValues="1 1"></feFuncA>
				</feComponentTransfer>
			</filter>
		</defs>
	</svg>
`}} />

    </Container>
    

    
  )
}
