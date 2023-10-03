import { SideBarCard} from "Interfaces/sidebar/sidebar.interface"
import { classNames } from "Utilities/classes";
import "./styles/SideBaCardView.scss"

interface SideBarCardViewProps {
    card: SideBarCard;
    isOpen: boolean;
}
export default function SideBaCardView({card, isOpen,}: SideBarCardViewProps){
    return <div className="SideBarCardViewProps">
        <div className={classNames('profileInfo', isOpen? '': 'collapsed')}>
            <div className="name">{card.displayName}</div>
            <div className="title">{card.title}</div>
        </div>
    </div>
}