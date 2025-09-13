# Academic Portfolio Website

A modern, responsive academic portfolio website built with Next.js, TypeScript, and MongoDB. Features a clean design inspired by Academic Pages with blog functionality and portfolio showcases.

## Features

- 🎨 Clean, academic-focused design
- 📱 Fully responsive layout
- 📝 Blog system with MongoDB backend
- 🎯 Portfolio project showcases
- 📚 Publications management
- 📄 CV/Resume display
- 🔍 SEO optimized
- ⚡ Fast loading with Next.js App Router

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: MongoDB
- **Data Fetching**: React Query (TanStack)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local installation or MongoDB Atlas)
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd blog
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your MongoDB connection string:

   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   # Or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### MongoDB Setup

#### Local MongoDB

1. Install MongoDB locally
2. Start the MongoDB service
3. Use the connection string: `mongodb://localhost:27017/portfolio`

#### MongoDB Atlas (Cloud)

1. Create a free MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env.local` file

## Project Structure

```
├── src/
│   ├── app/                    # App Router pages
│   │   ├── api/               # API routes
│   │   ├── blog/              # Blog pages
│   │   ├── portfolio/         # Portfolio pages
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   └── sidebar.tsx       # Navigation sidebar
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and configs
│   └── styles/               # Global styles
├── public/                   # Static assets
└── package.json
```

## Customization

### Personal Information

1. **Profile Section** (`src/components/sidebar.tsx`):
   - Add your profile photo to `/public/profile.jpg`
   - Update name, title, and institution
   - Update social media links

2. **About Page** (`src/app/page.tsx`):
   - Update the hero section
   - Modify research interests
   - Add recent updates

3. **Publications** (`src/app/publications/page.tsx`):
   - Add your publications
   - Update academic platform links

4. **Portfolio** (`src/app/portfolio/page.tsx`):
   - Add your projects
   - Include project images in `/public/`

5. **CV** (`src/app/cv/page.tsx`):
   - Update education, experience, awards
   - Add your CV PDF to `/public/cv.pdf`

### Styling

The project uses Tailwind CSS with a clean, academic theme. Key colors:

- Primary: Blue (`blue-600`, `blue-700`)
- Secondary: Gray shades
- Accent colors for different content types

### Blog Management

The blog system supports:

- Creating posts via API
- Markdown content (can be extended)
- Tags and categories
- Read time estimation
- Publication status

## API Endpoints

- `GET /api/blog` - Get all published blog posts
- `POST /api/blog` - Create a new blog post
- `GET /api/blog/[id]` - Get a specific blog post
- `PUT /api/blog/[id]` - Update a blog post
- `DELETE /api/blog/[id]` - Delete a blog post

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help setting up your portfolio:

1. Check the [Issues](https://github.com/your-username/portfolio/issues) page
2. Create a new issue if your problem isn't already covered
3. Include relevant details about your setup and the problem you're facing

---

Built with ❤️ for the academic community
