import { MetadataRoute } from "next";

const baseUrl=process.env.NEXT_PUBLIC_BASE_URL

export default function sitemap(): MetadataRoute.Sitemap {
    return[
        {
            url :`${baseUrl}`
        },
        {
            url :`${baseUrl}/services`
        },
        {
            url :`${baseUrl}/portfolio`
        },
        {
            url :`${baseUrl}/about`
        },
        {
            url :`${baseUrl}/contact`
        }
    ]
};
