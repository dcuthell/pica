import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaButton from '../../components/PicaButton'
import members from '../../img/memberspic.png'
import ben from '../../img/ben-01.png'
import volunteer from '../../img/volunteerpic.png'
import calligram from '../../img/supporters/calligram.png'
import duke from '../../img/supporters/doris_duke.png'
import holst from '../../img/supporters/holst.png'
import hutchins from '../../img/supporters/hutchins_montague.png'
import kinsman from '../../img/supporters/kinsman.png'
import durst from '../../img/supporters/lesliedurst.png'
import meigs from '../../img/supporters/meigs.png'
import mellon from '../../img/supporters/mellon.png'
import meyer from '../../img/supporters/meyer_trust.png'
import miller from '../../img/supporters/miller.png'
import nea from '../../img/supporters/NEA.png'
import nefa from '../../img/supporters/NEFA.png'
import npn from '../../img/supporters/NPN.png'
import oac from '../../img/supporters/OAC.png'
import oct from '../../img/supporters/oregon_cultural_trust.png'
import ocf from '../../img/supporters/OregonCommunityFoundation.png'
import racc from '../../img/supporters/RACC.png'
import stephouse from '../../img/supporters/stephouse.png'
import warhol from '../../img/supporters/warhol.png'
import wieden from '../../img/supporters/wieden.png'
import workforart from '../../img/supporters/WorkForArt.png'

