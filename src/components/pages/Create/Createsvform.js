// import Sidebar from "../Guidepages/Sidebar";

const Createsvform = () => {
  return (
    <>
      {/* <Sidebar /> */}
      {/* <div className="row m-3 col-md-12"> */}
      <div className="col-md-10">
        {/* <div className="row col-12 d-flex justify-content-center text-white"> */}
        <h1 style={{ color: "#6300a9" }}>Service Profiles</h1>
        <h2 style={{ color: "purple" }}>
          Access List Basic Properties (Terraform Infrastructure)
        </h2>
        <div className="formcreate">
          <form id="create" className="formcreate">
            <fieldset>
              <label>
                <p style={{ color: "purple" }}> Customer Name </p>
                <input type="text" placeholder="Enter Customer type" />
                <p style={{ color: "purple" }}>Customer Contact Number </p>
                <input
                  type="text"
                  placeholder="Enter Customer Contact Number "
                />
                <p style={{ color: "purple" }}>Customer Email</p>
                <input type="email" placeholder="Enter Customer Email" />
                <p style={{ color: "purple" }}>Service Profile type </p>
                <input type="text" placeholder="Enter Service Profile type" />

                <p style={{ color: "purple" }}>Service Profile Description </p>
                <input
                  type="text"
                  placeholder="Enter Service Profile Description"
                  required
                />
                <p style={{ color: "purple" }}>
                  Network Edge Service (VNF) Location{" "}
                </p>
                <input
                  type="text"
                  placeholder="Enter Network Edge Service (VNF) Location"
                />
                <p style={{ color: "purple" }}>
                  Network Edge Service (VNF) Device type
                </p>
                <input
                  type="text"
                  placeholder="Enter Network Edge Service (VNF) Device type"
                />
                <p style={{ color: "purple" }}>
                  Network Edge Service (VNF) Device Type (e.g. Router/Firewall
                  etc){" "}
                </p>
                <input
                  type="text"
                  placeholder="Network Edge Service (VNF) Device Type (e.g. Router/Firewall
                etc)"
                />
                <p style={{ color: "purple" }}>
                  Connection Bandwidth to be used by BT for creating VC towards
                  Service Profile{" "}
                </p>
                <input type="text" placeholder="Enter Connection Bandwidth" />
                <p style={{ color: "purple" }}>
                  BT Private User Email added in Service Profile{" "}
                </p>
                <input type="email" placeholder="Enter BT Private Email" />
                <p style={{ color: "purple" }}>Notification Email </p>
                <input type="email" placeholder="Enter Notification Mail" />
              </label>
            </fieldset>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Createsvform;
