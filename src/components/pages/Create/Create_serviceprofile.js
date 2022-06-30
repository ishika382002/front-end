import { Button } from "@aws-amplify/ui-react";
// import Sidebar from "../Guidepages/Sidebar";
import imagelogo1 from "./download.png";
import "../Guide";
import { Card } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
// import { Button } from "@aws-amplify/ui-react";
export default function Createserviceprofile() {
  return (
    <>
      <div className="Cardcreate">
        {/* <Sidebar /> */}
        <Container>
          <Row>
            <Col>
              <div className="Cardcreate">
                <Card style={{ width: "10rem" }}>
                  <Card.Header>
                    <Card.Img
                      src={"imagelogo1"}
                      height={70}
                      width={75}
                      align={"middle"}
                    />
                    Header
                  </Card.Header>
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      Some quick example text to build on the card title
                      <br /> and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Create</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="Cardcreate">
                <Card style={{ width: "100rem" }}>
                  <Card.Header>
                    <Card.Img
                      src={"imagelogo1"}
                      height={70}
                      width={75}
                      align={"middle"}
                    />
                    Header
                  </Card.Header>
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      Some quick example text to build on the card title
                      <br /> and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Create</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs lg="2">
              <div className="Cardcreate">
                <Card style={{ width: "10rem" }}>
                  <Card.Header>
                    <Card.Img
                      src={"imagelogo1"}
                      height={70}
                      width={75}
                      align={"middle"}
                    />
                    Header
                  </Card.Header>
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                      Some quick example text to build on the card title
                      <br /> and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Create</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
