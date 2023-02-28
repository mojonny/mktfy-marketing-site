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
import cloudSide from '/public/images/cloudsSide.svg';
import phoneAd from '/public/images/phoneAd.svg';
import closeUp from '/public/images/catClose.png';
import perlaGrey from '/public/images/PerlaGrey.png';
import catLick from '/public/images/catLick.png';
import statsFrame from '/public/images/statsFrame.png';
import lineIcon from '/public/images/lineIcon.png';
import catTree from '/public/images/catTree.png';
import catTree2 from '/public/images/catTree2.png';

import styles from '../styles/Home.module.css';

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
						justifyContent: 'left',
						marginLeft: '400px',
						alignItems: 'center',
						gap: '160px',
						height: '440px',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: '275px',
						}}
					>
						<Image src={phone} />
						<h3>Accessible</h3>
						<p style={{ textAlign: 'center' }}>
							Access MKTFY from anywhere in the world with our easy to use app.
							Need a power cable in Italy? We can help!
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: '275px',
						}}
					>
						<Image src={honest} />
						<h3>Honest</h3>
						<p style={{ textAlign: 'center' }}>
							Safety and trust are core values of MKTFY. All your transactions
							are monitored for fairness and safety.
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: '275px',
						}}
					>
						<Image src={payment} />
						<h3>Easy Payments</h3>
						<p style={{ textAlign: 'center' }}>
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
						height: '480px',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '1000px',
						}}
					>
						<div>
							<div
								style={{
									paddingTop: '0px',
									color: '#ffffff',
									fontSize: '40px',
									fontWeight: '700',
								}}
							>
								Buy and sell stuff on Market For You
							</div>
							<p
								style={{
									width: '420px',
									color: '#ffffff',
									fontFamily: 'Open Sans',
									fontSize: '20px',
								}}
							>
								MKTFY wants to make sure that the stuff you buy is in working
								order or your money back. Find out more about our protection
								policy.
							</p>
						</div>

						<Image src={playButton} />
					</div>
				</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						backgroundImage: `url(${cloudSide.src})`,
						backgroundRepeat: 'no-repeat',
						height: '848px',
					}}
				>
					<Image
						style={{ marginTop: '75px', marginLeft: '400px' }}
						src={phoneAd}
					/>
					<div>
						<div
							style={{
								width: '590px',
								height: '550px',
							}}
						>
							<div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
									}}
								>
									<div
										style={{
											height: '40px',
											width: '20px',
											fontWeight: 'bold',
										}}
									>
										1
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											padding: '10px',
											width: '500px',
											height: '165px',
										}}
									>
										<p
											style={{
												marginTop: '0px',
												fontWeight: 'bold',
											}}
										>
											Register and login
										</p>
										<div>
											Register as a user on our Market For You App or web portal
											through our easy sign-up form. After you have verified
											your credentials log-in to MKTFY and start browsing!
										</div>
									</div>
								</div>
							</div>
							<div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
									}}
								>
									<div
										style={{
											height: '40px',
											width: '20px',
											fontWeight: 'bold',
										}}
									>
										2
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											padding: '10px',
											width: '500px',
											height: '165px',
										}}
									>
										<p
											style={{
												marginTop: '0px',
												fontWeight: 'bold',
											}}
										>
											Search items to buy
										</p>

										<div>
											After you have logged-in you now have access to exclusive
											items sold on MKTFY. Search through various categories or
											search for something special. The app is easy to use.
										</div>
									</div>
								</div>
							</div>
							<div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
									}}
								>
									<div
										style={{
											height: '40px',
											width: '20px',
											fontWeight: 'bold',
										}}
									>
										3
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											padding: '10px',
											width: '500px',
											height: '165px',
										}}
									>
										<p
											style={{
												marginTop: '0px',
												fontWeight: 'bold',
											}}
										>
											Register and login
										</p>
										<div>
											Have something to sell? Create an offer where you upload
											photos of your stuff, categorize and set your price for
											your item. Other users will see you stuff and contact you
											to purchase. Have fun!
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '34px',
								marginLeft: '375px',
								width: '442px',
							}}
						>
							<h2>Are you a business? Check out our MKTFY Storefront?</h2>
							<div>
								MKTFY prioritizes trusted resellers of electronic or luxury
								goods on our platform. We work to build a marketplace based on
								transparency and trust.{' '}
							</div>
							<button
								style={{
									backgroundColor: '#FFBA00',
									color: '#ffffff',
									width: '345px',
									height: '65px',
									borderRadius: '100px',
									border: 'none',
									boxShadow: '4px 4px 8px 0px #00000026',
								}}
							>
								MKTFY Business
							</button>
						</div>
						<Image
							style={{
								marginTop: '75px',
								marginLeft: '262px',
							}}
							src={closeUp}
						/>
					</div>
				</div>

				<div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<Image style={{ margin: '75px 0px 190px 0px' }} src={perlaGrey} />
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '34px',
								marginLeft: '375px',
								width: '442px',
							}}
						>
							<h2>Looking to make a donation of your stuff? We can help!</h2>
							<div>
								MKTFY has partnered with Goodwill, Salvation Army and Women in
								Need throughout North America. We strive for a more sustainable
								future. Contact us to make a donation.{' '}
							</div>
							<button
								style={{
									backgroundColor: '#FFBA00',
									color: '#ffffff',
									width: '345px',
									height: '65px',
									borderRadius: '100px',
									border: 'none',
									boxShadow: '4px 4px 8px 0px #00000026',
								}}
							>
								MKTFY Business
							</button>
						</div>
					</div>
				</div>

				<div
					className="cat-banner"
					style={{
						backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${catLick.src})`,
						backgroundRepeat: 'no-repeat',
						width: '1920px',
					}}
				>
					<Image
						style={{ marginTop: '75px', marginLeft: '392px' }}
						src={statsFrame}
					/>
				</div>

				<div className={styles.blog}>
					<h1>Blog</h1>
					<div className={styles.blogSlider}>
						<div style={{ display: 'flex', gap: '47px' }}>
							<div
								style={{
									backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(77, 77, 77, 1) ), url(${catTree.src})`,
									backgroundRepeat: 'no-repeat',
									height: '620px',
									minWidth: '920px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end',
									color: '#ffffff',
									padding: '40px',
								}}
							>
								<h2 style={{ width: '500px' }}>
									Finding the right standing desk on MKTFY
								</h2>
								<div>
									<Image src={lineIcon} />
									BLOG-NOVEMBER 22,2022
								</div>
							</div>

							<div
								style={{
									backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(77, 77, 77, 1) ), url(${catTree.src})`,
									backgroundRepeat: 'no-repeat',
									height: '618px',
									minWidth: '920px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end',
									color: '#ffffff',
									padding: '40px',
								}}
							>
								<h2 style={{ width: '500px' }}>
									Make memories with MKTFY Event Stuff
								</h2>
								<div>
									<Image src={lineIcon} />
									BLOG-NOVEMBER 12,2022
								</div>
							</div>

							<div
								style={{
									backgroundImage: `linear-gradient( rgba(0, 0, 0, 0), rgba(77, 77, 77, 1) ), url(${catTree.src})`,
									backgroundRepeat: 'no-repeat',
									height: '618px',
									minWidth: '920px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end',
									color: '#ffffff',
									padding: '40px',
								}}
							>
								<h2 style={{ width: '500px' }}>
									Finding the right standing desk on MKTFY
								</h2>
								<div>
									<Image src={lineIcon} />
									BLOG-NOVEMBER 22,2022
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
