/**
 *
 * This is the type definition of the data returned by the fetch function used in the useInfinitequery
 * Thus type of data makes sure the hooks workds properly
 *
 */

import { Payload } from "./Payload";
import { Article } from "./article";

export interface infiniteQueryFormatedData {
  data: Payload<Article[]>;
  currentPage: number;
  nextPage: number | null;
}
