# DevObi Portfolio

A modern, responsive portfolio website showcasing full-stack development projects with a focus on backend technologies.

## 🚀 Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## 🛠️ Features

- ✨ Modern, clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎨 Smooth animations and transitions
- 📧 Contact form ready for integration

## 📋 Sections

- **Hero** - Introduction and call-to-action
- **About** - Background and expertise
- **Projects** - Showcase of key projects
- **Skills** - Technologies and tools
- **Contact** - Contact form for inquiries

## 🎯 Customization Guide

### 1. Personal Information

Update `components/Hero.tsx`:
- Change display name
- Update social media links (GitHub, LinkedIn)
- Modify email address

### 2. Projects

Edit `components/Projects.tsx`:
- Add your real projects
- Update GitHub links
- Add live demo URLs
- Include actual project descriptions

### 3. Skills

Modify `components/Skills.tsx`:
- Add/remove technologies
- Organize by your skill categories

### 4. Contact Form

In `components/Contact.tsx`, integrate with:
- [Formspree](https://formspree.io/) - Free form backend
- [EmailJS](https://www.emailjs.com/) - Email service
- Your own backend API

## 🚀 Deployment

### Deploy to Vercel (Recommended - FREE)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done! Your site will be live in ~2 minutes.**

### Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Quick Customization Checklist

- [ ] Update name and tagline in `components/Hero.tsx`
- [ ] Add your email in `components/Hero.tsx`
- [ ] Update GitHub/LinkedIn URLs
- [ ] Replace example projects with your projects
- [ ] Add real GitHub links and live demos
- [ ] Customize skills to match your stack
- [ ] Integrate contact form with a service
- [ ] Add your profile picture (optional)
- [ ] Update metadata in `app/layout.tsx`
- [ ] Test on mobile devices
- [ ] Deploy to Vercel/Netlify

## 🎨 Color Scheme

The portfolio uses a blue accent color (`blue-600`). To change:
- Find and replace `blue-600` with your preferred color
- Update `dark:text-blue-400` variants for dark mode

## 📸 Adding Images

To add a profile picture or project images:

1. Add images to `public/` folder
2. Import and use with Next.js Image component:

```tsx
import Image from "next/image";

<Image 
  src="/your-image.jpg" 
  alt="Description" 
  width={500} 
  height={500} 
/>
```

## 🔗 Important Next Steps

1. **Add Real Projects** - Replace example projects with your actual work
2. **Setup Contact Form** - Integrate with Formspree or similar service
3. **Add Analytics** - Use Vercel Analytics or Google Analytics
4. **SEO Optimization** - Add relevant keywords and meta descriptions
5. **Custom Domain** - Connect your own domain via Vercel/Netlify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

---

**Built by DevObi** | [GitHub](https://github.com/devobichinaka)
