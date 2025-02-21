import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export function Header() {
 return (
    <header className="flex justfy-cednter items-center p-6 sticky top-0">
        <nav className="navbar flex items-center w-full justify-between">
            <div className="logo flex items-center">
                <h1 className="text-2xl">Logo</h1>
            </div>
            <div className="navlinks flex gap-8">
                <ul className="flex gap-8 items-center">
                    <li><Link href="/" className="active">Home</Link></li>
                    <li><Link href="/Exemplares">Exemplares</Link></li>
                    <li><Link href="/Cuidados">Cuidados</Link></li>
                    <li><Link href="/Disponiveis">Disponiveis</Link></li>
                </ul>
                <Link href="" className="btn">Fale comigo!</Link>
            </div>
            <button className="btn menu w-16"><FontAwesomeIcon icon={faBars} className="" /></button>
        </nav>
    </header>
 )
}