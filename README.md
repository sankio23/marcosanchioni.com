# marcosanchioni.com

Sito accademico personale. Astro (generatore statico), contenuti in `.astro` e Markdown,
build e pubblicazione automatiche su GitHub Pages.

---

## 1. Scrivere un post sul blog

Un post è un file Markdown in `src/content/blog/`. Il nome del file diventa l'indirizzo:
`quantum-time.md` → `marcosanchioni.com/blog/quantum-time`.

Ogni file inizia con un blocco di metadati:

```markdown
---
title: "How Anomalous Is It, Really?"
description: "Una frase che spiega il pezzo. Compare nell'indice del blog, nel feed RSS e nell'anteprima quando qualcuno condivide il link."
date: 2026-09-14
tags: ["quantum gravity", "anomalies"]
---

Il testo del post, in Markdown normale.

## Un sottotitolo

Se un post ha più di due sottotitoli `##`, compare automaticamente un indice
in cima alla pagina.
```

Poi:

```bash
git add . && git commit -m "post: how anomalous is it" && git push
```

Il sito si ricostruisce e si pubblica da solo in circa un minuto.

**Bozze.** Aggiungi `draft: true` nel blocco dei metadati: il post resta nel repository
ma non compare sul sito. Togli la riga quando è pronto.

**Immagini.** Mettile in `public/assets/` e richiamale come `![Didascalia](/assets/nome.jpg)`.

`src/content/blog/example-post.md` è un modello da copiare — è già marcato `draft: true`,
quindi non è visibile online.

---

## 2. Aggiornare le altre pagine

| Cosa | Dove |
|---|---|
| Testi di Home, About, Research, ecc. | `src/pages/*.astro` |
| Voci del menu | `src/data/site.ts` (array `nav`) |
| Email, link ai profili, percorso del CV | `src/data/site.ts` (oggetto `site`) |
| Colori, tipografia, spaziature | `src/styles/style.css` (blocco `:root` in cima) |
| CV, ritratto, immagine di anteprima social | `public/assets/` |

La navigazione e il piè di pagina esistono in un solo file ciascuno
(`src/components/Header.astro`, `src/components/Footer.astro`): si modificano una volta e
cambiano su tutte le pagine.

Per sostituire il CV: rimpiazza `public/assets/cv-marco-sanchioni.pdf` mantenendo lo stesso
nome, così tutti i link continuano a funzionare.

---

## 3. Lavorare in locale

Serve Node 20 o superiore.

```bash
npm install       # solo la prima volta
npm run dev       # anteprima su http://localhost:4321, si aggiorna mentre scrivi
npm run build     # genera il sito statico in dist/
npm run preview   # controlla il risultato della build
```

---

## 4. Prima pubblicazione

### 4.1 Repository

1. Crea un repository su GitHub, per esempio `marcosanchioni.com`. Può essere pubblico o
   privato: con un account gratuito, GitHub Pages richiede che sia **pubblico**.
2. Dalla cartella del progetto:

```bash
git remote add origin https://github.com/<tuo-utente>/marcosanchioni.com.git
git branch -M main
git push -u origin main
```

### 4.2 Attivare GitHub Pages

Nel repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Il workflow è già in `.github/workflows/deploy.yml`: a ogni `push` su `main` costruisce il
sito e lo pubblica. Il primo deploy parte da solo dopo il push.

Verifica che sia andato a buon fine in **Actions**. Il sito sarà visibile su
`https://<tuo-utente>.github.io/marcosanchioni.com/` finché non colleghi il dominio.

### 4.3 Collegare il dominio

Il file `public/CNAME` contiene già `www.marcosanchioni.com`.

In **Settings → Pages → Custom domain** inserisci `www.marcosanchioni.com` e salva.

Poi, dal pannello DNS dove è registrato il dominio, sostituisci i record attuali (quelli che
oggi puntano a Google Sites) con questi:

| Tipo | Nome | Valore |
|---|---|---|
| CNAME | `www` | `<tuo-utente>.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

I record A e AAAA servono perché chi digita `marcosanchioni.com` senza `www` venga
reindirizzato al sito.

Il CNAME deve puntare a `<tuo-utente>.github.io`, **senza** il nome del repository.

La propagazione richiede da qualche minuto a qualche ora. Quando è completa, torna in
**Settings → Pages** e attiva **Enforce HTTPS** (l'opzione diventa selezionabile solo dopo
che GitHub ha emesso il certificato).

### 4.4 Il vecchio sito

Il sito Google Sites resta attivo finché non cambi i record DNS. Non serve cancellarlo
prima: nel momento in cui il DNS punta a GitHub, il dominio serve il sito nuovo. Conviene
tenere il vecchio in piedi ancora qualche giorno, in caso di ripensamenti.

---

## 5. Cosa c'è già configurato

- **SEO**: `title`, `description`, `canonical`, Open Graph e Twitter Card su ogni pagina;
  dati strutturati JSON-LD (`Person` sulle pagine del sito, `BlogPosting` sui post);
  `sitemap-index.xml` e `robots.txt` generati automaticamente.
- **Feed RSS** su `/rss.xml`, aggiornato a ogni post.
- **Font self-hosted** (Inter e Spectral serviti dal sito, non da Google Fonts): nessuna
  richiesta a terze parti, nessuna esposizione GDPR, nessun blocco di rendering.
- **Accessibilità**: skip link, menu Publications raggiungibile da tastiera, contrasti
  verificati AA, `prefers-reduced-motion` rispettato, contenuti visibili anche senza JavaScript.
- **Pagina 404** con navigazione.
