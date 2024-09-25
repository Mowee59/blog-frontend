/**
 *
 * This is the type definition of the data returned by the fetch function used in the useInfinitequery
 * Thus type of data makes sure the hooks workds properly
 *
 */

import { Payload } from "./Payload";
import { Article, Article_Preview } from "./article";

export interface infiniteQueryFormatedData {
  data: Payload<Article_Preview[]>;
  currentPage: number;
  nextPage: number | null;
}
