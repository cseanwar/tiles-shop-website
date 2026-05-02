# 🏺 TileMax — Tiles Shop Website

## Purpose

TileMax is a modern, full-stack tile shop web application built with Next.js. It allows users to browse a curated collection of artisanal ceramics, natural stones, and precision-engineered tiles. Users can search for tiles, view detailed information, and manage their accounts with secure authentication including Google Sign-In.

---

## 🌐 Live URL

🔗 [https://tiles-shop-website.vercel.app](https://tiles-shop-website.vercel.app)

---

## ✨ Key Features

- 🔍 **Search Tiles** — Real-time search by tile title on the All Tiles page
- 🧱 **Tile Listings** — Browse all tiles in a responsive grid layout
- 📄 **Tile Details** — View detailed info (description, material, price, stock status) for each tile
- 🔐 **Authentication** — Email/password sign up & login with form validation
- 🔑 **Google Sign-In** — One-click authentication via Google OAuth
- 👤 **User Profile** — View and update your profile information
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🎨 **Polished UI** — Golden hover effects, animated banner, category chips, and stock badges

---

## 🛠️ NPM Packages Used

### Core
| Package | Purpose |
|---|---|
| `next` | React framework with App Router, SSR, and file-based routing |
| `react` | UI library |
| `react-dom` | React DOM rendering |

### Authentication
| Package | Purpose |
|---|---|
| `better-auth` | Full-stack authentication (email/password + social OAuth) |

### UI Components
| Package | Purpose |
|---|---|
| `@heroui/react` | Component library — Card, Button, Avatar, Form, Input, Separator, Chip, SearchField |
| `@iconify/react` | Icon library with access to 200,000+ icons |
| `react-icons` | Additional icon sets (React Icons, Google, social icons) |
| `@gravity-ui/icons` | Gravity UI icon set |

### Styling & Animation
| Package | Purpose |
|---|---|
| `tailwindcss` | Utility-first CSS framework |
| `animate.css` | CSS animation library for banner and search field effects |

### Database
| Package | Purpose |
|---|---|
| `mongoose` / MongoDB | Database for storing user accounts via Better Auth adapter |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (others)/
│   │   ├── all-tiles/
│   │   │   ├── page.jsx          # All tiles with search
│   │   │   └── [id]/page.jsx     # Tile details page
│   │   ├── login/page.jsx        # Login page
│   │   ├── register/page.jsx     # Register page
│   │   ├── my-profile/page.jsx   # User profile page
│   │   └── layout.jsx            # Shared layout with Navbar & Footer
│   ├── api/auth/[...all]/
│   │   └── route.js              # Better Auth API handler
│   └── page.jsx                  # Home page
├── components/
│   └── shared/
│       ├── Navbar.jsx            # Responsive navbar with auth state
│       ├── Footer.jsx            # Footer with social links
│       ├── Banner.jsx            # Hero banner with CTA
│       ├── FeaturedTiles.jsx     # Featured tiles section
│       ├── FeaturedTilesCard.jsx # Individual tile card
│       ├── NavLink.jsx           # Active-aware navigation link
│       └── UpdateUserModal.jsx   # Profile update modal
└── lib/
    ├── auth.ts                   # Better Auth server config
    └── auth-client.ts            # Better Auth client config
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/a8-tiles-website.git
cd a8-tiles-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
