import { SideBarCard} from "../../types/types"
import { classNames } from "./classes";

interface SideBarCardViewProps {
    card: SideBarCard;
    isOpen: boolean;
}
export default function SideBaCardView({card, isOpen,}: SideBarCardViewProps){
    return <div className="SideBarCardViewProps">
        <img className="SideBarCardView" src={card.photoUrl} width="100%" />
        <div className={classNames('profileInfo', isOpen? '': 'collapsed')}>
            <div className="name">{card.displayName}</div>
            <div className="title">{card.title}</div>
        </div>
    </div>
}