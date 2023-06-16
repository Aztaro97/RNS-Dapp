import { z } from "zod"

export const SearchSchema = z.object({
	name: z.string().min(2, {
		message: "Domain name must be at least 2 caracteres"
	})
})