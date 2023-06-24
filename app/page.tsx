"use client"

import Image from "next/image"
import { BannerSvg } from "@/assets"

import SearchInputDomain from "@/components/SearchInputDomain"

export default function IndexPage() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row ">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold lg:text-5xl">
            Claim Your Unique .router Domain Name Today
          </h1>
          <p>
            Discover your ideal .router domain name and establish a standout
            online presence. Find and secure your unique web address today!
          </p>
          <SearchInputDomain />
        </div>
        <Image
          className="order-first hidden lg:order-last lg:block"
          src={BannerSvg}
          width={800}
          height={800}
          alt="Banner Image"
        />
      </div>
    </section>
  )
}
