# Faisal Noushad — Unity Game Developer Portfolio

A modern, fast, responsive, and recruiter-focused portfolio website for **Faisal Noushad**, Unity Game Developer.

---

## 🎮 Portfolio Overview

- **Core Technologies:** HTML5, Modern CSS3 (CSS Variables, Flexbox/Grid, Glassmorphism, Ambient Canvas), and Modular JavaScript.
- **Projects Highlighted:**
  - **Spider Solitaire** (Unity WebGL, Card Stack Management, Tableau Architecture, DOTween)
  - **City Rider** (3D Motorcycle Driving, Custom Wheel Physics, Vehicle Balance Simulation)
  - **Chess** (Turn-based Board Logic, 3-Tier Adaptive AI: Random, Heuristic, Minimax, Turn Timers)
  - **Asteroids Arcade** (2D Arcade Physics, Toroidal Screen Wrapping, Fragmentation System)
  - **AI-Based XOX** (Minimax AI Decision Engine, Win/Draw Evaluation)
  - **FPS Survival Shooter** (Raycast Ballistics, Recoil Springs, NavMesh Patrol/Chase State Machine)
  - **Crashy Cat** (2D Runner, Score Scaling, PlayerPrefs)
- **Recruiter Features:** 1-click CV download, direct in-browser playable game links, detailed technical case-study modals, and 1-click email copy.

---

## 📁 File & Folder Structure

```
Portfolio/
├── index.html                   # Main semantic website markup & SEO metadata
├── README.md                    # Deployment & maintenance guide
├── css/
│   ├── variables.css            # Color palette tokens, fonts, spacing & radius rules
│   └── style.css                # Responsive layout, typography, cards & animations
├── js/
│   ├── projects-data.js         # Complete projects database & case studies
│   └── main.js                  # Particle canvas, modal engine, filter tabs & navigation
└── assets/
    ├── images/                  # All local game screenshots & profile portrait
    │   ├── profile.jpeg         # Faisal's headshot photo
    │   ├── spider-solitaire.png
    │   ├── city-rider.png
    │   ├── chess.png
    │   └── ... (game thumbnails)
    └── resume/
        └── Faisal_Noushad_Unity_Developer_Resume.pdf  # Downloadable CV
```

---

## 🚀 How to Deploy to Vercel (Free & Instant)

Deploying to [Vercel](https://vercel.com) takes less than 3 minutes and gives you a free HTTPS custom URL (e.g. `faisal-dev.vercel.app`).

### Method 1: Deploy with GitHub & Vercel (Recommended)

This method automatically redeploys your website whenever you push changes to GitHub!

1. **Push your code to GitHub:**
   - Open your terminal or GitHub Desktop in this project directory.
   - Commit all changes and push them to your repository:
     ```bash
     git add .
     git commit -m "Initial portfolio release"
     git push origin main
     ```
2. **Sign up / Log in to Vercel:**
   - Go to [https://vercel.com](https://vercel.com) and click **Sign Up** or **Log In**.
   - Select **Continue with GitHub**.
3. **Import Your Repository:**
   - On the Vercel dashboard, click the **"Add New..."** button and select **Project**.
   - Find your `Portfolio` repository in the list and click **Import**.
4. **Configure Settings:**
   - **Framework Preset:** Leave as `Other` (plain HTML/CSS/JS requires no build step!).
   - **Root Directory:** Leave as `./`.
   - **Build Command:** Leave blank.
   - **Output Directory:** Leave blank.
5. **Deploy:**
   - Click the blue **Deploy** button.
   - In 10–20 seconds, your site will be live! You will see a preview screen with your live `.vercel.app` URL.

---

### Method 2: Deploy Using the Vercel CLI (Command Line)

If you prefer deploying directly from your terminal:

1. **Install the Vercel CLI globally (if not already installed):**
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   *(Follow the prompt in your browser to authorize).*
3. **Deploy to Preview:**
   Run this command in the project folder:
   ```bash
   vercel
   ```
   - Press `Enter` to confirm default options.
4. **Deploy to Production:**
   When you're happy with the preview:
   ```bash
   vercel --prod
   ```

---

## 🌐 Connecting a Custom Domain (e.g., `faisaldev.com`)

1. Buy a domain from any registrar (Namecheap, GoDaddy, Google Domains / Squarespace, Cloudflare).
2. Go to your **Vercel Dashboard** → Click your **Portfolio Project** → Go to **Settings** → **Domains**.
3. Type your custom domain name (e.g., `faisaldev.com`) and click **Add**.
4. Vercel will give you two DNS records (an `A` record pointing to `76.76.21.21` and a `CNAME` for `www`).
5. Add those records in your domain registrar's DNS panel. Vercel will automatically generate a free SSL certificate!

---

## 🛠️ How to Maintain & Update Your Portfolio

### 1. How to Add a New Game
1. Open `js/projects-data.js`.
2. Add a new object inside the `PROJECTS_DATA` array following this template:
   ```javascript
   {
     id: "my-new-game",
     title: "Game Title",
     genre: "Action / Adventure",
     platform: "WebGL / PC",
     isFeatured: false,
     category: ["3d", "physics"],
     image: "assets/images/my-new-game.png",
     thumbnail: "assets/images/my-new-game.png",
     playUrl: "https://yourname.itch.io/my-new-game",
     itchUrl: "https://yourname.itch.io/my-new-game",
     githubUrl: "https://github.com/F4isi",
     tagline: "Short 1-sentence hook.",
     overview: "Full paragraph overview of the game.",
     role: "Gameplay Programmer",
     techStack: ["Unity 3D", "C#", "NavMesh"],
     keyFeatures: [
       "Feature 1",
       "Feature 2"
     ],
     technicalHighlights: [
       { title: "System Name", desc: "How it works." }
     ],
     challenge: "Technical challenge faced.",
     solution: "How you engineered the solution."
   }
   ```
3. Save the file. The website automatically adds the card to the grid and configures the case study modal!

### 2. How to Update Your Resume
1. Export your latest CV as a PDF file.
2. Rename it to `Faisal_Noushad_Unity_Developer_Resume.pdf`.
3. Replace the existing file inside `assets/resume/`.
4. Commit and push to GitHub (Vercel will update automatically!).

### 3. How to Replace Your Profile Photo or Game Screenshots
- **Profile Photo:** Replace `assets/images/profile.jpeg` with your new image (keep the same filename, or update the `src` attribute in `index.html`).
- **Game Screenshots:** Place your new screenshot in `assets/images/` and update the `image` / `thumbnail` path inside `js/projects-data.js`.

---

## 🧪 Testing Locally

To preview your website locally:
```bash
# Using Node.js npx serve
npx -y serve .

# Or using Python (if installed)
python -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

---

© 2026 Faisal Noushad. Built for game studio recruiters, hiring managers, and clients.
