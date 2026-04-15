# Atelier

Atelier is a pastel, sketch-inspired beauty storefront built with Next.js App Router. It includes a full multi-page storefront flow (home, shop, product detail, cart, checkout, about, contact), reusable UI components, and starter API routes for product browsing and order submission.

## Project Highlights

- Hand-crafted visual style with sketch panels, circles, and custom typography treatment
- Product catalog with categories, best sellers, and new arrivals
- Dynamic product detail route using slug-based pages
- Cart and checkout pages for the purchase flow
- API routes for products and orders under App Router
- SQL schema included for future PostgreSQL persistence

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app:

http://localhost:3000

## Available Scripts

- `npm run dev` - run development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## API Endpoints

- `GET /api/products` - returns product list from mock data
- `POST /api/orders` - accepts an order payload and returns a pending order response

## Project Structure

- `app/` - routes, pages, and API route handlers
- `components/` - reusable site and UI components
- `lib/` - domain types, mock data, and API flow examples
- `database/schema.sql` - relational schema for production backend planning

## Backend Status

Atelier currently uses mock in-memory data for products and a simulated order acceptance route. The SQL schema is ready for connecting a real PostgreSQL backend in the next phase.

## Notes

- This repository is frontend-first with backend scaffolding in place.
- Recommended next step: connect API routes to PostgreSQL and persist cart/order data.
