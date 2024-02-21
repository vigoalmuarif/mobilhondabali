export default function sitemap() {
    return [
      {
        url: 'https://mobilhondabali.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://mobilhondabali.vercel.app/pricelist',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://mobilhondabali.vercel.app/products',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    ]
  }