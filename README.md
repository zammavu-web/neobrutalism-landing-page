# Neobrutalism Portfolio Landing Page

Portfolio landing page dengan desain neobrutalism - bold, colorful, dan anti-generic template.

## 🎨 Design Features

- **Neobrutalism aesthetic**: Thick black borders (3px), flat bright colors, heavy solid shadows
- **Organic layout**: Asymmetric placement dengan subtle rotations untuk personality
- **Playful decorations**: Floating shapes, emoji stickers, dan label elements
- **Smooth animations**: Fade-in effects dengan staggered timing
- **Fully responsive**: Optimized untuk mobile, tablet, dan desktop

## 🛠️ Tech Stack

- HTML5 (semantic markup)
- CSS3 (animations, grid, flexbox)
- Vanilla JavaScript (minimal)
- Static deployment ready

## 📂 Project Structure

```
neobrutalism-web-portfolio/
├── index.html          # Main HTML structure
├── style.css           # Neobrutalism styling + animations
├── script.js           # Minimal JS interactions
├── assets/             # Images and media
├── PRD.md              # Product Requirements Document
└── README.md           # This file
```

## 🚀 Deployment

### Deploy to Vercel

1. Push project to GitHub:
```bash
git init
git add .
git commit -m "init: neobrutalism portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Import di [Vercel Dashboard](https://vercel.com):
   - New Project → Import Git Repository
   - Select your repo
   - Framework Preset: Other (static HTML auto-detected)
   - Deploy

### Deploy to GitHub Pages

1. Push ke GitHub (same as above)
2. Settings → Pages
3. Source: Deploy from branch `main` / root
4. Save → site live at `https://<username>.github.io/<repo-name>`

## 📝 Customization

### Update Personal Info
Edit `index.html`:
- Line 24-27: Name, tagline, description
- Line 36-42: About section content
- Line 45-68: Skills list
- Line 99-113: Social links URLs

### Change Colors
Edit `style.css` `:root` variables (line 2-8):
```css
--yellow: #FFD700;  /* Hero background */
--pink: #FF69B4;    /* About + Services */
--cyan: #00CED1;    /* Skills */
--lime: #32CD32;    /* Social */
```

### Add Profile Photo
1. Place image in `assets/` folder (e.g., `profile.jpg`)
2. Replace line 29-31 in `index.html`:
```html
<div class="hero-image">
  <img src="assets/profile.jpg" alt="Nizam Shakti Ramadhan" class="photo">
</div>
```
3. Add CSS in `style.css`:
```css
.photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: var(--border);
  box-shadow: var(--shadow);
  border-radius: 8px;
  transform: rotate(2deg);
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Personal project - free to use as inspiration. Please don't copy verbatim.

---

**Built with:** HTML, CSS, dan semangat anti-template-generic 🎨

**Timeline:** 3 days (Oct 2026)

**Author:** Nizam Shakti Ramadhan - SMK Telkom Malang
