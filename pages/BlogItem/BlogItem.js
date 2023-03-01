import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';

import catBanner from '/public/images/catBanner.png';
import catXmas from '/public/images/catXmas.png';

import playCircle from '/public/images/play-circle.png';
import back from '/public/images/Arrow.png';

export default function BlogItem() {
	return (
		<Layout>
			<Head>
				<title>Contact Form</title>
			</Head>
			<Image src={catBanner} height={485} width={1920} />

			<section>
				<div
					style={{
						padding: '10px 100px 0px 392px',
					}}
				>
					<Link href="/Blog/Blog">
						<button style={{ background: 'none', border: 'none' }}>
							<Image src={back} height={16} width={16} alt="play" />
						</button>
					</Link>
					<div
						style={{
							height: '1020px',
							width: '1136px',
						}}
					>
						<h4>BLOG-NOVEMBER 22,2022</h4>

						<h1>Finding the right standing desk on MKTFY</h1>

						<Image src={catXmas} height={610} width={1136} />
						<h3>Finding the right standing desk on MKTFY</h3>

						<p>
							Today, we are experiencing a greater move to working from home.
							This means that our spaces require a design… that accommodates a
							wide variety of different functions. From watching Netflix on the
							sofa, to converting the living room into your home gym, home
							office and play pen. Our lives are ever changing but our bodies
							still require a certain design and form to each activity our space
							serves.
						</p>

						<button
							style={{
								float: 'right',
								background: 'none',
								border: 'none',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '143px',
							}}
						>
							Next blog
							<Image src={playCircle} height={16} width={16} alt="play" />
						</button>
					</div>
				</div>
			</section>
		</Layout>
	);
}
