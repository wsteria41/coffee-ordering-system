"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../context/CartContext"; 

export default function NavBar() {
  const { cart } = useCart();

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/cat_logo.jpg" alt="logo" width={100} height={100} />
      </div>

      <nav className={styles.menu}>
        <Link href="/">HOME</Link>
        <Link href="/menu">FULL MENU</Link>
        <Link href="/merch">TAVERN MERCH</Link>
        <Link href="/story">OUR STORY</Link>
        <Link href="/drip">THE DRIP</Link>
        <Link href="/event">HOST AN EVENT</Link>
        <button className={styles.orderBtn}>ORDER ONLINE</button>
      </nav>

    <div className={styles.cart}>
  <Link href="/cart" className={styles.cartLink}>
    <FaShoppingCart size={20} />
    <span className={styles.cartCount}>{cart.length}</span>
  </Link>
</div>

    </header>
  );
}
