import Link from 'next/link';
import classes from '../styles/components/navigation.module.scss';

export default function Navigation() {
    return(
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/shop">Shop</Link>
            </nav>
        </header>
    );
}