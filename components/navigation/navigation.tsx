import Link from 'next/link';
import styles from './navigation.module.css';

export default function TuaneNavigation() {
	return (
		<div className={styles.navigation}>
			<Link href={'/'}>Página inicial</Link>
			<Link href={'/services'}>Procedimentos</Link>
			<Link href={'/about-me'}>Sobre mim</Link>
			<Link href={'/contact'}>Contato</Link>
		</div>
	);
}
