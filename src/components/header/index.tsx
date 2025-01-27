import Image from "next/image";
import NakaiDevIcon from "@/assets/nakai-dev-icon.png"
import { NavBar } from "../navbar";
export function HeaderApp(){
    return(
        <header className="w-full flex flex-row justify-between p-10 ">
            <Image src={NakaiDevIcon} alt="nakai-dev-icon" className="w-44"/>
            <NavBar/>
        </header>
    )
}