import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation () {
    return <div className={styles.navigation}>
        <Link href={"/home"}>Home</Link>
        <Link href={"/services"}>Serviços</Link>
        <Link href={"/about-me"}>Sobre mim</Link>
        <Link href={"/contact"}>Contato</Link>
    </div>
}