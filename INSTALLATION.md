# 🚀 ANNOTATEAI MVP 2.0 - INSTALLATION RAPIDE

## ⚡ SETUP EN 5 ÉTAPES

### 1️⃣ INSTALLER LES DÉPENDANCES (5 min)
```bash
npm install
```

### 2️⃣ CRÉER LES COMPTES (20 min)
- **Clerk** → https://dashboard.clerk.com
- **Supabase** → https://supabase.com
- **OpenAI** → https://platform.openai.com (add $5)
- **Anthropic** → https://console.anthropic.com (add $5)
- **Stripe** → https://dashboard.stripe.com (test mode)

### 3️⃣ CONFIGURATION .env.local (10 min)
```bash
cp .env.example .env.local
# Remplir toutes les clés API
```

### 4️⃣ SETUP DATABASE (5 min)
1. Supabase → SQL Editor
2. Copier `supabase/migrations/001_initial_schema.sql`
3. Run (F5)
4. Vérifier 6 tables créées ✅

### 5️⃣ LANCER LE SERVEUR (2 min)
```bash
npm run dev
```

**🎉 TERMINÉ ! Ouvrir http://localhost:3000**

---

## 📋 TESTS À FAIRE

1. ✅ Landing page → http://localhost:3000
2. ✅ Sign Up → Créer compte test
3. ✅ Dashboard → Auto-redirect
4. ✅ Settings → Profile info
5. ✅ Sign Out → Retour landing

---

## 🚀 DEPLOY VERCEL

```bash
git init
git add .
git commit -m "Initial commit: AnnotateAI MVP 2.0"
git push origin main
```

**Vercel :**
1. Import GitHub repo
2. Add environment variables
3. Deploy !

---

## 💪 NEXT STEPS

Voir README.md pour la roadmap complète !

**Objectif : £4,500/mois en 6 mois 🎯**
