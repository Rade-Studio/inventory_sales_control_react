import { useState } from 'react'

import '../App.css'

// MENU DUBAN
import SideBar from '../Utilities/components/SideBar'
import { SideBarCard, SideBarItem } from '../types/types'
import {AiTwotoneShop} from 'react-icons/ai'
import profileImage from '../assets/OIP.jpg'
// >
function App() {
  const [count, setCount] = useState(0)
// >
  const items:SideBarItem[] = [
    {
      id: '1',
      label: 'hola',
      icon: AiTwotoneShop,
      url: "/",
    },
    {
      id: '2',
      label: 'queso',
      icon: AiTwotoneShop,
      url: "/",
    },
    {
      id: '3',
      label: 'pan',
      icon: AiTwotoneShop,
      url: "/",
    } 

  ];
  const card:SideBarCard = {
    id: "card01",
    displayName: "Gestion de venta ",
    title: "Ejemplo",
    photoUrl: profileImage,
    url: "/",
  }
  return <div>
    <SideBar items={items} card={card}/>
  </div>
  
}
// MENU DUBAN FIN
export default App
