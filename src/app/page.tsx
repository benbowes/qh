"use client";

import React from "react";
import Image from "next/image";
import Data from "./data/data.json";
import { Result } from "./data/data";
import { Header, SortNavigation } from "../components";

export default function Home() {
  const [list, setList] = React.useState<Result[]>(Data.results);

  return (
    <div className="w-[760px] m-auto px-4 border">
      <Header />

      <div className="flex justify-between mb-2">
        <h1>
          <span className="font-semibold">5</span> <i>hotels in</i>{" "}
          <span className="font-semibold">Sydney.</span>
        </h1>

        <SortNavigation list={list} onChange={setList} />
      </div>

      <main>
        {list.map(({ id, offer, property }) => (
          <React.Fragment key={id}>
            {/* List item structure */}
            <div className="flex justify-between mb-4">
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
                    <span data-testid="price">
                      {" "}
                      {offer.displayPrice.amount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
