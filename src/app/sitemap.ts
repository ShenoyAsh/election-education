import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://election-education-542097547792.us-central1.run.app';
  const routes = [
    '',
    '/dashboard',
    '/quiz',
    '/map',
    '/planner',
    '/simulator',
    '/resources',
    '/myth-buster',
    '/accessibility',
    '/results',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
