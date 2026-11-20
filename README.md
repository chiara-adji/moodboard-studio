# Wedding Moodboard & Auto-Brief Studio

Aplikasi web untuk membuat kolase moodboard (Pengajian, Siraman, dan Hari-H) serta menyusun brief lengkap untuk **Fotografer, Videografer, dan WCC**.

## Struktur Folder
```
├── index.html      # Halaman utama aplikasi
├── css/
│   └── style.css   # Styling & layout
└── js/
    └── app.js      # Logika kolase, analisis warna, audio/video, & ekspor PNG/PDF
```

## Cara Upload & Aktifkan di GitHub Pages (Langsung Tanpa Server Tambahan)
1. Buat repository baru di GitHub (boleh **Public**).
2. Unggah `index.html`, folder `css/`, folder `js/`, dan `README.md` ke repository tersebut.
3. Buka menu **Settings > Pages** di GitHub, pilih **Source: Deploy from a branch**, pilih branch `main` (folder `/ (root)`), lalu klik **Save**.
4. Tunggu 1-2 menit hingga link `https://username.github.io/nama-repo` aktif.
5. Untuk memakai deteksi lagu otomatis Shazam saat mengunggah video, tempelkan **X-RapidAPI-Key** milikmu di kolom **RapidAPI Key Shazam** langsung di halaman websitenya (key hanya tersimpan aman di browsermu, bukan di GitHub).
