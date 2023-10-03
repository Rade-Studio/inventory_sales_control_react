import { SideBarItem } from "Interfaces/sidebar/sidebar.interface";
import { classNames } from "Utilities/classes";
import "./styles/SideBarItemView.scss";
interface SidebarItemViewProps {
    item: SideBarItem;
    isOpen: boolean;
}
export default function SideBarItemView ({item, isOpen,}: SidebarItemViewProps){
    return <div className="SideBarItemView">
                <a href={item.url}>
                    <div className={classNames("ItemContent", isOpen? " ": "collapsed")}>
                        <div className="icon">
                            <item.icon size="32" />
                        </div>
                        <span className="label">{item.label}</span>
                    </div>
                </a>
                {!isOpen? <div className="tooltip">{item.label}</div> : ""}
            </div>
}