# Pembangunan Project Baru: Bun + ElysiaJS + Drizzle + MySQL

Dokumen ini berisi panduan tingkat tinggi (high-level) untuk menginisialisasi dan mengatur struktur dasar project.

## 1. Inisialisasi Project
- Inisialisasi project baru di dalam folder ini menggunakan package manager **Bun**.
- Pastikan file konfigurasi standar seperti `package.json` dan file konfigurasi TypeScript (`tsconfig.json`) telah disiapkan.

## 2. Instalasi Dependensi Terkait
Gunakan Bun untuk menginstal dependensi berikut:
- **ElysiaJS**: Sebagai framework backend utama.
- **Drizzle ORM** & **Drizzle Kit**: Sebagai ORM dan tool untuk manajemen skema/migrasi database.
- **MySQL Driver**: Driver yang kompatibel (misalnya `mysql2`) untuk mengkoneksikan aplikasi dengan database MySQL.

## 3. Konfigurasi Database Server
- Buat file konfigurasi skema Drizzle.
- Siapkan koneksi dari aplikasi ke database MySQL menggunakan Drizzle.
- Buat utilitas/script untuk mengeksekusi migrasi database secara otomatis maupun manual.

## 4. Setup Server Utama
- Buat entry point untuk server (contoh: `src/index.ts`).
- Setup instance *Elysia* dan konfigurasikan *routing* dasar.
- Gunakan environment variables (`.env`) untuk mengelola rahasia seperti `DATABASE_URL` dan konfigurasi `PORT`.

## 5. Pembuatan Route Pengujian Terakhir
- Buat endpoint atau route pengujian (misalnya `GET /`) untuk memastikan server *Elysia* berjalan dengan baik dan berhasil merespons permintaan.
- Secara opsional, tambahkan route sederhana untuk melakukan simulasi koneksi (baca/tulis) ke database MySQL melalui Drizzle.

> **Catatan untuk Implementator:** Panduan ini bersifat *high-level*. Anda dibebaskan mengatur struktur folder, penamaan variabel, dan detail penulisan kode asalkan memenuhi kriteria teknologi di atas.
