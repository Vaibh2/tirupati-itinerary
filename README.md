# 🛕 Tirupati Family Itinerary App

An interactive React itinerary app for the Tirupati family pilgrimage (May 2026).

---

## 🚀 Deploy to GitHub Pages — Step by Step

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Add your GitHub repo URL to package.json

Open `package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/tirupati-itinerary"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 3: Initialize git and push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/tirupati-itinerary.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then publishes the `build/` folder to the `gh-pages` branch automatically.

### Step 5: Enable GitHub Pages

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under "Branch", select `gh-pages` and click **Save**
3. Wait ~1 minute, then visit:  
   `https://YOUR_GITHUB_USERNAME.github.io/tirupati-itinerary`

---

## 📁 Adding Your PDF Documents

Place your PDFs in the `public/` folder matching this structure:

```
public/
  assets/
    trains/
      ticket1.pdf
      ticket2.pdf
      return1.pdf
      return2.pdf
    rooms/
      room1.pdf
      room2.pdf
    darshan/
      group1.pdf
      group2.pdf
      group3.pdf
      group4.pdf
    kalyanam/
      slot1_group1.pdf
      slot1_group2.pdf
      slot2_group1.pdf
      slot2_group2.pdf
      slot2_group3.pdf
      slot2_group4.pdf
    padmavati/
      pad1.pdf
      pad2.pdf
      pad3.pdf
```

Files in `public/` are served as-is — they'll be accessible on your deployed site.

---

## 🛠 Local Development

```bash
npm start
```

Opens the app at `http://localhost:3000`.

---

## 📝 Customizing Content

All itinerary content is in `src/data.js`. Edit that file to:
- Change times, locations, descriptions
- Add or remove events
- Add or remove documents
