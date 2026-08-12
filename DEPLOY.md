# Deploy Ronit's Portfolio to Vercel

This project is the Magic Portfolio template, already customized with your
content, projects, skills, links, and resume. It's committed to a local git
repo and ready to push. You do NOT need Node.js installed — Vercel builds it.

## What's already done
- `src/resources/content.tsx` — your info, experience, education, skills
- `src/resources/once-ui.config.ts` — Blog & Gallery hidden; About + Work enabled
- `src/resources/icons.ts` — skill icons (Python, PyTorch, FastAPI, etc.)
- `src/app/work/projects/` — your two projects (DocMind, Supply Chain)
- `public/Ronit_Sharma_Resume.pdf` — powers the "Resume" link

## Step 1 — Put it on GitHub
Create an empty repo on GitHub (e.g. `portfolio`), then from this folder:

```bash
git branch -M main
git remote add origin https://github.com/Ronit1608/portfolio.git
git push -u origin main
```

(If you don't want to use the terminal: on github.com create the repo, then
"Add file → Upload files" and drag the whole contents of this `magic-portfolio`
folder in, and commit.)

## Step 2 — Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project**, import your `portfolio` repo.
3. It auto-detects **Next.js**. Leave defaults → **Deploy**.
4. ~1 minute later it's live at `https://<repo-name>.vercel.app`.

## Step 3 — Final touches (optional but recommended)
- Replace `public/images/avatar.jpg` with your own photo (keep the filename).
- Add project cover images at `public/images/projects/project-01/cover-01.jpg`
  and `cover-02.jpg` (the project pages reference them; they still work without).
- After deploy, set your live URL in `src/resources/once-ui.config.ts` → `baseURL`,
  commit and push (Vercel auto-redeploys) — improves SEO/meta tags.
- Recolor anytime via `style.brand` / `style.accent` in `once-ui.config.ts`.

## Run locally (only if you install Node.js later)
```bash
npm install
npm run dev      # http://localhost:3000
```
