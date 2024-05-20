import { InputJsonValue } from "../../types";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  profilePic?: InputJsonValue;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  username?: string | null;
  walletAddress?: string | null;
  walletProvider?: string | null;
  walletType?: string | null;
};
