import LinkedinLogo from "@/assets/logo-linkedin.svg"
import GithubLogo from "@/assets/logo-github.svg"
import InstagramLogo from "@/assets/logo-instagram.svg"
import Image from "next/image"
export function SocialBar(){
    return(
        <div className="w-fit flex flex-row h-fit gap-8">
            <Image src={LinkedinLogo} alt="linkedin-logo" className="h-8 w-8"/>
            <Image src={GithubLogo} alt="github-logo" className="h-8 w-8"/>
            <Image src={InstagramLogo} alt="instagram-logo" className="h-8 w-8"/>
        </div>
    )
}