import Sidebar from '../Guidepages/Sidebar'
import "../Guide"
import "./ansible.css"

export default function Ansible() {
    return (
        <div>
        <Sidebar/>
        <h1 className="title"> DEVICES </h1>
       
        <h1 className="title"> DEVICES </h1>
        <h2 className="heading"> Errors in Ansible</h2>
        <p className='text'>
          {" "}
          Error1-By default, lookup return values are marked as unsafe for security reasons. If you trust the outside source your lookup accesses, pass allow_unsafe=True to allow Jinja2 templates to evaluate lookup values.
<br></br>Error2- This is a conditional check error. Whenever item is passed in condition, it needs to be defined using ‘with_items’ in the same task.
<br></br>Error3 -Pass wantlist=True to lookups to use in Jinja2 template “for” loops.
<br></br>Error4- This is a network cli configuration error. While executing the configuration scripts, the ansible is displaying the configuration error. It is indicating that there is some error in the template that is being executed on the CSR.
<br></br>Error5-This is a network cli configuration error indicating a bad mask for the ip address. This occurred while executing the template and it was picking the old template stored in the repository. Sometimes, the templates are not pushed in the Git repository. So, whether you have committed changes in Git or not, you need to recheck it on the Git repository.
<br></br>Error6- This a templating error. This usually occurs when there is a ansible expects something else. It is a syntax error.
        </p>
        </div>
    );
  }
  