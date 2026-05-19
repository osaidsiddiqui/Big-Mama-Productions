# Big Mama Productions Website

Professional recording studio website built with React, Vite, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will run at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── pages/           # Route pages (Home, About, Services, etc.)
├── components/      # Reusable components (Header, Footer, Layout, etc.)
├── App.tsx          # Main application component
├── main.tsx         # Entry point
└── index.css        # Global styles
public/
├── robots.txt       # SEO robots configuration
└── sitemap.xml      # SEO sitemap
```

## 🌍 Deployment to Vercel

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables** (if needed)
   - In Vercel Dashboard → Settings → Environment Variables
   - Add any variables from `.env.example`

4. **Deploy**
   - Vercel will automatically build and deploy on every push to main
   - Your site will be live at `https://your-project.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Connecting Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., bigmamaproductions.com)
3. Follow DNS configuration instructions from your domain provider
4. Update domain nameservers or add DNS records

## 🔧 Configuration Files

- **vercel.json** - Vercel build and deployment configuration
- **.vercelignore** - Files to ignore during Vercel deployment
- **vite.config.ts** - Vite build configuration optimized for Vercel
- **package.json** - Project dependencies and scripts

## 📊 Build Info

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Router**: React Router v6
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation

## 🎨 Key Pages

- `/` - Home/Landing page with portfolio
- `/about` - Studio history and founder bio
- `/services` - Recording, mixing, production, rental services
- `/studio` - Studio gallery and equipment
- `/portfolio` - Featured tracks and SoundCloud embeds
- `/testimonials` - Artist reviews and Yelp links
- `/contact` - Contact form and location info

## 🔐 Environment Variables

Create a `.env.local` file for local development:

```env
VITE_APP_NAME=Big Mama Productions
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@bigmamaproductions.com
```

See `.env.example` for all available variables.

## 📱 Features

- ✅ Fully responsive design
- ✅ SEO optimized (sitemap, robots.txt, meta tags)
- ✅ SoundCloud player integration
- ✅ Contact form with validation
- ✅ Mobile navigation
- ✅ Performance optimized (code splitting, lazy loading)
- ✅ Accessibility compliant
- ✅ Security headers configured

## 🚢 Production Build

```bash
npm run build
npm run preview
```

This creates an optimized production build in the `dist/` folder.

## 🆘 Support

For Vercel deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- Check GitHub Actions logs for build errors

## 📄 License

© 2025 Big Mama Productions. All rights reserved.
