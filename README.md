# Quick-Ai

Quick-Ai is a powerful, full-stack AI-driven application designed to provide users with a variety of tools, including article and blog title generation, image generation, image editing (background removal and object removal), and resume reviewing. The platform offers both free and premium tiers, with advanced features reserved for premium users.

## 🚀 Features

### AI Content Generation
- **Article Generation**: Create detailed articles based on user prompts.
- **Blog Title Generation**: Generate catchy and relevant titles for blog posts.
- **Resume Review**: Extract text from PDF resumes and provide constructive AI feedback (Strengths, Weaknesses, Improvements).

### AI Image Tools
- **Image Generation**: Text-to-image generation using ClipDrop API.
- **Background Removal**: Automatically remove backgrounds from images using Cloudinary's AI transformations.
- **Object Removal**: Remove specific objects from images by describing them.

### User Dashboard & Community
- **Personal Creations**: Users can view their history of generated content and images.
- **Community Gallery**: Browse and like images published by other users.
- **Subscription Management**: Access control for premium features.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/) for React
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router Dom](https://reactrouter.com/)
- **State Management/Notifications**: [React Hot Toast](https://react-hot-toast.com/)

### Backend
- **Framework**: [Express.js](https://expressjs.com/) (Node.js)
- **Database**: [Neon](https://neon.tech/) (PostgreSQL) with `@neondatabase/serverless`
- **AI Integration**:
  - [OpenAI SDK](https://github.com/openai/openai-node) (Interfacing with Google Gemini API)
  - [ClipDrop API](https://clipdrop.co/apis) (Image Generation)
- **File Handling**:
  - [Multer](https://github.com/expressjs/multer) (File Uploads)
  - [Cloudinary](https://cloudinary.com/) (Image Storage and Transformations)
  - [pdf-parse](https://www.npmjs.com/package/pdf-parse) (PDF Text Extraction)
- **Authentication**: [Clerk SDK](https://clerk.com/docs/references/nodejs/overview) for Express

---

## 📡 API Routes

### AI Routes (`/api/ai`)
| Route | Method | Auth | Description | Tier |
|---|---|---|---|---|
| `/generate-article` | POST | Yes | Generates an article from a prompt. | Free (limit 10) / Premium |
| `/generate-blog-title` | POST | Yes | Generates a blog title. | Free (limit 10) / Premium |
| `/generate-image` | POST | Yes | Text-to-image generation. | Premium Only |
| `/remove-image-background`| POST | Yes | Removes background from an uploaded image. | Premium Only |
| `/remove-image-object` | POST | Yes | Removes an object from an image via prompt. | Premium Only |
| `/resume-review` | POST | Yes | Extracts text from PDF and provides review. | Premium Only |

### User Routes (`/api/user`)
| Route | Method | Auth | Description |
|---|---|---|---|
| `/get-user-creations` | GET | Yes | Retrieves all creations for the logged-in user. |
| `/get-published-creations`| GET | Yes | Retrieves all images published to the community. |
| `/toggle-like-creations` | POST | Yes | Likes or unlikes a creation. |

---

## 🔐 Authentication & Access Control

The project uses **Clerk** for secure user authentication. 
- **Middlewares**: A custom `auth` middleware checks the user's subscription plan and free usage limits stored in Clerk's `privateMetadata`.
- **Free Plan**: Allows up to 10 generations for Articles and Blog Titles.
- **Premium Plan**: Unlimited access to generation tools and exclusive access to Image/PDF tools.

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Quick-Ai
   ```

2. **Install Dependencies**:
   ```bash
   # Root
   npm install

   # Client
   cd client
   npm install

   # Server
   cd ../server
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `server` directory with:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLIPDROP_API_KEY=your_clipdrop_api_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   DATABASE_URL=your_neon_db_url
   ```

4. **Run the Application**:
   ```bash
   # From the server directory
   npm run dev

   # From the client directory
   npm run dev
   ```