export default function Support (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', backgroundColor: 'white'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12'>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>SUPPORT</h1>
        </Col>
        <Col xl='12'>
          <h2 style={{textAlign: 'left'}}>
            PICA believes everyone should have access to contemporary art. We strive to keep ticket prices low and provide free admission to the majority of our programs. Your investment and involvement allow PICA to present bold, new work by artists representing a broad range of identities and perspectives which might not otherwise be seen in Portland, and to connect audiences to boundary-pushing ideas, experiences, and expressions through direct access to artists.
          </h2>
        </Col>
        <Col xl='4' style={{backgroundColor: '#F8F8F8'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Members</h2>
          <img src={members} alt='ben' style={{maxWidth: '332px', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            As a PICA member, you’ll spend less and do more! Enjoy access to exclusive events and receive generous discounts on TBA passes and tickets, programs, and merchandise.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='http://www.pica.org/support/members'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A MEMBER</p></a>
          </PicaButton>
        </Col>
        <Col xl='4' style={{backgroundColor: '#ECDDBB'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Donate</h2>
          <img src={ben} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            PICA is Portland’s leading presenter of contemporary art. Our artistic events, educational activities, and community engagement initiatives would not be possible without the ongoing support and participation of artists, audiences, and art patrons like you.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='http://www.pica.org/support/donations'><p style={{margin: '4px 0px 4px 0px'}}>DONATE TODAY</p></a>
          </PicaButton>
        </Col>
        <Col xl='4' style={{backgroundColor: '#E4E4E4'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Volunteer</h2>
          <img src={volunteer} alt='ben' style={{maxWidth: '100%', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            Our year-round programs, activities, and special events wouldn’t be possible without volunteers. Help make it all happen by becoming a volunteer! From ushering to fundraising, we’ve got tasks for every interest and skill set.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='http://www.pica.org/support/volunteer/'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A VOLUNTEER</p></a>
          </PicaButton>
        </Col>
        <Col xl='12' style={{padding: '40px 10% 40px 10%'}}>
          <h1>Our Supporters</h1>
          <p>
            PICA warmly thanks our generous sponsors, donors, and members for their commitment to contemporary art. For information on the ways you can become a sponsor, please visit our sponsorship page. To become a PICA member, please visit our membership page to join online today.
          </p>
        </Col>
        <Col xl='12' style={{backgroundColor: '#FFFBF3'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>SUPERHERO $100,000+</h3>
              </Col>
              <Col md='4'>
                <img src={calligram} alt='calligram foundation for the arts' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={durst} alt='Leslie B. Durst' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={holst} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={mellon} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={meyer} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={miller} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={racc} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />>
              </Col>
              <Col md='4'>
                <img src={workforart} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={warhol} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xl='12' style={{backgroundColor: '#e4e4e4'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>PRESENTING $50,000</h3>
              </Col>
              <Col md='4'>
                <img src={duke} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={nea} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={meigs} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xl='12' style={{backgroundColor: '#f4ecd9'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>MAJOR $25,000+</h3>
              </Col>
              <Col md='4'>
                <img src={hutchins} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={kinsman} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />>
              </Col>
              <Col md='4'>
                <img src={npn} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={nefa} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={oac} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={oct} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={ocf} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={stephouse} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
              <Col md='4'>
                <img src={wieden} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xl='12' style={{backgroundColor: 'white'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>UNDERWRITER $10,000</h3>
              </Col>
              <Col md='4'>
                <p>Patrick and Mariko Clark</p>
              </Col>
              <Col md='4'>
                <p>Kristy Edmunds and Ros Warby</p>
              </Col>
              <Col md='4'>
                <p>Jeff Stuhr and Peter Kallen</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Dorie and Larry Vollum</p>
              </Col>
              <Col md='4'>
                <p>Dan Winter and John Forsgren</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
        <Col xl='12' style={{backgroundColor: 'white'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>CHAMPION $5,000</h3>
              </Col>
              <Col md='4'>
                <p>Steve Galloway</p>
              </Col>
              <Col md='4'>
                <p>Michelle Rowley and Jason Grlicky</p>
              </Col>
              <Col md='4'>
                <p>Vallejo Gantner</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Salesforce</p>
              </Col>
              <Col md='4'>
                <p>Katherine and James Gentry</p>
              </Col>
              <Col md='4'>
                <p>Jane Schiffhauer</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Diana Gerding</p>
              </Col>
              <Col md='4'>
                <p>Ethan Seltzer and Melanie Seltzer Plaut</p>
              </Col>
              <Col md='4'>
                <p>Twink Hinds and Graeme Harrison</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Howard Shapiro</p>
              </Col>
              <Col md='4'>
                <p>Susan Hoffman and Fred Trullinger</p>
              </Col>
              <Col md='4'>
                <p>Jill Sherman and Marc Monaghan</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Beth Hutchins and Pete Skeggs</p>
              </Col>
              <Col md='4'>
                <p>John Shipley</p>
              </Col>
              <Col md='4'>
                <p>Maybelle Clark Macdonald Fund</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Al Solheim</p>
              </Col>
              <Col md='4'>
                <p>McGraw Family Foundation</p>
              </Col>
              <Col md='4'>
                <p>Charlie and Darci Swindells</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Ryan Noon</p>
              </Col>
              <Col md='4'>
                <p>Dorie and Larry Vollum</p>
              </Col>
              <Col md='4'>
                <p>Parrilli Renison LLC</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>White Label UK</p>
              </Col>
              <Col md='4'>
                <p>Eric Philps and Laura Van Houten</p>
              </Col>
              <Col md='4'>
                <p />
              </Col>
            </Row>
          </Container>
        </Col>
        <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
        <Col xl='12' style={{backgroundColor: 'white'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>PATRON $2,500</h3>
              </Col>
              <Col md='4'>
                <p>Jana Bauman and John Baker</p>
              </Col>
              <Col md='4'>
                <p>Stephanie Kjar and Adam Roth</p>
              </Col>
              <Col md='4'>
                <p>Beam Development</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Elizabeth Leach</p>
              </Col>
              <Col md='4'>
                <p>Bill Boese</p>
              </Col>
              <Col md='4'>
                <p>Dorothy Lemelson</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Bora Architects</p>
              </Col>
              <Col md='4'>
                <p>Jonathan Malsin</p>
              </Col>
              <Col md='4'>
                <p>Kristin Bremer and Steve Moore</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Alex and Lynn Miller</p>
              </Col>
              <Col md='4'>
                <p>Sean Bruich and Laurence Moore</p>
              </Col>
              <Col md='4'>
                <p>The Anne K. Millis Fund of the Oregon Community Foundation</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Laura and Kavin Buck</p>
              </Col>
              <Col md='4'>
                <p>Lucinda Carmichael</p>
              </Col>
              <Col md='4'>
                <p>Casey Mills and Carmen Calzacorta</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Philip Cole</p>
              </Col>
              <Col md='4'>
                <p>Rob and Carol Murdock</p>
              </Col>
              <Col md='4'>
                <p>Lisa Elorriaga Czysz</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Perkins and Co</p>
              </Col>
              <Col md='4'>
                <p>Double Barrel Consulting, LLC</p>
              </Col>
              <Col md='4'>
                <p>Pink Martini/Heinz Records</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Ann and Mark Edlen</p>
              </Col>
              <Col md='4'>
                <p>Dennis and Debra Scholl</p>
              </Col>
              <Col md='4'>
                <p>Enterprise Holdings Foundation</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Jody Stanhancyk</p>
              </Col>
              <Col md='4'>
                <p>Christy Eugenis and Stan Amy</p>
              </Col>
              <Col md='4'>
                <p>Kathleen Stephenson-Kuhn and Leigh Stephenson</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Victoria Frey and Peter Leitner</p>
              </Col>
              <Col md='4'>
                <p>Susan Sterne and Pete Kellers</p>
              </Col>
              <Col md='4'>
                <p>MK Guth and Greg Landry</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Stoel Rives LLP</p>
              </Col>
              <Col md='4'>
                <p>HERENOW Creative Network</p>
              </Col>
              <Col md='4'>
                <p>Michael Tingley & Ellen Fortin</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Julianne and Tim Hershey</p>
              </Col>
              <Col md='4'>
                <p>Tonkon Torp LLP</p>
              </Col>
              <Col md='4'>
                <p>Deborah Horrell and Kit Gillem</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Trust for Mutual Understanding</p>
              </Col>
              <Col md='4'>
                <p>Kirk and Jessica Kelley</p>
              </Col>
              <Col md='4'>
                <p />
              </Col>
            </Row>
          </Container>
        </Col>
        <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
        <Col xl='12' style={{backgroundColor: 'white'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>SUPPORTER $1,000</h3>
              </Col>
              <Col md='4'>
                <p>Geof Beasley</p>
              </Col>
              <Col md='4'>
                <p>M.J. Murdock Charitable Trust</p>
              </Col>
              <Col md='4'>
                <p>Annie Bellman and Michael Woods</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Trude Parkinson and Peter Ozanne</p>
              </Col>
              <Col md='4'>
                <p>Dennis Brown and Dave Meeker</p>
              </Col>
              <Col md='4'>
                <p>Kelly Saito</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Marianne Buchwalter</p>
              </Col>
              <Col md='4'>
                <p>Angela and Rex Snow</p>
              </Col>
              <Col md='4'>
                <p>Hugh d’Autremont</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Stephanie and Jonathan Snyder</p>
              </Col>
              <Col md='4'>
                <p>Pat and Kelley Harrington</p>
              </Col>
              <Col md='4'>
                <p>Betsy Stark Miller</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Robert and Terri Hopkins</p>
              </Col>
              <Col md='4'>
                <p>UnionBank</p>
              </Col>
              <Col md='4'>
                <p>David and Eileen Johnson</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Holcombe Waller</p>
              </Col>
              <Col md='4'>
                <p />
              </Col>
              <Col md='4'>
                <p />
              </Col>
            </Row>
          </Container>
        </Col>
        <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
        <Col xl='12' style={{backgroundColor: 'white'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>ADVOCATE $500</h3>
              </Col>
              <Col md='4'>
                <p>Cynthia and Steven Addams</p>
              </Col>
              <Col md='4'>
                <p>Molly and Dan Horton</p>
              </Col>
              <Col md='4'>
                <p>John Andrews</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Anne Marie Johnson</p>
              </Col>
              <Col md='4'>
                <p>Ben Archibald</p>
              </Col>
              <Col md='4'>
                <p>Caroline and Aaron Kahn</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Golnaz Armin and Cayle Christiansen</p>
              </Col>
              <Col md='4'>
                <p>Cerinda Survant and David Kaplin</p>
              </Col>
              <Col md='4'>
                <p>Michael Baker</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Madeline and Steve Kokes</p>
              </Col>
              <Col md='4'>
                <p>Lisa Berkson Platt and David Platt</p>
              </Col>
              <Col md='4'>
                <p>Sally and John Lawrence</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Claudia and Harry Bray</p>
              </Col>
              <Col md='4'>
                <p>Ross Lienhart</p>
              </Col>
              <Col md='4'>
                <p>Chris Brown</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Pamela Lloyd and Renny Gleeson</p>
              </Col>
              <Col md='4'>
                <p>Jinnina Chiles</p>
              </Col>
              <Col md='4'>
                <p>Mona McNeill and Randy Kleinhesselink</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Courtney Dailey</p>
              </Col>
              <Col md='4'>
                <p>Ashish Mistry</p>
              </Col>
              <Col md='4'>
                <p>Kim Dement</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Christie Moore</p>
              </Col>
              <Col md='4'>
                <p>Jennifer Dzienis and Kevin Valk</p>
              </Col>
              <Col md='4'>
                <p>Lynne Naughton</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Mary Elliott and Mark Friedman</p>
              </Col>
              <Col md='4'>
                <p>Carole Oberholtzer and Lynda Norton</p>
              </Col>
              <Col md='4'>
                <p>Marilyn and Edward Epstein</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>PDX Contemporary Art</p>
              </Col>
              <Col md='4'>
                <p>Dick Frey</p>
              </Col>
              <Col md='4'>
                <p>Stacey Richter</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Anna Friedoff</p>
              </Col>
              <Col md='4'>
                <p>Daniel and Diane Sagalowicz</p>
              </Col>
              <Col md='4'>
                <p>Gary Golla and Jeanie Lai</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Tina Skouras</p>
              </Col>
              <Col md='4'>
                <p>Pam Greene and Hans Kretschmer</p>
              </Col>
              <Col md='4'>
                <p>Storm Tharp and Mike Blasberg</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Gary Hartnett and Eloise Damrosch</p>
              </Col>
              <Col md='4'>
                <p>Lynn Tobias and Chester Edwards</p>
              </Col>
              <Col md='4'>
                <p>David Hidalgo and John Bischof</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Sharon Urry and Scott Soutter</p>
              </Col>
              <Col md='4'>
                <p>Robert Holub</p>
              </Col>
              <Col md='4'>
                <p>Kricken and James Yaker</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
        <Col xl='12' style={{backgroundColor: 'white'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>ENTHUSIAST $250</h3>
              </Col>
              <Col md='4'>
                <p>Luisa Adrianzen Guyer and Leigh Guyer</p>
              </Col>
              <Col md='4'>
                <p>Kathleen Lewis</p>
              </Col>
              <Col md='4'>
                <p>Roya Amirsoleymani and Nicholas Raethke</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>John Light and Patricia Barnes-Light</p>
              </Col>
              <Col md='4'>
                <p>Terry Bean</p>
              </Col>
              <Col md='4'>
                <p>Ed McNamara and Andrea Vargo</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Byron Beck and Juan Martinez</p>
              </Col>
              <Col md='4'>
                <p>Brian Miltimore</p>
              </Col>
              <Col md='4'>
                <p>Jane and Spencer Beebe</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Jeffrey Morgan</p>
              </Col>
              <Col md='4'>
                <p>Christine Bourdette and Ricardo Lovett</p>
              </Col>
              <Col md='4'>
                <p>Barry Pelzner and Deborah Pollack</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Philip and Melinda Conti</p>
              </Col>
              <Col md='4'>
                <p>Mary Rechner and Barry Sims</p>
              </Col>
              <Col md='4'>
                <p>Nan Curtis and Marty Houston</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Red + Co</p>
              </Col>
              <Col md='4'>
                <p>Andrew Dickson and Susan Beal</p>
              </Col>
              <Col md='4'>
                <p>Evan and Jennifer Reynolds</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Cathy Edwards and Mike Wishnie</p>
              </Col>
              <Col md='4'>
                <p>Aaron Scott and Coon Lam</p>
              </Col>
              <Col md='4'>
                <p>Kyle and Charles Fuchs</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Manya Shapiro</p>
              </Col>
              <Col md='4'>
                <p>Teri and Christopher Gelber</p>
              </Col>
              <Col md='4'>
                <p>Lori and Dick Singer</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Lorraine Guthrie and Erik Kiaer</p>
              </Col>
              <Col md='4'>
                <p>Jill Souede</p>
              </Col>
              <Col md='4'>
                <p>Mara Indra and Jon Heppner</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Deniz Tasdemir-Conger and Austin Conger</p>
              </Col>
              <Col md='4'>
                <p>Vanessa Johansson</p>
              </Col>
              <Col md='4'>
                <p>Kim Thomas and John Morrison</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Mary Josephson and Gregory Grenon</p>
              </Col>
              <Col md='4'>
                <p>George and Nancy Thorn</p>
              </Col>
              <Col md='4'>
                <p>Steven Klein</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
        <Col xl='12' style={{backgroundColor: 'white'}}>
          <Container style={{height: 'auto'}}>
            <Row>
              <Col md='12'>
                <h3>CONTRIBUTOR $100</h3>
              </Col>
              <Col md='4'>
                <p>Carl and Margery Abbott</p>
              </Col>
              <Col md='4'>
                <p>Jimin Kim</p>
              </Col>
              <Col md='4'>
                <p>Raschel Barton</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Cynthia Kirk</p>
              </Col>
              <Col md='4'>
                <p>John Bissonnette and Virginia Smith</p>
              </Col>
              <Col md='4'>
                <p>Peter and Karen Leonard</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Bettina and Fred Blank</p>
              </Col>
              <Col md='4'>
                <p>Patrick Leonard and Amanda Peden</p>
              </Col>
              <Col md='4'>
                <p>Richard Brandman and Barbara Weisbord</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Alice and Hal McCartor</p>
              </Col>
              <Col md='4'>
                <p>Robby Bricker and Don Voyles</p>
              </Col>
              <Col md='4'>
                <p>Mesch Capital Management, Inc.</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>John Brodie</p>
              </Col>
              <Col md='4'>
                <p>Monograph Bookwerks</p>
              </Col>
              <Col md='4'>
                <p>Patricia Bugas-Schramm</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Martin Müller</p>
              </Col>
              <Col md='4'>
                <p>David Cadiz and Shauna Hicks</p>
              </Col>
              <Col md='4'>
                <p>Christine and John Oace</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Kim Carlson and Larry Shatuck</p>
              </Col>
              <Col md='4'>
                <p>Daniel Peabody</p>
              </Col>
              <Col md='4'>
                <p>Santha Cassell and Michael Callahan</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Ruthie and David Petty</p>
              </Col>
              <Col md='4'>
                <p>Laura Cheek</p>
              </Col>
              <Col md='4'>
                <p>Jessica Powers</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Judy Cooke</p>
              </Col>
              <Col md='4'>
                <p>Lauren Ranke</p>
              </Col>
              <Col md='4'>
                <p>Giacomo DiGrigoli</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Steve and Wendy Rudman</p>
              </Col>
              <Col md='4'>
                <p>Jennifer and Jon Dunn</p>
              </Col>
              <Col md='4'>
                <p>Jessica Scarborough</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Elizabeth Eckstrom and Rich Campbell</p>
              </Col>
              <Col md='4'>
                <p>Jerry and Diana Sellers</p>
              </Col>
              <Col md='4'>
                <p>Tony and Helen Farrenkopf</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Melissa Spain</p>
              </Col>
              <Col md='4'>
                <p>Michael and Elizabeth Freiling</p>
              </Col>
              <Col md='4'>
                <p>Karen and John Spencer</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Commissioner Nick Fish</p>
              </Col>
              <Col md='4'>
                <p>Lydia Stacy</p>
              </Col>
              <Col md='4'>
                <p>Bob Gandolfi</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p />
              </Col>
              <Col md='4'>
                <p />
              </Col>
              <Col md='4'>
                <p />
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Lisa Thomas</p>
              </Col>
              <Col md='4'>
                <p>Aaron Golub</p>
              </Col>
              <Col md='4'>
                <p>Barry Tonkin</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Melinda and John Hall</p>
              </Col>
              <Col md='4'>
                <p>Robin Van Doren and Fran Rothman</p>
              </Col>
              <Col md='4'>
                <p>Amy Harwood and Ryan Pierce</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Lynn and Margaret Wilson</p>
              </Col>
              <Col md='4'>
                <p>Tom and Edwardeen Hilts</p>
              </Col>
              <Col md='4'>
                <p>Sarah Wolf-Newlands and Donald Newlands</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Marjorie and Jon Hirsch</p>
              </Col>
              <Col md='4'>
                <p>Lynn Youngbar</p>
              </Col>
              <Col md='4'>
                <p>Tahni Holt and Toby Query</p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <p>Joseph Zehnder and Irma Murauskas</p>
              </Col>
              <Col md='4'>
                <p>Georgia Lee Hussey</p>
              </Col>
              <Col md='4'>
                <p />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xl='12' style={{height: '100%'}}>
          <div style={{height: '100%', backgroundColor: 'white'}}>
            <h1>Support</h1>
            <p>PICA believes everyone should have access to contemporary art. We strive to keep ticket prices low and provide free admission to the majority of our programs. Your investment and involvement allow PICA to present bold, new work by artists representing a broad range of identities and perspectives which might not otherwise be seen in Portland, and to connect audiences to boundary-pushing ideas, experiences, and expressions through direct access to artists.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
