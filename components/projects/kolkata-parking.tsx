import React from "react";
import BgCard from "../ui/bg-Card";
import Customtext from "../ui/CustomText";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";

const Kolkataparking = () => {
  return (
    <BgCard
      className=" w-full flex flex-col gap-7 hover:border-gray-200 "
      delay={0.3}
    >
      <div className="flex flex-col gap-4">
        <Customtext heading={true}>Kolkata Parking</Customtext>
        <div className="flex md:flex-row flex-col-reverse gap-5 justify-between ">
          <div className="text-gray-200 text-xs md:text-sm">
            <Customtext>
              - Built a community-driven{" "}
              <Customtext bold={true}>parking finder for Kolkata</Customtext>{" "}
              using <Customtext bold={true}>Next.js, Supabase,</Customtext> and{" "}
              <Customtext bold={true}>Prisma, </Customtext>
              featuring an interactive{" "}
              <Customtext bold={true}>Leaflet/OpenStreetMap </Customtext>{" "}
              interface where users browse and{" "}
              <Customtext bold={true}>filter live spots</Customtext> by vehicle
              type, price, and verification status.
            </Customtext>
            <br />
            <Customtext>
              -{" "}
              <Customtext bold={true}>
                Integrated the OpenStreetMap Nominatim API for geocoding and
                reverse geocoding,
              </Customtext>{" "}
              with city-bounded search (viewbox biasing),
              <Customtext bold={true}>in-memory caching </Customtext> to reduce
              redundant requests, and graceful fallback when no match is found —
              enabling free-text location search without a paid API key.
            </Customtext>
            <br />
            <Customtext>
              -{" "}
              <Customtext bold={true}>
                Designed a no-auth crowdsourcing submission flow{" "}
              </Customtext>{" "}
              where users drop a pin, search by address, and upload photos to
              add new spots directly to a Supabase-backed database, with all
              community submissions flagged &quot; Unverified &quot; pending
              review.
            </Customtext>
            <br />
          </div>

          <div className="relative w-full md:w-90 shrink-0">
            <Image
              src="/KolkataParking.png"
              width={1456}
              height={816}
              loading="eager"
              sizes="(max-width: 768px) 100vw, 360px"
              alt="KolkataParking"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <a
          href={"https://kolkata-parking.vercel.app/"}
          aria-label="Live link of kolkata parking"
          target="_blank"
        >
          <CustomButton>
            <Customtext BtnText={true}>Live Link</Customtext>
            <Customtext emoji={true}>🔗</Customtext>
          </CustomButton>
        </a>
      </div>
    </BgCard>
  );
};

export default Kolkataparking;
