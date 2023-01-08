import Link from "next/link"
import Image from "next/image"
import icon from '../public/w-icon-25.png'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center text-3xl bg-cyan-600 text-white">
            <Link className="" href="/">WeatherAlerts</Link>
            <Image src={icon} alt="" width={50} height={50} />
            <Link className="" href="/subscribe">Subscribe</Link>
        </nav>
    )
}

export { Navbar }