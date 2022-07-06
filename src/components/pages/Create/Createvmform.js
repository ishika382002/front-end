// import Sidebar from "../Guidepages/Sidebar";

const Createvmform = () => {
  return (
    <>
      <h1 style={{ color: "#6300a9" }}> Create a CSR1000V</h1>
      <form id="create" className="formcreate">
        <h3 style={{ color: "purple" }}>
          Device Properties (Terraform Infrastructure)
        </h3>
        <fieldset>
          <label>
            <p style={{ color: "purple" }}> Deployment Stage </p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="Populate">Populate</option>
              <option value="Review">Review</option>
              <option value="Deploy">Deploy</option>
            </select>
          </label>
        </fieldset>

        <div className="pri-left">
          <fieldset>
            <label>
              <h3 style={{ color: "purple" }}>
                Primary Device (Terraform Infrastructure)
              </h3>{" "}
              <p style={{ color: "purple" }}> Device Name </p>
              <input type="text" placeholder="CSR-LD-1-Pri" />
              <p style={{ color: "purple" }}>Metro</p>
              <select name="dropdown">
                <option value="nf0">Select an Option </option>
                <option value="London">London</option>
                <option value="Amsterdam">Amsterdam</option>
              </select>
              <p style={{ color: "purple" }}>
                Notifications Email Address(es)*{" "}
              </p>
              <input type="email" placeholder="you@bt.com" />
              <p style={{ color: "purple" }}>Access List Template * </p>
              {/* <input type="text" placeholder="Enter Service Profile type" /> */}
              <select name="dropdown">
                <option value="nf0">Select an Option </option>
                <option value="Cip_acl_demo">CIP ACL Demo</option>
              </select>
              <p style={{ color: "purple" }}>SSH Key </p>
              <input type="text" placeholder="user-sshkey-equinix-MVP" />
              <p style={{ color: "purple" }}>Hostname </p>
              <input type="text" placeholder="CSR-LD-1-Pri" />
              <p style={{ color: "purple" }}>
                Additional Bandwidth (Optional){" "}
              </p>
              <input type="text" placeholder="0" />
              <p style={{ color: "purple" }}>
                Additional Standup CLI Commands (Optional){" "}
              </p>
              <textarea>0</textarea>
              <p style={{ color: "purple" }}>
                Additional Post Configuration CLI Commands *(Optional)
              </p>
              <textarea>0</textarea>
            </label>
          </fieldset>
        </div>

        <div className="pri-right">
          <fieldset>
            <label>
              <h3 style={{ color: "purple" }}>
                Secondary Device (Terraform Infrastructure)
              </h3>{" "}
              <p style={{ color: "purple" }}> Device Name </p>
              <input type="text" placeholder="CSR-LD-1-Pri" />
              <p style={{ color: "purple" }}>Metro</p>
              <select name="dropdown">
                <option value="nf0">Select an Option </option>
                <option value="London">London</option>
                <option value="Amsterdam">Amsterdam</option>
              </select>
              <p style={{ color: "purple" }}>
                Notifications Email Address(es)*{" "}
              </p>
              <input type="email" placeholder="you@bt.com" />
              <p style={{ color: "purple" }}>Access List Template * </p>
              {/* <input type="text" placeholder="Enter Service Profile type" /> */}
              <select name="dropdown">
                <option value="nf0">Select an Option </option>
                <option value="Cip_acl_demo">CIP ACL Demo</option>
              </select>
              <p style={{ color: "purple" }}>SSH Key </p>
              <input type="text" placeholder="user-sshkey-equinix-MVP" />
              <p style={{ color: "purple" }}>Hostname </p>
              <input type="text" placeholder="CSR-LD-1-Pri" />
              <p style={{ color: "purple" }}>
                Additional Bandwidth (Optional){" "}
              </p>
              <input type="text" placeholder="0" />
              <p style={{ color: "purple" }}>
                Additional Standup CLI Commands (Optional){" "}
              </p>
              <textarea>0</textarea>
              <p style={{ color: "purple" }}>
                Additional Post Configuration CLI Commands (Optional)
              </p>
              <textarea>0</textarea>
            </label>
          </fieldset>
        </div>

        <fieldset>
          <h3 style={{ color: "purple" }}>
            Device Properties (Terraform Infrastructure)
          </h3>

          <label>
            <p style={{ color: "purple" }}> Device Resources </p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="dr1">2 Cores, 4 GB Memory </option>
              <option value="dr2">4 Cores, 4 GB Memory</option>
              <option value="dr3">6 Cores, 4 GB Memory</option>
            </select>
            <p style={{ color: "purple" }}> Software Packages </p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="sp1">Appx</option>
              <option value="sp2">AX</option>
              <option value="sp3">IP</option>
              <option value="sp4">Security</option>
            </select>
            <p style={{ color: "purple" }}>Device Management</p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="dm1">Bring Your Own License</option>
              <option value="dm2">Subscription</option>
            </select>
            <p style={{ color: "purple" }}>Configuration Management</p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="cm1">Self Managed</option>
              <option value="cm2">Equinix Managed</option>
            </select>
            <p style={{ color: "purple" }}>Software Version</p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="sv1">17.03.03</option>
            </select>
            <p style={{ color: "purple" }}>License Throughput</p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="lt1">500 Mbps</option>
              <option value="lt2">1 Gbps</option>
              <option value="lt3">2.5 Gbps</option>
              <option value="lt4">5 Gbps</option>
              <option value="lt5">10 Gbps</option>
            </select>
            <p style={{ color: "purple" }}>Number of Interfaces</p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="nf1">10</option>
              <option value="nf2">24</option>
            </select>
            <p style={{ color: "purple" }}>Term Length</p>
            <select name="dropdown">
              <option value="nf0">Select an Option </option>
              <option value="nf1">1 Month</option>
              <option value="nf2">12 Months</option>
              <option value="nf2">24 Months</option>
              <option value="nf2">36 Months</option>
            </select>
          </label>
        </fieldset>
        {/* <br /> */}
        <fieldset>
          <label>
            <h3 style={{ color: "purple" }}>
              Omnet Configuration (BT Inventory)
            </h3>
            <p style={{ color: "purple" }}>Action</p>
            <select name="dropdown">
              <option value="a1">Create</option>
              <option value="a2">Update</option>
              <option value="a3">Delete</option>
            </select>
            <p style={{ color: "purple" }}> Omnet Status (Optional) </p>
            <input type="text" placeholder="doesn't Exist" />
            <p style={{ color: "purple" }}> Customer CI Name </p>
            <input type="text" />
            <p style={{ color: "purple" }}> BFG Company </p>
            <input type="text" />
            <p style={{ color: "purple" }}> SNMP String </p>
            <input type="text" />
            <p style={{ color: "purple" }}> IPCG WAN Access ID</p>
            <input type="text" />
            <p style={{ color: "purple" }}> BFG Site </p>
            <input type="text" placeholder="100" />
            <p style={{ color: "purple" }}> BFG Location </p>
            <input type="text" />
            <p style={{ color: "purple" }}> BFG Contract Label </p>
            <input type="text" />
            <p style={{ color: "purple" }}> BFG Site Service Name </p>
            <input type="text" />
            <p style={{ color: "purple" }}> UID(Optional)</p>
            <input type="text" />
          </label>
        </fieldset>

        <div className="ansible-left">
          <fieldset>
            <label>
              <h3 style={{ color: "purple" }}>
                Base Configuration (Ansible Infrastructure)
              </h3>
              <p style={{ color: "purple" }}> Customer Name </p>
              <input type="text" placeholder="Jane Smith" />
              <p style={{ color: "purple" }}> Location</p>
              <input type="text" placeholder="London" />
              <p style={{ color: "purple" }}> Support Contact </p>
              <input type="text" placeholder="John Barnes" />
              <p style={{ color: "purple" }}> Order ID </p>
              <input type="text" />
              <p style={{ color: "purple" }}> Hostname</p>
              <input type="text" placeholder="ce1-am-nl" />
              <p style={{ color: "purple" }}> Throughput</p>
              <input type="text" placeholder="1000" />
              <p style={{ color: "purple" }}> Software Package </p>
              <input type="text" placeholder="ipbase" />
              <p style={{ color: "purple" }}> On-Prem SSM IP</p>
              <input type="text" placeholder="213.121.34.131" />
              <p style={{ color: "purple" }}> Password </p>
              <input type="password" placeholder="Newpassword01" />
              <p style={{ color: "purple" }}> SNMP Username</p>
              <input type="text" placeholder="op5user" />
              <p style={{ color: "purple" }}> SNMP Authentication Password </p>
              <input type="password" placeholder="authPass" />
              <p style={{ color: "purple" }}> SNMP Privacy Password</p>
              <input type="password" placeholder="privPass" />
            </label>
          </fieldset>
        </div>

        <div className="ansible-right">
          <fieldset>
            <label>
              <h3 style={{ color: "purple" }}>
                Base Configuration (Ansible Infrastructure)
              </h3>
              <p style={{ color: "purple" }}> Customer Name </p>
              <input type="text" placeholder="Jane Smith" />
              <p style={{ color: "purple" }}> Location</p>
              <input type="text" placeholder="London" />
              <p style={{ color: "purple" }}> Support Contact </p>
              <input type="text" placeholder="John Barnes" />
              <p style={{ color: "purple" }}> Order ID </p>
              <input type="text" />
              <p style={{ color: "purple" }}> Hostname</p>
              <input type="text" placeholder="ce1-am-nl" />
              <p style={{ color: "purple" }}> Throughput</p>
              <input type="text" placeholder="1000" />
              <p style={{ color: "purple" }}> Software Package </p>
              <input type="text" placeholder="ipbase" />
              <p style={{ color: "purple" }}> On-Prem SSM IP</p>
              <input type="text" placeholder="213.121.34.131" />
              <p style={{ color: "purple" }}> Password </p>
              <input type="password" placeholder="Newpassword01" />
              <p style={{ color: "purple" }}> SNMP Username</p>
              <input type="text" placeholder="op5user" />
              <p style={{ color: "purple" }}> SNMP Authentication Password </p>
              <input type="password" placeholder="authPass" />
              <p style={{ color: "purple" }}> SNMP Privacy Password</p>
              <input type="password" placeholder="privPass" />
            </label>
          </fieldset>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Createvmform;
