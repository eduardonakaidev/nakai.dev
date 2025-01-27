import Link from "next/link";
import { SocialBar } from "../social-bar";
import UserLogo from "@/assets/Max-R_Headshot (1).jpg"
import Image from "next/image";
export function WelcomeSection(){
    return(
        <section className="w-full h-fit flex sm:flex-row p-10 flex-col-reverse gap-12 sm:gap-0">
        <div className=" w-full sm:w-1/2 flex flex-col gap-8">
          <h1 className="font-epilogue font-bold text-5xl">Hi, I am Eduardo, Software Developer</h1>
          <div>
            <p className="font-epilogue font-normal text-2xl">Hello World!!</p>
            <p className="font-epilogue font-normal text-2xl">Welcome my portfolio</p>
          </div>
          <Link href="#" className="bg-gray_theme w-fit flex items-center justify-center px-16 py-6">
          <p className="text-white font-medium text-xl font-epilogue">Contact</p>
          </Link>
        </div>
        <div className=" w-full sm:w-1/2 h-fit flex flex-col items-center justify-center gap-8">
        <Image src={UserLogo} alt="user-logo" className="w-80 rounded-t-3xl"/>
        <SocialBar/>
        </div>
      </section>
    )
}