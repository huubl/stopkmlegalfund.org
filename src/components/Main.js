import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/banner-march.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="update" className={`${this.props.article === 'update' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">FUNDING DEADLINE UPDATE</h2>
          <p><strong>The next deadline for the StopKM Legal Defense Fund is  March 10, 2019.</strong></p>
          <p>As with earlier rounds, applications can be <a href="/apply">submitted through our online form</a> or sent by email to <a href="info@stopkmlegalfund.org">info@stopkmlegalfund.org</a>.</p>
          <p>The fund has approximately $50,000 in it. Fundraising efforts continue.</p>
          <p>Emergency funds may be available and applications are assessed on a case by case basis. To expedite an application in crisis situations, contact Kris Hermes or the Board at <a href="mailto:stopkmemergencyapplications@gmail.com">stopkmemergencyapplications@gmail.com</a>.</p>
          <p>We voice our deep gratitude and appreciation for all the efforts of the water and land protectors. We could not protect these waters and lands without the generous support of our donors: <strong>THANK YOU!</strong></p>
          {close}
        </article>

        <article id="donate" className={`${this.props.article === 'donate' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <div id='can-fundraising-area-stop-km-legal-defense-fund' className="fundraiser" style={{marginRight:'auto',marginBottom:'20px'}}></div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About the Fund</h2>
          <p>Trans Mountain Corporation, now fully owned by the Government of Canada, wants to triple the capacity of its existing pipeline running from the Alberta Tar Sands to Vancouver’s Burrard Inlet. It is doing so without the consent of the majority of the First Nations whose unceded territories the pipeline crosses. Indigenous land and water protectors and community members and groups concerned about Indigenous rights, the likelihood of oil spills, climate change and the planned 700% increase in oil tanker traffic in Vancouver’s harbour and the Salish Sea have taken action by putting their bodies and freedom on the line to stop construction. These land and water protectors need our support.</p>
          <p>The purpose of the <strong>Stop KM Legal Defence Fund</strong> is to hold, collect and distribute funds raised to support legal defence costs stemming from protest, civil disobedience and direct action activities in opposition to the Trans Mountain pipeline expansion and oil tanker project. These costs include legal fees and fines for criminal and contempt of court charges, civil litigation, and related immigration or child custody/welfare issues as well as travel costs and other associated legal defence expenses.</p>
          <h2 className="major">Board</h2>
          <h3>Harjap Grewal</h3>
          <h3>Irina Ceric</h3>
          <h3>June McCue</h3>
          <h3>Peter McCartney</h3>
          <h3>Rita Wong</h3>
          <h3>Stephen Collis</h3>
          <h3>Cecilia Point</h3>
          <h4>* Professional accountant specializing in non-profit organizations, Mairanne Boz, has agreed to set the Fund's financial systems up to ensure transparency and diligent independent monitoring of all monies associated with the Fund</h4>
          <h4><a href="https://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/files/draft-board-policy-agreement.pdf">DRAFT STOP KINDER MORGAN LEGAL DEFENCE FUND BOARD POLICY AGREEMENT [PDF]</a></h4>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main