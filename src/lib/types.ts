interface BaseCollection {
  collectionId: string;
  collectionName: string;
  id: string;
  created: string;
  updated: string;
}

interface IEntity extends BaseCollection {
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

interface IUser extends BaseCollection {
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  verified: boolean;
  name: string;
  avatar: string;
}

interface IBackup extends BaseCollection {
  store: string;
  deviceId: string;
  file: string;
  uploaded: string;
  note: string;
}

interface ILicense extends BaseCollection {
  key: string;
  active: boolean;
  deviceId: string;
  store: string;
  activated: string;
  expires: string;
}

interface IOrder extends BaseCollection {
  Store: string;
  License: string;
  Subscription: string;
  Plan: unknown;
  Date: string | Date;
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
}

interface IPlan extends BaseCollection {
  title: string;
  price: number;
  description: string;
}

interface IPaymentMethod extends BaseCollection {
  image?: string;
  title: string;
  description?: string;
  value?: string;
  type?: string;
}

interface IPromotion extends BaseCollection {
  Plan: string;
  title: string;
  type: "percentage" | "fixed";
  value: number;
  startDate: string;
  endDate: string;
}

interface IPlanFeature extends BaseCollection {
  plan_id: string;
  feature_id: string[];
  enabled: boolean;
}

interface IFeature extends BaseCollection {
  title: string;
  description: string;
}