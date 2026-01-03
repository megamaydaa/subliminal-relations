import { z, defineCollection } from "astro:content";

const workshopCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.union([
      z.object({
        title: z.string(),
        image: image().refine((img) => img.width >= 500, {
          message: "Image must be at least 500 pixels wide!",
        }),
        imageAlt: z.string().optional(),
        eventDetails: z.array(z.string()).optional(),
        date: z.string().optional(),
        time: z.string().optional(),
        location: z.string().optional(),
      }),
      z.object({
        title: z.string(),
        flyer: image().refine((img) => img.width >= 500, {
          message: "Flyer image must be at least 500 pixels wide!",
        }),
        flyerAlt: z.string().optional(),
        location: z.string(),
      }),
    ]),
});

const zineCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image().refine((img) => img.width >= 500, {
        message: "Image must be at least 500 pixels wide!",
      }),
      imageAlt: z.string().optional(),
      pdf: z.string(),
    }),
});

export const collections = {
  workshops: workshopCollection,
  zines: zineCollection,
};
