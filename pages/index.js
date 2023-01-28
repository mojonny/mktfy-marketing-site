import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import andrea from '/public/images/pexels-andrea.png';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>{' '}
				<h1>Buy and sell stuff on Market For You</h1>
				<p>
					Find the stuff you love in one place. Buy, sell and do it all over
					again on Market for you. Signup and get started.
				</p>
				<button>Sign up</button>
				<Image src={andrea} />
			</section>
		</Layout>
	);
}
