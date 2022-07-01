import { Button } from "@aws-amplify/ui-react";
import Sidebar from "../Guidepages/Sidebar";
import "../Guide";
import logo1 from './/clip.jpg'
import logo2 from './/router.jpg'
import logo3 from './/sdwan.png'
import { Card } from "react-bootstrap";
// import { Button } from "@aws-amplify/ui-react";
export default function Createconnections() {
  return (
    <><ul>
      <li className="card1">
     <div className="row m-5">
        <div className="col-md-3">
          <div className="Cardcreate">
            <Card style={{ width: "10rem" }}>
                <Card.Img
                  src={logo1}
                  height={70}
                  width={75}
                  align={"middle"}
                  className="img"
                />
                <br/>
                <br/>
                <div className="card-heading">Virtual Machines</div>
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                  <div className="para">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </div>
                </Card.Text>
                <button className="cbtn" onclick="router">Create</button>
              </Card.Body>
            </Card>
          </div>
        </div>
        </div>
        </li>
        <br />
      <li className="card2">
         <div className="col-md-3">
          <div className="Cardcreate">
            <Card style={{ width: "18rem" }}>
              <Card.Header>
                <Card.Img
                  src={logo2}
                  height={70}
                  width={75}
                  align={"middle"}
                  className="img"
                />
                <br/>
                <br/>
                <div className="card-heading">Router</div>
              </Card.Header>
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                <div className="para">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </div>
                </Card.Text>
                <button className="cbtn">Create</button>
              </Card.Body>
            </Card>
          </div>{" "}
        </div>
        </li> 
        <br />
        <li className="card3">
        <div className="col-md-3" style={{ paddingLeft: "80px" }}>
          <div className="Cardcreate">
            <Card style={{ width: "18rem" }}>
              <Card.Header>
                <Card.Img
                  src={logo3}
                  height={70}
                  width={75}
                  align={"middle"}
                  className="img"
                />
                <br/>
                <br/>
                <div className="card-heading">SDWAN</div>
              </Card.Header>
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                <div className="para">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </div>
                </Card.Text>
                <button className="cbtn">Create</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </li>
      </ul>
    </>
  );
}