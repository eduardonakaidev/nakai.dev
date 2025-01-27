import Link from "next/link";

export function NavBar(){
    return(
        <>
        <nav className="gap-6 sm:flex flex-row hidden">
            <Link href="">
            About
            </Link>
            <Link href="">
            Work
            </Link>
            <Link href="">
            Contact
            </Link>
        </nav>
        <nav className="sm:hidden flex flex-row">
            
        </nav>
        </>
    )
}