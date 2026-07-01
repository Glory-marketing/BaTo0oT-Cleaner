# BaTo0oT Cleaner 🚀

Ultimate system optimization & gaming booster tool. Cross-platform (Windows, macOS, Linux).

## 📁 Project Structure

```
BaTo0oT-Cleaner-Website/    # Next.js website (Vercel)
├── pages/                  # All pages
├── components/             # React components
├── styles/                 # CSS styles
├── lib/                    # Utilities
└── database/               # Supabase schema

BaTo0oT-Cleaner-App/        # Electron desktop app
├── main.js                 # Electron main process
├── preload.js              # Context bridge
├── src/renderer/           # Frontend
└── services/               # System services
```

## 🚀 Deployment

### Website (Vercel)
1. Push to GitHub
2. Import to Vercel
3. Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Database (Supabase)
1. Create Supabase project
2. Run `database/schema.sql` in SQL Editor
3. Copy your URL and anon key to `.env.local`

### Desktop App
```bash
cd BaTo0oT-Cleaner-App
npm install
npm run dist:win     # Windows
npm run dist:mac     # macOS
npm run dist:linux   # Linux
```
