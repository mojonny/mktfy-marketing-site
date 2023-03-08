import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import logo from '/public/images/Logo.jpg';
import bg from '/public/images/Footer.jpg';
import copyright from '/public/images/copyright.png';

export const siteTitle = 'MKTFY Marketing Website';

export default function Layout({ children }) {
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
							<h1 className={utilStyles.headingMd}> Home </h1>{' '}
						</a>
						<a href="/About">
							<h1 className={utilStyles.headingMd}> About </h1>
						</a>

						<a href="/Blog">
							<h1 className={utilStyles.headingMd}> News </h1>
						</a>

						<a href="/Contact">
							<h1 className={utilStyles.headingMd}> Contact </h1>
						</a>
					</nav>
				</>
			</header>

			<main>{children}</main>

			<footer
				className={styles.footer}
				style={{
					backgroundImage: `url(${bg.src})`,
					width: '100%',
					height: '100%',
				}}
			>
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
							<a href="/About">
								<p className={utilStyles.headingMd}> About us </p>
							</a>

							<p className={utilStyles.headingMd}> MKTFY business </p>
							<p className={utilStyles.headingMd}> Donate with MKTFY </p>
							<a href="/Blog">
								<p className={utilStyles.headingMd}> Blog </p>
							</a>
						</div>
					</div>
					<div>
						<div className={styles.linkList}>
							<h3>Contact</h3>

							<a href="/Contact">
								<p
									className={utilStyles.headingMd}
									style={{ color: '#FFBA00' }}
								>
									{' '}
									Contact us{' '}
								</p>
							</a>
							<p className={utilStyles.headingMd}> +1 888 345 6789 </p>
							<p className={utilStyles.headingMd}>
								{' '}
								Suite 9, 123 1st Street SW, Calgary, Alberta T2T 7F7{' '}
							</p>
						</div>
					</div>
				</div>
				<br />
				<Image
					priority
					src={copyright}
					height={30}
					width={1135}
					style={{
						align: 'center',
						position: 'relative',
						zIndex: '1',
					}}
					alt=""
				/>
			</footer>
		</div>
	);
}
