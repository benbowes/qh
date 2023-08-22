import Image from "next/image";
import Data from "./data/data.json";
import { Header, SortNavigation } from "../components";

export default function Home() {
  return (
    <div className="w-[760px] m-auto px-4 border">
      <Header />

      <div className="flex justify-between mb-2">
        <h1>
          <span className="font-semibold">5</span> <i>hotels in</i>{" "}
          <span className="font-semibold">Sydney.</span>
        </h1>

        <SortNavigation />
      </div>

      {Data.results.map(({ id, offer, property }) => (
        <>
          {/* List item structure */}
          <div key={id} className="flex justify-between mb-4">
            <div className="mr-4 relative">
              <div className="absolute top-2 bg-white text-qantasRed px-3 py-2 leading-none text-xs font-semibold">
                {offer.promotion.title}
              </div>
              <Image
                src={property.previewImage.url}
                alt={property.previewImage.caption}
                width={145}
                height={125}
              />
            </div>

            <div className="w-full pt-2 border-t flex justify-between">
              {/* property details left */}
              <div className="max-w-[66%] relative">
                <div className="flex justify-start">
                  <h2 className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    {property.title}
                  </h2>
                  <div className="ml-4 whitespace-nowrap">
                    {property.rating.ratingValue} {property.rating.ratingType}
                  </div>
                </div>

                {/* property address */}
                <div className="text-xs text-gray-500">
                  {property.address.join(", ")}
                </div>

                {/* promo attributes */}
                <div className="text-xs absolute bottom-0">
                  {offer.name && (
                    <div className="text-qantasRed">{offer.name}</div>
                  )}
                </div>
              </div>
              <div className="flex self-end text-right flex-col text-xl font-semibold">
                <div className="text-xs text-gray-500">
                  1 night total ({offer.displayPrice.currency})
                </div>
                <div>
                  <span className="text-xs font-normal align-top mt-1 inline-block">
                    $
                  </span>
                  <span>{offer.displayPrice.amount}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}

      <pre>{JSON.stringify(Data, null, 2)}</pre>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
