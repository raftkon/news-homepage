import Image from "next/image";
import React from "react";

export default function ProductsPreview() {
  return (
    <section id="products-preview">
      <div className="container mt-12 mx-auto flex-wrap flex flex-col items-center max-w-lg px-4 lg:flex-row lg:max-w-8xl space-y-4 xl:space-y-0 mb-12">
        {/* item 1 */}
        <div className="flex lg:w-1/2 xl:w-1/3  space-x-10 ">
          {/* image container */}
          <div className="">
            <Image
              width={200}
              height={254}
              src={"/images/image-retro-pcs.jpg"}
              alt="retro computer picture"
              className="w-full"
            />
          </div>

          {/* Content container */}
          <div className="flex flex-col gap-2 lg:pr-10">
            <h3 className="text-5xl font-bold text-gray-300">01</h3>
            <p className="text-lg font-extrabold">Reviving Retro PCs</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, eveniet?
            </p>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex lg:w-1/2 xl:w-1/3  space-x-10 ">
          {/* image container */}
          <div className="">
            <Image
              width={200}
              height={254}
              src={"/images/image-top-laptops.jpg"}
              alt="retro computer picture"
              className="w-full"
            />
          </div>

          {/* Content container */}
          <div className="flex flex-col gap-2 lg:pr-10">
            <h3 className="text-5xl font-bold text-gray-300">02</h3>
            <p className="text-lg font-extrabold">Reviving Retro PCs</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, eveniet?
            </p>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex lg:w-1/2 xl:w-1/3  space-x-10 ">
          {/* image container */}
          <div className="">
            <Image
              width={200}
              height={254}
              src={"/images/image-gaming-growth.jpg"}
              alt="retro computer picture"
              className="w-full"
            />
          </div>

          {/* Content container */}
          <div className="flex flex-col gap-2 lg:pr-10">
            <h3 className="text-5xl font-bold text-gray-300">03</h3>
            <p className="text-lg font-extrabold">Reviving Retro PCs</p>
            <p className="text-sm text-gray-500 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, eveniet?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
