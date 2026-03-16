import { BACKEND_URL } from '@/constants/backendUrl';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;


    // 1. Fetch all categories
    const catRes = await fetch(`${BACKEND_URL}/products/categories`);
    const rawCategories = await catRes.json();
    const categories = rawCategories.data.data

    // 2. Generate Category URLs
    const categoryEntries = categories.map((cat: any) => ({
        url: `${BASE_URL}/machines/${cat.slug}`,
        lastModified: new Date(cat.updatedAt),
        priority: 0.8,
    }));

    const machineRes = await fetch(`${BACKEND_URL}/products/machines`)
    const rawMachines = await machineRes.json()
    const machines = rawMachines.data.data

    // generate machine urls
    const machineEntries = machines.map((mac: any) => ({
        url: `${BASE_URL}/machines/${mac.categoryId.slug}/${mac.slug}`,
        lastModified: new Date(mac.updatedAt),
        priority: 0.7,
    }));

  

    return [
        { url: BASE_URL, lastModified: new Date(), priority: 1 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.5 },
        { url: `${BASE_URL}/blogs`, lastModified: new Date(), priority: 0.6 },
        ...categoryEntries,
        ...machineEntries,
    ];
}