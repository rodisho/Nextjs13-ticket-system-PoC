import Link from 'next/link';
import Image from 'next/image';
import Logo from './dojo-logo.png';
import LogoutButton from "@/app/components/LogoutButton";

export default function Navbar({user}) {
    return (
        <nav>
            <Image
                src={Logo}
                alt='IT Helpdesk logo'
                width={80}
                quality={100}
                placeholder='blur'
            />
            <h1>IT HELP DESK</h1>
            <Link href='/'>Dashboard</Link>
            <Link href='/tickets' className="mr-auto">Tickets</Link>
            {user && <span>Hello, {user.email}</span>}
            <LogoutButton/>
        </nav>
    );
}
