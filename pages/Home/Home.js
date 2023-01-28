import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">Back to home</Link>
			</h2>
		</>
	);
}
