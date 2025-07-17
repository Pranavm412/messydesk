import { MetadataRoute } from "next";

const baseUrl=process.env.NEXT_PUBLIC_BASE_URL

export default function sitemap(): MetadataRoute.Sitemap {
    return[
        {
            url :`${baseUrl}`,
            lastModified:new Date('2025-07-16')
        },
        {
            url :`${baseUrl}/services`,
            lastModified:new Date('2025-07-16')
        },
        {
            url :`${baseUrl}/portfolio`,
            lastModified:new Date('2025-07-16')
        },
        {
            url :`${baseUrl}/about`,
            lastModified:new Date('2025-07-16')
        },
        {
            url :`${baseUrl}/contact`,
            lastModified:new Date('2025-07-16')
        }
    ]
};
