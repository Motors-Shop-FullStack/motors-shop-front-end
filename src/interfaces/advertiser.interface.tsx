export type iAdvertiserType = {
  name: string;
  description: string;
  type: string;
};

export interface iAdvertiser {
  user: iAdvertiserType;
  create_ad?: boolean;
}
