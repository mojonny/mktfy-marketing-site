import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/Contact.module.css';
import Layout from '../../components/layout';

import sleepyCat from '/public/images/sleepyCat.png';
import mapIcon from '/public/images/mapIcon.png';

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Contact Form</title>
			</Head>
			<Image src={sleepyCat} height={485} width={1920} />
			<section
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginLeft: '300px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						borderRadius: '12px',
						boxShadow: '0px 4px 12px 0px #00000040',
						marginTop: '-100px',
						paddingTop: '10px',
						paddingLeft: '90px',
						height: '733px',
						width: '1316px',
						backgroundColor: '#ffffff',
					}}
				>
					<h2>Let's start a conversation</h2>
					<p>
						At MKTFY your ideas generate real change and concrete action. We’re
						here to listen, collaborate and act together. If you have a problem
						on our app, interested in working with us, are a business or want to
						donate let us know. There are no limits to what we can do together.
					</p>

					<div className="form-container">
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								gap: '42px',
							}}
						>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '550px',
									gap: '5px',
								}}
							>
								<label className="first">
									Name
									<br />
									<input
										className={styles.formInput}
										type="text"
										name="name"
										placeholder=" Pearl"
									/>
								</label>
								<br />
								<label className="email">
									Email
									<br />
									<input
										type="email"
										name="email"
										placeholder=" pearl_the_cat@meow.com"
										className={styles.formInput}
									/>
								</label>
								<br />
								<label className="phone">
									Phone
									<br />
									<input
										type="phone"
										name="phone"
										placeholder=" +1 (000)000-0000"
										className={styles.formInput}
									/>
								</label>
								<br />
								<div>
									At MKTFY we respect your privacy and do not tolerate spam, and
									will never sell, rent, lease or give away your information. We
									only buy, sell or donate your stuff here at MKTFY.
								</div>
							</div>

							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<label className="message">
									Your message
									<br />
									<textarea
										type="text"
										name="text"
										placeholder=" Your message"
										className={styles.formTextArea}
									/>
								</label>
								<br />
								<button
									style={{
										filter: 'drop-shadow(8px 4px 4px rgb(0,0,0,0.15))',
										color: '#ffffff',
										height: '50px',
										width: '550px',
										backgroundColor: '#6318AF',
										borderRadius: '100px',
									}}
								>
									{' '}
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '10px',
							padding: '80px',
						}}
					>
						<Image src={mapIcon} height={117} width={117} />
						<div>
							<h3>
								Calgary, Alberta
								<br />
								Our Main Location
							</h3>

							<h4>
								Suite 9, 123 1st Street SW,
								<br />
								Calgary, Alberta T2T 7F7
							</h4>

							<p>+1 888 345 6789</p>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '10px',
							padding: '60px',
						}}
					>
						<Image src={mapIcon} height={117} width={117} />
						<div>
							<h3>
								San Francisco, California
								<br />
								American Branch
							</h3>

							<h4>
								346 Spear St, San Francisco, CA
								<br />
								94105, United States
							</h4>

							<p>+1 999 456 7890</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
