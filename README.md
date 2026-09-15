# Amazon SDE Portfolio Website

A modern, responsive portfolio website for an Amazon Software Development Engineer featuring a dark/light theme toggle, project showcase with metrics, experience timeline, and contact form.

## 🚀 Features

- **Modern Dark/Light Theme** - Toggle between dark and light modes with system preference detection
- **Hero Section** - Prominent display with name and tagline
- **About Section** - Professional bio with profile image
- **Skills Section** - Visual skill bars highlighting Distributed Systems and AWS expertise
- **Projects Showcase** - 4 featured projects with quantifiable metrics and tech stacks
- **Experience Timeline** - Vertical timeline showing career progression at Amazon
- **Contact Form** - Functional form for inquiries (connected to Formspree)
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Accessible** - WCAG AA compliant with proper color contrast and keyboard navigation
- **Performant** - Optimized for fast loading (Lighthouse > 90)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3 (CSS Variables, Flexbox/Grid), Vanilla JavaScript (ES6+)
- **Styling**: CSS custom properties for design tokens, dark/light theme via CSS class
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter (Google Fonts)
- **Form Backend**: Formspree (free tier)
- **Deployment**: GitHub → Vercel (automatic CI/CD)

## 📁 File Structure

```
amazon-sde-portfolio-site/
├── index.html
├── css/
│   ├── styles.css
│   └── dark-theme.css
├── js/
│   ├── theme.js
│   ├── form.js
│   └── main.js
├── assets/
│   ├── profile.jpg
│   ├── project1.png
│   ├── project2.png
│   ├── project3.png
│   └── project4.png
├── README.md
└── vercel.json
```

## 🎨 Design Tokens

### Colors (Dark Theme)
- **Background**: `#0D0D0D`
- **Surface**: `#1A1A1A`
- **Primary**: `#FF9900` (Amazon Orange)
- **Accent**: `#00E676` (Green)
- **Text**: `#E0E0E0`

### Colors (Light Theme)
- **Background**: `#FFFFFF`
- **Surface**: `#F5F5F5`
- **Primary**: `#FB8C00`
- **Accent**: `#00C853`
- **Text**: `#212121`

### Typography
- **Heading/Body**: 'Inter', sans-serif

### Spacing
- **xs**: 0.5rem
- **sm**: 1rem
- **md**: 1.5rem
- **lg**: 2rem
- **xl**: 3rem

## 🔧 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/amazon-sde-portfolio-site.git
   ```

2. **Replace placeholder assets**:
   - Replace `assets/profile.jpg` with your actual profile photo
   - Replace `assets/project1.png` through `assets/project4.png` with actual project screenshots

3. **Configure Formspree**:
   - Get a free Formspree endpoint at [formspree.io](https://formspree.io)
   - Update the form action in `index.html` with your Formspree ID:
     ```html
     <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
     ```

4. **Optional: Custom Domain**:
   - Configure your custom domain in Vercel dashboard
   - Update DNS settings to point to Vercel

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## ⚡ Performance Optimizations

- CSS custom properties for efficient theme switching
- Lazy loading for images
- Minimal JavaScript footprint
- Efficient CSS selectors
- Optimized asset loading

## ♿ Accessibility Features

- Proper color contrast ratios (WCAG AA)
- Keyboard navigable interface
- ARIA labels where needed
- Focus visible indicators
- Semantic HTML structure
- Responsive text scaling

## 📊 Project Metrics

Each project showcases quantifiable achievements:

1. **E-Commerce Platform**: 500K+ users, 120ms avg response time, 40% cost reduction
2. **Real-time Analytics**: 1M+ events/second, <50ms p99 latency, 99.95% accuracy
3. **Serverless API Gateway**: 5M+ daily requests, 99.95% uptime, 60% cost efficiency
4. **Data Pipeline**: 10TB+/day processing, <15 min processing time, 99.9% reliability

## 🚀 Deployment

This site is configured for automatic deployment to Vercel:

1. Push to GitHub repository
2. Vercel automatically detects and deploys changes
3. Preview URLs generated for each pull request
4. Production deployments on main branch pushes

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Amazon SDE** - Software Development Engineer specializing in distributed systems and AWS cloud services

---

*Built with ❤️ for showcasing technical expertise in distributed systems and cloud computing*