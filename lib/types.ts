export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  priceCents: number;
  rating: number;
  reviewCount: number;
  shade: string;
  summary: string;
  details: string;
  colorToken: string;
  isNew?: boolean;
  isBestSeller?: boolean;
};

export type UserModel = {
  id: string;
  email: string;
  fullName: string;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
};

export type CartItemModel = {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
};

export type OrderModel = {
  id: string;
  userId: string;
  status: "pending" | "paid" | "fulfilled" | "cancelled";
  totalCents: number;
  createdAt: string;
  updatedAt: string;
};

export type OrderItemModel = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPriceCents: number;
};

export type ReviewModel = {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  body: string;
  createdAt: string;
};
