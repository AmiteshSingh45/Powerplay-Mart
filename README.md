# Powerplay-Mart
Created Using MERN STACK



# Powerplay Mart

**Powerplay Mart** is a fully functional e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides users with a seamless shopping experience and administrators with tools to manage the store efficiently.

## Features

### For Customers

- **User Authentication**: Secure login and registration.
- **Product Browsing**: Explore a wide range of products with detailed descriptions.
- **Search and Filter**: Find products easily using categories, keywords, and price filters.
- **Shopping Cart**: Add products to your cart and manage quantities.
- **Checkout**: Securely place orders and process payments.
- **Order Tracking**: View order history and current order status.

### For Admins

- **Product Management**: Add, edit, or remove products from the store.
- **Order Management**: View and update the status of orders.
- **User Management**: Manage user accounts and roles.

### Additional Features

- Responsive design for both desktop and mobile devices.
- Integration with a payment gateway (e.g., Stripe/PayPal).
- Notifications for order updates.

## Tech Stack

- **Frontend**: React.js, Redux (for state management), and Bootstrap (for UI design).
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (NoSQL database).
- **Authentication**: JSON Web Tokens (JWT) and bcrypt for password hashing.
- **Hosting**:
  - Frontend: Deployed on [Netlify/Vercel].
  - Backend: Hosted on [Render/Heroku].
  - Database: MongoDB Atlas.

## Installation

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/powerplay-mart.git
   cd powerplay-mart
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` folder with the following:
     ```env
     PORT=4000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     PAYMENT_GATEWAY_KEY=your-payment-gateway-key
     ```

4. Start the development servers:

   ```bash
   # In the backend folder
   npm run server

   # In the frontend folder
   npm run client
   ```

5. Access the application:

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:4000`

## Folder Structure
client/
├── node_modules/
├── public/
├── src/
│   ├── components/ 
│   │   ├── Form/
│   │   │   ├── CategoryForm.js
│   │   │   └── SearchInput.js
│   │   ├── Layout/
│   │   │   ├── AdminMenu.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── Layout.js
│   │   │   └── UserMenu.js
│   │   ├── Routes/
│   │   │   ├── AdminRoute.js
│   │   │   ├── PrivateRoute.js
│   │   │   └── ProductRoutes.js
│   │   └── Spinner.js
│   ├── context/
│   │   ├── auth.js
│   │   ├── cart.js
│   │   └── search.js
│   ├── hooks/
│   │   └── useCategory.js
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AdminOrders.js
│   │   │   ├── CreateCategory.js
│   │   │   ├── CreateProduct.js
│   │   │   ├── Products.js
│   │   │   ├── UpdateProduct.js
│   │   │   └── Users.js
│   │   ├── Auth/
│   │   │   ├── ForgotPassword.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── User/
│   │   │   ├── Dashboard.js
│   │   │   ├── Order.js
│   │   │   ├── Profile.js
│   │   │   ├── About.js
│   │   │   ├── CartPage.js
│   │   │   ├── Categories.js
│   │   │   ├── CategoryWiseProduct.js
│   │   │   ├── Contact.js
│   │   │   ├── HomePage.js
│   │   │   ├── Pagenotfound.js
│   │   │   ├── Policy.js
│   │   │   └── ProductDetails.js
│   │   │   └── Search.js
│   ├── styles/
│   │   ├── AuthStyles.css
│   │   ├── CartStyles.css
│   │   ├── CategoryProductStyles.css
│   │   ├── HomePage.css
│   │   └── ProductDetailStyles.css
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   └── index.js
├── .env
├── package.json
├── package-lock.json
└── Readme



## Deployment

1. **Frontend**: Deploy the `frontend` folder to Netlify or Vercel.
2. **Backend**: Deploy the `backend` folder to Render or Heroku.
3. **Database**: Host your MongoDB database on MongoDB Atlas.

## Future Enhancements

- Add user reviews and ratings for products.
- Implement real-time notifications using WebSockets.
- Enable multi-language and multi-currency support.
- Introduce advanced analytics for admin dashboards.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Connect with Me

- **GitHub**: [https://github.com/AmiteshSingh45](https://github.com/AmiteshSingh45)
- **LinkedIn**:https\://www\.linkedin.com/in/amitesh-kumar-251188282/&#x20;

Feel free to explore, use, and enhance Powerplay Mart! 🚀

