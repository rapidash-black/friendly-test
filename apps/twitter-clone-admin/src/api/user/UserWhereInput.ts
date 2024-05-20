import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  profilePic?: JsonFilter;
  tweets?: TweetListRelationFilter;
  username?: StringNullableFilter;
  walletAddress?: StringNullableFilter;
  walletProvider?: StringNullableFilter;
  walletType?: StringNullableFilter;
};
