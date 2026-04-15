export const apiFlowExample = {
  browseProducts: {
    client: "GET /api/products",
    server: "queries products with categories",
    response: "product cards with pricing + shade metadata",
  },
  productDetails: {
    client: "GET /api/products/:slug",
    server: "joins reviews and related products",
    response: "detail page data model",
  },
  cartFlow: {
    client: "POST /api/cart-items",
    server: "upserts cart_items by user_id + product_id",
    response: "updated cart summary",
  },
  checkoutFlow: {
    client: "POST /api/orders",
    server: "creates orders + order_items in a transaction",
    response: "order confirmation id",
  },
  reviewsFlow: {
    client: "POST /api/reviews",
    server: "stores review and recalculates product rating",
    response: "fresh review aggregate",
  },
} as const;
