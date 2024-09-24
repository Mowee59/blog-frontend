import { Payload } from "./Payload";
import { Article } from "./article";

export interface infiniteQueryFormatedData {
  data: Payload<Article[]>;
  currentPage: number;
  nextPage: number | null;
}
