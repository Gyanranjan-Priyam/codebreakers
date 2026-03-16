# Codebreakers GCEK

<div align="center">

<img src="./public/codebreakers-logo.png" alt="Codebreakers Logo" width="200"/>

---

**Official website for the Codebreakers Coding Club at Government College of Engineering, KALAHANDI**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

_Breaking codes. Building futures._

</div>

---

## 🌟 Overview

**Codebreakers** is the premier coding club at Government College of Engineering, KALAHANDI (GCEK). This repository contains the source code for our official website, showcasing our team, events, projects, and activities.

The website features a futuristic Tron-inspired design powered by [The GridCN](https://thegridcn.com) UI library, creating an immersive digital experience that reflects our passion for cutting-edge technology.

### Key Features

- 👥 **Team Showcase** - Meet our core members, coordinators, and alumni
- 🎯 **Events Portal** - Browse past and upcoming events including hackathons, ideathons, workshops, and coding sessions
- 🚀 **Projects Gallery** - Explore innovative projects built by our members
- 📧 **Contact Page** - Get in touch with the Codebreakers team
- 🎨 **Tron-Inspired UI** - Immersive design with 3D effects, neon glows, and HUD elements
- 🔒 **TypeScript** - Full type safety with comprehensive TypeScript definitions
- 🎭 **Theme System** - Multiple Greek god-inspired themes (Ares, Tron, Clu, Athena, Aphrodite, Poseidon)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/codebreakers-gcek/codebreakers.git
cd codebreakers

# Install dependencies
npm install
# or
pnpm install

# Run the development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

## 📦 Project Structure

```
codebreakers-web/
├── src/
│   ├── app/                     # Next.js app directory
│   │   ├── _components/         # Shared components (error, not-found, etc.)
│   │   ├── contact/             # Contact page
│   │   ├── developers/          # Developer pages
│   │   │   ├── alumni/          # Alumni showcase
│   │   │   ├── devs/            # Current developers
│   │   │   └── teams/           # Team structure
│   │   ├── events/              # Events pages
│   │   │   ├── 9-lock-challenges/
│   │   │   ├── codeCHEF/
│   │   │   ├── hackathon/
│   │   │   ├── ideathon/
│   │   │   ├── sessions/
│   │   │   └── workshop/
│   │   ├── projects/            # Projects showcase
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles & themes
│   ├── components/
│   │   ├── ui/                  # shadcn/ui base components
│   │   ├── thegridcn/           # Tron-inspired UI components
│   │   ├── theme/               # Theme provider & switcher
│   │   ├── showcase/            # Component showcase sections
│   │   ├── layout/              # Layout components
│   │   └── website/             # Website-specific components
│   ├── data/                    # Data files
│   │   ├── devData.ts           # Team members data
│   │   ├── testimonials.ts      # Testimonials
│   │   └── index.ts             # Data exports
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   └── styles/                  # Additional styles
├── public/                      # Static assets
│   ├── assets/                  # Images and media
│   └── manifest.json            # PWA manifest
└── components.json              # shadcn/ui configuration
```

### Main Pages

- **Home** (`/`) - Landing page with club overview and highlights
- **Developers**
  - `/developers/devs` - Current team members
  - `/developers/teams` - Team structure
  - `/developers/alumni` - Alumni network
- **Events**
  - `/events/hackathon` - Hackathon information
  - `/events/ideathon` - Ideathon details
  - `/events/workshop` - Workshop series
  - `/events/sessions` - Coding sessions
  - `/events/codeCHEF` - CodeCHEF events
  - `/events/9-lock-challenges` - 9-Lock coding challenges
- **Projects** (`/projects`) - Showcase of club projects
- **Contact** (`/contact`) - Get in touch with the team

## 🎨 UI & Design System

The website is built using [The GridCN](https://thegridcn.com) - a Tron-inspired design system with 50+ components and 6 unique themes.

### Available Themes

| Theme         | Color            | Inspiration                   |
| ------------- | ---------------- | ----------------------------- |
| **Ares**      | Red (#ff3333)    | God of War - Main theme       |
| **Tron**      | Cyan (#00d4ff)   | User - Classic Tron aesthetic |
| **Clu**       | Orange (#ff6600) | Program - Antagonist theme    |
| **Athena**    | Gold (#ffd700)   | Goddess of Wisdom             |
| **Aphrodite** | Pink (#ff1493)   | Goddess of Love               |
| **Poseidon**  | Blue (#0066ff)   | God of Sea                    |

Each theme includes:

- Custom color palettes with OKLCH color space
- Neon glow effects matching the theme color
- 3D grid effects and HUD elements
- Scanline overlays and pulsing animations

## 🎯 Features

### Team Management

- **Core Members** - Secretary, Assistant Secretary, Treasurer
- **Coordinators** - Technical and Event coordinators
- **Alumni Network** - Showcase of past members
- Dynamic team cards with profiles and social links

### Events System

- Multi-event support (Hackathons, Ideathons, Workshops, Sessions)
- Event details and registration information
- Past event archives

### Projects Showcase

- Gallery of club projects
- Project details and documentation
- Team member contributions

### Interactive UI

- 3D grid backgrounds with Three.js
- Tron-style data cards and HUD elements
- Animated transitions and hover effects
- Responsive design for all devices

## 🛠️ Tech Stack

- **[Next.js 16.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[The GridCN](https://thegridcn.com)** - Tron-inspired UI components
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library foundation
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics

## 💻 Development

### Adding Team Members

Edit `/src/data/devData.ts` to add or update team members:

```typescript
export const coreMembers = [
  {
    image: "https://your-image-url.jpg",
    title: "Your Name",
    subtitle: "Your Role",
    handle: "@yourhandle",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://your-portfolio.com",
  },
  // Add more members...
];
```

### Customizing Themes

Themes are defined in `/src/app/globals.css`. You can customize colors, glows, and effects:

```css
[data-theme="ares"] {
  --primary: 2 90% 60%;
  --glow: 2 100% 50%;
  /* ... more theme variables */
}
```

### Adding Events

Create new event pages in `/src/app/events/[event-name]/page.tsx`:

```tsx
export default function EventPage() {
  return (
    <div>
      <h1>Your Event</h1>
      {/* Event content */}
    </div>
  );
}
```

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables (if any)
4. Deploy!

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any required environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any Node.js hosting service

## 🤝 Contributing

We welcome contributions from Codebreakers members and the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes locally before submitting
- Update documentation as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Codebreakers GCEK** - All members who contributed to this project
- **[The GridCN](https://thegridcn.com)** - For the amazing Tron-inspired UI library
- **[shadcn/ui](https://ui.shadcn.com/)** - For the component library foundation
- **[Radix UI](https://www.radix-ui.com/)** - For accessible primitives
- **[Three.js](https://threejs.org/)** - For 3D capabilities

## 👥 Team

### Core Members

- **Secretary** - Podili Biswajit
- **Assistant Secretary** - Chayakanta Maharana
- **Treasurer** - Sambhunath Meher

### Coordinators

- **Motivator & Event Coordinator** - R. Pradyota Reddy
- **Technical Coordinator** - Biplab Jena

## 📞 Contact & Support

- 🌐 **Website**: [Visit our website](http://localhost:3000)
- 📧 **Email**: Contact us through the [Contact Page](/contact)
- 💬 **GitHub Issues**: For technical issues and suggestions

---

<div align="center">

**Built with ❤️ by Codebreakers GCEK**

_Breaking codes. Building futures._

</div>
