import LinkedinLogo from "@/assets/logo-linkedin.svg"
import GithubLogo from "@/assets/logo-github.svg"
import InstagramLogo from "@/assets/logo-instagram.svg"
import Image from "next/image"
import Link from "next/link"
import {GithubIcon,InstagramIcon,LinkedinIcon} from "lucide-react"
export function SocialBar() {
    return (
        <div className="w-fit flex flex-row h-fit gap-8">
            <Link href="https://www.linkedin.com/in/eduardo-nakai-0b2657232/" target="_blank">
                <LinkedinIcon className="h-8 w-8" />
            </Link>
            <Link href="https://github.com/eduardonakaidev" target="_blank">
                <GithubIcon className="h-8 w-8" />
            </Link>
            <Link href="https://www.instagram.com/eduardo_nakai/" target="_blank">
                <InstagramIcon className="h-8 w-8" />
            </Link>
        </div>
    )
}