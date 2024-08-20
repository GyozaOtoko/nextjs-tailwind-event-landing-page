"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/background.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="flex justify-center align-center">

        <div className="container relative z-10 my-auto grid gap-10 lg:grid-cols-1 xl:grid-cols-2 place-items-center lg:w-4/6">
          <div>
            <Typography variant="h1" color="white" className="text-7xl lg:max-w-3xl mb-10">
              <span className="text-blue-500">Blockchain </span>Adoption, one project at a time
            </Typography>
            <Typography variant="lead" color="white" className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
            >
              First ever flat fee premium launchpad and crowdfunding platform. No token. Guaranteed Allocation. Fully Refundable.
            </Typography>
            <div className="flex items-center gap-4">
              <Button variant="gradient" color="white">
                Get started
              </Button>
              {/* <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton> */}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap">
              <Image
                width={512}
                height={512}
                src={`/image/polo-horse.png`}
                alt="Polo Ventures Logo"
                className="w-100"
              />
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
