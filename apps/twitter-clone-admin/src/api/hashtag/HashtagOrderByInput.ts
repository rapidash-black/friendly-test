import { SortOrder } from "../../util/SortOrder";

export type HashtagOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tag?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
};
