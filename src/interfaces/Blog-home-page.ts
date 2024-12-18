/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


// Interface automatically generated by schemas-to-ts

import { Article } from "./Article";
import { Article_Plain } from "./Article";
import { Seo, Seo_NoRelations, Seo_Plain } from "./Seo";
export interface BlogHomePage {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    seo?: Seo;
    featuredArticle?: { data: Article };
    locale: string;
    localizations?: { data: BlogHomePage[] };
  };
}
export interface BlogHomePage_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  seo?: Seo_Plain
  featuredArticle?: Article_Plain;
  locale: string;
  localizations?: BlogHomePage_Plain[];
}

export interface BlogHomePage_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  featuredArticle?: number;
  seo?: Seo_NoRelations;
  locale: string;
  localizations?: BlogHomePage[];
}
