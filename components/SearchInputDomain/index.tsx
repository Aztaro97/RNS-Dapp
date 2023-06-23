import React from "react"
import { SearchSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, Form, useForm } from "react-hook-form"
import { z } from "zod"

import SearchInputResult from "../searchInput/searchInputResult"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

type TInputForm = z.infer<typeof SearchSchema>

const SearchInputDomain = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<TInputForm>({
    resolver: zodResolver(SearchSchema),
  })

  const watchName = watch("name")

  const onSubmit = (data: TInputForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex items-center gap-5 mb-3">
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="Search Domain Name"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
          )}
        />
        <Button type="submit">Submit</Button>
      </div>
      {errors?.name && (
        <p className="mb-4 text-red-400 font-extralight">
          {errors.name.message}
        </p>
      )}
      {watchName ? <SearchInputResult.Skeleton /> : <SearchInputResult />}
    </form>
  )
}

export default SearchInputDomain
