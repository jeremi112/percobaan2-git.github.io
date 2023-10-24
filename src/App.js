import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BasicExample from "./component/Card";
import './App.css';
import gambar from './assets/gambar.jpeg'
import Navbar from "./component/Header";
import UnderlineExample from "./component/tabs";
import Math from "./assets/math.jpeg"

function App() {
  return (
    <div style={{backgroundImage: `url(${gambar})` }}>
      <Navbar/>
    <Container className="mt-5">

      <Row className>
        <h1 className="mt-5 mb-3">portfolio</h1>
        <UnderlineExample/>
      </Row>
      
      <Row className="my-5">
        <Col>
          <BasicExample gambar={Math}/>
        </Col>
        <Col>
          <BasicExample gambar={Math}/>
        </Col>
        <Col>
          <BasicExample gambar={Math}/>
        </Col>
        <Col>
          <BasicExample gambar={Math}/>
        </Col>
      </Row>

      <Row>
      <Col lg={3}>
          <BasicExample gambar={Math}/>
        </Col>
        <Col lg={3}>
          <BasicExample gambar={Math}/>
        </Col>
        <Col lg={3}>
          <BasicExample gambar={Math}/>
        </Col>
        <Col lg={3}>
          <BasicExample gambar={Math}/>
        </Col>
      </Row> 
      
    </Container>
  </div>
  );
}

export default App;
