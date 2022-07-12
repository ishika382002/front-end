import Sidebar from "../Guidepages/Sidebar";
import "../Guide";
import "./devices.css";
import image from "../Pages/Overall_solution.png";

export default function Onboarding() {
  return (
    <div>
      <div className="side">
        <Sidebar />
      </div>
      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <div className="heading1"> OVERALL SOLUTION ON HOW DIFFERENT COMPONENTS ARE WORKING</div>
      <p className="text1">
        
        The components have been divided into four main sections depending upon
        their functionalities as follows:<br></br>
        1. Content Delivery: This is done to enable faster web performance by
        locating copies of web content which is used for facilitating delivery
        of dynamic content. <br></br>
        2. Authentication + Authorisation: This allows users to access the
        webpage and tell which customers can work and what activities they can
        do on the customer and which locations they can deploy into.<br></br>
        3. Logging: Once customer is logged in, logging provides the user with
        facilities of all API calls, lambda invocations and results achieved on
        a user basis.<br></br>
        4. Deployment: Terraform and Ansible are used for deploying the CIP
        resources. <br></br>
        Once, the variables within the databases are in the appropriate state
        which is desirable for the users, then user pushes the state to Morpheus
        so as to trigger the deployment/execution done on Terraform and Ansible.
        <br></br>
        <br></br>
        <div className="heading2">WORKING</div>
        {/* <br></br> */}
          Visually, working of CIP portal can be depicted as follows:   
        <div className="img1">
          <img src={image} alt="cant load" height={450} width={750} />
        </div>
        <br></br>
        
          <u>(I) CONTENT DELIVERY</u><br></br>
          First of all, the request of the website is sent from the user. WAF
          (Web Application Firewall) checks whether the request made is valid or
          not. If the request is valid, then WAF approves it. <br></br>
          After that, the approved request gets into CloudFront where it is
          being hosted. The request made and approved is stored in S3 bucket.
          So, CloudFront retrieves it from there from where it is being stored.
          Thus, the content of the website opens securely.<br></br> <br></br>
          <u>(II) AUTHENTICATION AND AUTHORISATION</u> <br></br>
          Cognito provides the authentication to the user and facilitates to
          create the account for the admin by entering user ID and password. It
          triggers IAM then Azure Active Directory gets synced with Cognito and
          SAML (Security Assertion Markup Language) standard takes place which
          is used to exchange authentication and authorisation requests such as
          login requests.<br></br>
          Firstly, The user credentials which are user ID and password are
          validated against the account from the web portal to Cognito i.e
          authentication takes place here. Next, When the user successfully logs
          in the portal, JSON web token is returned so as to be used in the API
          gateway which is used for secure transmission. Now, API Gateway
          identifies the user and provides the authorisation. Now, API Gateway
          is used to provide Restful APIs and authenticate all the requests.
          Firstly, The user makes the API call so as to retrieve the
          information.<br></br>
          The information is saved in various sections on the portal in form of
          users, different tabs, staging, deployments and validation.
          <br></br>
          i) Users- Users is selected from the drop-down option at top left
          corner of the screen in which there are different permission sets
          according to the users. <br></br>
          ii) Tabs- Different tabs are designed for different control methods
          such as View, Create, Delete, Modify, Reconfigure, Delete and Deploy.{" "}
          <br></br>
          &ensp;• View- This tab supports information limited to read only
          version of the device.<br></br>
          &ensp;• Create- This is used to setting up the new devices/
          connections. <br></br>
          &ensp;• Modify-This is used to categorise existing infrastructure on
          the left sidebar and when chosen, loaded as a form within main body.
          This will have limited changeable options to reflect non destructive
          modifications. <br></br>
          &ensp;• Reconfigure-Categorise existing infrastructure on the left
          sidebar and when chosen, loaded as a form within main body. This will
          have all variables open to change including those conducting
          destructive changes.<br></br>
          &ensp;• Delete- This removes the device/ connection from the portal.{" "}
          <br></br>
          &ensp;• Deploy- This finally executes the device/connection by having
          various stages. <br></br>
          iii) Staging- There is a drop-down and it has three options. <br></br>
          &ensp;• Populate- Here, the values will/ fields are added in the form
          on the portal. Then, the form is saved but not apply any changes.{" "}
          <br></br>
          &ensp;• Review- Then, values entered in the form is reviewed.{" "}
          <br></br>
          &ensp;• Deploy- When it is set to deploy, it will add apply changes to
          the device. Now, Once the form is submitted, there are following
          levels: <br></br>
          &ensp;• Terraform Plan which sends the request to Morpheus, then there
          is a green pop up on the screen.
          <br></br>
          &ensp;• Followed by the green pop-up, Display Terraform Plan gets
          executed to check whether the information entered is correct or not.{" "}
          <br></br>
          &ensp;• Afterwards,Terraform Apply is clicked and thus the
          infrastructure is deployed and the ansible is configured. Now, Lambda
          provides compute to execute the &ensp;operations on DynamoDB. It works on
          ‘trigger’ which are actions used to invoke the function. As user makes
          API calls, it will retrieve information and perform crud operation
          which are executed on database (DynamoDB here) Now, CRUD operation
          executes on DynamoDB. It stands for Create, Read, Update and Delete.
          Once, the CRUD operation takes place, DynamoDB returns the status code
          of the CRUD operation which is the response of the server to browser’s
          request. Thereafter, Lambda returns status code of Lambda execution.
          <br></br><br></br>
          <u>(III) LOGGING </u><br></br>
          Once, the customer logs in, Cloud Watch comes into the picture so as
          to log all the execution of Lambda and requests of API gateway. Cloud
          Watch is in sync with Cognito so as to background metrics providing
          insights/logs so as to support the administration of the users. Now,
          BT Specific Log helps to monitor and manage the data and with the help
          Kibana- the monitoring and management data is displayed in form of
          graphical representation and used for virtualisation. <br></br><br></br>
          <u>(IV) DEPLOYMENT </u><br></br>
          Now, The verification of request takes place by API Gateway for
          services which take place in backend and to invoke/ trigger Lambda
          functions. API Gateway integrated with the Lambda function requests
          the DynamoDB to perform the CRUD operation and Lambda gets triggered
          and hence returning a response to API Gateway. Then, the response is
          returned to the client from API Gateway. Automation tools- Python,
          Terraform and Ansible now come into the picture to perform tasks in
          automation such as fetching the input variables, building
          infrastructures and perform the configuration of the
          devices/connections on portal. <br></br>
          The automation tools, cloud and APIs of Equinix interact with each
          other in order to perform the tasks of automation. Terraform is used
          to build the infrastructure and provision the objects on Equinix.
          <br></br>
          Then, Equinix as a provider is leveraged by Terraform to define the
          infrastructures along with it’s parameters to be provisioned. Ansible
          performs the configuration part of the device/connection which is
          provisioned by Terraform. It helps to execute various commands whether
          the device/ connection is working or not. Finally, Morpheus triggers
          the execution of Terraform and Ansible and the devices spun will be
          deployed on Equinix Fabric portal.
        <br></br>
        <br></br>
      </p>
      
    </div>
  );
}
