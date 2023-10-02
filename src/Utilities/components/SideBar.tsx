import { useState } from "react";
import { SideBarCard, SideBarItem } from "../../types/types";
import { classNames } from "./classes";
import { BiAlignRight } from "react-icons/bi";
import SideBaCardView from "./SiderBarCardView";
import SideBarItemView from "./SideBarItemView";

interface SideBarProps {
    items: SideBarItem
    card: SideBarCard
}

export default function SideBar({items, card}: SideBarProps) {

    function handlecClick(){
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return <div className={classNames('sideBar', isOpen? 'expanded': 'collapsed')}>Prueba
        <div className="menuButton">
            <button className="HomeButton" onClick={handlecClick}>
                <BiAlignRight></BiAlignRight>
            </button>
        </div>
        <SideBaCardView card={card} isOpen={isOpen} />
        {
            items.map(item =>(
                <SideBarItemView key={item.id} item={item} isOpen={isOpen} />
            ))
        }
    </div>;
}