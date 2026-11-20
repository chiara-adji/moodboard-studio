# Wedding Moodboard & Auto-Brief Studio

Aplikasi web untuk membuat kolase moodboard (Pengajian, Siraman, dan Hari-H) serta menyusun brief lengkap untuk **Fotografer, Videografer, dan WCC**, lengkap dengan ekstraksi *key-frame* video dan deteksi lagu via **Shazam RapidAPI**.

## Struktur Folder
```
├── index.html            # Halaman utama aplikasi
├── css/
│   └── style.css         # Styling & aturan cetak
├── js/
│   └── app.js            # Logika kolase, analisis warna K-Means, audio/video, & ekspor PNG/PDF
├── api/
│   └── detect-song.js    # Serverless function (Vercel) untuk deteksi lagu Shazam secara aman
├── cloudflare/
│   └── worker.js         # Alternatif proxy Cloudflare Worker jika memakai GitHub Pages
├── .env.example          # Contoh nama environment variable
└── .gitignore            # Mencegah file .env ikut terunggah ke GitHub
```

## Langkah Deploy Publik (Aman Tanpa Membocorkan API Key)

### Opsi A: GitHub + Vercel (Paling Mudah & Gratis)
1. Buat repository baru di GitHub (boleh **Public**).
2. Unggah seluruh folder dan file ini ke repository tersebut (jangan pernah mengunggah file `.env`).
3. Buka [Vercel](https://vercel.com), login dengan GitHub, lalu klik **Add New Project** dan pilih repository ini.
4. Masuk ke **Settings > Environment Variables**, tambahkan:
   - Name: `RAPIDAPI_KEY`
   - Value: *(paste `X-RapidAPI-Key` dari dashboard RapidAPI kamu)*
5. Klik **Deploy**.

### Opsi B: GitHub Pages + Cloudflare Worker
1. Deploy `cloudflare/worker.js` di [Cloudflare Workers](https://workers.cloudflare.com/) dan simpan `RAPIDAPI_KEY` di **Settings > Variables (Secret)**.
2. Di `js/app.js`, ubah `SHAZAM_ENDPOINT` ke URL Cloudflare Worker kamu.
3. Aktifkan **GitHub Pages** dari menu **Settings > Pages** di repository GitHub kamu.
