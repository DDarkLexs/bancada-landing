export interface BaseCollection {
  collectionId: string;
  collectionName: string;
  id: string;
  created: string;
  updated: string;
}

export interface IEntity extends BaseCollection {
  image: string;
  name: string;
  slogan: string;
  address: string;
  nif: string;
  phone: string;
  owner: string;
  email: string;
  emailVisibility: boolean;
  verified: boolean;
  active: boolean;
}

export interface IUser extends BaseCollection {
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  verified: boolean;
  name: string;
  avatar: string;
}

export interface IBackup extends BaseCollection {
  store: string;
  deviceId: string;
  file: string;
  uploaded: string;
  note: string;
}

export interface ILicense extends BaseCollection {
  key: string;
  active: boolean;
  deviceId: string;
  store: string;
  activated: string;
  expires: string;
}

export interface IOrder extends BaseCollection {
  Store: string;
  License: string;
  Subscription: string;
  Plan: unknown;
  Date: string | Date;
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
}

export interface IPlan extends BaseCollection {
  title: string;
  price: number;
  description: string;
}

export interface IPaymentMethod extends BaseCollection {
  image?: string;
  title: string;
  description?: string;
  value?: string;
  type?: string;
}

export interface IPromotion extends BaseCollection {
  Plan: string;
  title: string;
  type: "percentage" | "fixed";
  value: number;
  startDate: string;
  endDate: string;
}

export interface IPlanFeature extends BaseCollection {
  plan_id: string;
  feature_id: string[];
  enabled: boolean;
}

export interface IFeature extends BaseCollection {
  title: string;
  description: string;
}