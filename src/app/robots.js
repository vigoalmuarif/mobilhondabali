export default function robots() {
    return {
      rules: {
        userAgent: ['Googlebot','Applebot', 'Bingbot'],
        allow: '/',
        disallow: '/admin/',
      },
      sitemap: 'https://mobilhondabali.vercel.app/sitemap.xml',
    }
  }