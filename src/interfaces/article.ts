// Interface automatically generated by schemas-to-ts

import { Media } from "./Media";
import { Tag } from "./tag";
import { Media_Plain } from "./Media";
import { Tag_Plain } from "./tag";

export interface Article {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    title: string;
    coverImage: { data: Media };
    readingTime: string;
    content: string;
    slug: string;
    description: string;
    tags?: { data: Tag[] };
    locale: string;
    localizations?: { data: Article[] };
  };
}
export interface Article_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  title: string;
  coverImage: Media_Plain;
  readingTime: string;
  content: string;
  slug: string;
  description: string;
  tags?: Tag_Plain[];
  locale: string;
  localizations?: Article_Plain[];
}

export interface Article_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  title: string;
  coverImage: number;
  readingTime: string;
  content: string;
  slug: string;
  description: string;
  tags?: number[];
  locale: string;
  localizations?: Article[];
}