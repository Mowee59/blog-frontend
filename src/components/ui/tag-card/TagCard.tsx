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


import { Tag } from "@/interfaces/Tag";
import React from "react";
import Image from "next/image";
import { fetchArticlesByTagName } from "@/libs/axiosServer";
import Link from "next/link";

//Typing the component props
type TagCardProps = {
  tag: Tag;
};

const TagCard = (props: TagCardProps) => {
  // Assigning the cover image attributes to a variable
  const coverImageAttributes = props.tag.attributes.cover.data.attributes;

  // Asssigning the thumbnail to a varialbe
  const coverImageThumbnail = coverImageAttributes.formats.thumbnail;

  // Getting the number of articles related to the tag
  const articlesCount = props.tag.attributes.articles?.data.length;

  return (
    <article className="flex h-[225px] w-full flex-col gap-5">
      <Link href={`/tags/${props.tag.attributes.name.toLocaleLowerCase()}`}>
        <div className="flex flex-col gap-5">
          <div className="relative h-[150px]">
            <Image
              src={`${process.env.STRAPI_URL}${coverImageThumbnail.url}`}
              alt={coverImageAttributes.alternativeText}
              fill
              className=" rounded-xl object-cover"
            ></Image>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-medium leading-snug text-neutral-900 dark:text-neutral-300">{`#${props.tag.attributes.name}`}</h3>
            <h4 className="text-sm font-medium leading-4 text-[#3d3d3d] dark:text-neutral-400">{`${articlesCount} Articles`}</h4>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default TagCard;
