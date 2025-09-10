# 🛍️ ShoppyGlobe - React E-commerce Application

## 🚀 Live Demo
Check out the live project here: [ShoppyGlobe Live](https://creative-marigold-99a45f.netlify.app/)


ShoppyGlobe is a complete **e-commerce web application** built with **React + Vite**, **Redux Toolkit**, and **Tailwind CSS**.  
It demonstrates modern frontend practices: API data fetching with `useEffect`, Redux state management, routing, and responsive UI.

---

## 🚀 Features
- Product listing from [DummyJSON API](https://dummyjson.com/products).
- Product detail page with dynamic route parameters.
- Shopping cart using Redux (add, remove, update quantity).
- Checkout page with order summary and customer form.
- Search functionality to filter products.
- 404 page for invalid routes.
- Responsive Tailwind UI.
- Lazy loading with `React.lazy` + `Suspense`.
- Error handling for failed API calls.

---

## 🛠️ Tech Stack
- React + Vite  
- Redux Toolkit  
- React Router DOM  
- Tailwind CSS  
- DummyJSON API  

---

## 📂 Folder Structure

    ShoppyGlobe/
    ├─ public/
    ├─ src/
    │  ├─ components/
    │  │  ├─ Header.jsx
    │  │  ├─ ProductList.jsx
    │  │  ├─ ProductItem.jsx
    │  │  ├─ ProductDetail.jsx
    │  │  ├─ Cart.jsx
    │  │  ├─ CartItem.jsx
    │  │  ├─ Checkout.jsx
    │  │  └─ NotFound.jsx
    │  ├─ store/
    │  │  ├─ cartSlice.js
    │  │  └─ store.js
    │  ├─ App.jsx
    │  ├─ main.jsx
    │  └─ index.css
    ├─ package.json
    └─ README.md

---

## ⚡ Installation

```bash
git clone https://github.com/vjbravo123/ShoppyGlobe-FE-.git
cd ShoppyGlobe
npm install
npm run dev


🎯 Usage

Browse products on the home page.

Click a product card to view details.

Add products to the cart from product cards or the detail page.

View and update cart from the Cart page.

Proceed to Checkout, fill out the dummy form, and place an order



🧭 Implementation Notes

Product fetching: ProductList.jsx uses useEffect + useState to fetch https://dummyjson.com/products and store locally in the component.

Product detail: ProductDetail.jsx fetches a single product by id using the route param.

Redux (cart only):

cartSlice.js should export actions: addToCart, removeFromCart, increaseQty, decreaseQty, clearCart.

store.js configures Redux store with only the cart reducer to keep the store simple as per requirements.

Checkout: Checkout.jsx displays cart items (from Redux), total amount, and a dummy customer form. On placing order, the cart is cleared and the user redirected to Home.

Routing: Use react-router-dom with lazy-loaded routes and Suspense fallback.



✅ Project Requirements Covered

Component structure (App, Header, ProductList, ProductItem, ProductDetail, Cart, CartItem, Checkout, NotFound)

Props usage & reusability

API fetching with useEffect

Error handling

Redux for cart state management (cart-only store)

Search filter (optional)

Routing with React Router

Event handling (add/remove/quantity update)

Lists rendering with unique keys

Code splitting & lazy loading

Tailwind responsive styling


🔗 Repository

https://github.com/vjbravo123/ShoppyGlobe-FE-.git



👨‍💻 Author

Developed by Vivek Joshii
MERN Stack Developer | React Enthusiast