import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

import sleepyCat from '/public/images/sleepyCat.png';
import partners from '/public/images/Partners.png';

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About Us</title>
			</Head>
			<Image src={sleepyCat} height={485} width={1920} />
			<section
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h2
					style={{
						height: '110px',
						width: '935px',
						textAlign: 'center',
						color: '#313131',
					}}
				>
					MKTFY is a human centric digital marketplace moving more than just
					stuff — Moving charity.
				</h2>
				<div style={{ display: 'flex', flexDirection: 'row', gap: '100px' }}>
					<p
						style={{
							height: '300px',
							width: '495px',
							textAlign: 'center',
						}}
					>
						Here at MKTFY we are a human centric. We believe the stuff we buy,
						share and give are ways we can make the world a better place — and
						we hope to ensure that we do this in a conscious way. The online
						marketplace of MKTFY enables our users to sell and buy stuff but
						also work with us to help others. We focus on ensuring a safety,
						social proof and transparency at all levels of our company. Your
						purchases, listings and donations are all quality assured to ensure
						our MKTFY community has a high quality of trust.
					</p>
					<p
						style={{
							height: '300px',
							width: '495px',
							textAlign: 'center',
						}}
					>
						Lastly, MKTFY is more than a marketplace to find cool stuff but a
						place to share stuff with others who may be in need. For items that
						you own that are gently used, forgotten or out grown we have
						partnered with various not-for-profit and charity organizations that
						will gladly take and distribute your awesome stuff! If you, your
						company or someone you love can benefit from our charitable services
						please contact us and we will be more than happy to help! Thank you!
						From the entire team at MKTFY
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '50px',
						height: '150px',
					}}
				>
					<h2>Our partners</h2>
					<Image src={partners} height={85} width={790} />
				</div>
			</section>
		</Layout>
	);
}
