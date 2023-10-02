import { SideBarItem } from "../../types/types"
import { classNames } from "./classes";

interface SidebarItemViewProps {
    item: SideBarItem;
    isOpen: boolean;
}
export default function SideBarItemView ({item, isOpen,}: SidebarItemViewProps){
    return <div className="SideBarItem">
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