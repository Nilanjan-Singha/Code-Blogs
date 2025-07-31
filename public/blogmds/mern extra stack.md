---
lang: "en"
site_name: ""
site_url: "/"
site_icon_url: ""
canonical_url: "/"
og_type: "article"
meta_title: ""
slug: ""
meta_description: ""
meta_image: ""
published_date: ""
modified_date: ""
---


# 📚 MERN Stack Libraries Reference

A comprehensive list of libraries commonly used in **MERN (MongoDB, Express, React, Node.js)** projects.

---

## 🔧 Core Stack

- **MongoDB**
  - `mongoose`: ODM for MongoDB
- **Express.js**
  - Core backend framework
- **React.js**
  - `react-dom`: React DOM renderer
  - `react-router-dom`: Client-side routing
- **Node.js**
  - JavaScript runtime

---

## 🔒 Authentication & Authorization

### Token-Based Auth

- `jsonwebtoken`: Create and verify JWTs
- `bcrypt` / `bcryptjs`: Hash passwords
- `cookie-parser`: Parse cookies

### OAuth & Social Login

- `passport`: Authentication middleware
- `passport-jwt`: JWT strategy for Passport
- `passport-google-oauth20`, `passport-facebook`: Social login
- `oauth2orize`: Custom OAuth2 server

---

## 🌐 Real-Time Communication

- `socket.io`: WebSocket communication
- `ws`: Lower-level WebSocket library

---

## 🧰 Utility Libraries

- `dotenv`: Environment variables
- `cors`: Cross-Origin Resource Sharing
- `morgan`: HTTP request logger
- `helmet`: HTTP security headers
- `express-validator` / `joi` / `yup`: Validation
- `nodemailer`: Send emails
- `multer`: File uploads
- `uuid`: Generate unique IDs
- `dayjs` / `moment`: Date manipulation
- `axios`: HTTP client

---

## ⚛️ React-Specific Libraries

- `react-router-dom`: Routing
- `redux` / `@reduxjs/toolkit`: State management
- `react-redux`: Redux bindings
- `zustand`, `recoil`, `jotai`: Alternative state tools
- `formik` / `react-hook-form`: Form handling
- `yup`: Schema validation
- `axios`: HTTP requests
- `react-query` / `swr`: Server state & fetching
- `react-toastify`, `notistack`: Notifications

---

## 📦 Dev & Build Tools

- `nodemon`: Auto restart server
- `concurrently`: Run frontend and backend
- `cross-env`: Cross-platform env vars
- `webpack`, `vite`, `babel`: Build tools
- `eslint`, `prettier`: Code quality

---

## 🧪 Testing Libraries

- **Backend**:
  - `jest`, `supertest`, `mocha`, `chai`
- **Frontend**:
  - `jest`, `react-testing-library`, `cypress`

---

## ☁️ Deployment & Hosting

- `pm2`: Process manager
- `serve`: Static file server
- **Cloud**: Vercel, Netlify, Heroku, Render, Railway, AWS

---

## 🛠️ Optional Enhancements

- `express-rate-limit`: Rate limiting
- `csurf`: CSRF protection
- **GraphQL**:
  - `apollo-server-express`, `graphql`, `@apollo/client`
- **API Docs**:
  - `swagger-ui-express`, `swagger-jsdoc`
- **Payments**:
  - `stripe`, PayPal SDK

---

## 📁 Suggested Folder Structure
/client → React frontend  
/server → Express backend  
/routes  
/controllers  
/models  
/middleware  
/config  
.env  
package.json

