export enum ButtonType {
  Primary,
  Secondary,
}

export enum RowCardType {
  LEFT,
  RIGHT,
}

export type Feature = {
  icon: string;
  header: string;
  content: string;
  id: string;
};

export type Pricing = {
  name: string;
  monthlyPricing?: string;
  yearlyPricing?: string;
  yearlySaving?: string;
  options?: string[];
  recommanded: boolean;
};

export type Review = {
  content: string;
  name: string;
  job: string;
  imageUrl: string;
};

export type Blog = {
  id: string;
  imageUrl: string;
  type: string;
  header: string;
  content: string;
};

export const enum IntersectionAmount {
  ALL,
  HALF,
  QUARTER,
}
