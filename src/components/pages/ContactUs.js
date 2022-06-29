// import Sidebar from '../Guidepages/Sidebar'
// import "../Guide"
// import "./ansible.css"
import styled from 'styled-components';

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")``;
const ListItem = styled("li")``;

export default function ContactUs() {
    return (
        <div>
        <p className='text'>
          Error1-By default, lookup return values are marked as unsafe for security reasons. If you trust the outside source your lookup accesses, pass allow_unsafe=True to allow Jinja2 templates to evaluate lookup values.
<br></br>Error2- This is a conditional check error. Whenever item is passed in condition, it needs to be defined using ‘with_items’ in the same task.
<br></br>Error6- This a templating error. This usually occurs when there is a ansible expects something else. It is a syntax error.
<div className="App">
      <h1>Custom Select/dropdown</h1>
      <DropDownContainer>
        <DropDownHeader>Mangoes</DropDownHeader>
        <DropDownListContainer>
          <DropDownList>
            <ListItem>Mangoes</ListItem>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer>
    </div>
        </p>
        </div>
    );
  }
  