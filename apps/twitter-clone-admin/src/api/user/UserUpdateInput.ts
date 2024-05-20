import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  password?: string | null;
  profilePic?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string | null;
  walletAddress?: string | null;
  walletProvider?: string | null;
  walletType?: string | null;
};
