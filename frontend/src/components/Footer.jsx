import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return(
      <section className="footer" style={{bottom: "1em !important", position: "fixed", backgroundColor: "#333 !important", height: "5em", width:"100%"}}>
          <div>
            <Row style={{width: "100%"}}>
            <Col sm="4">
              <div>© 2019 AnnMargaret Tutu</div>
            </Col>
            <Col sm="6">
              <div style={{float: "right"}}><a href="#"><span>GitHub</span></a> | <a href="#"><span>Docs</span></a></div>
            </Col>
            </Row>
          </div>
          </section>
    )
  }
}

export default Footer;