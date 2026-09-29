# Seribu Rempah, Seribu Manfaat — Landing Page

Landing page promosi produk **Susu Jahe** dengan pemesanan via WhatsApp.
Dibangun dengan React + TanStack Start + Tailwind CSS (bukan PHP, karena
platform ini menjalankan stack React), namun tetap modular: semua informasi
yang mungkin berubah dikumpulkan di beberapa file saja.

## 1. Cara menjalankan website

Website sudah otomatis berjalan di preview Lovable. Untuk lokal:

```bash
bun install
bun run dev
```

Lalu buka http://localhost:8080

## 2. Struktur penting

```
src/
├── config/site.ts          ← SEMUA info bisnis (brand, harga, WhatsApp, alamat)
├── i18n/translations.ts    ← Teks Bahasa Indonesia (id) & English (en)
├── i18n/LanguageProvider.tsx
├── data/content.ts         ← Galeri, testimoni, FAQ
├── assets/                 ← Foto produk & galeri
├── components/site/        ← Komponen per section (Navbar, Hero, dst.)
└── routes/index.tsx        ← Halaman utama (urutan section)
```

## 3. Cara mengganti logo

Buka `src/config/site.ts`, isi `logoSrc` dengan path/URL gambar logo Anda,
misalnya `logoSrc: "/images/logo.png"` (letakkan file di folder `public/images/`).
Bila dikosongkan, dipakai logo sementara berbentuk ikon cangkir + uap.
Favicon: ganti file `public/favicon.ico`.

## 4. Cara mengganti foto produk / galeri

Ganti file di `src/assets/` dengan nama yang sama (`hero-product.jpg`,
`product-pack.jpg`, `ingredients.jpg`, `gallery-1.jpg` … `gallery-4.jpg`),
atau tambahkan foto baru lalu daftarkan di `src/data/content.ts` pada array
`galleryItems`.

## 5. Cara mengganti harga

`src/config/site.ts` → `price` (angka) dan `priceLabel` (teks yang tampil).

## 6. Cara mengganti nomor WhatsApp

`src/config/site.ts` → `whatsappNumber` (format internasional tanpa `+`,
contoh `6281234567890`) dan `whatsappDisplay` (nomor yang ditampilkan).
Semua tombol pesan (hero, produk, CTA, kontak, tombol mengambang) otomatis ikut.

## 7. Cara mengganti informasi bisnis

`src/config/site.ts` → `address`, `openHours`, `email`, `instagram`,
`facebook`, `tiktok`, dan `composition` (komposisi produk).

## 8. Cara mengubah bahasa / teks

`src/i18n/translations.ts` — objek `id` untuk Bahasa Indonesia dan `en` untuk
English. Struktur keduanya harus sama. Bahasa Indonesia adalah default;
pilihan bahasa pengunjung tersimpan di browser.

## 9. Cara menambahkan foto galeri

Tambahkan import gambar di `src/data/content.ts`, lalu tambahkan item ke
`galleryItems`:

```ts
{ src: fotoBaru, alt: { id: "Keterangan", en: "Caption" } }
```

## 10. Cara mengubah testimonial & FAQ

Keduanya ada di `src/data/content.ts` pada array `testimonials` dan `faqs`.
Tambah/hapus item cukup di array tersebut.

## Catatan

- Tidak ada klaim medis pada teks pemasaran.
- Warna & gaya visual diatur lewat token desain di `src/styles.css`.
