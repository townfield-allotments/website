# Community Allotment Website

A clean, easy-to-edit Astro website for your community allotment. Built with Astro + Netlify for fast deployment and instant updates.

## 📁 Project Structure

```
your-allotment-site/
├── src/
│   ├── layouts/
│   │   ├── Layout.astro                 # Main layout template
│   │   └── PostLayout.astro             # Blog post template
│   ├── pages/
│   │   ├── index.astro                  # Home page
│   │   ├── news/
│   │   │   └── [slug].astro             # Individual news posts
│   │   ├── news-listing.astro           # News archive page
│   │   └── admin-index.astro            # CMS admin panel
│   ├── content/
│   │   └── news/                        # News posts (markdown)
│   │       ├── spring-open-day.md
│   │       └── water-system.md
│   ├── styles/
│   │   └── global.css                   # All styling
│   └── content.config.ts                # Content schema
├── public/
│   ├── admin/
│   │   └── index.html                   # CMS login interface
│   └── admin-config.yml                 # CMS configuration
├── astro.config.mjs                     # Astro configuration
└── package.json                         # Dependencies
```

**Key folders:**

- `src/content/news/` - All news posts as markdown files (created by the CMS)
- `public/admin/` - CMS admin interface
- `src/pages/news/` - Dynamic pages for individual news articles

## 🚀 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Local Development

```bash
npm run dev
```

Then visit `http://localhost:3000` in your browser.

### 3. Deploy to Netlify

**Option A: Using Netlify CLI**

```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Option B: Git-based deployment (recommended)**

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `astro build`
4. Set publish directory: `dist`
5. Deploy on every push automatically

## ✏️ Editing Guide

### Change the Content

#### Hero Section (main headline & CTA)

**File:** `src/pages/index.astro` (lines 6-14)

```astro
<h1>Where Seeds Become Stories</h1>
<p class="hero-subtitle">Join our thriving community garden...</p>
<a href="#join" class="cta-button">Join Us Today</a>
```

**Edit:** Change the text to your headline and subtitle.

#### News & Bulletins

**File:** `src/pages/index.astro` (lines 3-28)

The site includes a built-in news system for posting updates, event announcements, and community stories. Edit the `news` array at the very top of the file:

```astro
const news = [
  {
    id: 1,
    title: "Spring Open Day - A Success!",
    date: "March 15, 2024",
    excerpt: "Over 50 visitors joined us for our spring open day.",
    content: "Full story text goes here...",
    image: "🌿",
    featured: true  // Set to true to highlight on homepage
  },
  // Add more posts here
];
```

**How it works:**

- Posts in the array automatically appear on your site
- Set `featured: true` to highlight a post prominently on the homepage
- Use `featured: false` for posts that appear in the grid
- The `/news` page shows all posts
- Use any emoji that represents your story

**Quick example - announcing an event:**

```astro
{
  id: 99,
  title: "Summer Potluck - July 20th",
  date: "July 1, 2024",
  excerpt: "Join us for our annual garden celebration!",
  content: "We're hosting a summer potluck on July 20th at 3pm. Bring a dish to share and celebrate our amazing community.",
  image: "🍽️",
  featured: true
}
```

#### About Cards (What you're growing)

**File:** `src/pages/index.astro` (lines 19-44)

Each card has:

- `icon` - Emoji or icon (🥕, 🤝, 🌍, etc.)
- `h3` - Card title
- `p` - Card description

Example:

```astro
<div class="about-card">
  <div class="icon">🎯</div>
  <h3>Your Title</h3>
  <p>Your description here</p>
</div>
```

#### Plot Sizes & Pricing

**File:** `src/pages/index.astro` (lines 53-98)

Each plot card includes:

- `plot-size` - Category (Standard, Popular, Large)
- `h3` - Plot name
- `plot-desc` - Short description
- `plot-features` - List of features (Li items)
- `plot-price` - Annual cost

Update prices, sizes, features, or add/remove plot types.

#### Monthly Tips

**File:** `src/pages/index.astro` (around line 150)

Replace seasonal tips with current gardening advice. Edit emoji, title, and content.

#### Header Navigation

**File:** `src/layouts/Layout.astro` (lines 32-40)

Add or remove navigation links:

```astro
<a href="/#about">About</a>
<a href="/#plots">Our Plots</a>
<a href="/new-page">New Page</a>
```

#### Footer Contact Info

**File:** `src/layouts/Layout.astro` (lines 59-73)

Update email, address, and hours:

```astro
<p>
  📧 your-email@allotment.local<br/>
  📍 Your Location<br/>
  Hours: Your hours
