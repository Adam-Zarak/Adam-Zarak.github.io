# Adam Zarak - Modern Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and shadcn/ui components.

## Features

- 🎨 Modern, clean design with dark/light theme support
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js and modern optimization
- 🎭 Smooth animations with Framer Motion
- 🎨 Beautiful UI components with shadcn/ui
- 🔍 SEO optimized with proper meta tags
- 📊 Interactive project showcases
- 🚀 Deployed on Vercel for optimal performance

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd modern-portfolio
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure the build settings
3. Deploy with zero configuration needed

### Manual Deployment

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── experience/         # Experience detail pages
│   ├── projects/          # Project detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts          # Utility functions
\`\`\`

## Key Features

### Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Educational background, skills, and personal information  
- **Experience**: Professional experience with detailed pages
- **Projects**: Featured projects with individual showcase pages
- **Tools**: Interactive tools and visualizations

### Pages

- **Project Details**: Comprehensive project breakdowns with technical highlights
- **Experience Details**: In-depth experience descriptions with timelines
- **Responsive Design**: Optimized for mobile, tablet, and desktop

## Customization

### Theme Colors

Edit \`src/app/globals.css\` to customize the color scheme:

\`\`\`css
:root {
  --primary: /* your primary color */;
  --secondary: /* your secondary color */;
  /* ... other variables */
}
\`\`\`

### Content

Update the content in each component file:
- \`src/components/about-section.tsx\` - Personal information and skills
- \`src/components/experience-section.tsx\` - Work experience
- \`src/components/projects-section.tsx\` - Project showcases

### Assets

Replace files in \`public/assets/\`:
- Images in \`public/assets/images/\`
- Resume in \`public/assets/resume/\`
- Other media files

## Performance

- Uses Next.js Image optimization for better performance
- Implements lazy loading for smooth scrolling
- Optimized bundle size with tree shaking
- Fast deployment on Vercel's Edge Network

## SEO

- Proper meta tags and Open Graph data
- Semantic HTML structure
- Fast loading times
- Mobile-first responsive design

## License

This project is licensed under the MIT License.