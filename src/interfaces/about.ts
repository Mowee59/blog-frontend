import { Seo, Seo_Plain, Seo_NoRelations } from "./seo";

export interface About {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    content?: string;
    seo?: Seo;
  };
}
export interface About_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  content?: string;
  seo?: Seo_Plain;
}

export interface About_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  content?: string;
  seo?: Seo_NoRelations;
}