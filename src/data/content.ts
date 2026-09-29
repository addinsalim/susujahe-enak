/**
 * ============================================================
 *  DATA KONTEN — galeri, testimoni, dan FAQ
 * ============================================================
 * Tambah atau hapus item cukup di file ini.
 */

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import productPack from "@/assets/product-pack.jpg";
import heroProduct from "@/assets/hero-product.jpg";

export const images = { heroProduct, productPack, ingredientsImg };

export type GalleryItem = { src: string; alt: { id: string; en: string } };

export const galleryItems: GalleryItem[] = [
  { src: heroProduct, alt: { id: "Segelas susu jahe hangat", en: "A warm cup of ginger milk" } },
  { src: gallery1, alt: { id: "Menikmati susu jahe hangat", en: "Enjoying warm ginger milk" } },
  { src: gallery3, alt: { id: "Jahe dan rempah pilihan", en: "Ginger and selected spices" } },
  { src: productPack, alt: { id: "Kemasan pack Susu Jahe", en: "Ginger Milk pack packaging" } },
  { src: gallery4, alt: { id: "Proses pembuatan susu jahe", en: "Brewing the ginger milk" } },
  { src: gallery2, alt: { id: "Penyajian susu jahe", en: "Serving the ginger milk" } },
  { src: ingredientsImg, alt: { id: "Bahan susu dan jahe", en: "Milk and ginger ingredients" } },
];

export type Testimonial = { quote: { id: string; en: string }; name: string; role: { id: string; en: string } };

export const testimonials: Testimonial[] = [
  {
    quote: {
      id: "Rasanya hangat dan cocok diminum malam hari.",
      en: "It tastes warm and is perfect for the evening.",
    },
    name: "Pelanggan",
    role: { id: "Pelanggan", en: "Customer" },
  },
  {
    quote: {
      id: "Perpaduan susu dan jahenya enak, tidak terlalu berlebihan.",
      en: "The milk and ginger blend is tasty, not overpowering.",
    },
    name: "Pelanggan",
    role: { id: "Pelanggan", en: "Customer" },
  },
  {
    quote: {
      id: "Praktis dibuat dan aromanya harum sekali.",
      en: "Easy to prepare and the aroma is lovely.",
    },
    name: "Pelanggan",
    role: { id: "Pelanggan", en: "Customer" },
  },
];

export type Faq = { q: { id: string; en: string }; a: { id: string; en: string } };

export const faqs: Faq[] = [
  {
    q: { id: "Apa itu Seribu Rempah?", en: "What is Seribu Rempah?" },
    a: {
      id: "Seribu Rempah, Seribu Manfaat adalah brand minuman yang menghadirkan susu jahe dengan perpaduan susu lembut dan jahe pilihan.",
      en: "Seribu Rempah, Seribu Manfaat is a beverage brand offering ginger milk that blends smooth milk with selected ginger.",
    },
  },
  {
    q: { id: "Apa produk yang dijual?", en: "What product do you sell?" },
    a: { id: "Saat ini kami menjual Susu Jahe.", en: "Currently we sell Ginger Milk." },
  },
  {
    q: { id: "Berapa harga susu jahe?", en: "How much is the ginger milk?" },
    a: { id: "Harganya Rp24.000 per pack.", en: "The price is Rp24.000 per pack." },
  },
  {
    q: { id: "Berapa isi dalam satu pack?", en: "How much is in one pack?" },
    a: { id: "[Isi per pack akan ditambahkan di sini]", en: "[Contents per pack will be added here]" },
  },
  {
    q: { id: "Bagaimana cara melakukan pemesanan?", en: "How do I place an order?" },
    a: {
      id: "Klik tombol \"Pesan Sekarang\" di halaman ini, Anda akan diarahkan ke WhatsApp kami.",
      en: 'Click the "Order Now" button on this page and you will be directed to our WhatsApp.',
    },
  },
  {
    q: { id: "Apakah bisa memesan melalui WhatsApp?", en: "Can I order via WhatsApp?" },
    a: { id: "Bisa. Seluruh pemesanan saat ini dilayani melalui WhatsApp.", en: "Yes. All orders are currently handled via WhatsApp." },
  },
  {
    q: { id: "Bagaimana cara penyajian?", en: "How should it be served?" },
    a: {
      id: "Seduh dengan air hangat, aduk perlahan, lalu nikmati selagi hangat.",
      en: "Brew with warm water, stir gently, then enjoy while warm.",
    },
  },
  {
    q: { id: "Apakah tersedia pengiriman?", en: "Is delivery available?" },
    a: { id: "[Informasi pengiriman akan ditambahkan di sini]", en: "[Delivery information will be added here]" },
  },
];
