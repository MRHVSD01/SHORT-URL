# 🔗 Short URL

A simple **URL Shortener** built with Node.js, Express, and MongoDB.  
You give it a long link → it gives you a short one.  
It also keeps track of how many times the short link has been visited. 🚀

---

## ✨ Features
- Generate short links from long URLs  
- Redirect to the original website using the short link  
- Track total clicks and see visit history  

---

## 🛠 Tech Stack
- Node.js  
- Express.js  
- MongoDB + Mongoose  

---

## 🚀 How to Run
1. Clone this repo  
   ```bash
   git clone https://github.com/MRHVSD01/SHORT-URL.git
   cd SHORT-URL
2. Install dependencies
 ```bash
   npm install
3. Create a .env file in the root folder and add:
 ```bash
   PORT=8001
   MONGO_URI=mongodb://127.0.0.1:27017/short-url
4. Start the server
 ```bash
   npm start

📌 API Endpoints
 ```bash
   POST /url → Create a new short URL
   
   GET /url/:shortId → Redirect to original URL
   
   GET /url/analytics/:shortId → Get analytics (total clicks & history)

💡 Example
 ```bash
   POST /url
   Body: { "url": "https://example.com" }

Response:
 ```bash
   { "id": "abc123" }


Now you can visit:
    ```bash
   http://localhost:8001/url/abc123

