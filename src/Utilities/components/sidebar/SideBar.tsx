import { useState } from "react";
import { SideBarCard, SideBarItem } from "Interfaces/sidebar/sidebar.interface";
import { classNames } from "Utilities/classes";
import { BsShopWindow } from "react-icons/bs";
import SideBaCardView from "./SiderBarCardView";
import SideBarItemView from "./SideBarItemView";
import "./styles/SideBar.scss"
import {BsBoxSeam, BsBarChart, BsCart3, BsReceiptCutoff, BsClipboardCheck} from 'react-icons/bs'

export default function SideBar() {
    const items:SideBarItem[] = [
        {
          id: '1',
          label: 'Gestión de Ventas',
          icon: BsCart3,
          url: "/",
        },
        {
          id: '2',
          label: 'Inventario',
          icon: BsBoxSeam,
          url: "/",
        },
        {
          id: '3',
          label: 'Gestión de Mesas',
          icon: BsClipboardCheck,
          url: "/",
        },
        {
          id: '4',
          label: 'Facturación y Propina',
          icon: BsReceiptCutoff,
          url: "/",
        },
        {
          id: '5',
          label: 'Reportes',
          icon: BsBarChart,
          url: "/",
        },
      ];
      const card:SideBarCard = {
        id: "card01",
        displayName: "ventas",
        title: "Ejemplo",
        photoUrl: "/",
        url: "/",
      }
    function handlecClick(){
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return <div className={classNames('SideBar', isOpen? 'expanded': 'collapsed')}>
        <div className="menuButton">
            <button className="HomeButton" onClick={handlecClick}>
                <BsShopWindow></BsShopWindow>
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