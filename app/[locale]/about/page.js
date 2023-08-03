import Link from "next-intl/link";

const getData = async (lang) => {
	const res = await fetch(
		`https://64c33e35eb7fd5d6ebd0a4ea.mockapi.io/kangnam/api/${lang}`
	);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export default async function AboutPage({ params: { locale } }) {
	if (!locale) return;
	const data = await getData(locale);

	return (
		<div>
			<div>
				<Link href="/" locale="vn">
					VietNam
				</Link>{" "}
				|{" "}
				<Link href="/" locale="en">
					English
				</Link>
				<br />
				<br />
			</div>
			<div>{JSON.stringify(data)}</div>
			<ul>{data && data.map((e) => <li key={e.id}>{e.name}</li>)}</ul>
			<div>
				<br />
			</div>
			<Link href={"/about"}>About</Link>
		</div>
	);
}
