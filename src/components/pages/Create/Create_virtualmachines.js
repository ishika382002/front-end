import { Button } from "@aws-amplify/ui-react";
import Sidebar from "../Guidepages/Sidebar";
import "../Guide";
import { Card } from "react-bootstrap";
// import { Button } from "@aws-amplify/ui-react";
export default function Createvirtualmachines() {
  return (
    <>
      <div className="Cardcreate"></div>
      <Sidebar />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <div />
    </>
  );
}
