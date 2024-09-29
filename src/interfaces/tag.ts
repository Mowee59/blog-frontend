// Interface automatically generated by schemas-to-ts

import { Media } from "./Media";
import { Media_Plain } from "./Media";
import { Article } from "./article";
import { Article_Plain } from "./article";

export interface Tag {
  id: number;
  attributes: {
    createdAt: Date | string;
    updatedAt: Date | string;
    publishedAt?: Date | string;
    name: string;
    cover: { data: Media };
    articles?: { data: Article[] };
    description?: string;
    locale: string;
    localizations?: { data: Tag[] };
  };
}
export interface Tag_Plain {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  publishedAt?: Date | string;
  name: string;
  cover: Media_Plain;
  articles?: Article_Plain[];
  description?: string;
  locale: string;
  localizations?: Tag_Plain[];
}

export interface Tag_NoRelations {
  id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  publishedAt?: Date | string;
  name: string;
  cover: number;
  articles?: number[];
  description?: string;
  locale: string;
  localizations?: Tag[];
}
