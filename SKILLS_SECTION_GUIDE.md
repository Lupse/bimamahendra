# Panduan Section Keterampilan & Keahlian

## 📋 Overview

Section keterampilan dan keahlian telah berhasil dibuat dengan tampilan logo yang elegan dan sesuai dengan desain keseluruhan website Anda. Section ini menampilkan teknologi dan tools yang Anda kuasai dalam bentuk logo dengan efek hover yang menarik.

## 🎨 Fitur

### 1. Tampilan Logo Grid

- Grid responsif yang menyesuaikan dengan ukuran layar
- Desktop: 6 kolom
- Tablet: 5 kolom
- Mobile: 3-4 kolom

### 2. Kategori Keterampilan

Section dibagi menjadi 4 kategori:

- **Frontend Development**: React, Next.js, Tailwind CSS, JavaScript, HTML5, CSS3
- **Backend Development**: Node.js, Express, Python, PHP
- **Database & Tools**: MySQL, MongoDB, Git, Figma
- **Data Analysis**: Excel, Power BI, Tableau, R

### 3. Efek Interaktif

- Hover effect dengan animasi scale dan shadow
- Border berubah warna saat hover (kuning)
- Card terangkat saat hover (-translate-y)
- Nama teknologi muncul di bawah logo saat hover

### 4. Desain Konsisten

- Mengikuti color scheme website (hitam, putih, kuning)
- Typography yang sama dengan section lain
- Section number dan vertical line
- Background abu-abu muda (bg-gray-50)

## 📁 File Structure

```
project/
├── src/
│   └── app/
│       ├── components/
│       │   └── Skills.jsx          # Komponen utama
│       ├── page.js                 # Page dengan Skills section
│       └── globals.css             # Styles tambahan
└── public/
    └── skills/
        ├── README.md               # Instruksi pengisian logo
        ├── template-placeholder.svg # Template SVG
        └── [logo files].png        # Logo teknologi (Anda isi)
```

## 🖼️ Cara Mengisi Logo

### Langkah 1: Download Logo

Beberapa sumber logo berkualitas:

- [Simple Icons](https://simpleicons.org/) - Logo SVG untuk berbagai brand
- [DevIcon](https://devicon.dev/) - Icon khusus teknologi developer
- [Seeklogo](https://seeklogo.com/) - Database logo lengkap
- Website resmi masing-masing teknologi

### Langkah 2: Persiapan Gambar

**Spesifikasi yang Disarankan:**

- Format: PNG dengan background transparan
- Ukuran: 200x200px hingga 512x512px (persegi)
- Kualitas: High resolution untuk tampilan sharp
- File size: Maksimal 50KB per logo (compress jika perlu)

**Tools untuk Optimasi:**

- [TinyPNG](https://tinypng.com/) - Compress PNG
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimize SVG
- [Squoosh](https://squoosh.app/) - Image optimizer

### Langkah 3: Naming Convention

Simpan file dengan nama yang PERSIS seperti di daftar:

**Frontend Development:**

- `react.png`
- `nextjs.png`
- `tailwind.png`
- `javascript.png`
- `html.png`
- `css.png`

**Backend Development:**

- `nodejs.png`
- `express.png`
- `python.png`
- `php.png`

**Database & Tools:**

- `mysql.png`
- `mongodb.png`
- `git.png`
- `figma.png`

**Data Analysis:**

- `excel.png`
- `powerbi.png`
- `tableau.png`
- `r.png`

### Langkah 4: Upload

Letakkan semua file logo di folder:

```
public/skills/
```

## ⚙️ Kustomisasi

### Menambah Teknologi Baru

Edit file `src/app/components/Skills.jsx`:

```javascript
{
  title: "Nama Kategori",
  skills: [
    { name: "Nama Teknologi", image: "/skills/nama-file.png" },
    // tambah di sini...
  ]
}
```

### Menghapus Teknologi

Hapus objek skill yang tidak dibutuhkan dari array.

### Mengubah Jumlah Kolom Grid

Edit di `Skills.jsx`, cari baris:

```javascript
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 lg:gap-6">
```

Ubah angka `grid-cols-X` sesuai kebutuhan.

### Mengubah Warna Hover

Edit di `Skills.jsx`, cari:

```javascript
hover: border - yellow - 400;
```

Ganti dengan warna Tailwind lain, misalnya: `hover:border-blue-500`

### Menambah Kategori Baru

Tambahkan objek baru di array `skillCategories`:

```javascript
{
  title: "Kategori Baru",
  skills: [
    { name: "Tech 1", image: "/skills/tech1.png" },
    { name: "Tech 2", image: "/skills/tech2.png" },
  ]
}
```

## 🎯 Tips & Best Practices

### 1. Logo Design

- Gunakan logo official dari website resmi untuk kredibilitas
- Pastikan background transparan agar terlihat profesional
- Hindari logo yang terlalu kompleks atau detail kecil
- Gunakan warna original dari brand

### 2. Organization

- Kelompokkan skills berdasarkan kategori yang logis
- Urutkan dari yang paling dikuasai ke yang sedang dipelajari
- Jangan terlalu banyak skills (fokus pada yang benar-benar dikuasai)
- Update secara berkala sesuai perkembangan skill

### 3. Performance

- Compress semua gambar untuk loading cepat
- Gunakan format WebP jika memungkinkan (better compression)
- Lazy load images jika jumlah logo banyak
- Maksimal file size per logo: 50KB

### 4. Accessibility

- Pastikan alt text deskriptif untuk setiap logo
- Kontras warna yang cukup untuk readability
- Hover state yang jelas untuk user feedback

## 🔧 Troubleshooting

### Logo Tidak Muncul

1. Cek nama file (harus PERSIS dengan yang di kode)
2. Cek path folder (harus di `public/skills/`)
3. Refresh browser (Ctrl+F5)
4. Cek console browser untuk error

### Logo Terpotong

1. Pastikan gambar persegi (rasio 1:1)
2. Tambah padding putih di sekitar logo
3. Ubah class `object-contain` jika perlu

### Placeholder Muncul

Ini normal jika gambar belum ada. Sistem akan otomatis menampilkan placeholder dengan ikon tanda tanya.

## 📱 Responsive Behavior

### Desktop (lg)

- 6 kolom grid
- Logo lebih besar dengan padding generous
- Nama selalu terlihat di bawah logo
- Animasi hover smooth

### Tablet (md)

- 5 kolom grid
- Logo medium size
- Hover effect tetap aktif

### Mobile (sm)

- 3-4 kolom grid
- Logo compact
- Nama muncul saat touch/tap
- Animasi delay disabled untuk performa

## 🎨 Color Scheme

Section ini menggunakan palet warna yang konsisten:

- **Background**: Gray-50 (#F9FAFB)
- **Card Background**: White (#FFFFFF)
- **Border Default**: Gray-200 (#E5E7EB)
- **Border Hover**: Yellow-400 (#FBBF24)
- **Text Primary**: Black (#000000)
- **Text Secondary**: Gray-600 (#4B5563)
- **Accent**: Yellow-400 (#FBBF24)

## 🚀 Next Steps

1. ✅ Download logo untuk setiap teknologi yang Anda kuasai
2. ✅ Optimize dan save dengan nama yang benar
3. ✅ Upload ke folder `public/skills/`
4. ✅ Test di browser untuk memastikan semua muncul
5. ✅ Adjust kategori/skills sesuai kebutuhan
6. ✅ Deploy dan showcase!

## 📞 Support

Jika ada pertanyaan atau butuh bantuan kustomisasi lebih lanjut, silakan tanyakan!

---

**Created with ❤️ for your portfolio website**
