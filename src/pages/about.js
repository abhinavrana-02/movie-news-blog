import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Movie Buzz</title>
      </Head>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Movie Buzz</h1>
        <p className="text-gray-700">
          Welcome to <strong>Movie Buzz</strong> – your go-to source for the latest Hollywood movie news, reviews, and updates.
          We gather headlines and stories from reliable sources to keep you in the loop about what’s happening in the entertainment world.
        </p>
        <p className="mt-4 text-gray-700">
          Whether you’re a film buff or just browsing, Movie Buzz offers a clean, ad-light experience curated just for you.
        </p>
      </div>
    </>
  );
}
