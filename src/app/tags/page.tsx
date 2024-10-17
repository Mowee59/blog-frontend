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



import React from "react";
import {  fetchTags } from "@/libs/axiosServer";
import TagCard from "@/components/ui/tag-card/TagCard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aniss.dev | Les tags",
  description: "Explorez ici les differenttes thématiques abordées sur le blog.",
  openGraph: {
    title: "Aniss.dev | Les tags",
    description: "Explorez ici les differenttes thématiques abordées sur le blog.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniss.dev | Les tags",
    description: "Explorez ici les differenttes thématiques abordées sur le blog.",
  },
};


const Tags: React.FC = async () => {
  // Fetching all the tags
  const tagsPayload = await fetchTags();

  // we extract the actual tags list from the payload
  const tags = tagsPayload.data;

  return (
    <main className="container  lg:max-w-screen-lg">
      <section className="flex flex-col items-center gap-9 px-6 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {tags.map((tag) => (
          <TagCard tag={tag} key={tag.id}></TagCard>
        ))}
      </section>
    </main>
  );
};

export default Tags;

