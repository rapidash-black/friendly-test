import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  profilePic: JsonValue;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string | null;
  walletAddress: string | null;
  walletProvider: string | null;
  walletType: string | null;
};
