export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/admin/',
      },
      sitemap: 'https://mobilhondabali.vercel.app/sitemap.xml',
    }
  }