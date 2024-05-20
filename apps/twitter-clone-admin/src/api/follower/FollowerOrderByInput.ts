import { SortOrder } from "../../util/SortOrder";

export type FollowerOrderByInput = {
  createdAt?: SortOrder;
  followee?: SortOrder;
  followerId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
