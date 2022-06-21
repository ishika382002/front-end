
  import Sidebar from '../Guidepages/Sidebar'
  import "../Guide"
  import "./devices.css"
  import Image from './/terra.jpg'
  
  export default function Devices() {
      return (
          <div>
              <Sidebar/>
          <h2 className="title"> DEVICES </h2>
          <h2 className="heading">Requesting security policy exemption for non-standard software</h2>
          <p className='text'>
            {" "}
            Non-standard software are those which are not present on BT’s Software Center. In order to install any non-standard application, one has to request a security policy exemption on Webtop 10. Make sure that there is a valid license and the application’s installer file. 
To request, follow these steps:<br></br>
1.	Click on start<br></br>
2.	Click BT Control Panel<br></br>
3.	Click applications<br></br>
4.	Click Install a non-standard application<br></br>
5.	Click Request a security exemption to install new non-standard software.<br></br>
<img className='img' src={Image} alt='cant load' height={350} width={600}/>


          </p>
        </div>
      );
    }
    