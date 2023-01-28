import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Blog() {
	return (
		<Layout>
			<Head>
				<title>News</title>
			</Head>
			<h1>News</h1>
			<h2>
				<Link href="/">Back to home</Link>
			</h2>
		</Layout>
	);
}
