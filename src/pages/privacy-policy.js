import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Movie Buzz</title>
      </Head>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At Movie Buzz, we take your privacy seriously. We do not collect personal information without your consent.
        </p>
        <p className="text-gray-700 mb-4">
          Some data may be collected for analytics or ads through cookies. You can disable cookies in your browser settings.
        </p>
        <p className="text-gray-700">
          This policy may be updated from time to time. For questions, contact us at support@moviebuzz.com.
        </p>
      </div>
    </>
  );
}
