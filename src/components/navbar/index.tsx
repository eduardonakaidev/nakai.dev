import Link from "next/link";

export function NavBar(){
    return(
        <>
        <nav className="gap-6 sm:flex flex-row hidden">
            <Link href="#about">
            About
            </Link>
            <Link href="">
            Work
            </Link>
            <Link href="#contact">
            Contact
            </Link>
        </nav>
        <nav className="sm:hidden flex flex-row">
            
        </nav>
        </>
    )
}