import { z, defineCollection } from "astro:content";

const workshopCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      flyer: image().refine((img) => img.width >= 500, {
        message: "Flyer image must be at least 500 pixels wide!",
      }),
      flyerAlt: z.string().optional(),
      location: z.string(),
    }),
});

export const collections = {
  workshops: workshopCollection,
};
