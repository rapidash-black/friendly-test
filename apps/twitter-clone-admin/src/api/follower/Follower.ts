export type Follower = {
  createdAt: Date;
  followee: string | null;
  follower?: Follower | null;
  followers?: Array<Follower>;
  id: string;
  updatedAt: Date;
};
