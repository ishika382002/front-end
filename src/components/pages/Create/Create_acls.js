import { Button } from "@aws-amplify/ui-react";
// import Sidebar from "../Guidepages/Sidebar";
import "../Guide";
import { Card } from "react-bootstrap";
// import {imagelogo1} from '...///BTlogo.jpg';
import "./Cardcreate.css";

// import { Button } from "@aws-amplify/ui-react";
export default function Createacls() {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="row m-5">
        <div className="col-md-3">
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
        </div>
        <br />
        <div className="col-md-3">
          <div className="Cardcreate">
            <Card style={{ width: "18rem" }}>
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
          </div>{" "}
        </div>
        <br />
        <div className="col-md-3" style={{ paddingLeft: "80px" }}>
          <div className="Cardcreate">
            <Card style={{ width: "18rem" }}>
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
        </div>
      </div>
    </>
  );
}
