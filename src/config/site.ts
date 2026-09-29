/**
 * ============================================================
 *  FILE KONFIGURASI UTAMA — ubah informasi bisnis di sini saja.
 * ============================================================
 * Semua komponen membaca data dari file ini, jadi Anda tidak
 * perlu mengubah banyak file ketika informasi berubah.
 */

export const siteConfig = {
  /** Identitas brand */
  brandName: "Seribu Rempah",
  brandFullName: "Seribu Rempah, Seribu Manfaat",
  tagline: "Seribu Rempah, Seribu Manfaat",

  /** Produk & harga */
  productName: "Susu Jahe",
  price: 24000,
  priceLabel: "Rp24.000",
  priceUnit: "/ pack",

  /**
   * Nomor WhatsApp (format internasional tanpa tanda + dan tanpa spasi).
   * Contoh: 6281234567890
   */
  whatsappNumber: "6281234567890",
  /** Teks nomor yang ditampilkan di halaman (boleh placeholder) */
  whatsappDisplay: "[Nomor WhatsApp]",

  /** Informasi kontak — ganti placeholder bila data sudah tersedia */
  address: "[Alamat Usaha]",
  openHours: "[Jam Operasional]",
  email: "[Email]",
  instagram: "[@username]",
  instagramUrl: "#",
  facebook: "[Facebook]",
  facebookUrl: "#",
  tiktok: "[TikTok]",
  tiktokUrl: "#",

  /**
   * Logo: kosongkan ("") untuk memakai logo bawaan (ikon + teks).
   * Isi dengan URL / path gambar untuk memakai logo Anda sendiri.
   */
  logoSrc: "",
  faviconSrc: "/favicon.ico",

  /** Komposisi produk — ganti bila data final sudah ada */
  composition: "[Komposisi produk akan ditambahkan di sini]",
} as const;

/** Membuat link WhatsApp dengan pesan otomatis. */
export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