</p>
```

### Customize Colors & Fonts

**File:** `src/styles/global.css` (lines 1-33)

The design system uses CSS variables. Change colors here:

```css
--color-primary: #5a7d6b; /* Sage green */
--color-accent: #7fa66d; /* Growing green */
--color-neutral: #f8f6f3; /* Warm off-white */
--color-dark: #2d3631; /* Deep charcoal */
--color-text: #3d4439; /* Body text color */
```

**Fonts** are loaded from Google Fonts. To change:

1. Edit `Layout.astro` line 18 (font link)
2. Update `global.css` lines 20-21 (font-family variables)

### Add New Pages

1. Create a new file: `src/pages/about.astro`
2. Import the layout:

   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   ---

   <Layout title="About Us">
     <section class="about">
       <div class="container">
         <h1>About Our Allotment</h1>
         <!-- Your content here -->
       </div>
     </section>
   </Layout>
   ```

3. Add link to navigation in `Layout.astro`

### Add Images

1. Place images in `public/images/` folder
2. Reference in Astro pages:
   ```astro
   <img src="/images/your-image.jpg" alt="Description">
   ```

## 🎨 Design System

### Colors

- **Primary (Sage):** #5A7D6B - Main headings, accents
- **Accent (Growing Green):** #7FA66D - Buttons, highlights
- **Light Accent:** #A5C393 - Hover states
- **Neutral:** #F8F6F3 - Backgrounds
- **Dark:** #2D3631 - Body text

### Spacing

- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem
- `--spacing-2xl`: 4rem

### Typography

- **Display:** Lora (serif) - Headlines
- **Body:** Inter (sans) - All text

## 📱 Responsive Design

The site automatically adjusts for:

- **Desktop** (1200px+)
- **Tablet** (768px)
- **Mobile** (640px)

Test on mobile by opening DevTools (F12) and toggling device toolbar.

## 🔧 Environment Setup

### Required

- Node.js 16+ and npm
- Code editor (VS Code recommended)

### Useful VS Code Extensions

- Astro language support
- Prettier (code formatter)
- Live Server

## 📦 Building for Production

```bash
npm run build
```

This creates a `dist/` folder ready for Netlify.

## 🌐 SEO & Meta Tags

Edit the page title and description in `Layout.astro`:

```astro
<Layout title="Your Site Title - Tagline" description="Page description for search engines">
```

## 📝 Tips for Editing

1. **Save and reload** - Browser auto-refreshes in dev mode
2. **CSS changes** - Edit `global.css` and save; changes apply immediately
3. **Content changes** - Edit `.astro` files (they look like HTML)
4. **Back up before major changes** - Use git or copy files
5. **Test responsively** - Check mobile view often

## 📰 Managing News Posts (Non-Technical)

Your site includes a **Content Management System (CMS)** for adding and editing news posts without coding.

### Add a News Post

1. Visit `https://yoursite.com/admin`
2. Login with Netlify credentials
3. Click **News & Bulletins**
4. Click **New** to create a post
5. Fill in the form:
   - **Title** - Headline
   - **Date** - Publication date
   - **Featured** - Check to highlight on homepage
   - **Image Emoji** - Pick a representative emoji
   - **Excerpt** - Short summary
   - **Content** - Full story (markdown supported)
6. Click **Publish** ✅

**Complete guide:** See `CMS-GUIDE.md`

### Set Up CMS for Your Team

**Admin setup instructions:** See `ADMIN-SETUP.md`

Quick steps:

1. Enable Netlify Identity in Netlify dashboard
2. Enable Git Gateway
3. Invite team members via Netlify
4. They access `/admin` to edit posts

---

## 🚀 Deploying Updates

### Using Netlify

Any push to your main branch automatically redeploys the site.

### Using Netlify CLI

```bash
netlify deploy --prod
```

## ❓ Troubleshooting

**Site won't load locally**

```bash
npm install
npm run dev
```

**Changes not showing**

- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Restart dev server

**Build fails**

- Check for typos in `.astro` files
- Make sure all imports are correct
- Ensure CSS selectors are valid

## 📞 Support

For Astro docs: https://docs.astro.build
For Netlify: https://netlify.com/docs

---

**Happy gardening!** 🌱 Make the site your own and watch it grow with your allotment.
