// import { BASE_URL } from '@/app/lib/constants'
import { prisma } from "@/lib/client";
 
export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}
 
export default async function sitemap({ id }) {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000
  const end = start + 50000
  const products = await prisma.type.findMany({
    where: {
        id : start,
    },
    where:{
        id: end
    }
  })
  return products.map((product) => ({
    url: `https://mobilhondabali.vercel.app/products/${product.slug}`,
    lastModified: product.updated_at,
  }))
}