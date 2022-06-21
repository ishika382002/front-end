import Sidebar from '../Guidepages/Sidebar'
import "../Guide"
import "./devices.css"

export default function Devices() {
    return (
        <div>
          <div className='side'>
            <Sidebar/>
          </div>
            {/* <Sidebar/>   */}
       
        {/* <h1 className="title"> DEVICES </h1> */}
        <h2 className="heading"> 1. CSR1000v</h2>
        <p className='text'>
          {" "}
          The Cisco Cloud Services Router 1000V (CSR 1000V) is a router and
          network services platform in virtual form factor that is intended for
          deployment in cloud and virtual data centers.<br></br>
           It is optimized to serve
          as a  single-tenant or multitenant WAN gateway. Using proven,
          industry-leading Cisco IOS® XE Software and Cisco SD-WAN networking and
          security features, the CSR 1000V enables enterprises to transparently
          extend their WANs into external provider-hosted clouds and cloud
          providers to offer their tenants enterprise-class networking services.<br></br>
          Benefits <br></br>● Rapid deployment and service automation: Virtual form factor
          accelerates deployment and eliminates hardware costs such as complete
          equipment upgrades and Return Material Authorizations (RMAs).<br></br> ●
          Single-tenant use: This feature allows a cloud service provider to
          provision a routing instance per tenant, simplifying service delivery
          and tenant management. It also helps the provider overcome VLAN scale
          limits, increasing tenant scale. <br></br>● Enterprise network extension to the
          cloud: This feature provides enterprises highly secure direct
          connections from their distributed sites to their cloud-hosted
          applications, improving application response time and user experience.<br></br> ●
          Network consistency: This feature uses familiar enterprise-class Cisco
          IOS Software features for consistent network operation across premises
          and cloud, allowing the enterprise to view the cloud as just another
          node in its network.<br></br> ● Network scalability: Scale beyond the limitations
          of 802.1q VLAN tagging by building a VXLAN network, or extending Layer-3
          routing deeper into the cloud environment. <br></br>● Consolidation of network
          functions: Eliminate the facility requirements and complexity of
          physical network devices by consolidating multiple network functions
          onto a single piece of server hardware.<br></br> Use cases <br></br> The Cisco CSR 1000V is
          a software router that an enterprise or cloud provider can deploy as a
          virtual machine in a provider-hosted cloud  for the
          following uses: <br></br>● Highly secure VPN gateway: Route-based IP Security
          (IPsec) VPNs, Dynamic Multipoint VPN (DMVPN), Easy VPN, Secure Sockets
          Layer (SSL) VPN, and FlexVPN, along with the Cisco IOS Zone- Based
          Firewall and access control, enable an enterprise to connect distributed
          sites directly to its cloud deployment.<br></br> ● Multiprotocol Label Switching
          (MPLS) extension: This MPLS customer-edge or provider-edge router
          enables a service provider to offer a customer end-to-end managed
          connectivity. Also, by extending the MPLS WAN deeper into the cloud, the
          provider can increase tenant scale. <br></br>● IP mobility and virtual-machine
          migration: Locator/ID Separation Protocol (LISP) enables an enterprise
          to maintain addressing consistency when moving applications into the
          cloud. Overlay Transport Virtualization (OTV) enables an enterprise to
          extend Layer-2 VLANs from data center to cloud. <br></br>● Traffic control and
          redirection: The Cisco CSR 1000V includes networking services such as
          Hot Standby Router Protocol (HSRP) and Cisco Application Visibility and
          Control (AVC), enabling a cloud tenant to receive a comprehensive
          networking experience. IT can also redirect traffic to Cisco Virtual
          Wide Area Application Services (vWAAS) or Cisco WAAS appliances. 
        </p>
      </div>
  
    //   <>
    //   <Sidebar/>
    //     <h1 className='devices'>Devices</h1>
    //     <h3 className='heading'>CSR100v</h3>
    //     <p className='content'>
    //     The Cisco Cloud Services Router 1000V (CSR 1000V) is a router and
    //     network services platform in virtual form factor that is intended for
    //     deployment in cloud and virtual data centers.<br></br>
    //      It is optimized to serve
    //     as a  single-tenant or multitenant WAN gateway. Using proven,
    //     industry-leading Cisco IOS® XE Software and Cisco SD-WAN networking and
    //     security features, the CSR 1000V enables enterprises to transparently
    //     extend their WANs into external provider-hosted clouds and cloud
    //     providers to offer their tenants enterprise-class networking services.<br></br>
    //     Benefits <br></br>● Rapid deployment and service automation: Virtual form factor
    //     accelerates deployment and eliminates hardware costs such as complete
    //     equipment upgrades and Return Material Authorizations (RMAs).<br></br> ●
    //     Single-tenant use: This feature allows a cloud service provider to
    //     provision a routing instance per tenant, simplifying service delivery
    //     and tenant management. It also helps the provider overcome VLAN scale
    //     limits, increasing tenant scale. <br></br>● Enterprise network extension to the
    //     cloud: This feature provides enterprises highly secure direct
    //     connections from their distributed sites to their cloud-hosted
    //     applications, improving application response time and user experience.<br></br> ●
    //     Network consistency: This feature uses familiar enterprise-class Cisco
    //     IOS Software features for consistent network operation across premises
    //     and cloud, allowing the enterprise to view the cloud as just another
    //     node in its network.<br></br> ● Network scalability: Scale beyond the limitations
    //     of 802.1q VLAN tagging by building a VXLAN network, or extending Layer-3
    //     routing deeper into the cloud environment. <br></br>● Consolidation of network
    //     functions: Eliminate the facility requirements and complexity of
    //     physical network devices by consolidating multiple network functions
    //     onto a single piece of server hardware.<br></br> Use cases <br></br> The Cisco CSR 1000V is
    //     a software router that an enterprise or cloud provider can deploy as a
    //     virtual machine in a provider-hosted cloud  for the
    //     following uses: <br></br>● Highly secure VPN gateway: Route-based IP Security
    //     (IPsec) VPNs, Dynamic Multipoint VPN (DMVPN), Easy VPN, Secure Sockets
    //     Layer (SSL) VPN, and FlexVPN, along with the Cisco IOS Zone- Based
    //     Firewall and access control, enable an enterprise to connect distributed
    //     sites directly to its cloud deployment.<br></br> ● Multiprotocol Label Switching
    //     (MPLS) extension: This MPLS customer-edge or provider-edge router
    //     enables a service provider to offer a customer end-to-end managed
    //     connectivity. Also, by extending the MPLS WAN deeper into the cloud, the
    //     provider can increase tenant scale. <br></br>● IP mobility and virtual-machine
    //     migration: Locator/ID Separation Protocol (LISP) enables an enterprise
    //     to maintain addressing consistency when moving applications into the
    //     cloud. Overlay Transport Virtualization (OTV) enables an enterprise to
    //     extend Layer-2 VLANs from data center to cloud. <br></br>● Traffic control and
    //     redirection: The Cisco CSR 1000V includes networking services such as
    //     Hot Standby Router Protocol (HSRP) and Cisco Application Visibility and
    //     Control (AVC), enabling a cloud tenant to receive a comprehensive
    //     networking experience. IT can also redirect traffic to Cisco Virtual
    //     Wide Area Application Services (vWAAS) or Cisco WAAS appliances. 
    //     </p>
    //   </>
    );
  }
  