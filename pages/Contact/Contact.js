import Link from 'next/link';
import Head from 'next/head';

import Image from 'next/image';
import Layout from '../../components/layout';

import sleepyCat from '/public/images/sleepyCat.png';
import partners from '/public/images/Partners.png';

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
					alignItems: 'center',
				}}
			>
				<div>
					<h2>Let's start a conversation</h2>
					<p>
						At MKTFY your ideas generate real change and concrete action. We’re
						here to listen, collaborate and act together. If you have a problem
						on our app, interested in working with us, are a business or want to
						donate let us know. There are no limits to what we can do together.
					</p>

					<form className="form-container">
						<div className="form-input-layout">
							{/* I am sure this form can be simplified in the future */}
							<label className="first">
								Name
								<br />
								<input
									className="input-style"
									type="text"
									name="name"
									placeholder=" Pearl"
								/>
							</label>

							<label className="email">
								Email
								<br />
								<input
									type="email"
									name="email"
									placeholder=" pearl_the_cat@meow.com"
									className="input-style"
								/>
							</label>

							<label className="phone">
								Phone
								<br />
								<input
									type="phone"
									name="phone"
									placeholder=" +1 (000)000-0000"
									className="input-style"
								/>
							</label>
							<label className="phone">
								Your message
								<br />
								<textarea
									type="phone"
									name="phone"
									placeholder=" Your message"
									className="input-style"
								/>
							</label>
							<button> Save changes</button>
							<div>
								At MKTFY we respect your privacy and do not tolerate spam, and
								will never sell, rent, lease or give away your information. We
								only buy, sell or donate your stuff here at MKTFY.
							</div>
						</div>
						<p>
							At MKTFY we respect your privacy and do not tolerate spam, and
							will never sell, rent, lease or give away your information. We
							only buy, sell or donate your stuff here at MKTFY.{' '}
						</p>
					</form>
				</div>
			</section>
		</Layout>
	);
}
