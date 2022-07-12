import Sidebar from "../Guidepages/Sidebar";
import "../Guide";
import "./devices.css";
import error1 from "./error1.png";
import error2 from "./error2.png";
import error3 from "./error3.png";
import error4 from "./error4.png";

// import image from "../Pages/Overall_solution.png";

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

      <div className="heading1"> ERROR & TROUBLESHOOTING</div>
      <p className="text1">
        ERROR 1:<br></br>
        <h3 className="temp">No attribute ‘throughput’ </h3>
        <img src={error1} alt="cant load" width={1200} />
        <br></br>
        Solution: By default, lookup return values are marked as unsafe for
        security reasons. If the outside source is to be trusted for lookup
        accesses, allow_unsafe=True is passed to allow Jinja2 templates to
        evaluate lookup values.
        <br></br>
        <br></br>
        <br></br>
        ERROR 2:<br></br>
        <h3 className="temp">Conditional Check Error </h3>
        <img src={error2} alt="cant load" height={36} width={1200} />
        <br></br>
        Solution: This is a conditional check error. Whenever item is passed in
        condition, it needs to be defined using ‘with_items’ in the same task.
        <br></br>
        <br></br>
        <br></br>
        ERROR 3:<br></br>
        <h3 className="temp">Invalid data passed </h3>
        <img src={error3} alt="cant load" width={900} />
        <br></br>
        Solution: wantlist=True command is passed to lookups to use in Jinja2
        template in “for” loops.
        <br></br>
        <br></br>
        <br></br>
        ERROR 4:<br></br>
        <h3 className="temp">Invalid input detected</h3>
        <img src={error4} alt="cant load" width={600} />
        <br></br>
        Solution:This is a Network CLI Configuration error. While executing the
        configuration scripts, Ansible is displaying the configuration error. It
        is indicating that there is some error in the template that is being
        executed on the CSR.
      </p>
    </div>
  );
}
