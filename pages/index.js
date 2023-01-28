import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

import andrea from '/public/images/pexels-andrea.png';
import phone from '/public/images/PhoneIcon.png';
import honest from '/public/images/HandshakeIcon.png';
import payment from '/public/images/BillIcon.png';
import sleepingCat from '/public/images/sleepyCat.png';
import playButton from '/public/images/PlayButton.png';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',

						paddingTop: '125px',
						paddingLeft: '400px',

						backgroundImage: `url(${andrea.src})`,
						backgroundRepeat: 'no-repeat',
						width: '1920px',
						height: '700px',
					}}
				>
					<h1
						style={{
							paddingTop: '0px',
							size: '80px',
							color: '#ffffff',
							width: '844px',
							height: '185px',
							fontFamily: 'Open Sans',
							fontWeight: '700',
							fontSize: '80px',
						}}
					>
						Buy and sell stuff on Market For You
					</h1>
					<p
						style={{
							width: '420px',
							color: '#ffffff',
							fontFamily: 'Open Sans',
							fontWeight: '600',
							fontSize: '20px',
						}}
					>
						Find the stuff you love in one place. Buy, sell and do it all over
						again on Market for you. Signup and get started.
					</p>

					<button
						style={{
							backgroundColor: '#FFBA00',
							color: '#ffffff',
							width: '345px',
							height: '65px',
							borderRadius: '100px',
							border: 'none',
						}}
					>
						Sign up
					</button>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '160px',
						paddingTop: '50px',
						paddingLeft: '400px',
						height: '440px',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Image src={phone} />
						<h3>Accessible</h3>
						<p>
							Access MKFY from anywhere in the world with our easy to use app.
							Need a power cable in Italy? We can help!
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Image src={honest} />
						<h3>Honest</h3>
						<p>
							Safety and trust are core values of MKFY. All your transactions
							are monitored for fairness and safety.
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Image src={payment} />
						<h3>Easy Payments</h3>
						<p>
							Arrange payments with between you and our trusted users. Our
							application makes it easy to communicate.
						</p>
					</div>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',

						paddingTop: '125px',
						paddingLeft: '400px',

						backgroundImage: `url(${sleepingCat.src})`,
						backgroundRepeat: 'no-repeat',
						width: '1920px',
						height: '490px',
					}}
				>
					<h1
						style={{
							paddingTop: '0px',
							size: '80px',
							color: '#ffffff',
						}}
					>
						Buy and sell stuff on Market For You
					</h1>
					<p
						style={{
							width: '420px',
							color: '#ffffff',
							fontFamily: 'Open Sans',
							fontWeight: '600',
							fontSize: '20px',
						}}
					>
						MKTFY wants to make sure that the stuff you buy is in working order
						or your money back. Find out more about our protection policy.
					</p>

					<Image src={playButton} />
				</div>
			</section>
		</Layout>
	);
}
