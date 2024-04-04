
import { z, defineCollection } from "astro:content"

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string())
    })
})

const cubCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})

export const collection = {
    posts: postsCollection, cubCollection
}
