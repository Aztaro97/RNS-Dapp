"use client"

import Image from "next/image"
import { BannerSvg } from "@/assets"
import { SearchSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm } from "react-hook-form"
import { z } from "zod"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SearchInputResult from "@/components/searchInput/searchInputResult"

export default function IndexPage() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row ">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-5xl">
            Claim Your Unique .router Domain Name Today
          </h1>
          <p>
            Discover your ideal .router domain name and establish a standout
            online presence. Find and secure your unique web address today!
          </p>
          <SearchInputForm />
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

type TInputForm = z.infer<typeof SearchSchema>

const SearchInputForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TInputForm>({
    resolver: zodResolver(SearchSchema),
  })

  const onSubmit = (data: TInputForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-5 mb-2">
        <Input
          {...register("name", { required: true })}
          type="text"
          placeholder="Search Domain Name"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        <Button type="submit">Submit</Button>
      </div>
      {errors?.name && (
        <p className="text-red-400 font-extralight">{errors.name.message}</p>
      )}
      <SearchInputResult />
    </form>
  )
}
