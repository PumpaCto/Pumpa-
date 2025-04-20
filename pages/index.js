import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pumpa Token</title>
        <meta name="description" content="Pumpa Token Official Site" />
      </Head>
      <main className="min-h-screen bg-white text-gray-900">
        <section className="text-center py-20 bg-orange-100">
          <Image
            src="/pumpa-logo.png"
            alt="Pumpa Token Logo"
            width={128}
            height={128}
            className="mx-auto mb-6 rounded-full shadow-md"
          />
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Pumpa Token – Your Last Chance, Your Real Chance
          </h1>
          <p className="text-lg max-w-xl mx-auto text-gray-700">
            The ultimate anime-themed memecoin for the crypto-underdogs.
          </p>
          <a
            href="https://pump.fun/"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Buy on Pump.fun
          </a>
        </section>
      </main>
    </>
  )
}
