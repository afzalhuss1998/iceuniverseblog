# IceUniverse Blog Backend

Node.js + Express + MongoDB (Atlas) backend for blog application.
This project connects to a MongoDB Atlas cluster and provides APIs to manage **users, blogs, categories, and comments**.

---

## 🚀 Features
- MongoDB Atlas integration
- Express.js server
- Sample collections:
  - Users
  - Blogs
  - Categories
  - Comments
- Ready for CRUD operations

---

## 📂 Project Structure

```
iceuniverse-backend/
├── db.js              # MongoDB connection setup
├── index.js           # Main server file (test script)
├── .env               # Environment variables (gitignored)
├── .gitignore         # Git ignore rules
├── admin.html         # Admin panel frontend
├── index.html         # Main blog frontend
└── README.md          # Project documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/afzalhuss1998/iceuniverse-backend.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run server
```bash
npm start
```

---

## 🔧 Environment Configuration

Create a `.env` file in the root directory:

```bash
MONGO_URI=mongodb+srv://iceuniverse:iceuniverse@iceuniverse.qxm5ary.mongodb.net/iceuniverse?retryWrites=true&w=majority&appName=iceuniverse
PORT=5000
```

---

## 🗄️ Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  role: String, // "admin", "user"
  createdAt: Date
}
```

### Blogs Collection
```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  category: String,
  excerpt: String,
  author: String,
  date: Date,
  readTime: String,
  tags: [String]
}
```

### Categories Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  postCount: Number
}
```

### Comments Collection
```javascript
{
  _id: ObjectId,
  blogId: ObjectId,
  author: String,
  content: String,
  date: Date
}
```

---

## 🚀 API Endpoints

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get blog by ID
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create user

---

## 🔒 Security Features

- Environment variable protection
- Password hashing for users
- Input validation and sanitization
- Rate limiting (recommended)

---

## 📱 Frontend Integration

The backend serves both:
- **Admin Panel** (`/admin`) - Content management
- **Main Site** (`/`) - Public blog view

---

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🆘 Support

For support and questions, please contact the development team.
