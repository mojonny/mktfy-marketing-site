import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import logo from '/public/images/Logo.jpg';
import background from '/public/images/Footer.jpg';
import copyright from '/public/images/copyright.png';

export const siteTitle = 'MKTFY Marketing Website';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<>
					<div style={{ display: 'flex', gap: '5px', color: '#ffffff' }}>
						<p>Buy and sell stuff!</p>
						<p style={{ color: '#FFBA00' }}> Get started now</p>
					</div>

					<Image priority src={logo} height={45} width={200} alt="" />
					<nav style={{ display: 'flex', gap: '50px', color: '#ffffff' }}>
						<a href="/">
							<h1 className={utilStyles.headingMd}>Home</h1>{' '}
						</a>
						<a href="/About/About">
							<h1 className={utilStyles.headingMd}> About </h1>
						</a>

						<a href="/Blog/Blog">
							<h1 className={utilStyles.headingMd}> News </h1>
						</a>

						<a href="/Contact/Contact">
							<h1 className={utilStyles.headingMd}> Contact </h1>
						</a>
					</nav>
				</>
			</header>

			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
			<footer className={styles.footer}>
				<div className={styles.textContainer}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Image
							priority
							src={logo}
							height={45}
							width={200}
							alt=""
							style={{
								position: 'relative',
								zIndex: '1',
							}}
						/>
						<h3
							className={utilStyles.headingMd}
							style={{
								width: '290px',
								position: 'relative',
								zIndex: '1',
								color: '#ffffff',
							}}
						>
							Here at MKTFY we are human centric. We believe the stuff we buy,
							share and give are the backbone of our society — and we hope to
							ensure that we do this in a conscious way.
						</h3>
					</div>
					<div>
						<div className={styles.linkList}>
							<h3>Jump to:</h3>

							<p className={utilStyles.headingMd}> About us </p>
							<p className={utilStyles.headingMd}> MKTFY business </p>
							<p className={utilStyles.headingMd}> Donate with MKTFY </p>
							<p className={utilStyles.headingMd}> Blog </p>
						</div>
					</div>
					<div>
						<div className={styles.linkList}>
							<h3>Contact</h3>

							<p className={utilStyles.headingMd} style={{ color: '#FFBA00' }}>
								{' '}
								Contact us{' '}
							</p>
							<p className={utilStyles.headingMd}> +1 888 345 6789 </p>
							<p className={utilStyles.headingMd}>
								{' '}
								Suite 9, 123 1st Street SW, Calgary, Alberta T2T 7F7{' '}
							</p>
							<p className={utilStyles.headingMd}> Blog </p>
						</div>
					</div>
				</div>
				<Image
					priority
					src={copyright}
					height={30}
					width={1135}
					style={{
						marginTop: '30px',
						align: 'center',
						position: 'relative',
						zIndex: '1',
					}}
					alt=""
				/>
				<Image
					priority
					src={background}
					height={610}
					width={1920}
					style={{
						position: 'absolute',
						left: '0',
						bottom: '0',
						right: '0',
					}}
					alt=""
				/>
			</footer>
		</div>
	);
}
