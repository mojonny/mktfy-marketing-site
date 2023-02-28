import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/layout';
import Link from 'next/link';
import catBanner from '/public/images/catBanner.png';
import catXmas from '/public/images/catXmas.png';
import catXmas2 from '/public/images/catXmas2.png';
import catXmas3 from '/public/images/catXmas3.png';
import playCircle from '/public/images/play-circle.png';

export default function Blog() {
	return (
		<Layout>
			<Head>
				<title>Contact Form</title>
			</Head>
			<Image src={catBanner} height={485} width={1920} />

			<section>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '560px 560px',
						gridRowGap: '100px',
						gridColumnGap: '25px',
						padding: '100px 500px 100px',
					}}
				>
					<div>
						<Image src={catXmas} height={325} width={560} />
						<h3>Find the right standing desk on MKTFY</h3>
						<h4>BLOG-NOVEMBER 22,2022</h4>
						<p>
							Today, we are experiencing a greater move to working from home.
							This means that our spaces require a design… that accommodates a
							wide variety of different functions. From watching Netflix on the
							sofa, to converting the living room into your home gym, home
							office and play pen. Our lives are ever changing but our bodies
							still require a certain design and form to each activity our space
							serves.
						</p>
						<Link href="/BlogItem/BlogItem">
							<button
								style={{
									background: 'none',
									border: 'none',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									width: '143px',
								}}
							>
								Continue Reading
								<Image src={playCircle} height={16} width={16} alt="play" />
							</button>
						</Link>
					</div>
					<div>
						<Image src={catXmas2} height={325} width={560} />

						<h3>Make memories with MKTFY Event Stuff</h3>
						<h4>BLOG-NOVEMBER 12,2022</h4>
						<p>
							Events these days seem to be all for the gram with a large
							production of decor and sentiments. Don't break the bank! Many
							people on the MKTFY app are newlyweds that have more than one
							thing borrowed and one thing blue. Find whatever you need to make
							a picture perfect moment happen with us!
						</p>
						<Link href="/BlogItem/BlogItem">
							<button
								style={{
									background: 'none',
									border: 'none',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									width: '143px',
								}}
							>
								Continue Reading
								<Image src={playCircle} height={16} width={16} alt="play" />
							</button>
						</Link>
					</div>
					<div>
						<Image src={catXmas3} height={325} width={560} />

						<h3>Decorate your home with MKTFY sentimental</h3>
						<h4>BLOG-NOVEMBER 02,2022</h4>
						<p>
							Your home is your sanctuary, your creative studio, safe place…
							Whatever your style consider upsetting or vintage pieces to create
							a unique and moody atmosphere to any room.
						</p>
						<Link href="/BlogItem/BlogItem">
							<button
								style={{
									background: 'none',
									border: 'none',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									width: '143px',
								}}
							>
								Continue Reading
								<Image src={playCircle} height={16} width={16} alt="play" />
							</button>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}
