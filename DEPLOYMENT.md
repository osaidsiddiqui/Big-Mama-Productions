# Vercel Deployment Guide - Big Mama Productions

This guide walks you through deploying the Big Mama Productions website to Vercel.

## 📋 Prerequisites

1. **GitHub Account** - Repository must be on GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Node.js 18+** - Installed locally

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "GitHub" as sign-up method
4. Authorize Vercel to access your GitHub repositories

### Step 3: Import Project to Vercel

1. In Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Search for and select your GitHub repository
3. Click **"Import"**

### Step 4: Configure Build Settings

Vercel should auto-detect these settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

If not auto-detected:
1. Click **"Environment Variables"** (optional)
2. Add any variables from `.env.example`:
   ```
   VITE_APP_NAME=Big Mama Productions
   VITE_API_URL=https://api.example.com
   ```
3. Click **"Deploy"**

### Step 5: Wait for Deployment

- Vercel will build and deploy automatically
- You'll see build logs in real-time
- Deployment usually takes 1-2 minutes
- Once complete, you'll get a live URL like: `https://big-mama-productions.vercel.app`

### Step 6: Add Custom Domain (Optional)

1. In Vercel Dashboard, go to **Settings** → **Domains**
2. Add your domain (e.g., `bigmamaproductions.com`)
3. Follow DNS configuration steps:
   - **Option A**: Update nameservers to Vercel's
   - **Option B**: Add CNAME records to your current registrar
4. DNS changes typically take 24-48 hours to propagate

### Step 7: Configure GitHub Actions (Optional)

For automatic CI/CD on every push:

1. In GitHub, go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   ```
   VERCEL_TOKEN: [Your Vercel token]
   VERCEL_ORG_ID: [Your Vercel org ID]
   VERCEL_PROJECT_ID: [Your Vercel project ID]
   ```

3. To get these tokens:
   - **VERCEL_TOKEN**: vercel.com → Settings → Tokens
   - **VERCEL_ORG_ID**: In Vercel Dashboard URL or Settings
   - **VERCEL_PROJECT_ID**: In vercel.json or project settings

## 🔄 Continuous Deployment

Once connected to GitHub:

1. **Every push to `main` branch** → Auto-deploys to Production
2. **Every pull request** → Creates Preview Deployment
3. **View deployment logs** in Vercel Dashboard

## 🌐 Environment Variables

### Production Environment (Vercel)

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add variables for production:
   ```
   VITE_APP_NAME=Big Mama Productions
   VITE_API_URL=https://api.bigmamaproductions.com
   VITE_CONTACT_EMAIL=contact@bigmamaproductions.com
   ```

### Local Development

Create `.env.local` file:
```
VITE_APP_NAME=Big Mama Productions
VITE_API_URL=http://localhost:3000
```

## 📊 Monitoring & Logs

### View Deployment Logs

1. Vercel Dashboard → Project → Deployments
2. Click on any deployment to see logs
3. Check:
   - Build logs (compilation, bundling)
   - Runtime logs (errors, warnings)

### Performance Monitoring

Vercel provides Web Vitals:
1. Analytics → Web Vitals
2. Monitor:
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)

## 🔐 Security Settings

### Security Headers

Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Cache-Control

### HTTPS

- ✅ Automatic HTTPS enabled
- ✅ Auto-renewal of SSL certificates
- ✅ Redirect HTTP to HTTPS

## 🆘 Troubleshooting

### Build Fails

1. Check build logs in Vercel Dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Dependency conflicts

3. Solutions:
   ```bash
   npm install  # Reinstall deps
   npm run build  # Test build locally
   npm run lint  # Check for errors
   ```

### Deployment Fails

1. Ensure GitHub branch is up to date
2. Check if all files are committed
3. Verify Node.js version compatibility
4. Check Vercel project settings

### Site Shows 404

1. Verify output directory is `dist`
2. Check `vercel.json` rewrites configuration
3. Ensure build completed successfully

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Issues**: Report build issues
- **Vercel Support**: https://vercel.com/help

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub main branch
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Build settings verified
- [ ] Environment variables configured (if needed)
- [ ] First deployment successful
- [ ] Site accessible at Vercel URL
- [ ] Custom domain configured (if using)
- [ ] GitHub Actions secrets added (optional)
- [ ] Analytics enabled (optional)

---

**Deployment Status**: Ready for Vercel ✅

Your Big Mama Productions website is now configured and ready to deploy to Vercel!
