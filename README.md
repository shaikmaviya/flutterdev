# Flutter Developer Portfolio Website

A modern, responsive portfolio website for Android and iOS app developers specializing in Flutter. This portfolio showcases your skills, projects, and experience in mobile app development.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Smooth scrolling, hover effects, and dynamic content
- **Project Showcase** - Display your Flutter apps with descriptions and links
- **Skills Section** - Highlight your technical expertise and tools
- **Contact Form** - Easy way for clients to reach out
- **Social Media Integration** - Links to your GitHub, LinkedIn, and other profiles
- **SEO Optimized** - Meta tags for better search engine visibility

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Your background, experience, and achievements
3. **Skills Section** - Technical skills organized by categories
4. **Projects Section** - Showcase of your Flutter applications
5. **Contact Section** - Contact information and form
6. **Footer** - Social links and copyright

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, and Animations)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- Google Fonts (Poppins)

## 📁 Project Structure

```
Android developer Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── assets/             # Images and media files
    └── images/         # Project screenshots, profile photo, etc.
```

## 🚀 Getting Started

### 1. Clone or Download

Download this portfolio to your computer or clone the repository.

### 2. Customize Content

#### Update Personal Information

Open `index.html` and replace the following:

- **Name/Brand**: Change "FlutterDev" to your name or brand
- **Hero Title**: Update the main heading in the hero section
- **About Text**: Replace with your own background and experience
- **Contact Information**: Update email, phone, and location
- **Social Media Links**: Add your actual profile URLs

```html
<!-- Example: Update social links -->
<a href="https://github.com/yourusername" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

#### Add Your Projects

Replace the sample projects with your actual Flutter apps:

1. Update project titles and descriptions
2. Add project tags (technologies used)
3. Link to GitHub repositories and live demos
4. Add project screenshots (optional)

#### Update Skills

Modify the skills section to match your expertise:

```html
<div class="skill-tags">
    <span class="tag">Your Skill</span>
    <span class="tag">Another Skill</span>
</div>
```

### 3. Add Images (Optional)

To add images for projects and profile:

1. Place images in `assets/images/` folder
2. Update the HTML to reference your images:

```html
<!-- Replace placeholder with actual image -->
<div class="project-image">
    <img src="assets/images/your-project.png" alt="Project Name">
</div>
```

### 4. Customize Colors

Open `styles.css` and modify the CSS variables:

```css
:root {
    --primary-color: #0468D7;      /* Main brand color */
    --secondary-color: #13B9FD;    /* Accent color */
    --accent-color: #54C5F8;       /* Highlight color */
}
```

### 5. Deploy Your Website

#### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your portfolio files
3. Go to Settings → Pages
4. Select main branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

#### Option 2: Netlify (Free)

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your portfolio folder
3. Your site will be live instantly with a custom URL

#### Option 3: Vercel (Free)

1. Sign up at [Vercel](https://vercel.com/)
2. Import your project from GitHub
3. Deploy with one click

#### Option 4: Traditional Hosting

Upload all files to your web hosting service via FTP.

## 🎨 Customization Tips

### Change Animations

Modify animation timing in `styles.css`:

```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
```

### Add Dark Mode

Uncomment the dark mode code in `script.js` and add corresponding CSS.

### Modify Layout

The website uses CSS Grid and Flexbox for layouts. Adjust grid columns:

```css
.projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
```

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🔧 Contact Form Setup

The contact form currently shows an alert. To make it functional:

### Option 1: FormSpree (Easy)

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
    <!-- Your form fields -->
</form>
```

### Option 2: EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add their JavaScript library
3. Update the form submission handler in `script.js`

### Option 3: Backend API

Connect the form to your own backend service or serverless function.

## 📝 SEO Tips

1. Update meta tags in `index.html`
2. Add relevant keywords
3. Create a sitemap.xml
4. Submit to Google Search Console
5. Add Google Analytics (optional)

## 🌟 Features to Add (Optional)

- [ ] Blog section for articles
- [ ] Testimonials from clients
- [ ] Download CV/Resume button
- [ ] Project filtering by technology
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Loading animations
- [ ] Cursor effects

## 🐛 Troubleshooting

### Icons not showing?
Check if Font Awesome CDN is loading correctly in `index.html`.

### Animations not working?
Ensure JavaScript is enabled in your browser and `script.js` is linked correctly.

### Form not submitting?
The default form shows an alert. Implement a backend service for actual email functionality.

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Support

For questions or issues:
- Open an issue on GitHub
- Contact via email
- Check documentation

## 🎯 Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Design: Custom responsive layout

---

**Made with ❤️ for Flutter Developers**

Start building your amazing portfolio today! 🚀
