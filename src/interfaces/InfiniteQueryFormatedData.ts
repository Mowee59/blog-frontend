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


/**
 *
 * This is the type definition of the data returned by the fetch function used in the useInfinitequery
 * Thus type of data makes sure the hooks workds properly
 *
 */

import { Payload } from "./Payload";
import { Article, Article_Preview } from "./Article";

export interface infiniteQueryFormatedData {
  data: Payload<Article_Preview[]>;
  currentPage: number;
  nextPage: number | null;
}
