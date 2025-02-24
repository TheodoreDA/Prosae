import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://prosae.net";

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          fr: BASE_URL + '/fr',
        },
      },
    },
    {
      url: BASE_URL + '/correction',
      lastModified: new Date(),
      priority: 0.9,
      alternates: {
        languages: {
          fr: BASE_URL + '/fr/correction',
        },
      },
    },
    {
      url: BASE_URL + '/interpretariat',
      lastModified: new Date(),
      priority: 0.9,
      alternates: {
        languages: {
          fr: BASE_URL + '/fr/interpretariat',
        },
      },
    },
    {
      url: BASE_URL + '/biographie',
      lastModified: new Date(),
      priority: 0.9,
      alternates: {
        languages: {
          fr: BASE_URL + '/fr/biographie',
        },
      },
    },
    {
      url: BASE_URL + '/qui_suis_je',
      lastModified: new Date(),
      priority: 0.8,
      alternates: {
        languages: {
          fr: BASE_URL + '/fr/qui_suis_je',
        },
      },
    },
    {
      url: BASE_URL + '/contact',
      lastModified: new Date(),
      priority: 0.5,
      alternates: {
        languages: {
          fr: BASE_URL + '/fr/contact',
        },
      },
    },
  ]
}
