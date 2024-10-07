import { Media, Media_Plain } from "./Media";

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  metaImage?: { data: Media };
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
  metaTwitterImage?: { data: Media };
}
export interface Seo_Plain {
  metaTitle: string;
  metaDescription: string;
  metaImage?: Media_Plain;
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
  metaTwitterImage?: Media_Plain;
}

export interface Seo_NoRelations {
  metaTitle: string;
  metaDescription: string;
  metaImage?: number;
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
  metaTwitterImage?: number;
}

