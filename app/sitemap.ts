import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const urlList:string[] = ['/'];

	//Format the list 
  	return urlList.map((url) => ({
    	url: 'https://cartberry.co' + url,
    	lastModified: new Date(),
  	}));
} 