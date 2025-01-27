import Image from "next/image";
import NakaiDevIcon from "@/assets/nakai-dev-icon.png"
import { NavBar } from "../navbar";
export function HeaderApp(){
    return(
        <header className="w-full flex flex-row justify-between p-10 ">
            <h1 className="font-serif text-4xl font-normal">Nakai.Dev</h1>
            <NavBar/>
        </header>
    )
}