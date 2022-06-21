import SidebarData from "./SidebarData"
import items from "../Data/sidebarinfo"
export default function Sidebar() {
    return (
        <div className="sidebar">
        {items.map((item, index) => (
        <SidebarData key={index} item={item} />
        ))}
        </div>

    )
}
