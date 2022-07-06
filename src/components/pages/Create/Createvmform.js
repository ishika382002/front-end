// import Sidebar from "../Guidepages/Sidebar";

const Createvmform = () => {
  return (
    <>
      <div id="divleft">
        <h1> Create a CSR1000V</h1>
        {/* <div className="formcreate"> */}
        <form id="create" className="formcreate">
          <h3>Device Properties (Terraform Infrastructure)</h3>
          <fieldset>
            <label>
              <p style={{ color: "purple" }}> Deployment Stage </p>
              <select name="dropdown">
                <option value="Populate">Populate</option>
                <option value="Review">Review</option>
                <option value="Deploy">Deploy</option>
              </select>
              {/* <input type="text" placeholder="Enter Customer type" /> */}
              <p style={{ color: "purple" }}>
                <h3>Primary Device (Terraform Infrastructure)</h3>{" "}
              </p>
              <p style={{ color: "purple" }}> Device Name </p>
              <input type="text" placeholder="CSR-LD-1-Pri" />
              <p style={{ color: "purple" }}>Metro</p>
              <select name="dropdown">
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
          <br />
          <fieldset>
            <h3>Device Properties (Terraform Infrastructure)</h3>
            <label>
              <p style={{ color: "purple" }}> Device Resources </p>
              <select name="dropdown">
                <option value="dr1">2 Cores, 4 GB Memory </option>
                <option value="dr2">4 Cores, 4 GB Memory</option>
                <option value="dr3">6 Cores, 4 GB Memory</option>
              </select>
              <p style={{ color: "purple" }}> Software Packages </p>
              <select name="dropdown">
                <option value="sp1">Appx</option>
                <option value="sp2">AX</option>
                <option value="sp3">IP</option>
                <option value="sp4">Security</option>
              </select>
              <p style={{ color: "purple" }}>Device Management</p>
              <select name="dropdown">
                <option value="dm1">Bring Your Own License</option>
                <option value="dm2">Subscription</option>
              </select>
              <p style={{ color: "purple" }}>Configuration Management</p>
              <select name="dropdown">
                <option value="cm1">Self Managed</option>
                <option value="cm2">Equinix Managed</option>
              </select>
              <p style={{ color: "purple" }}>Software Version</p>
              <select name="dropdown">
                <option value="sv1">17.03.03</option>
              </select>
              <p style={{ color: "purple" }}>License Throughput</p>
              <select name="dropdown">
                <option value="lt1">500 Mbps</option>
                <option value="lt2">1 Gbps</option>
                <option value="lt3">2.5 Gbps</option>
                <option value="lt4">5 Gbps</option>
                <option value="lt5">10 Gbps</option>
              </select>
              <p style={{ color: "purple" }}>Number of Interfaces</p>
              <select name="dropdown">
                <option value="nf1">10</option>
                <option value="nf2">24</option>
              </select>
              <p style={{ color: "purple" }}>Term Length</p>
              <select name="dropdown">
                <option value="nf1">1 Month</option>
                <option value="nf2">12 Months</option>
                <option value="nf2">24 Months</option>
                <option value="nf2">36 Months</option>
              </select>
            </label>
          </fieldset>
          <br />
          <fieldset>
            <label>
              <h3>Omnet Configuration (BT Inventory)</h3>
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
              <input type="text" placeholder="doesn't Exist" />
            </label>
          </fieldset>
        </form>
        {/* </div> */}
      </div>
      <div id="divright">
        <h1> helloo</h1>
        <form id="create" className="formcreate">
          <fieldset>
            <label>
              <p style={{ color: "purple" }}> Customer Name </p>
              <input type="text" placeholder="Enter Customer type" />
              <p style={{ color: "purple" }}>Customer Contact Number </p>
              <input type="text" placeholder="Enter Customer Contact Number " />
              <p style={{ color: "purple" }}>Customer Email</p>
              <input type="email" placeholder="Enter Customer Email" />
              <p style={{ color: "purple" }}>Service Profile type </p>
              {/* <input type="text" placeholder="Enter Service Profile type" /> */}
              <select name="dropdown">
                <option value="Computer Architecture" selected>
                  Computer Architecture
                </option>
                <option value="Java">Java</option>
                <option value="Discrete Mathematics">
                  Discrete Mathematics
                </option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Createvmform;
