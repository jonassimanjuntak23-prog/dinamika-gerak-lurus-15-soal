/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MISTER JO – DYNAMICS LAB: 15 SOAL HOTS DINAMIKA GERAK LURUS
 * Dilengkapi stimulus kaya, FBD presisi, pembahasan normal 10 langkah,
 * pembahasan cara cepat, parameter simulasi mekanika Newton, dan narasi TTS lengkap.
 */

import { ProblemData } from '../types/physics';

export const PROBLEMS_DATA: ProblemData[] = [
  // ==========================================
  // SOAL 01: HUKUM I NEWTON
  // ==========================================
  {
    id: 1,
    title: 'Soal 01: Hukum I Newton',
    subtitle: 'Kesetimbangan Translasi & Analisis Resultan Gaya',
    topic: 'Hukum I Newton – Benda di Bidang Datar Licin',
    difficulty: 'Dasar-Menengah',
    stimulusType: 'cerita',
    stimulusTitle: 'Pendorongan Peti Logistik di Gudang Pelabuhan',
    stimulusText:
      'Sebuah peti logistik bermassa 20 kg berada di atas lantai gudang marmer horizontal yang sangat licin (gesekan diabaikan). Dua pekerja memindahkan peti tersebut: Pekerja A mendorong ke arah timur (sumbu X positif) dengan gaya horizontal F1 = 45 N, sedangkan Pekerja B mendorong ke arah barat (sumbu X negatif) dengan gaya horizontal F2 = 30 N. Peti diketahui sedang meluncur lurus ke arah timur dengan kecepatan tetap v = 2,0 m/s.',
    problemStatement:
      'Agar peti tetap meluncur dengan kecepatan konstan 2,0 m/s ke arah timur tanpa mengalami percepatan, mandor gudang meminta Pekerja C untuk memberikan gaya horizontal ketiga (F3) pada peti tersebut.',
    questionText:
      'Tentukan besar dan arah gaya F3 yang harus dikerjakan Pekerja C, serta buktikan kondisi kesetimbangan dinamis benda berdasarkan Hukum I Newton!',
    ttsQuestion:
      'Soal satu. Hukum Satu Newton. Sebuah peti logistik bermassa dua puluh kilogram berada di atas lantai gudang marmer horizontal yang licin. Pekerja A mendorong ke arah timur dengan gaya empat puluh lima Newton. Pekerja B mendorong ke arah barat dengan gaya tiga puluh Newton. Peti sedang meluncur lurus ke arah timur dengan kecepatan konstan dua meter per sekon. Agar peti tetap bergerak lurus beraturan dengan kecepatan konstan tersebut, tentukan besar dan arah gaya ketiga F tiga yang harus dikerjakan oleh Pekerja C!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Apa makna fisis dari kalimat "kecepatan tetap v = 2,0 m/s"?',
          answer: 'Kecepatan konstan berarti percepatan a = 0 m/s². Benda berada dalam keadaan kesetimbangan translasi dinamis (Hukum I Newton).'
        },
        {
          question: 'Berapakah resultan gaya total yang harus bekerja pada peti?',
          answer: 'Sesuai Hukum I Newton, resultan gaya ΣF harus tepat sama dengan nol, baik pada sumbu horizontal maupun sumbu vertikal.'
        },
        {
          question: 'Apakah arah gerak benda menentukan arah gaya ketiga?',
          answer: 'Tidak secara langsung. Arah gaya ketiga ditentukan murni oleh syarat bahwa jumlah vektor seluruh gaya luar sama dengan nol.'
        }
      ],
      summary: 'Hukum I Newton menyatakan jika resultan gaya pada benda sama dengan nol, benda diam akan tetap diam, dan benda bergerak akan terus bergerak dengan kecepatan konstan pada lintasan lurus.'
    },
    ttsAnalysis:
      'Mari kita analisis secara fisis. Peti bergerak dengan kecepatan konstan dua meter per sekon. Ini artinya percepatan peti sama dengan nol. Sesuai Hukum Satu Newton, kondisi ini mensyaratkan resultan seluruh gaya yang bekerja pada peti harus sama dengan nol. Gaya luar dari Pekerja A dan Pekerja B belum seimbang, sehingga gaya ketiga F tiga harus menyeimbangkan resultan tersebut.',
    fbdBodies: [
      {
        id: 'peti-1',
        name: 'Peti Logistik (m = 20 kg)',
        mass: 20,
        forces: [
          {
            id: 'F1',
            name: 'Gaya Pekerja A',
            symbol: 'F_1',
            magnitude: 45,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Mendorong horizontal ke arah timur (kanan).'
          },
          {
            id: 'F2',
            name: 'Gaya Pekerja B',
            symbol: 'F_2',
            magnitude: 30,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Mendorong horizontal ke arah barat (kiri).'
          },
          {
            id: 'F3',
            name: 'Gaya Pekerja C (Penyeimbang)',
            symbol: 'F_3',
            magnitude: 15,
            unit: 'N',
            angleDeg: 180,
            color: '#2563EB',
            description: 'Gaya penyeimbang ke arah barat (kiri).'
          },
          {
            id: 'N',
            name: 'Gaya Normal Lantai',
            symbol: 'N',
            magnitude: 200,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Tegak lurus lantai ke atas menopang peti.'
          },
          {
            id: 'W',
            name: 'Gaya Berat Peti',
            symbol: 'W',
            magnitude: 200,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gaya gravitasi bumi vertikal ke bawah (m · g = 20 × 10 = 200 N).'
          }
        ],
        notes: 'Pada sumbu vertikal N = W = 200 N. Pada sumbu horizontal F1 = F2 + F3 sehingga ΣFx = 0.'
      }
    ],
    ttsFbd:
      'Diagram benda bebas memperlihatkan lima vektor gaya. Pada sumbu vertikal, ada gaya berat W sebesar dua ratus Newton ke bawah yang diimbangi penuh oleh gaya normal N dua ratus Newton ke atas. Pada sumbu horizontal, gaya F satu sebesar empat puluh lima Newton mengarah ke kanan, sedangkan gaya F dua tiga puluh Newton dan gaya F tiga lima belas Newton bersama-sama mengarah ke kiri sehingga resultannya nol.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Identifikasi Besaran Diketahui',
          explanation: 'Massa m = 20 kg, g = 10 m/s², F1 = +45 N (timur/kanan), F2 = -30 N (barat/kiri), kecepatan konstan v = 2,0 m/s.'
        },
        {
          stepNumber: 2,
          title: 'Tentukan Besaran yang Dicari',
          explanation: 'Besar dan arah gaya ketiga F3 serta pembuktian syarat kesetimbangan translasi.'
        },
        {
          stepNumber: 3,
          title: 'Kondisi Fisis Benda',
          explanation: 'Kecepatan konstan v = 2,0 m/s mengimplikasikan percepatan a = 0 m/s² (Gerak Lurus Beraturan).'
        },
        {
          stepNumber: 4,
          title: 'Tinjau Sumbu Vertikal (Sumbu Y)',
          explanation: 'Peti tidak bergerak vertikal, maka ΣFy = 0.',
          mathFormula: '\\sum F_y = N - W = 0 \\implies N = mg = (20)(10) = 200\\text{ N}'
        },
        {
          stepNumber: 5,
          title: 'Terapkan Hukum I Newton pada Sumbu Horizontal (Sumbu X)',
          explanation: 'Sesuai Hukum I Newton untuk GLB, resultan gaya horizontal harus sama dengan nol.',
          mathFormula: '\\sum F_x = 0'
        },
        {
          stepNumber: 6,
          title: 'Uraikan Komponen Gaya Horizontal',
          explanation: 'Tetapkan arah timur sebagai positif (+), dan barat sebagai negatif (-).',
          mathFormula: 'F_1 - F_2 + F_3 = 0'
        },
        {
          stepNumber: 7,
          title: 'Substitusi Nilai Gaya yang Diketahui',
          explanation: 'Masukkan F1 = 45 N dan F2 = 30 N ke dalam persamaan kesetimbangan.',
          substitution: '45 - 30 + F_3 = 0 \\implies 15 + F_3 = 0'
        },
        {
          stepNumber: 8,
          title: 'Selesaikan Aljabar untuk Mencari F3',
          explanation: 'Pindahkan 15 ke ruas kanan persamaan.',
          result: 'F_3 = -15\\text{ N}'
        },
        {
          stepNumber: 9,
          title: 'Interpretasi Tanda Negatif',
          explanation: 'Tanda negatif menunjukkan bahwa gaya F3 berlawanan arah dengan arah positif (timur), yang berarti mengarah ke barat.',
          result: '|F_3| = 15\\text{ N ke arah Barat}'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Fisis',
          explanation: 'Total gaya ke timur = 45 N. Total gaya ke barat = 30 N + 15 N = 45 N. Resultan gaya bersih = 0 N. Benda mempertahankan kecepatan 2,0 m/s konstan secara fisik.',
          consistencyCheck: '\\Sigma F_x = 45 - (30 + 15) = 0\\text{ N} \\quad (\\text{Terverifikasi})'
        }
      ],
      finalAnswer: 'F3 = 15 N berarah ke Barat (Kiri)',
      consistencyCheck: 'ΣF = 0, a = 0, memenuhi Hukum I Newton secara presisi.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, karena kecepatan peti konstan dua meter per sekon, percepatan peti adalah nol. Menurut Hukum Satu Newton, jumlah gaya sigma F x harus sama dengan nol. Gaya F satu empat puluh lima Newton dikurangi F dua tiga puluh Newton ditambah F tiga sama dengan nol. Lima belas ditambah F tiga sama dengan nol. Maka F tiga bernilai minus lima belas Newton. Tanda minus menandakan arah gaya F tiga berlawanan dengan arah timur, yaitu lima belas Newton ke arah barat.',
    fastSolution: {
      concept: 'Penyeimbangan Vektor Langsung (Eliminasi Selisih Gaya)',
      reasoning: 'Gaya Pekerja A (45 N ke timur) dan Pekerja B (30 N ke barat) menghasilkan kelebihan gaya sebesar 15 N ke arah timur. Agar percepatan nol, gaya ketiga harus meniadakan tepat kelebihan gaya ini.',
      mathFormula: 'F_3 = -(F_1 - F_2) = -(45 - 30) = -15\\text{ N}',
      steps: [
        'Hitung selisih gaya awal: 45 N (timur) - 30 N (barat) = 15 N (timur).',
        'Syarat Hukum I Newton: Gaya ketiga harus sama besar dan berlawanan arah dengan selisih tersebut.',
        'Maka F3 = 15 N ke arah Barat.'
      ],
      finalAnswer: 'F3 = 15 N ke arah Barat'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Amati selisih gayanya secara langsung. Empat puluh lima Newton ke timur melawan tiga puluh Newton ke barat menyisakan kelebihan lima belas Newton ke timur. Agar benda tidak dipercepat, Pekerja C cukup memberikan gaya penahan sebesar lima belas Newton ke arah barat. Singkat, tepat, dan ilmiah!',
    simulation: {
      type: 'equilibrium_flat',
      state: 'SETIMBANG',
      acceleration: 0,
      initialVelocity: 2.0,
      duration: 3.5,
      displacement: 7.0,
      directionDescription: 'Bergerak lurus ke timur dengan kecepatan konstan v = 2,0 m/s (GLB)',
      extraValues: { F1: '45 N', F2: '30 N', F3: '15 N', SigmaF: '0 N', v: '2,0 m/s' },
      misterJoComment:
        'Perhatikan simulasi: Vektor gaya saling meniadakan secara presisi (ΣF = 0). Peti meluncur mulus dengan kecepatan konstan 2,0 m/s tanpa bertambah cepat maupun melambat. Inilah bukti otentik Hukum I Newton!'
    },
    misterJoTakeaway:
      'Kecepatan konstan BUKAN berarti tidak ada gaya yang bekerja, melainkan JUMLAH seluruh gaya yang bekerja saling meniadakan (ΣF = 0).'
  },

  // ==========================================
  // SOAL 02: HUKUM II NEWTON
  // ==========================================
  {
    id: 2,
    title: 'Soal 02: Hukum II Newton',
    subtitle: 'Analisis Data Eksperimen Laboratorium & Prediksi Dinamika',
    topic: 'Hukum II Newton – Eksperimen Air Track',
    difficulty: 'Dasar-Menengah',
    stimulusType: 'tabel',
    stimulusTitle: 'Data Eksperimen Kereta Dinamika pada Lintasan Udara Licin',
    stimulusText:
      'Di laboratorium fisika sekolah, sekelompok siswa melakukan eksperimen kinematika-dinamika menggunakan kereta dinamika pada lintasan udara licin (air track). Gaya tarik horizontal F diubah-ubah menggunakan sensor gaya terkalibrasi, dan percepatan a diukur dengan gerbang cahaya (photogate).',
    stimulusTableData: {
      caption: 'Tabel 1. Hubungan Gaya Tarik F dan Percepatan Kereta a',
      headers: ['Uji Ke-', 'Gaya Tarik F (N)', 'Percepatan a (m/s²)', 'Rasio F/a (kg)'],
      rows: [
        [1, 6.0, 1.5, '4.0'],
        [2, 10.0, 2.5, '4.0'],
        [3, 14.0, 3.5, '4.0'],
        [4, 18.0, 4.5, '4.0']
      ]
    },
    problemStatement:
      'Setelah keempat uji selesai, teknisi laboratorium menambahkan balok logam bermassa tambahan m_t = 2,0 kg ke atas kereta tersebut. Kemudian, rangkaian sistem tersebut ditarik kembali pada lintasan yang sama dengan gaya horizontal F_baru = 24,0 N.',
    questionText:
      'Berdasarkan data eksperimen, tentukan massa awal kereta dinamika m0, dan hitung percepatan baru yang dialami sistem setelah diberi massa tambahan!',
    ttsQuestion:
      'Soal dua. Hukum Dua Newton. Sekelompok siswa menguji kereta dinamika pada lintasan udara licin. Pada gaya enam Newton, percepatannya satu koma lima meter per sekon kuadrat. Pada gaya sepuluh Newton, percepatannya dua koma lima. Pada empat belas Newton, percepatannya tiga koma lima. Dan pada delapan belas Newton, percepatannya empat koma lima. Setelah itu, ke atas kereta diletakkan beban tambahan sebesar dua kilogram dan ditarik dengan gaya baru dua puluh empat Newton. Berdasarkan data eksperimen tersebut, tentukan massa awal kereta, dan hitung percepatan baru sistem!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Bagaimana hubungan matematis antara gaya F dan percepatan a pada massa konstan?',
          answer: 'Sesuai Hukum II Newton, F = m · a. Grafik F terhadap a merupakan garis lurus yang kemiringannya (gradien) menyatakan massa inersia benda.'
        },
        {
          question: 'Berapakah massa total sistem saat diberi beban tambahan?',
          answer: 'Massa total baru adalah jumlah massa awal kereta m0 ditambah massa beban tambahan m_t.'
        },
        {
          question: 'Apakah nilai percepatan akan membesar atau mengecil jika massa bertambah pada gaya tertentu?',
          answer: 'Percepatan berbanding terbalik dengan massa inersia (a = F/m). Penambahan massa akan memperbesar kelembaman sistem.'
        }
      ],
      summary: 'Hukum II Newton menyatakan percepatan sebuah benda berbanding lurus dengan gaya resultan yang bekerja padanya dan berbanding terbalik dengan massa kelembamannya.'
    },
    ttsAnalysis:
      'Mari kita bedah data eksperimen. Amati rasio antara gaya F dan percepatan a pada setiap baris tabel. Rasionya selalu tepat empat koma nol. Ini membuktikan bahwa kemiringan grafik gaya terhadap percepatan adalah massa inersia awal kereta, yaitu empat kilogram. Ketika beban dua kilogram ditambahkan, massa total menjadi enam kilogram.',
    fbdBodies: [
      {
        id: 'kereta-beban',
        name: 'Kereta Dinamika + Beban (m_total = 6 kg)',
        mass: 6,
        forces: [
          {
            id: 'F_baru',
            name: 'Gaya Tarik Baru',
            symbol: 'F_{\\text{baru}}',
            magnitude: 24,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Gaya penarik horizontal ke kanan sebesar 24 N.'
          },
          {
            id: 'N',
            name: 'Gaya Normal Lintasan Udara',
            symbol: 'N',
            magnitude: 60,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Tekanan bantalan udara ke atas menopang total 6 kg (60 N).'
          },
          {
            id: 'W_total',
            name: 'Gaya Berat Total',
            symbol: 'W_{\\text{total}}',
            magnitude: 60,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi bumi bekerja pada massa total (6 kg × 10 = 60 N).'
          }
        ],
        notes: 'Tidak ada gaya gesek karena menggunakan bantalan udara (air track licin).'
      }
    ],
    ttsFbd:
      'Diagram benda bebas memperlihatkan massa gabungan enam kilogram. Gaya normal bantalan udara sebesar enam puluh Newton ke atas mengimbangi gaya berat total enam puluh Newton ke bawah. Pada sumbu horizontal, hanya ada satu gaya luar yaitu gaya tarik dua puluh empat Newton ke kanan yang mempercepat seluruh sistem.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Analisis Data Tabel Eksperimen',
          explanation: 'Tinjau setiap titik data: Uji 1 (6 N, 1,5 m/s²), Uji 2 (10 N, 2,5 m/s²), Uji 3 (14 N, 3,5 m/s²), Uji 4 (18 N, 4,5 m/s²).'
        },
        {
          stepNumber: 2,
          title: 'Rumuskan Persamaan Hukum II Newton Awal',
          explanation: 'Gaya horizontal F bekerja pada massa awal kereta m0 menghasilkan percepatan a.',
          mathFormula: 'F = m_0 \\cdot a \\implies m_0 = \\frac{F}{a}'
        },
        {
          stepNumber: 3,
          title: 'Hitung Massa Awal Kereta m0',
          explanation: 'Uji konsistensi rasio untuk membuktikan kepresisian data laboratorium.',
          substitution: 'm_0 = \\frac{6{,}0\\text{ N}}{1{,}5\\text{ m/s}^2} = \\frac{10{,}0\\text{ N}}{2{,}5\\text{ m/s}^2} = 4{,}0\\text{ kg}'
        },
        {
          stepNumber: 4,
          title: 'Tentukan Nilai Pasti Massa Awal',
          explanation: 'Massa inersia awal kereta dinamika terbukti tunggal dan konsisten.',
          result: 'm_0 = 4{,}0\\text{ kg}'
        },
        {
          stepNumber: 5,
          title: 'Hitung Massa Total Setelah Penambahan Beban',
          explanation: 'Beban logam tambahan m_t = 2,0 kg ditempatkan di atas kereta.',
          substitution: 'm_{\\text{total}} = m_0 + m_t = 4{,}0\\text{ kg} + 2{,}0\\text{ kg} = 6{,}0\\text{ kg}'
        },
        {
          stepNumber: 6,
          title: 'Identifikasi Kondisi Penarikan Baru',
          explanation: 'Gaya penarik baru F_baru = 24,0 N bekerja pada massa total m_total = 6,0 kg pada lintasan licin (gesekan f = 0).'
        },
        {
          stepNumber: 7,
          title: 'Susun Persamaan Hukum II Newton Baru',
          explanation: 'Gaya netto horizontal sama dengan massa total dikali percepatan baru.',
          mathFormula: '\\sum F_x = m_{\\text{total}} \\cdot a_{\\text{baru}}'
        },
        {
          stepNumber: 8,
          title: 'Substitusi Nilai Besaran',
          explanation: 'Masukkan F_baru = 24,0 N dan m_total = 6,0 kg.',
          substitution: '24{,}0 = 6{,}0 \\cdot a_{\\text{baru}}'
        },
        {
          stepNumber: 9,
          title: 'Hitung Percepatan Baru',
          explanation: 'Bagi gaya penarik dengan massa total sistem.',
          result: 'a_{\\text{baru}} = \\frac{24{,}0}{6{,}0} = 4{,}0\\text{ m/s}^2'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Satuan & Fisis',
          explanation: 'Satuan: N/(kg) = (kg·m/s²)/kg = m/s². Bila massa bertambah dari 4 kg menjadi 6 kg (faktor 1,5×) dan gaya bertambah dari 16 N menjadi 24 N (faktor 1,5×), percepatan tetap 4 m/s². Sangat konsisten.',
          consistencyCheck: 'a = 4{,}0\\text{ m/s}^2 \\quad (\\text{Terverifikasi})'
        }
      ],
      finalAnswer: 'Massa awal kereta m0 = 4,0 kg; Percepatan baru a_baru = 4,0 m/s²',
      consistencyCheck: 'Data eksperimen linear sempurna dengan gradien m = 4,0 kg.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, dari tabel eksperimen, rasio F per a pada setiap uji adalah enam dibagi satu koma lima, menghasilkan massa awal kereta sebesar empat kilogram. Kedua, saat beban dua kilogram ditambahkan, massa total kereta menjadi enam kilogram. Ketiga, gunakan Hukum Dua Newton: gaya dua puluh empat Newton dibagi massa total enam kilogram menghasilkan percepatan baru tepat empat koma nol meter per sekon kuadrat.',
    fastSolution: {
      concept: 'Interpretasi Gradien & Formulasi Skalar Langsung',
      reasoning: 'Rasio F/a konstan langsung menunjukkan massa m0 = 4 kg. Setelah ditambah 2 kg, kelembaman sistem menjadi 6 kg. Maka a = F / m_total.',
      mathFormula: 'a = \\frac{F_{\\text{baru}}}{m_0 + m_t} = \\frac{24}{4 + 2} = 4{,}0\\text{ m/s}^2',
      steps: [
        'Cari gradien: m0 = 6 / 1,5 = 4 kg.',
        'Massa total = 4 + 2 = 6 kg.',
        'Percepatan baru = 24 / 6 = 4,0 m/s².'
      ],
      finalAnswer: 'm0 = 4,0 kg; a = 4,0 m/s²'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Amati angka tabel: enam dibagi satu koma lima adalah empat kilogram. Tambah dua kilogram menjadi enam kilogram. Langsung bagi dua puluh empat dengan enam, dapat empat meter per sekon kuadrat. Sangat cepat dalam tiga langkah pikiran!',
    simulation: {
      type: 'single_horizontal',
      state: 'BERGERAK',
      acceleration: 4.0,
      initialVelocity: 0,
      duration: 2.0,
      displacement: 8.0,
      directionDescription: 'Kereta bermassa total 6 kg bergerak dipercepat ke kanan dengan a = 4,0 m/s²',
      extraValues: { m_awal: '4,0 kg', m_t: '2,0 kg', m_total: '6,0 kg', F: '24,0 N', a: '4,0 m/s²' },
      misterJoComment:
        'Sesuai perhitungan: Kereta 6 kg ditarik gaya 24 N menempuh s = 1/2 · a · t² = 1/2 × 4 × 2² = 8 meter dalam 2 sekon dengan kecepatan akhir v = 8 m/s!'
    },
    misterJoTakeaway:
      'Gradien grafik gaya terhadap percepatan (F vs a) adalah massa inersia benda. Semakin besar massa, semakin besar kelembaman benda melawan percepatan.'
  },

  // ==========================================
  // SOAL 03: HUKUM III NEWTON
  // ==========================================
  {
    id: 3,
    title: 'Soal 03: Hukum III Newton',
    subtitle: 'Interaksi Gaya Kontak Antardua Balok & Pasangan Aksi-Reaksi',
    topic: 'Hukum III Newton – Dua Balok Bersentuhan di Lantai Licin',
    difficulty: 'Dasar-Menengah',
    stimulusType: 'diagram',
    stimulusTitle: 'Sistem Kontak Balok A dan Balok B di Bidang Datar Licin',
    stimulusText:
      'Dua buah balok kayu presisi A (massa m_A = 4,0 kg) dan B (massa m_B = 6,0 kg) ditempatkan saling berdampingan dan bersentuhan rapat pada lantai horizontal tanpa gesekan. Sebuah gaya dorong luar horizontal F = 50,0 N dikerjakan langsung pada balok A mendorong ke arah kanan (menuju balok B).',
    problemStatement:
      'Kedua balok bergerak bersama-sama ke arah kanan tanpa terpisah. Permukaan kontak kedua balok saling memberikan gaya tekan.',
    questionText:
      '(a) Tentukan percepatan gerak kedua balok.\n(b) Gambarkan FBD terpisah untuk setiap balok, tentukan besar gaya kontak yang dikerjakan balok A pada balok B (F_AB) dan gaya balok B pada balok A (F_BA), serta jelaskan mengapa gaya kontak tersebut memenuhi Hukum III Newton!',
    ttsQuestion:
      'Soal tiga. Hukum Tiga Newton. Dua balok A bermassa empat kilogram dan balok B bermassa enam kilogram ditempatkan berdampingan saling bersentuhan di atas lantai horizontal licin. Gaya dorong horizontal lima puluh Newton dikerjakan pada balok A mendorong ke kanan. Tentukan percepatan gerak kedua balok, serta tentukan besar gaya kontak F A B dan F B A antarkedua balok!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Mengapa gaya luar F = 50 N tidak langsung bekerja pada balok B?',
          answer: 'Gaya F hanya menyentuh dan menekan balok A. Balok B bergerak karena didorong oleh bidang kontak dari balok A melalui gaya normal kontak F_AB.'
        },
        {
          question: 'Apakah F_AB dan F_BA bekerja pada benda yang sama?',
          answer: 'TIDAK! F_AB bekerja pada balok B, sedangkan F_BA bekerja pada balok A. Syarat mutlak pasangan aksi-reaksi adalah bekerja pada dua benda yang berbeda.'
        },
        {
          question: 'Mengapa gaya aksi-reaksi kontak tidak saling meniadakan?',
          answer: 'Karena gaya aksi dan reaksi bekerja pada benda yang berbeda, keduanya tidak pernah dijumlahkan dalam satu persamaan gerak benda tunggal.'
        }
      ],
      summary: 'Hukum III Newton menyatakan gaya selalu muncul berpasangan. Jika benda A mengerjakan gaya pada benda B, maka benda B mengerjakan gaya yang sama besar dan berlawanan arah pada benda A.'
    },
    ttsAnalysis:
      'Pahami konsep dasarnya. Gaya luar lima puluh Newton hanya bekerja pada balok A. Balok B terdorong maju bukan oleh gaya luar itu, melainkan oleh gaya kontak antarpeti. Sesuai Hukum Tiga Newton, gaya tekan balok A pada balok B pasti sama besar dan berlawanan arah dengan gaya tekan balok B pada balok A, namun bekerja pada dua benda yang terpisah.',
    fbdBodies: [
      {
        id: 'balok-A',
        name: 'Balok A (m_A = 4 kg)',
        mass: 4,
        forces: [
          {
            id: 'F_luar',
            name: 'Gaya Dorong Luar',
            symbol: 'F',
            magnitude: 50,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Gaya dorong luar ke kanan pada balok A.'
          },
          {
            id: 'F_BA',
            name: 'Gaya Reaksi Kontak dari B pada A',
            symbol: 'F_{BA}',
            magnitude: 30,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Balok B menahan balok A ke arah kiri (reaksi).'
          },
          {
            id: 'N_A',
            name: 'Gaya Normal Lantai pada A',
            symbol: 'N_A',
            magnitude: 40,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lantai menopang balok A (40 N).'
          },
          {
            id: 'W_A',
            name: 'Gaya Berat Balok A',
            symbol: 'W_A',
            magnitude: 40,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok A (4 × 10 = 40 N).'
          }
        ],
        notes: 'Resultan horizontal balok A: F - F_BA = 50 - 30 = 20 N = m_A · a.'
      },
      {
        id: 'balok-B',
        name: 'Balok B (m_B = 6 kg)',
        mass: 6,
        forces: [
          {
            id: 'F_AB',
            name: 'Gaya Aksi Kontak dari A pada B',
            symbol: 'F_{AB}',
            magnitude: 30,
            unit: 'N',
            angleDeg: 0,
            color: '#2563EB',
            description: 'Balok A mendorong balok B ke arah kanan (aksi).'
          },
          {
            id: 'N_B',
            name: 'Gaya Normal Lantai pada B',
            symbol: 'N_B',
            magnitude: 60,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lantai menopang balok B (60 N).'
          },
          {
            id: 'W_B',
            name: 'Gaya Berat Balok B',
            symbol: 'W_B',
            magnitude: 60,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok B (6 × 10 = 60 N).'
          }
        ],
        notes: 'Resultan horizontal balok B: F_AB = 30 N = m_B · a (6 × 5 = 30 N).'
      }
    ],
    ttsFbd:
      'Perhatikan dua diagram benda bebas yang terpisah. Pada balok A, bekerja gaya dorong luar lima puluh Newton ke kanan, dan gaya kontak balok B sebesar tiga puluh Newton ke kiri. Pada balok B, hanya ada satu gaya horizontal, yaitu gaya kontak dari balok A sebesar tiga puluh Newton ke kanan. Kedua gaya kontak ini besarnya persis sama dan arahnya berlawanan, memenuhi Hukum Tiga Newton.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Tinjau Sistem Gabungan (A + B)',
          explanation: 'Kedua balok bergerak bersama dengan percepatan a yang sama. Gaya kontak F_AB dan F_BA merupakan gaya internal sistem yang saling meniadakan.'
        },
        {
          stepNumber: 2,
          title: 'Terapkan Hukum II Newton untuk Sistem',
          explanation: 'Gaya luar total sama dengan massa total sistem dikalikan percepatan.',
          mathFormula: '\\sum F_{\\text{eksternal}} = (m_A + m_B) \\cdot a'
        },
        {
          stepNumber: 3,
          title: 'Hitung Percepatan Bersama a',
          explanation: 'Substitusi F = 50 N, m_A = 4 kg, dan m_B = 6 kg.',
          substitution: '50 = (4 + 6) \\cdot a \\implies 50 = 10a \\implies a = 5{,}0\\text{ m/s}^2'
        },
        {
          stepNumber: 4,
          title: 'Isolasi Balok B (FBD Balok B)',
          explanation: 'Pada arah horizontal, balok B hanya mengalami satu-satunya gaya luar, yaitu gaya kontak dari balok A (F_AB) ke arah kanan.'
        },
        {
          stepNumber: 5,
          title: 'Terapkan Persamaan Newton pada Balok B',
          explanation: 'Gaya kontak F_AB harus mempercepat balok B sebesar a = 5 m/s².',
          mathFormula: '\\sum F_{Bx} = m_B \\cdot a \\implies F_{AB} = m_B \\cdot a'
        },
        {
          stepNumber: 6,
          title: 'Hitung Nilai F_AB',
          explanation: 'Masukkan m_B = 6 kg dan a = 5,0 m/s².',
          substitution: 'F_{AB} = 6 \\times 5{,}0 = 30{,}0\\text{ N (ke kanan)}'
        },
        {
          stepNumber: 7,
          title: 'Isolasi Balok A (FBD Balok A)',
          explanation: 'Pada arah horizontal, balok A mengalami gaya luar F ke kanan dan gaya reaksi kontak F_BA dari balok B ke kiri.'
        },
        {
          stepNumber: 8,
          title: 'Terapkan Persamaan Newton pada Balok A',
          explanation: 'Gaya netto yang bekerja pada balok A menghasilkan percepatan a = 5 m/s².',
          mathFormula: 'F - F_{BA} = m_A \\cdot a \\implies 50 - F_{BA} = 4 \\times 5{,}0'
        },
        {
          stepNumber: 9,
          title: 'Hitung Nilai F_BA',
          explanation: 'Selesaikan persamaan untuk F_BA.',
          substitution: '50 - F_{BA} = 20 \\implies F_{BA} = 50 - 20 = 30{,}0\\text{ N (ke kiri)}'
        },
        {
          stepNumber: 10,
          title: 'Verifikasi Pasangan Aksi-Reaksi Hukum III Newton',
          explanation: 'Terbukti secara matematis dan konseptual: |F_AB| = |F_BA| = 30 N, berlawanan arah, bekerja pada dua benda berbeda (satu pada B, satu pada A), dan bertindak serentak.',
          consistencyCheck: '|\\vec{F}_{AB}| = |\\vec{F}_{BA}| = 30{,}0\\text{ N} \\quad (\\vec{F}_{AB} = -\\vec{F}_{BA})'
        }
      ],
      finalAnswer: 'Percepatan a = 5,0 m/s²; Gaya kontak F_AB = F_BA = 30,0 N',
      consistencyCheck: 'Hukum III Newton terbukti: F_AB = -F_BA dengan magnitudo 30 N.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, tinjau sistem gabungan. Massa total adalah empat ditambah enam sama dengan sepuluh kilogram. Gaya lima puluh Newton dibagi sepuluh kilogram menghasilkan percepatan lima meter per sekon kuadrat. Kedua, tinjau balok B. Satu-satunya gaya yang mendorong balok B adalah gaya kontak F A B. Maka F A B sama dengan massa B dikali percepatan, yaitu enam dikali lima sama dengan tiga puluh Newton ke kanan. Ketiga, tinjau balok A: lima puluh dikurang F B A sama dengan empat dikali lima, sehingga F B A sama dengan tiga puluh Newton ke kiri. Terbukti keduanya sama besar dan berlawanan arah.',
    fastSolution: {
      concept: 'Distribusi Gaya Terhadap Massa Inersia (Metode Rasio)',
      reasoning: 'Gaya kontak F_AB hanya bertugas mempercepat balok B. Maka F_AB mengambil fraksi m_B / (m_A + m_B) dari gaya total F.',
      mathFormula: 'F_{AB} = \\left(\\frac{m_B}{m_A + m_B}\\right) F = \\left(\\frac{6}{4 + 6}\\right) 50 = 30{,}0\\text{ N}',
      steps: [
        'Hitung percepatan langsung: a = 50 / (4 + 6) = 5 m/s².',
        'Fraksi gaya kontak untuk mendorong B: F_AB = 6 kg × 5 m/s² = 30 N.',
        'Hukum III Newton: F_BA = F_AB = 30 N.'
      ],
      finalAnswer: 'a = 5,0 m/s²; F_AB = 30,0 N'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Percepatan sistem langsung lima puluh dibagi sepuluh, dapat lima meter per sekon kuadrat. Karena gaya kontak hanya mendorong balok B, kalikan langsung massa balok B yaitu enam kilogram dengan percepatan lima. Hasilnya seketika tiga puluh Newton!',
    simulation: {
      type: 'two_blocks_flat',
      state: 'BERGERAK',
      acceleration: 5.0,
      initialVelocity: 0,
      duration: 2.0,
      displacement: 10.0,
      directionDescription: 'Balok A dan Balok B meluncur bersama ke kanan dengan a = 5,0 m/s²',
      extraValues: { mA: '4,0 kg', mB: '6,0 kg', F: '50 N', a: '5,0 m/s²', F_kontak: '30,0 N' },
      misterJoComment:
        'Terbukti dalam simulasi: Balok A dan Balok B bergerak menempel tanpa renggang, menempuh s = 1/2 · 5 · 2² = 10 meter dalam 2 sekon. Gaya kontak 30 N mendorong B secara kontinu!'
    },
    misterJoTakeaway:
      'Pasangan aksi-reaksi Hukum III Newton TIDAK PERNAH saling meniadakan karena bekerja pada dua benda yang BERBEDA!'
  },

  // ==========================================
  // SOAL 04: DUA BALOK DIHUBUNGKAN TALI LICIN
  // ==========================================
  {
    id: 4,
    title: 'Soal 04: Dua Balok Dihubungkan Tali Ideal',
    subtitle: 'Analisis Tegangan Tali & Efek Pemindahan Lokasi Gaya Tarik',
    topic: 'Sistem Terhubung Tali – Meja Datar Licin',
    difficulty: 'Dasar-Menengah',
    stimulusType: 'cerita',
    stimulusTitle: 'Uji Batas Tegangan Tali Penghubung Dua Balok',
    stimulusText:
      'Dua balok P (massa m_P = 3,0 kg) dan Q (massa m_Q = 7,0 kg) berada di atas meja laboratorium horizontal yang licin tanpa gesekan. Kedua balok dihubungkan oleh seutas tali ringan tak elastis yang memiliki batas tegangan maksimum sebelum putus sebesar T_maks = 35,0 N. Mula-mula, gaya tarik horizontal F = 40,0 N dikerjakan pada balok Q menarik ke arah kanan (sehingga balok P terseret di belakangnya).',
    problemStatement:
      'Sistem bergerak dari keadaan diam di atas meja. Guru meminta siswa mengevaluasi apakah tali aman dari risiko putus.',
    questionText:
      '(a) Hitung percepatan sistem dan tegangan tali penghubung T1.\n(b) Jika gaya tarik F = 40,0 N tersebut dipindahkan posisinya untuk menarik balok P ke arah kiri (sehingga balok Q yang terseret di belakang), hitung tegangan tali baru T2 dan analisislah apakah tali akan putus!',
    ttsQuestion:
      'Soal empat. Dua balok di bidang datar licin. Balok P bermassa tiga kilogram dan balok Q bermassa tujuh kilogram dihubungkan tali ideal di atas meja licin. Tali mampu menahan tegangan maksimum tiga puluh lima Newton. Mula-mula gaya tarik empat puluh Newton menarik balok Q ke kanan. Hitung percepatan dan tegangan tali satu. Kemudian, jika gaya empat puluh Newton tersebut dipindahkan untuk menarik balok P ke kiri, berapakah tegangan tali dua, dan apakah tali tersebut akan putus?',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Apakah percepatan sistem berubah jika letak gaya dipindahkan?',
          answer: 'Tidak! Percepatan sistem ditentukan oleh gaya luar total dibagi massa total: a = F / (m_P + m_Q) = 40 / 10 = 4 m/s² pada kedua kasus.'
        },
        {
          question: 'Mengapa tegangan tali bisa berbeda jika lokasi gaya diubah?',
          answer: 'Karena tali bertugas menarik benda yang berada di belakangnya. Pada kasus pertama, tali hanya menarik balok P (3 kg). Pada kasus kedua, tali harus menarik balok Q (7 kg) yang massanya jauh lebih besar!'
        },
        {
          question: 'Kapan tali mengalami tegangan terbesar?',
          answer: 'Tegangan tali paling besar saat tali menarik benda dengan massa terbesar.'
        }
      ],
      summary: 'Pada sistem terhubung tali, tali penghubung berfungsi mentransmisikan gaya untuk mempercepat massa di belakangnya. T = m_belakang · a.'
    },
    ttsAnalysis:
      'Ini adalah jebakan konsep yang sangat menarik. Meskipun percepatan kedua kondisi persis sama yaitu empat meter per sekon kuadrat, tegangan talinya sangat berbeda! Saat gaya menarik balok Q, tali hanya bertugas menarik balok P yang ringan tiga kilogram. Namun saat gaya dipindahkan menarik balok P, tali harus menyeret balok Q yang berat tujuh kilogram.',
    fbdBodies: [
      {
        id: 'balok-P',
        name: 'Balok P (m_P = 3 kg)',
        mass: 3,
        forces: [
          {
            id: 'T1',
            name: 'Tegangan Tali Penarik P',
            symbol: 'T_1',
            magnitude: 12,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Tali menarik balok P ke kanan (T1 = m_P · a = 3 × 4 = 12 N).'
          },
          {
            id: 'N_P',
            name: 'Gaya Normal Meja pada P',
            symbol: 'N_P',
            magnitude: 30,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Gaya normal penopang balok P (30 N).'
          },
          {
            id: 'W_P',
            name: 'Gaya Berat Balok P',
            symbol: 'W_P',
            magnitude: 30,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok P (30 N).'
          }
        ],
        notes: 'Pada Kasus 1: Balok P dipercepat semata-mata oleh tegangan tali T1 = 12 N.'
      },
      {
        id: 'balok-Q',
        name: 'Balok Q (m_Q = 7 kg)',
        mass: 7,
        forces: [
          {
            id: 'F_tarik',
            name: 'Gaya Tarik Luar F',
            symbol: 'F',
            magnitude: 40,
            unit: 'N',
            angleDeg: 0,
            color: '#2563EB',
            description: 'Gaya luar menarik balok Q ke kanan.'
          },
          {
            id: 'T1_retard',
            name: 'Tegangan Tali Menahan Q',
            symbol: 'T_1',
            magnitude: 12,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Tali menahan balok Q ke kiri (12 N).'
          },
          {
            id: 'N_Q',
            name: 'Gaya Normal Meja pada Q',
            symbol: 'N_Q',
            magnitude: 70,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Gaya normal penopang balok Q (70 N).'
          },
          {
            id: 'W_Q',
            name: 'Gaya Berat Balok Q',
            symbol: 'W_Q',
            magnitude: 70,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok Q (70 N).'
          }
        ],
        notes: 'Pada Kasus 1: F - T1 = 40 - 12 = 28 N = m_Q · a (7 × 4 = 28 N).'
      }
    ],
    ttsFbd:
      'Perhatikan diagram benda bebas pada Kasus Satu. Balok P di belakang ditarik oleh tegangan tali T satu sebesar dua belas Newton ke kanan. Balok Q di depan ditarik gaya luar empat puluh Newton ke kanan dan ditahan tali T satu sebesar dua belas Newton ke kiri. Resultan gaya pada Q adalah dua puluh delapan Newton, tepat sama dengan massa tujuh kilogram dikali percepatan empat meter per sekon kuadrat.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Kasus 1: Tinjau Sistem Total (F Menarik Balok Q)',
          explanation: 'Massa total sistem m_total = m_P + m_Q = 3,0 kg + 7,0 kg = 10,0 kg.'
        },
        {
          stepNumber: 2,
          title: 'Hitung Percepatan Sistem a',
          explanation: 'Terapkan Hukum II Newton pada sistem gabungan.',
          mathFormula: 'a = \\frac{F}{m_P + m_Q} = \\frac{40{,}0}{3{,}0 + 7{,}0} = 4{,}0\\text{ m/s}^2'
        },
        {
          stepNumber: 3,
          title: 'Tinjau FBD Balok P pada Kasus 1',
          explanation: 'Balok P hanya ditarik oleh tali penghubung T1.',
          mathFormula: '\\sum F_{Px} = m_P \\cdot a \\implies T_1 = m_P \\cdot a'
        },
        {
          stepNumber: 4,
          title: 'Hitung Tegangan Tali T1',
          explanation: 'Substitusi m_P = 3,0 kg dan a = 4,0 m/s².',
          substitution: 'T_1 = 3{,}0 \\times 4{,}0 = 12{,}0\\text{ N}'
        },
        {
          stepNumber: 5,
          title: 'Evaluasi Keamanan Tali pada Kasus 1',
          explanation: 'Tegangan T1 = 12 N jauh lebih kecil dari batas maksimum T_maks = 35 N. Tali sangat aman.'
        },
        {
          stepNumber: 6,
          title: 'Kasus 2: Gaya F = 40 N Dipindahkan Menarik Balok P ke Kiri',
          explanation: 'Massa total sistem tetap 10,0 kg, gaya penarik tetap 40 N, sehingga percepatan sistem tetap a = 4,0 m/s².'
        },
        {
          stepNumber: 7,
          title: 'Tinjau FBD Balok Q pada Kasus 2',
          explanation: 'Kini balok Q berada di belakang dan ditarik oleh tali T2.',
          mathFormula: '\\sum F_{Qx} = m_Q \\cdot a \\implies T_2 = m_Q \\cdot a'
        },
        {
          stepNumber: 8,
          title: 'Hitung Tegangan Tali T2',
          explanation: 'Substitusi m_Q = 7,0 kg dan a = 4,0 m/s².',
          substitution: 'T_2 = 7{,}0 \\times 4{,}0 = 28{,}0\\text{ N}'
        },
        {
          stepNumber: 9,
          title: 'Perbandingan Kedua Tegangan Tali',
          explanation: 'T2 (28 N) lebih dari 2,3 kali lebih besar dibandingkan T1 (12 N) karena m_Q > m_P.'
        },
        {
          stepNumber: 10,
          title: 'Analisis Risiko Putus Tali',
          explanation: 'Karena T2 = 28,0 N < T_maks = 35,0 N, tali masih tidak putus namun mendekati ambang batas kekuatannya.',
          consistencyCheck: 'T_1 = 12{,}0\\text{ N} < 35\\text{ N}; \\quad T_2 = 28{,}0\\text{ N} < 35\\text{ N} \\quad (\\text{Keduanya Aman})'
        }
      ],
      finalAnswer: 'Kasus 1: a = 4,0 m/s², T1 = 12,0 N; Kasus 2: T2 = 28,0 N (Tali TIDAK putus)',
      consistencyCheck: 'T1 + T2 = 12 + 28 = 40 N = F (Hukum kesetaraan gaya internal).'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Kasus satu: percepatan sistem adalah empat puluh dibagi sepuluh, dapat empat meter per sekon kuadrat. Tali satu hanya menarik balok P, maka T satu sama dengan tiga dikali empat sama dengan dua belas Newton. Tali sangat aman karena batasnya tiga puluh lima Newton. Kasus dua: ketika gaya dipindahkan menarik balok P, percepatan tetap empat meter per sekon kuadrat, tetapi tali sekarang harus menarik balok Q. Maka T dua sama dengan tujuh dikali empat sama dengan dua puluh delapan Newton. Karena dua puluh delapan masih di bawah tiga puluh lima Newton, tali tetap utuh dan tidak putus.',
    fastSolution: {
      concept: 'Rasio Massa Beban Terbelakang',
      reasoning: 'Tegangan tali sebanding langsung dengan massa benda di belakang tali: T = (m_belakang / m_total) · F.',
      mathFormula: 'T_1 = \\frac{3}{10} \\times 40 = 12\\text{ N}, \\quad T_2 = \\frac{7}{10} \\times 40 = 28\\text{ N}',
      steps: [
        'Kasus 1: m_belakang = 3 kg => T1 = (3/10) × 40 = 12 N.',
        'Kasus 2: m_belakang = 7 kg => T2 = (7/10) × 40 = 28 N.',
        'Bandingkan dengan batas 35 N: keduanya aman.'
      ],
      finalAnswer: 'T1 = 12 N, T2 = 28 N (Aman)'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Cukup hitung fraksi massa yang diseret tali. Tali satu menarik tiga per sepuluh dari empat puluh Newton, langsung dapat dua belas Newton. Tali dua menarik tujuh per sepuluh dari empat puluh Newton, langsung dapat dua puluh delapan Newton. Keduanya di bawah tiga puluh lima Newton, jadi tali tidak putus!',
    simulation: {
      type: 'two_blocks_flat',
      state: 'BERGERAK',
      acceleration: 4.0,
      initialVelocity: 0,
      duration: 2.0,
      displacement: 8.0,
      directionDescription: 'Balok P dan Balok Q meluncur dengan a = 4,0 m/s², tali menegang T = 12 N',
      extraValues: { mP: '3,0 kg', mQ: '7,0 kg', F: '40,0 N', T1: '12,0 N', T2_alt: '28,0 N' },
      misterJoComment:
        'Simulasi membuktikan: Dalam 2 sekon kedua balok menempuh s = 1/2 · 4 · 2² = 8 meter. Tali tetap lurus dan menegang secara konstan tanpa putus!'
    },
    misterJoTakeaway:
      'Tegangan tali penghubung selalu berbanding lurus dengan massa yang DITARIK oleh tali tersebut: T = m_seret · a.'
  },

  // ==========================================
  // SOAL 05: KESETIMBANGAN GESEKAN STATIS
  // ==========================================
  {
    id: 5,
    title: 'Soal 05: Kesetimbangan dengan Gesekan Statis',
    subtitle: 'Ambang Batas Gerak & Sifat Adaptif Gaya Gesek',
    topic: 'Gaya Gesek Statis vs Kinetis – Lantai Kasar',
    difficulty: 'Menengah-Tinggi',
    stimulusType: 'tabel',
    stimulusTitle: 'Pengujian Gaya Tarik Bertahap pada Balok Kayu Berat',
    stimulusText:
      'Sebuah balok kayu bermassa m = 10,0 kg diletakkan pada permukaan lantai beton horizontal kasar. Berdasarkan uji material, koefisien gesek statis antara balok dan lantai adalah μs = 0,40 dan koefisien gesek kinetisnya adalah μk = 0,25. Percepatan gravitasi g = 10 m/s². Mula-mula balok berada dalam keadaan diam sempurna. Gaya tarik horizontal F dikerjakan secara bertahap dalam tiga tahap berurutan.',
    stimulusTableData: {
      caption: 'Tabel 2. Tiga Tahap Pengujian Gaya Luar Horizontal F',
      headers: ['Tahap', 'Gaya Luar F (N)', 'Kondisi Gerak Balok', 'Gaya Gesek f (N)'],
      rows: [
        ['Tahap 1', '25,0 N', 'Diam (Setimbang)', 'Perlu dianalisis'],
        ['Tahap 2', '40,0 N', 'Tepat Akan Bergerak', 'Perlu dianalisis'],
        ['Tahap 3', '55,0 N', 'Bergerak Dipercepat', 'Perlu dianalisis']
      ]
    },
    problemStatement:
      'Banyak siswa beranggapan keliru bahwa gaya gesek statis selalu bernilai μs · N kapan pun ada gaya luar yang bekerja.',
    questionText:
      '(a) Tentukan besar gaya normal N dan gaya gesek statis maksimum f_{s,\\text{maks}}.\n(b) Hitung besar gaya gesek yang sebenarnya bekerja pada balok pada masing-masing Tahap 1, 2, dan 3!\n(c) Hitung percepatan balok pada Tahap 3!',
    ttsQuestion:
      'Soal lima. Kesetimbangan dengan gesekan statis. Balok kayu sepuluh kilogram berada di atas lantai kasar dengan koefisien gesek statis nol koma empat puluh dan kinetis nol koma dua puluh lima. Balok mula-mula diam. Dikerjakan gaya horizontal bertahap: Tahap satu dua puluh lima Newton, Tahap dua empat puluh Newton, dan Tahap tiga lima puluh lima Newton. Tentukan besar gaya gesek pada masing-masing tahap, dan hitung percepatan balok pada Tahap tiga!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Apakah gaya gesek statis selalu sama dengan μs · N?',
          answer: 'TIDAK! Nilai μs · N adalah batas maksimum (f_{s,maks}). Selama gaya luar F < f_{s,maks}, gaya gesek statis bersifat adaptif: f_s = F agar benda tetap setimbang (ΣF = 0).'
        },
        {
          question: 'Kapan gaya gesek kinetis mulai bekerja?',
          answer: 'Gaya gesek kinetis fk = μk · N HANYA bekerja saat benda sudah benar-benar bergerak meluncur relatif terhadap permukaan (F > f_{s,maks}).'
        },
        {
          question: 'Mengapa percepatan pada Tahap 3 tidak menggunakan μs?',
          answer: 'Karena balok sudah meluncur bergerak, ikatan mikroskopis statis telah putus, sehingga hambatan yang bekerja adalah gesekan kinetis fk.'
        }
      ],
      summary: 'Gaya gesek statis rentangnya 0 ≤ fs ≤ μs·N (menyesuaikan gaya luar). Begitu benda bergerak, gaya gesek melompat turun ke nilai konstan fk = μk·N.'
    },
    ttsAnalysis:
      'Ingat prinsip krusial ini: gaya gesek statis adalah gaya cerdas yang menyesuaikan diri. Selama gaya luar belum melampaui batas maksimum empat puluh Newton, gaya gesek statis hanya sebesar gaya luarnya agar benda tetap diam. Begitu gaya luar melampaui empat puluh Newton pada Tahap tiga, barulah benda meluncur dan gaya geseknya berubah menjadi kinetis dua puluh lima Newton.',
    fbdBodies: [
      {
        id: 'balok-tahap3',
        name: 'Balok Kayu (Tahap 3: F = 55 N)',
        mass: 10,
        forces: [
          {
            id: 'F_tarik',
            name: 'Gaya Tarik Luar F',
            symbol: 'F',
            magnitude: 55,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Gaya tarik ke kanan sebesar 55 N.'
          },
          {
            id: 'fk',
            name: 'Gaya Gesek Kinetis',
            symbol: 'f_k',
            magnitude: 25,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Gaya gesek kinetis melawan gerak ke kiri (fk = μk · N = 0,25 × 100 = 25 N).'
          },
          {
            id: 'N',
            name: 'Gaya Normal Lantai',
            symbol: 'N',
            magnitude: 100,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lantai menopang balok (100 N).'
          },
          {
            id: 'W',
            name: 'Gaya Berat Balok',
            symbol: 'W',
            magnitude: 100,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok (10 × 10 = 100 N).'
          }
        ],
        notes: 'Pada Tahap 3: Resultan gaya = 55 - 25 = 30 N ke kanan. Balok dipercepat dengan a = 30/10 = 3,0 m/s².'
      }
    ],
    ttsFbd:
      'Diagram benda bebas pada Tahap tiga memperlihatkan gaya normal seratus Newton ke atas mengimbangi gaya berat seratus Newton ke bawah. Pada sumbu horizontal, gaya tarik lima puluh lima Newton ke kanan dilawan gaya gesek kinetis dua puluh lima Newton ke kiri. Resultan gaya bersih adalah tiga puluh Newton ke kanan, menghasilkan percepatan tiga meter per sekon kuadrat.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Hitung Gaya Normal N',
          explanation: 'Pada bidang horizontal tanpa gaya vertikal luar, gaya normal menyeimbangkan berat balok.',
          mathFormula: '\\sum F_y = N - W = 0 \\implies N = mg = (10)(10) = 100\\text{ N}'
        },
        {
          stepNumber: 2,
          title: 'Hitung Ambang Batas Gesek Statis Maksimum',
          explanation: 'Nilai batas sebelum benda dapat mulai bergerak.',
          mathFormula: 'f_{s,\\text{maks}} = \\mu_s \\cdot N = 0{,}40 \\times 100 = 40{,}0\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Hitung Gaya Gesek Kinetis',
          explanation: 'Gaya gesek yang bekerja hanya jika benda sudah meluncur.',
          mathFormula: 'f_k = \\mu_k \\cdot N = 0{,}25 \\times 100 = 25{,}0\\text{ N}'
        },
        {
          stepNumber: 4,
          title: 'Analisis Tahap 1: F = 25 N',
          explanation: 'Bandingkan gaya luar dengan batas statis: F = 25 N < f_{s,maks} (40 N). Benda tetap DIAM (setimbang).'
        },
        {
          stepNumber: 5,
          title: 'Tentukan Gaya Gesek pada Tahap 1',
          explanation: 'Karena benda diam, ΣFx = 0, maka fs harus sama persis dengan gaya penarik.',
          substitution: '\\sum F_x = F - f_s = 0 \\implies f_s = F = 25{,}0\\text{ N}'
        },
        {
          stepNumber: 6,
          title: 'Analisis Tahap 2: F = 40 N',
          explanation: 'Gaya luar sama persis dengan batas maksimum: F = f_{s,maks} = 40 N. Benda dalam kondisi tepat saat akan bergerak (kesetimbangan limit), percepatan masih a = 0.',
          result: 'f_s = f_{s,\\text{maks}} = 40{,}0\\text{ N}'
        },
        {
          stepNumber: 7,
          title: 'Analisis Tahap 3: F = 55 N',
          explanation: 'Gaya luar F = 55 N > f_{s,maks} (40 N). Ambang gesekan statis terlampaui, balok BERGERAK DIPERCEPAT.'
        },
        {
          stepNumber: 8,
          title: 'Tentukan Gaya Gesek pada Tahap 3',
          explanation: 'Karena sudah bergerak, gaya gesek yang bekerja adalah gaya gesek kinetis fk.',
          result: 'f = f_k = 25{,}0\\text{ N}'
        },
        {
          stepNumber: 9,
          title: 'Hitung Percepatan pada Tahap 3',
          explanation: 'Terapkan Hukum II Newton untuk benda bergerak.',
          mathFormula: 'a = \\frac{F - f_k}{m} = \\frac{55{,}0 - 25{,}0}{10{,}0} = \\frac{30{,}0}{10{,}0} = 3{,}0\\text{ m/s}^2'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Fisis',
          explanation: 'Tahap 1: fs = 25 N (diam, a = 0). Tahap 2: fs = 40 N (tepat akan bergerak, a = 0). Tahap 3: fk = 25 N (bergerak, a = 3,0 m/s²). Tidak ada kontradiksi mekanika.',
          consistencyCheck: 'f_1 = 25\\text{ N}, \\quad f_2 = 40\\text{ N}, \\quad f_3 = 25\\text{ N}, \\quad a_3 = 3{,}0\\text{ m/s}^2'
        }
      ],
      finalAnswer: 'Tahap 1: fs = 25 N; Tahap 2: fs = 40 N; Tahap 3: fk = 25 N, a = 3,0 m/s²',
      consistencyCheck: 'Prinsip 0 ≤ fs ≤ μs·N terbukti secara kuantitatif.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, gaya normal adalah seratus Newton. Gaya gesek statis maksimum adalah nol koma empat puluh dikali seratus sama dengan empat puluh Newton. Gaya gesek kinetisnya dua puluh lima Newton. Pada Tahap satu, gaya luar dua puluh lima Newton lebih kecil dari empat puluh Newton, sehingga balok tetap diam dan gaya gesek statisnya tepat dua puluh lima Newton. Pada Tahap dua, gaya luar empat puluh Newton sama dengan batas maksimum, sehingga balok tepat akan bergerak dengan gaya gesek empat puluh Newton. Pada Tahap tiga, gaya luar lima puluh lima Newton lebih besar dari empat puluh Newton, balok bergerak dengan gaya gesek kinetis dua puluh lima Newton dan percepatan tiga meter per sekon kuadrat.',
    fastSolution: {
      concept: 'Aturan Ambang Tiga Zona Gesekan',
      reasoning: 'Zona 1 (F < fs_max): fs = F. Zona 2 (F = fs_max): fs = fs_max. Zona 3 (F > fs_max): f = fk, a = (F - fk)/m.',
      mathFormula: 'f = \\begin{cases} F & F < 40 \\\\ 40 & F = 40 \\\\ 25 & F > 40 \\end{cases}',
      steps: [
        'Hitung fs_max = 40 N dan fk = 25 N.',
        'Tahap 1 (25 N < 40 N): Diam => fs = 25 N.',
        'Tahap 2 (40 N = 40 N): Tepat gerak => fs = 40 N.',
        'Tahap 3 (55 N > 40 N): Gerak => fk = 25 N, a = (55 - 25)/10 = 3,0 m/s².'
      ],
      finalAnswer: 'f1 = 25 N, f2 = 40 N, f3 = 25 N, a3 = 3,0 m/s²'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Cukup ingat batas empat puluh Newton. Di bawah empat puluh, gaya gesek meniru gaya penarik: dua puluh lima Newton. Tepat di empat puluh, gesekannya empat puluh Newton. Di atas empat puluh, gesekannya turun ke kinetis dua puluh lima Newton, sehingga percepatannya lima puluh lima kurang dua puluh lima dibagi sepuluh sama dengan tiga meter per sekon kuadrat!',
    simulation: {
      type: 'friction_threshold',
      state: 'BERGERAK',
      acceleration: 3.0,
      initialVelocity: 0,
      duration: 2.0,
      displacement: 6.0,
      directionDescription: 'Balok kayu meluncur ke kanan (Tahap 3) dengan a = 3,0 m/s² melawan gesek kinetis 25 N',
      extraValues: { N: '100 N', fs_max: '40 N', fk: '25 N', F: '55 N', a: '3,0 m/s²' },
      misterJoComment:
        'Simulasi membuktikan: Pada Tahap 3 dengan gaya tarik 55 N, balok mengatasi gesek statis 40 N dan meluncur dengan a = (55 - 25)/10 = 3,0 m/s², menempuh jarak 6 meter dalam 2 sekon!'
    },
    misterJoTakeaway:
      'Gaya gesek statis BUKAN nilai tunggal, melainkan memiliki rentang adaptif 0 ≤ fs ≤ μs·N yang besarnya menyesuaikan gaya penarik selama benda masih diam.'
  },

  // ==========================================
  // SOAL 06: BIDANG DATAR KATROL TETAP SETIMBANG
  // ==========================================
  {
    id: 6,
    title: 'Soal 06: Bidang Datar & Katrol Tetap Setimbang',
    subtitle: 'Analisis Syarat Kesetimbangan Statis & Penambahan Beban Kritis',
    topic: 'Katrol Tetap – Kesetimbangan di Meja Kasar',
    difficulty: 'Menengah-Tinggi',
    stimulusType: 'diagram',
    stimulusTitle: 'Sistem Balok Meja Kasar Terhubung Beban Gantung Berisi Pasir',
    stimulusText:
      'Balok A bermassa m_A = 8,0 kg diletakkan di atas meja horizontal kasar dengan koefisien gesek statis μs = 0,50 dan koefisien gesek kinetis μk = 0,35. Balok A dihubungkan oleh seutas tali ringan tak elastis melalui sebuah katrol tetap ideal di tepi meja dengan sebuah wadah gantung B bermassa awal m_B = 3,0 kg. Percepatan gravitasi g = 10 m/s².',
    problemStatement:
      'Sistem dibiarkan bebas. Selanjutnya, seorang siswa perlahan-lahan menuangkan pasir ke dalam wadah gantung B hingga suatu saat sistem tepat akan mulai bergerak.',
    questionText:
      '(a) Buktikan bahwa dengan kondisi awal m_B = 3,0 kg, sistem berada dalam kesetimbangan statis (diam sempurna), dan hitung besar tegangan tali T serta gaya gesek statis f_s yang bekerja pada balok A!\n(b) Tentukan massa tambahan pasir maksimum Δm yang dapat ditambahkan ke wadah B agar sistem tepat belum bergerak!',
    ttsQuestion:
      'Soal enam. Bidang datar terhubung katrol tetap dalam keadaan setimbang. Balok A bermassa delapan kilogram di atas meja kasar dengan koefisien gesek statis nol koma lima puluh dihubungkan tali melalui katrol tetap ke wadah gantung B bermassa tiga kilogram. Buktikan sistem awal diam setimbang, hitung tegangan tali dan gaya gesek statisnya, serta tentukan massa pasir tambahan maksimum agar sistem tepat belum bergerak!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Gaya apa yang bertindak sebagai gaya penarik sistem?',
          answer: 'Gaya berat wadah gantung B (W_B = m_B · g) yang ditransmisikan melalui tegangan tali ideal ke balok A.'
        },
        {
          question: 'Berapakah batas ketahanan gesek statis maksimum meja?',
          answer: 'f_{s,maks} = μs · N_A = μs · (m_A · g) = 0,50 · (8 · 10) = 40 N.'
        },
        {
          question: 'Bagaimana syarat agar sistem tetap diam?',
          answer: 'Sistem tetap diam selama gaya penarik W_B ≤ f_{s,maks}. Selama kondisi ini terpenuhi, T = W_B dan fs = T.'
        }
      ],
      summary: 'Pada katrol tetap ideal, tegangan tali pada kedua sisi adalah sama besar (T_A = T_B). Kesetimbangan bertahan selama W_gantung ≤ μs · N_meja.'
    },
    ttsAnalysis:
      'Mari kita bedah secara ilmiah. Balok A di meja ditahan oleh gesekan statis dengan batas maksimum empat puluh Newton. Beban gantung awal tiga kilogram hanya menarik dengan berat tiga puluh Newton. Karena tiga puluh Newton lebih kecil dari empat puluh Newton, sistem diam setimbang. Gaya gesek statis dan tegangan tali keduanya bernilai tiga puluh Newton. Tepat saat akan bergerak terjadi ketika berat gantung mencapai empat puluh Newton.',
    fbdBodies: [
      {
        id: 'balok-A-meja',
        name: 'Balok A di Meja (m_A = 8 kg)',
        mass: 8,
        forces: [
          {
            id: 'T_A',
            name: 'Tegangan Tali Penarik',
            symbol: 'T',
            magnitude: 30,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Tali menarik balok A ke kanan menuju katrol (30 N).'
          },
          {
            id: 'fs_A',
            name: 'Gaya Gesek Statis Meja',
            symbol: 'f_s',
            magnitude: 30,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Gesekan meja menahan balok A ke kiri (30 N).'
          },
          {
            id: 'N_A',
            name: 'Gaya Normal Meja',
            symbol: 'N_A',
            magnitude: 80,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal meja menopang balok A (80 N).'
          },
          {
            id: 'W_A',
            name: 'Gaya Berat Balok A',
            symbol: 'W_A',
            magnitude: 80,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok A (8 × 10 = 80 N).'
          }
        ],
        notes: 'ΣFx = T - fs = 30 - 30 = 0 N. Balok A setimbang diam.'
      },
      {
        id: 'beban-B-gantung',
        name: 'Wadah Gantung B (m_B = 3 kg)',
        mass: 3,
        forces: [
          {
            id: 'T_B',
            name: 'Tegangan Tali Penahan',
            symbol: 'T',
            magnitude: 30,
            unit: 'N',
            angleDeg: 90,
            color: '#008F8C',
            description: 'Tali menahan wadah B ke atas (30 N).'
          },
          {
            id: 'W_B',
            name: 'Gaya Berat Wadah B',
            symbol: 'W_B',
            magnitude: 30,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada wadah B (3 × 10 = 30 N).'
          }
        ],
        notes: 'ΣFy = T - W_B = 30 - 30 = 0 N. Wadah B setimbang diam.'
      }
    ],
    ttsFbd:
      'Perhatikan FBD dua benda. Pada wadah gantung B, gaya berat tiga puluh Newton ke bawah diimbangi persis oleh tegangan tali tiga puluh Newton ke atas. Tali ideal meneruskan tegangan tiga puluh Newton ini ke balok A di atas meja. Pada balok A, tegangan tali tiga puluh Newton ke kanan diimbangi oleh gaya gesek statis tiga puluh Newton ke kiri. Kedua benda berada dalam kesetimbangan translasi.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Hitung Berat Wadah B dan Normal Balok A',
          explanation: 'Gaya berat W_B = m_B · g = 3 × 10 = 30 N. Gaya normal N_A = m_A · g = 8 × 10 = 80 N.'
        },
        {
          stepNumber: 2,
          title: 'Hitung Batas Gesek Statis Maksimum Meja',
          explanation: 'Gaya gesek statis terbesar yang dapat dikerahkan permukaan meja terhadap balok A.',
          mathFormula: 'f_{s,\\text{maks}} = \\mu_s \\cdot N_A = 0{,}50 \\times 80 = 40{,}0\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Uji Syarat Kesetimbangan Sistem',
          explanation: 'Bandingkan gaya penarik W_B dengan f_{s,maks}: W_B = 30 N < f_{s,maks} = 40 N. Karena penarik tidak melampaui batas ketahanan statis, sistem terbukti DIAM (SETIMBANG).'
        },
        {
          stepNumber: 4,
          title: 'Tinjau FBD Wadah Gantung B',
          explanation: 'Karena wadah diam (a = 0), terapkan Hukum I Newton pada sumbu vertikal.',
          mathFormula: '\\sum F_{By} = T - W_B = 0 \\implies T = W_B = 30{,}0\\text{ N}'
        },
        {
          stepNumber: 5,
          title: 'Tinjau FBD Balok A di Atas Meja',
          explanation: 'Karena balok diam (a = 0), terapkan Hukum I Newton pada sumbu horizontal.',
          mathFormula: '\\sum F_{Ax} = T - f_s = 0 \\implies f_s = T = 30{,}0\\text{ N}'
        },
        {
          stepNumber: 6,
          title: 'Kondisi Limit Tepat Saat Akan Bergerak',
          explanation: 'Sistem tepat akan bergerak ketika tegangan tali mencapai batas gaya gesek statis maksimum f_{s,maks} = 40 N.'
        },
        {
          stepNumber: 7,
          title: 'Rumuskan Hubungan Massa Gantung Maksimum',
          explanation: 'Pada kondisi limit, tegangan tali T_maks = W_{B,\\text{maks}}.',
          mathFormula: 'W_{B,\\text{maks}} = f_{s,\\text{maks}} = 40{,}0\\text{ N}'
        },
        {
          stepNumber: 8,
          title: 'Hitung Total Massa Gantung Kritis',
          explanation: 'Bagi berat maksimum dengan percepatan gravitasi.',
          substitution: 'm_{B,\\text{total}} = \\frac{W_{B,\\text{maks}}}{g} = \\frac{40{,}0}{10} = 4{,}0\\text{ kg}'
        },
        {
          stepNumber: 9,
          title: 'Hitung Massa Tambahan Pasir Maksimum Δm',
          explanation: 'Kurangkan massa awal wadah m_B dari massa total kritis.',
          substitution: '\\Delta m = m_{B,\\text{total}} - m_B = 4{,}0\\text{ kg} - 3{,}0\\text{ kg} = 1{,}0\\text{ kg}'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Fisis',
          explanation: 'Dengan m_B = 3 kg: T = 30 N, fs = 30 N < 40 N (setimbang diam). Jika pasir ditambah 1,0 kg, total m = 4 kg: W = 40 N = fs_max (tepat limit). Jika ditambah > 1,0 kg, sistem akan bergerak.',
          consistencyCheck: '\\Delta m = 1{,}0\\text{ kg (1000 gram)} \\quad (\\text{Terverifikasi})'
        }
      ],
      finalAnswer: '(a) T = 30,0 N, fs = 30,0 N (Setimbang Diam); (b) Δm = 1,0 kg',
      consistencyCheck: 'ΣF = 0 pada kedua benda terpenuhi secara sempurna.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, berat wadah B adalah tiga puluh Newton, sedangkan batas gesek statis maksimum meja adalah nol koma lima puluh dikali delapan puluh sama dengan empat puluh Newton. Karena tiga puluh Newton lebih kecil dari empat puluh Newton, sistem terbukti diam setimbang. Tegangan tali bernilai tiga puluh Newton dan gaya gesek statisnya tepat tiga puluh Newton. Kedua, kondisi tepat akan bergerak terjadi saat berat beban gantung sama dengan empat puluh Newton, yaitu massa empat kilogram. Karena massa awal wadah adalah tiga kilogram, maka massa pasir tambahan maksimum adalah empat dikurang tiga sama dengan satu kilogram.',
    fastSolution: {
      concept: 'Keseimbangan Transmisi Gaya Katrol & Selisih Ambang',
      reasoning: 'Katrol ideal hanya mengubah arah gaya: W_B ditransmisikan ke meja. Selama W_B < μs · m_A · g, sistem diam dengan T = fs = W_B. Batas gerak: m_B_maks = μs · m_A.',
      mathFormula: 'm_{B,\\text{maks}} = \\mu_s \\cdot m_A = 0{,}50 \\times 8 = 4{,}0\\text{ kg} \\implies \\Delta m = 4{,}0 - 3{,}0 = 1{,}0\\text{ kg}',
      steps: [
        'Kondisi awal: W_B = 30 N < fs_max (40 N) => T = fs = 30 N (Diam).',
        'Massa kritis: m_kritis = μs · mA = 0,50 × 8 = 4,0 kg.',
        'Massa pasir tambahan: Δm = 4,0 - 3,0 = 1,0 kg.'
      ],
      finalAnswer: 'T = 30 N, fs = 30 N; Δm = 1,0 kg'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Massa gantung kritis yang mampu ditahan meja adalah mu s dikali massa balok A: nol koma lima dikali delapan adalah empat kilogram. Karena wadah awal tiga kilogram, maka pasir tambahan maksimum adalah empat kurang tiga sama dengan satu kilogram. Sangat jernih dan efisien!',
    simulation: {
      type: 'table_pulley_equil',
      state: 'SETIMBANG',
      acceleration: 0,
      initialVelocity: 0,
      duration: 3.0,
      displacement: 0,
      directionDescription: 'Sistem DIAM SEMPURNA dalam kesetimbangan statis (a = 0 m/s², ΣF = 0)',
      extraValues: { NA: '80 N', fs_max: '40 N', fs: '30 N', T: '30 N', WB: '30 N', a: '0 m/s²' },
      misterJoComment:
        'Perhatikan simulasi pembuktian kesetimbangan: Kedua balok tidak bergerak sama sekali (a = 0, v = 0). Vektor berat gantung 30 N diimbangi tegangan tali 30 N, dan tegangan tali diimbangi gaya gesek statis meja 30 N. Benda tetap diam adalah bukti ilmiah kesetimbangan mekanika!'
    },
    misterJoTakeaway:
      'Katrol tetap ideal bertindak sebagai transmisi murni tanpa mengubah besar gaya. Sistem katrol diam ketika gaya penarik tidak melampaui batas gesekan statis maksimum.'
  },

  // ==========================================
  // SOAL 07: BIDANG DATAR KATROL TETAP BERGERAK
  // ==========================================
  {
    id: 7,
    title: 'Soal 07: Bidang Datar & Katrol Tetap Bergerak',
    subtitle: 'Dinamika Sistem Dipercepat & Peran Gaya Gesek Kinetis',
    topic: 'Katrol Tetap – Sistem Bergerak di Meja Kasar',
    difficulty: 'Menengah-Tinggi',
    stimulusType: 'cerita',
    stimulusTitle: 'Pelepasan Beban Gantung pada Meja Eksperimen Kasar',
    stimulusText:
      'Balok 1 bermassa m1 = 6,0 kg diletakkan pada permukaan meja horizontal kasar dengan koefisien gesek kinetis μk = 0,20. Balok 1 dihubungkan melalui seutas tali ringan tak elastis dan katrol tetap ideal di ujung meja dengan beban gantung 2 bermassa m2 = 4,0 kg. Sistem ditahan sejenak, kemudian dilepas dari keadaan diam sehingga beban m2 meluncur turun secara vertikal dan balok 1 meluncur ke kanan. Percepatan gravitasi g = 10 m/s².',
    problemStatement:
      'Kedua benda bergerak bersama dengan percepatan konstan a. Tali tetap tegang selama pergerakan.',
    questionText:
      '(a) Tentukan percepatan sistem gerak balok a.\n(b) Hitung besar gaya tegang tali T selama pergerakan.\n(c) Hitung kecepatan beban m2 setelah menempuh lintasan vertikal sejauh h = 1,6 meter!',
    ttsQuestion:
      'Soal tujuh. Bidang datar terhubung katrol tetap dalam keadaan bergerak. Balok satu bermassa enam kilogram di atas meja kasar dengan koefisien gesek kinetis nol koma dua puluh dihubungkan tali melalui katrol tetap dengan beban gantung dua bermassa empat kilogram. Sistem dilepas dari diam. Tentukan percepatan sistem, tegangan tali, dan kecepatan beban setelah menempuh jarak satu koma enam meter!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Apa gaya penggerak utama yang mempercepat sistem?',
          answer: 'Gaya berat beban gantung m2 (W2 = m2 · g = 40 N).'
        },
        {
          question: 'Gaya apa yang menghambat pergerakan sistem?',
          answer: 'Gaya gesek kinetis pada balok 1 di meja: fk = μk · N1 = μk · (m1 · g) = 0,20 · 60 = 12 N.'
        },
        {
          question: 'Bagaimana hubungan percepatan balok 1 dan beban 2?',
          answer: 'Karena tali tak elastis dan katrol tetap, percepatan kedua benda sama besar: a1 = a2 = a.'
        }
      ],
      summary: 'Gaya penggerak netto sistem adalah selisih antara berat beban gantung dan gesekan kinetis meja: a = (W2 - fk) / (m1 + m2).'
    },
    ttsAnalysis:
      'Mari kita telaah mekanika geraknya. Gaya penggerak yang menarik seluruh sistem adalah gaya berat beban gantung sebesar empat puluh Newton. Gaya penghambatnya adalah gesekan kinetis balok di atas meja sebesar dua belas Newton. Maka gaya pendorong netto adalah empat puluh dikurang dua belas, yaitu dua puluh delapan Newton, yang mempercepat massa total sepuluh kilogram.',
    fbdBodies: [
      {
        id: 'balok-1-meja',
        name: 'Balok 1 di Meja (m1 = 6 kg)',
        mass: 6,
        forces: [
          {
            id: 'T1',
            name: 'Tegangan Tali Penarik',
            symbol: 'T',
            magnitude: 28.8,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Tegangan tali menarik ke kanan (28,8 N).'
          },
          {
            id: 'fk1',
            name: 'Gaya Gesek Kinetis',
            symbol: 'f_k',
            magnitude: 12,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Gesekan kinetis meja ke kiri (12 N).'
          },
          {
            id: 'N1',
            name: 'Gaya Normal Meja',
            symbol: 'N_1',
            magnitude: 60,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal meja menopang balok 1 (60 N).'
          },
          {
            id: 'W1',
            name: 'Gaya Berat Balok 1',
            symbol: 'W_1',
            magnitude: 60,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok 1 (60 N).'
          }
        ],
        notes: 'ΣFx = T - fk = 28,8 - 12 = 16,8 N = m1 · a (6 × 2,8 = 16,8 N).'
      },
      {
        id: 'beban-2-gantung',
        name: 'Beban Gantung 2 (m2 = 4 kg)',
        mass: 4,
        forces: [
          {
            id: 'T2',
            name: 'Tegangan Tali Penahan',
            symbol: 'T',
            magnitude: 28.8,
            unit: 'N',
            angleDeg: 90,
            color: '#008F8C',
            description: 'Tegangan tali menahan ke atas (28,8 N).'
          },
          {
            id: 'W2',
            name: 'Gaya Berat Beban 2',
            symbol: 'W_2',
            magnitude: 40,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada beban 2 (4 × 10 = 40 N).'
          }
        ],
        notes: 'ΣFy = W2 - T = 40 - 28,8 = 11,2 N = m2 · a (4 × 2,8 = 11,2 N).'
      }
    ],
    ttsFbd:
      'Perhatikan diagram benda bebas. Pada balok satu di meja, tegangan tali dua puluh delapan koma delapan Newton ke kanan dikurangi gesekan kinetis dua belas Newton ke kiri menghasilkan gaya netto enam belas koma delapan Newton. Pada beban dua yang tergantung turun, gaya berat empat puluh Newton dikurangi tegangan tali dua puluh delapan koma delapan Newton menghasilkan gaya netto sebelas koma dua Newton. Kedua benda mengalami percepatan yang sama, dua koma delapan meter per sekon kuadrat.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Hitung Gaya Normal dan Gesek Kinetis Balok 1',
          explanation: 'Gaya normal N1 = m1 · g = 6 × 10 = 60 N.',
          mathFormula: 'f_k = \\mu_k \\cdot N_1 = 0{,}20 \\times 60 = 12{,}0\\text{ N}'
        },
        {
          stepNumber: 2,
          title: 'Hitung Gaya Berat Beban 2',
          explanation: 'Gaya gravitasi yang menarik beban ke bawah.',
          mathFormula: 'W_2 = m_2 \\cdot g = 4{,}0 \\times 10 = 40{,}0\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Susun Persamaan Hukum II Newton Balok 1',
          explanation: 'Arah gerak balok 1 adalah horizontal ke kanan.',
          mathFormula: '\\sum F_{1x} = T - f_k = m_1 \\cdot a \\implies T - 12 = 6a \\quad \\text{--- (Pers. 1)}'
        },
        {
          stepNumber: 4,
          title: 'Susun Persamaan Hukum II Newton Beban 2',
          explanation: 'Arah gerak beban 2 adalah vertikal ke bawah.',
          mathFormula: '\\sum F_{2y} = W_2 - T = m_2 \\cdot a \\implies 40 - T = 4a \\quad \\text{--- (Pers. 2)}'
        },
        {
          stepNumber: 5,
          title: 'Eliminasi Tegangan Tali T (Jumlahkan Pers. 1 dan Pers. 2)',
          explanation: 'Penjumlahan kedua persamaan melenyapkan gaya internal tegangan tali T.',
          substitution: '(T - 12) + (40 - T) = 6a + 4a \\implies 28 = 10a'
        },
        {
          stepNumber: 6,
          title: 'Hitung Percepatan Sistem a',
          explanation: 'Selesaikan persamaan aljabar untuk a.',
          result: 'a = \\frac{28}{10} = 2{,}8\\text{ m/s}^2'
        },
        {
          stepNumber: 7,
          title: 'Hitung Tegangan Tali T',
          explanation: 'Substitusi a = 2,8 m/s² ke dalam Persamaan 2.',
          substitution: 'T = W_2 - m_2 \\cdot a = 40 - 4(2{,}8) = 40 - 11{,}2 = 28{,}8\\text{ N}'
        },
        {
          stepNumber: 8,
          title: 'Verifikasi Tegangan Tali dari Persamaan 1',
          explanation: 'Periksa konsistensi hasil perhitungan pada Balok 1.',
          consistencyCheck: 'T = f_k + m_1 \\cdot a = 12 + 6(2{,}8) = 12 + 16{,}8 = 28{,}8\\text{ N} \\quad (\\text{Identik})'
        },
        {
          stepNumber: 9,
          title: 'Hitung Kecepatan Akhir Beban setelah Menempuh h = 1,6 m',
          explanation: 'Gunakan persamaan kinematika GLBB dari keadaan diam (v0 = 0).',
          mathFormula: 'v^2 = v_0^2 + 2ah = 0 + 2(2{,}8)(1{,}6) = 8{,}96 \\implies v = \\sqrt{8{,}96} \\approx 2{,}99\\text{ m/s}'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Satuan & Fisis',
          explanation: 'Percepatan bernilai positif (2,8 m/s²), tegangan tali (28,8 N) berada di antara W2 (40 N) dan fk (12 N) sebagaimana mestinya untuk sistem yang dipercepat turun.',
          consistencyCheck: '12\\text{ N} < T (28{,}8\\text{ N}) < 40\\text{ N} \\quad (\\text{Sangat Masuk Akal})'
        }
      ],
      finalAnswer: 'Percepatan a = 2,8 m/s²; Tegangan tali T = 28,8 N; Kecepatan v ≈ 2,99 m/s',
      consistencyCheck: 'Gaya penggerak netto (28 N) menggerakkan massa total (10 kg) secara konsisten.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, gaya gesek kinetis di meja adalah nol koma dua puluh dikali enam puluh sama dengan dua belas Newton. Berat beban gantung adalah empat puluh Newton. Kedua, jumlahkan persamaan gerak kedua benda untuk menghilangkan tegangan tali: empat puluh dikurang dua belas sama dengan sepuluh dikali a. Dua puluh delapan sama dengan sepuluh a, sehingga percepatan a adalah dua koma delapan meter per sekon kuadrat. Ketiga, tegangan tali adalah empat puluh dikurang empat kali dua koma delapan, menghasilkan dua puluh delapan koma delapan Newton. Keempat, menggunakan rumus v kuadrat sama dengan dua a h, kecepatan akhirnya adalah akar dari delapan koma sembilan puluh enam, yaitu sekitar dua koma sembilan puluh sembilan meter per sekon.',
    fastSolution: {
      concept: 'Hukum II Newton Sistem Global (Gaya Penggerak Bersih)',
      reasoning: 'Tali ideal bersifat internal. Percepatan sistem langsung sama dengan gaya luar pendorong dikurangi gaya luar penghambat dibagi massa total sistem.',
      mathFormula: 'a = \\frac{W_2 - f_k}{m_1 + m_2} = \\frac{40 - 12}{6 + 4} = \\frac{28}{10} = 2{,}8\\text{ m/s}^2',
      steps: [
        'Hitung gaya penggerak netto: 40 N - 12 N = 28 N.',
        'Massa total sistem: 6 kg + 4 kg = 10 kg.',
        'Percepatan: a = 28 / 10 = 2,8 m/s².',
        'Tegangan tali: T = m2(g - a) = 4(10 - 2,8) = 28,8 N.'
      ],
      finalAnswer: 'a = 2,8 m/s²; T = 28,8 N; v ≈ 2,99 m/s'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Pandang seluruh sistem sebagai satu kesatuan. Gaya penariknya empat puluh Newton, gaya hambatnya dua belas Newton. Selisihnya dua puluh delapan Newton. Bagi langsung dengan total massa sepuluh kilogram, dapat percepatan dua koma delapan meter per sekon kuadrat. Lalu cari tegangan tali: empat dikali tujuh koma dua sama dengan dua puluh delapan koma delapan Newton. Kilat dan akurat!',
    simulation: {
      type: 'table_pulley_motion',
      state: 'BERGERAK',
      acceleration: 2.8,
      initialVelocity: 0,
      duration: 1.07,
      displacement: 1.6,
      directionDescription: 'Beban 2 meluncur turun 1,6 m dan Balok 1 meluncur ke kanan dengan a = 2,8 m/s²',
      extraValues: { m1: '6,0 kg', m2: '4,0 kg', fk: '12 N', a: '2,8 m/s²', T: '28,8 N', v_akhir: '2,99 m/s' },
      misterJoComment:
        'Simulasi membuktikan: Dalam waktu t = 1,07 sekon, beban m2 turun sejauh h = 1,6 meter dengan percepatan 2,8 m/s² dan mencapai kecepatan v = 2,99 m/s tepat sebelum menyentuh batas!'
    },
    misterJoTakeaway:
      'Pada sistem katrol terhubung, percepatan bersama selalu diperoleh dari pembagian selisih gaya luar penggerak dan penghambat dengan total massa seluruh benda.'
  },

  // ==========================================
  // SOAL 08: KESETIMBANGAN BIDANG MIRING
  // ==========================================
  {
    id: 8,
    title: 'Soal 08: Kesetimbangan Benda pada Bidang Miring',
    subtitle: 'Penguraian Komponen Berat & Koefisien Gesek Minimum',
    topic: 'Bidang Miring Kasar – Kesetimbangan Statis',
    difficulty: 'Menengah-Tinggi',
    stimulusType: 'cerita',
    stimulusTitle: 'Penempatan Kotak Kargo di Lereng Tanjakan',
    stimulusText:
      'Sebuah kotak kargo bermassa m = 12,0 kg ditempatkan pada lereng bidang miring dengan sudut elevasi kemiringan θ = 37° terhadap bidang horizontal (diberikan nilai pendekatan trigonometri: sin 37° = 0,60 dan cos 37° = 0,80). Permukaan bidang miring merupakan aspal kasar. Kotak kargo dilepaskan tanpa dorongan awal.',
    problemStatement:
      'Agar kargo tidak meluncur turun dan tetap aman terparkir di tanjakan, permukaan bidang miring harus memiliki kekasaran yang cukup.',
    questionText:
      '(a) Uraikan gaya berat kargo menjadi komponen sejajar dan tegak lurus bidang miring, serta tentukan besar gaya normal N.\n(b) Tentukan nilai koefisien gesek statis minimum (μs,min) yang diperlukan agar kargo tetap diam tidak meluncur!\n(c) Hitung besar gaya gesek statis yang bekerja pada kargo saat kondisi setimbang tersebut!',
    ttsQuestion:
      'Soal delapan. Kesetimbangan benda pada bidang miring. Sebuah kotak kargo dua belas kilogram berada pada bidang miring bersudut tiga puluh tujuh derajat. Diberikan sinus tiga puluh tujuh derajat adalah nol koma enam puluh dan kosinusnya nol koma delapan puluh. Tentukan penguraian komponen gaya berat sejajar dan tegak lurus bidang miring, hitung gaya normal, tentukan koefisien gesek statis minimum agar kotak tidak meluncur, serta hitung gaya gesek yang bekerja saat setimbang!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Bagaimana memilih sistem koordinat yang paling efisien untuk bidang miring?',
          answer: 'Pilih sumbu X sejajar bidang miring (ke bawah lereng) dan sumbu Y tegak lurus bidang miring (ke atas menjauhi lereng).'
        },
        {
          question: 'Bagaimana penguraian gaya berat W = mg pada sumbu tersebut?',
          answer: 'Komponen yang menarik benda meluncur ke bawah adalah W_x = mg sin θ. Komponen yang menekan permukaan lereng adalah W_y = mg cos θ.'
        },
        {
          question: 'Kapan benda mulai meluncur turun?',
          answer: 'Benda meluncur jika komponen penarik W_x melampaui batas gesek statis maksimum: mg sin θ > μs · N.'
        }
      ],
      summary: 'Pada bidang miring bebas, gaya normal adalah N = mg cos θ. Syarat benda tidak meluncur turun adalah μs ≥ tan θ.'
    },
    ttsAnalysis:
      'Perhatikan orientasi sumbu pada bidang miring. Gaya berat dua belas kilogram kali gravitasi sepuluh adalah seratus dua puluh Newton. Berat ini terurai menjadi dua: komponen yang menekan lereng tegak lurus adalah seratus dua puluh kali kosinus tiga puluh tujuh derajat, yaitu sembilan puluh enam Newton. Ini diimbangi gaya normal. Komponen yang menarik kotak meluncur turun adalah seratus dua puluh kali sinus tiga puluh tujuh derajat, yaitu tujuh puluh dua Newton. Agar diam, gaya gesek statis harus tepat tujuh puluh dua Newton ke atas lereng.',
    fbdBodies: [
      {
        id: 'kotak-kargo',
        name: 'Kotak Kargo (m = 12 kg, θ = 37°)',
        mass: 12,
        forces: [
          {
            id: 'N',
            name: 'Gaya Normal Lereng',
            symbol: 'N',
            magnitude: 96,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Tegak lurus permukaan lereng (N = mg cos 37° = 96 N).'
          },
          {
            id: 'fs',
            name: 'Gaya Gesek Statis',
            symbol: 'f_s',
            magnitude: 72,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Sejajar lereng ke atas menahan peluncuran (fs = mg sin 37° = 72 N).'
          },
          {
            id: 'W_sejajar',
            name: 'Komponen Berat Sejajar',
            symbol: 'mg\\sin\\theta',
            magnitude: 72,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            isComponent: true,
            description: 'Komponen berat menarik turun lereng (120 × 0,6 = 72 N).'
          },
          {
            id: 'W_tegak_lurus',
            name: 'Komponen Berat Tegak Lurus',
            symbol: 'mg\\cos\\theta',
            magnitude: 96,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            isComponent: true,
            description: 'Komponen berat menekan bidang (120 × 0,8 = 96 N).'
          },
          {
            id: 'W',
            name: 'Gaya Berat Gravitasi',
            symbol: 'W = mg',
            magnitude: 120,
            unit: 'N',
            angleDeg: 233,
            color: '#9CA3AF',
            description: 'Gaya gravitasi vertikal bumi ke bawah m · g = 120 N.'
          }
        ],
        notes: 'Sumbu X miring sejajar lereng, Sumbu Y tegak lurus lereng. ΣFx = 0 dan ΣFy = 0.'
      }
    ],
    ttsFbd:
      'Perhatikan diagram benda bebas pada bidang miring. Gaya berat seratus dua puluh Newton vertikal ke bawah diuraikan menjadi dua komponen. Komponen sejajar bidang adalah tujuh puluh dua Newton ke bawah lereng, yang diimbangi penuh oleh gaya gesek statis tujuh puluh dua Newton ke atas lereng. Komponen tegak lurus bidang adalah sembilan puluh enam Newton ke arah lereng, yang diimbangi gaya normal sembilan puluh enam Newton menjauhi lereng.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Hitung Gaya Berat Total Kargo',
          explanation: 'Gaya gravitasi bumi bekerja vertikal ke bawah.',
          mathFormula: 'W = mg = (12)(10) = 120\\text{ N}'
        },
        {
          stepNumber: 2,
          title: 'Uraikan Komponen Gaya Berat Tegak Lurus Bidang (Sumbu Y)',
          explanation: 'Komponen ini menekan permukaan bidang miring.',
          mathFormula: 'W_y = W \\cos 37^\\circ = 120 \\times 0{,}80 = 96{,}0\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Hitung Gaya Normal N',
          explanation: 'Karena tidak ada percepatan pada sumbu tegak lurus bidang (ΣFy = 0).',
          mathFormula: '\\sum F_y = N - W_y = 0 \\implies N = 96{,}0\\text{ N}'
        },
        {
          stepNumber: 4,
          title: 'Uraikan Komponen Gaya Berat Sejajar Bidang (Sumbu X)',
          explanation: 'Komponen ini bekerja menarik kargo meluncur ke bawah lereng.',
          mathFormula: 'W_x = W \\sin 37^\\circ = 120 \\times 0{,}60 = 72{,}0\\text{ N}'
        },
        {
          stepNumber: 5,
          title: 'Terapkan Syarat Kesetimbangan Statis pada Sumbu X',
          explanation: 'Agar kargo tetap diam di lereng, resultan gaya sejajar bidang harus nol (ΣFx = 0).',
          mathFormula: '\\sum F_x = W_x - f_s = 0 \\implies f_s = W_x = 72{,}0\\text{ N}'
        },
        {
          stepNumber: 6,
          title: 'Tentukan Arah Gaya Gesek Statis',
          explanation: 'Gaya gesek statis fs = 72,0 N berarah ke ATAS sepanjang lereng (melawan kecenderungan meluncur turun).'
        },
        {
          stepNumber: 7,
          title: 'Gunakan Syarat Ketidaksamaan Gesek Statis',
          explanation: 'Gaya gesek statis nyata tidak boleh melampaui kapasitas gesek statis maksimum.',
          mathFormula: 'f_s \\le f_{s,\\text{maks}} \\implies f_s \\le \\mu_s \\cdot N'
        },
        {
          stepNumber: 8,
          title: 'Substitusi Nilai fs dan N',
          explanation: 'Masukkan fs = 72,0 N dan N = 96,0 N ke dalam pertidaksamaan.',
          substitution: '72{,}0 \\le \\mu_s \\times 96{,}0 \\implies \\mu_s \\ge \\frac{72{,}0}{96{,}0}'
        },
        {
          stepNumber: 9,
          title: 'Sederhanakan Nilai Pecahan',
          explanation: 'Bagi pembilang dan penyebut dengan 24.',
          result: '\\mu_s \\ge \\frac{3}{4} = 0{,}75'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Fisis',
          explanation: 'Nilai koefisien gesek minimum tepat sama dengan tan 37° = 0,60/0,80 = 0,75. Nilai gaya gesek adalah 72 N (bukan μs·N jika μs > 0,75). Sangat presisi.',
          consistencyCheck: '\\mu_{s,\\text{min}} = \\tan 37^\\circ = 0{,}75; \\quad f_s = 72{,}0\\text{ N}'
        }
      ],
      finalAnswer: 'N = 96,0 N; Wx = 72,0 N; μs,min = 0,75; fs = 72,0 N (ke atas lereng)',
      consistencyCheck: 'Terbukti bahwa syarat diam pada lereng bebas adalah μs ≥ tan θ.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, gaya berat adalah seratus dua puluh Newton. Komponen tegak lurus bidang adalah seratus dua puluh dikali kosinus tiga puluh tujuh derajat sama dengan sembilan puluh enam Newton, sehingga gaya normal bernilai sembilan puluh enam Newton. Komponen berat sejajar lereng adalah seratus dua puluh dikali sinus tiga puluh tujuh derajat sama dengan tujuh puluh dua Newton. Kedua, agar kargo tetap diam, gaya gesek statis yang bekerja harus tepat tujuh puluh dua Newton berarah ke atas lereng. Ketiga, syarat tidak meluncur adalah gaya gesek lebih kecil atau sama dengan mu s dikali normal. Tujuh puluh dua dibagi sembilan puluh enam menghasilkan koefisien gesek statis minimum tepat nol koma tujuh puluh lima.',
    fastSolution: {
      concept: 'Prinsip Tangen Sudut Kritis (μs,min = tan θ)',
      reasoning: 'Pada benda diam di lereng miring tanpa gaya luar lain, gaya berat dan normal saling bersesuaian sehingga batas gesek selalu murni fungsi sudut kemiringan: μs,min = tan θ.',
      mathFormula: '\\mu_{s,\\text{min}} = \\tan \\theta = \\frac{\\sin 37^\\circ}{\\cos 37^\\circ} = \\frac{0{,}60}{0{,}80} = 0{,}75',
      steps: [
        'Langsung hitung μs_min = tan 37° = 0,6 / 0,8 = 0,75.',
        'Gaya normal N = mg cos 37° = 12 × 10 × 0,8 = 96 N.',
        'Gaya gesek penyeimbang fs = mg sin 37° = 12 × 10 × 0,6 = 72 N.'
      ],
      finalAnswer: 'μs,min = 0,75; N = 96 N; fs = 72 N'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Untuk benda yang diam di lereng miring tanpa gaya luar tambahan, koefisien gesek statis minimum selalu tepat sama dengan tangen sudut lereng! Tangen tiga puluh tujuh derajat adalah nol koma enam dibagi nol koma delapan, langsung dapat nol koma tujuh puluh lima! Sangat elegan.',
    simulation: {
      type: 'incline_equil',
      state: 'SETIMBANG',
      acceleration: 0,
      initialVelocity: 0,
      duration: 3.0,
      displacement: 0,
      directionDescription: 'Kotak kargo DIAM SEMPURNA di atas bidang miring 37° (a = 0 m/s²)',
      extraValues: { sudut: '37°', N: '96 N', Wx: '72 N', fs: '72 N', mu_s_min: '0,75' },
      misterJoComment:
        'Perhatikan simulasi: Kotak kargo tetap kokoh berada pada posisinya di lereng 37° tanpa meluncur sedikit pun (a = 0). Gaya penahan gesek 72 N mengunci posisi balok dengan sempurna!'
    },
    misterJoTakeaway:
      'Pada lereng miring tanpa gaya luar lain, massa benda tidak memengaruhi kecenderungan meluncur; syarat diam semata-mata ditentukan oleh hubungan μs ≥ tan θ.'
  },

  // ==========================================
  // SOAL 09: BIDANG MIRING KATROL TETAP SETIMBANG
  // ==========================================
  {
    id: 9,
    title: 'Soal 09: Bidang Miring & Katrol Tetap Setimbang',
    subtitle: 'Keseimbangan Komponen Berat & Rentang Massa Gantung Statis',
    topic: 'Katrol Tetap di Puncak Lereng – Kesetimbangan Statis',
    difficulty: 'Tinggi',
    stimulusType: 'diagram',
    stimulusTitle: 'Sistem Balok di Lereng Miring Terhubung Balok Gantung Bebas',
    stimulusText:
      'Balok A bermassa m_A = 10,0 kg berada pada bidang miring dengan sudut kemiringan θ = 30° (sin 30° = 0,50 dan cos 30° = 0,866, g = 10 m/s²). Balok A dihubungkan oleh seutas tali ideal melalui sebuah katrol tetap licin di puncak lereng dengan balok gantung B bermassa m_B.',
    problemStatement:
      'Mula-mula permukaan lereng dianggap licin sempurna. Selanjutnya pada kasus kedua, permukaan lereng diganti menjadi kasar dengan koefisien gesek statis μs = 0,20.',
    questionText:
      '(a) Jika bidang miring LICIN, tentukan nilai massa m_B agar sistem berada dalam keadaan setimbang statis (diam)!\n(b) Jika bidang miring KASAR dengan μs = 0,20, tentukan rentang nilai massa balok gantung m_B (m_B,min ≤ m_B ≤ m_B,maks) agar sistem tetap dijamin diam tidak bergerak!',
    ttsQuestion:
      'Soal sembilan. Bidang miring terhubung katrol tetap dalam kesetimbangan. Balok A bermassa sepuluh kilogram berada pada bidang miring bersudut tiga puluh derajat, dihubungkan tali melalui katrol di puncak lereng ke balok gantung B. Sudut tiga puluh derajat memiliki sinus nol koma lima puluh dan kosinus nol koma delapan ratus enam puluh enam. Pertama, jika bidang miring licin, tentukan massa m B agar sistem diam. Kedua, jika bidang miring kasar dengan koefisien gesek statis nol koma dua puluh, tentukan rentang massa m B agar sistem tetap setimbang diam!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Berapakah komponen gaya berat balok A yang menariknya meluncur turun lereng?',
          answer: 'W_Ax = m_A · g · sin 30° = 10 · 10 · 0,50 = 50 N.'
        },
        {
          question: 'Pada kondisi licin, apa yang harus menahan gaya 50 N ini?',
          answer: 'Tegangan tali T yang berasal langsung dari berat balok gantung B: T = W_B = m_B · g. Maka m_B harus tepat 5,0 kg.'
        },
        {
          question: 'Mengapa pada bidang kasar terdapat rentang nilai massa?',
          answer: 'Karena gaya gesek statis dapat berarah ke atas lereng (jika m_B kecil dan balok A cenderung meluncur turun) ATAU berarah ke bawah lereng (jika m_B besar dan balok A cenderung ditarik naik).'
        }
      ],
      summary: 'Gaya gesek statis bekerja dwiarah melawan kecenderungan gerak, menciptakan pita toleransi kesetimbangan (equilibrium band).'
    },
    ttsAnalysis:
      'Ini adalah tipe soal olimpiade fisika yang sangat menantang dan elegan. Pada bidang licin, balok A meluncur turun dengan gaya lima puluh Newton, sehingga balok B harus memiliki berat tepat lima puluh Newton atau massa lima kilogram. Namun pada bidang kasar, gesekan statis mampu membantu menahan balok ke atas maupun ke bawah, menciptakan rentang massa aman dari tiga koma dua puluh tujuh kilogram hingga enam koma tujuh puluh tiga kilogram.',
    fbdBodies: [
      {
        id: 'balok-A-lereng',
        name: 'Balok A pada Lereng 30° (m_A = 10 kg)',
        mass: 10,
        forces: [
          {
            id: 'T',
            name: 'Tegangan Tali Penarik Naik',
            symbol: 'T',
            magnitude: 50,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Tali menarik ke atas sejajar lereng (50 N).'
          },
          {
            id: 'W_Ax',
            name: 'Komponen Berat Sejajar Lereng',
            symbol: 'm_A g\\sin 30^\\circ',
            magnitude: 50,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            isComponent: true,
            description: 'Komponen gravitasi menarik turun lereng (10 × 10 × 0,5 = 50 N).'
          },
          {
            id: 'N_A',
            name: 'Gaya Normal Lereng',
            symbol: 'N_A',
            magnitude: 86.6,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lereng tegak lurus (10 × 10 × 0,866 = 86,6 N).'
          },
          {
            id: 'W_Ay',
            name: 'Komponen Berat Tegak Lurus',
            symbol: 'm_A g\\cos 30^\\circ',
            magnitude: 86.6,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            isComponent: true,
            description: 'Komponen berat menekan lereng (86,6 N).'
          }
        ],
        notes: 'Pada kondisi licin ideal: T = W_Ax = 50 N. Keduanya saling meniadakan.'
      },
      {
        id: 'balok-B-gantung',
        name: 'Balok Gantung B (m_B = 5 kg)',
        mass: 5,
        forces: [
          {
            id: 'T_B',
            name: 'Tegangan Tali Penahan',
            symbol: 'T',
            magnitude: 50,
            unit: 'N',
            angleDeg: 90,
            color: '#008F8C',
            description: 'Tegangan tali menahan ke atas (50 N).'
          },
          {
            id: 'W_B',
            name: 'Gaya Berat Balok B',
            symbol: 'W_B',
            magnitude: 50,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok B (5 × 10 = 50 N).'
          }
        ],
        notes: 'W_B = T = 50 N. Balok B setimbang melayang.'
      }
    ],
    ttsFbd:
      'Diagram benda bebas memperlihatkan kondisi kesetimbangan licin. Pada balok A di lereng tiga puluh derajat, tegangan tali lima puluh Newton ke atas lereng diimbangi persis oleh komponen gaya berat sejajar lima puluh Newton ke bawah lereng. Gaya normal delapan puluh enam koma enam Newton diimbangi komponen berat tegak lurus. Pada balok B, tegangan tali lima puluh Newton ke atas mengimbangi berat balok B lima puluh Newton ke bawah.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Uraikan Gaya pada Balok A (Lereng θ = 30°)',
          explanation: 'Komponen berat balok A: W_Ax = mA · g · sin 30° = 10 × 10 × 0,5 = 50 N. W_Ay = mA · g · cos 30° = 10 × 10 × 0,866 = 86,6 N.'
        },
        {
          stepNumber: 2,
          title: 'Hitung Gaya Normal Balok A',
          explanation: 'Kesetimbangan sumbu tegak lurus lereng.',
          mathFormula: 'N_A = W_{Ay} = 86{,}6\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Kasus (a): Bidang Miring Licin (μ = 0)',
          explanation: 'Tanpa gesekan, balok A hanya ditahan oleh tegangan tali T.',
          mathFormula: '\\sum F_x = T - W_{Ax} = 0 \\implies T = 50{,}0\\text{ N}'
        },
        {
          stepNumber: 4,
          title: 'Kesetimbangan Balok Gantung B (Kasus a)',
          explanation: 'Balok B diam menggantung di udara.',
          mathFormula: '\\sum F_y = T - W_B = 0 \\implies m_B \\cdot g = 50 \\implies m_B = 5{,}0\\text{ kg}'
        },
        {
          stepNumber: 5,
          title: 'Kasus (b): Bidang Miring Kasar (μs = 0,20)',
          explanation: 'Hitung kapasitas gaya gesek statis maksimum pada lereng.',
          mathFormula: 'f_{s,\\text{maks}} = \\mu_s \\cdot N_A = 0{,}20 \\times 86{,}6 = 17{,}32\\text{ N}'
        },
        {
          stepNumber: 6,
          title: 'Batas Bawah Massa m_B (Kecenderungan Balok A Meluncur Turun)',
          explanation: 'Jika m_B kecil, balok A cenderung meluncur turun lereng, sehingga fs mengarah ke ATAS lereng.',
          mathFormula: 'T_{\\text{min}} + f_{s,\\text{maks}} = W_{Ax} \\implies T_{\\text{min}} = 50 - 17{,}32 = 32{,}68\\text{ N}'
        },
        {
          stepNumber: 7,
          title: 'Hitung Nilai Massa Batas Bawah m_B,min',
          explanation: 'Bagi tegangan minimum dengan g = 10 m/s².',
          substitution: 'm_{B,\\text{min}} = \\frac{T_{\\text{min}}}{g} = \\frac{32{,}68}{10} = 3{,}27\\text{ kg}'
        },
        {
          stepNumber: 8,
          title: 'Batas Atas Massa m_B (Kecenderungan Balok A Tertarik Naik)',
          explanation: 'Jika m_B besar, balok A cenderung ditarik naik lereng, sehingga fs mengarah ke BAWAH lereng.',
          mathFormula: 'T_{\\text{maks}} = W_{Ax} + f_{s,\\text{maks}} = 50 + 17{,}32 = 67{,}32\\text{ N}'
        },
        {
          stepNumber: 9,
          title: 'Hitung Nilai Massa Batas Atas m_B,maks',
          explanation: 'Bagi tegangan maksimum dengan g = 10 m/s².',
          substitution: 'm_{B,\\text{maks}} = \\frac{T_{\\text{maks}}}{g} = \\frac{67{,}32}{10} = 6{,}73\\text{ kg}'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Rentang Kesetimbangan',
          explanation: 'Untuk sembarang nilai m_B di antara 3,27 kg dan 6,73 kg, gaya gesek statis menyesuaikan nilainya antara -17,32 N hingga +17,32 N sehingga sistem tetap diam sempurna.',
          consistencyCheck: '3{,}27\\text{ kg} \\le m_B \\le 6{,}73\\text{ kg} \\quad (\\text{Terverifikasi})'
        }
      ],
      finalAnswer: '(a) m_B = 5,0 kg; (b) Rentang massa aman: 3,27 kg ≤ m_B ≤ 6,73 kg',
      consistencyCheck: 'Pada m_B = 5,0 kg, fs = 0 N (berada tepat di titik tengah rentang).'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Kasus a: pada bidang licin, komponen berat balok A yang menarik turun lereng adalah sepuluh kali sepuluh kali sinus tiga puluh derajat sama dengan lima puluh Newton. Agar setimbang, tegangan tali harus lima puluh Newton, sehingga massa balok B harus tepat lima koma nol kilogram. Kasus b: pada bidang kasar, gaya gesek statis maksimum adalah nol koma dua puluh dikali delapan puluh enam koma enam sama dengan tujuh belas koma tiga puluh dua Newton. Batas bawah terjadi saat balok A hampir turun, sehingga tegangan tali lima puluh kurang tujuh belas koma tiga puluh dua adalah tiga puluh dua koma enam puluh delapan Newton, atau massa tiga koma dua puluh tujuh kilogram. Batas atas terjadi saat balok A hampir tertarik naik, sehingga tegangan tali lima puluh tambah tujuh belas koma tiga puluh dua adalah enam puluh tujuh koma tiga puluh dua Newton, atau massa enam koma tujuh puluh tiga kilogram.',
    fastSolution: {
      concept: 'Rentang Toleransi Gesekan Statis (Symmetric Friction Band)',
      reasoning: 'Gaya penahan lereng memiliki titik netral W_Ax = 50 N dengan toleransi ± fs_max = ± 17,32 N. Rentang tegangan: T = 50 ± 17,32 N.',
      mathFormula: 'm_B = m_A \\sin\\theta \\pm \\mu_s m_A \\cos\\theta = 5{,}0 \\pm 1{,}732\\text{ kg}',
      steps: [
        'Licin: m_B = mA sin 30° = 10 × 0,5 = 5,0 kg.',
        'Toleransi gesek: Δm = μs mA cos 30° = 0,2 × 10 × 0,866 = 1,732 kg.',
        'Rentang kasar: 5,0 - 1,732 = 3,27 kg sampai 5,0 + 1,732 = 6,73 kg.'
      ],
      finalAnswer: 'Licin: 5,0 kg; Kasar: 3,27 kg ≤ m_B ≤ 6,73 kg'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Ambil titik pusatnya: sepuluh dikali sinus tiga puluh derajat adalah lima kilogram. Lalu hitung toleransi gesekannya: nol koma dua dikali sepuluh dikali kosinus tiga puluh derajat adalah satu koma tujuh puluh tiga kilogram. Kurangkan dan tambahkan: rentang massanya adalah lima kurang satu koma tujuh puluh tiga yaitu tiga koma dua puluh tujuh kilogram, sampai lima tambah satu koma tujuh puluh tiga yaitu enam koma tujuh puluh tiga kilogram. Cepat dan sangat konseptual!',
    simulation: {
      type: 'incline_pulley_equil',
      state: 'SETIMBANG',
      acceleration: 0,
      initialVelocity: 0,
      duration: 3.0,
      displacement: 0,
      directionDescription: 'Sistem lereng katrol DIAM SETIMBANG pada m_B = 5,0 kg (a = 0 m/s²)',
      extraValues: { mA: '10 kg', mB: '5 kg', WAx: '50 N', T: '50 N', a: '0 m/s²' },
      misterJoComment:
        'Simulasi membuktikan: Pada massa gantung 5,0 kg, tarikan gravitasi beban gantung 50 N seimbang persis dengan komponen berat sejajar balok A 50 N. Kedua benda diam seimbang di posisinya!'
    },
    misterJoTakeaway:
      'Keberadaan gesekan statis pada bidang miring menciptakan rentang massa kesetimbangan: m_B = mA (sin θ ± μs cos θ).'
  },

  // ==========================================
  // SOAL 10: BIDANG MIRING BERGERAK NAIK
  // ==========================================
  {
    id: 10,
    title: 'Soal 10: Bidang Miring Sistem Bergerak Naik',
    subtitle: 'Dinamika Balok Meluncur Naik Ditarik Beban Gantung Berat',
    topic: 'Katrol Bidang Miring Kasar – Gerak Naik',
    difficulty: 'Tinggi',
    stimulusType: 'cerita',
    stimulusTitle: 'Pengangkatan Balok Material Sepanjang Tanjakan Kasar',
    stimulusText:
      'Balok A bermassa m_A = 4,0 kg berada pada bidang miring kasar dengan sudut elevasi θ = 37° (sin 37° = 0,60 dan cos 37° = 0,80). Koefisien gesek kinetis antara balok A dan permukaan tanjakan adalah μk = 0,25. Balok A dihubungkan oleh seutas tali ideal melalui katrol tetap licin di puncak tanjakan dengan balok gantung B yang cukup berat, yaitu m_B = 6,0 kg. Percepatan gravitasi g = 10 m/s².',
    problemStatement:
      'Sistem dilepaskan dari keadaan diam. Beban gantung B yang berat menarik balok A sehingga balok A bergerak meluncur NAIK sepanjang bidang miring.',
    questionText:
      '(a) Buktikan secara kuantitatif bahwa sistem benar-benar bergerak dengan balok A meluncur naik!\n(b) Tentukan percepatan sistem gerak balok a.\n(c) Hitung besar gaya tegangan tali penghubung T selama pergerakan!',
    ttsQuestion:
      'Soal sepuluh. Bidang miring dengan sistem bergerak naik. Balok A bermassa empat kilogram pada lereng tiga puluh tujuh derajat kasar dengan koefisien gesek kinetis nol koma dua puluh lima, dihubungkan tali melalui katrol ke balok gantung B bermassa enam kilogram. Diberikan sinus tiga puluh tujuh derajat adalah nol koma enam puluh dan kosinusnya nol koma delapan puluh. Buktikan balok A bergerak naik, hitung percepatan sistem, dan tentukan tegangan talinya!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Ke mana arah gaya gesek kinetis bekerja jika balok A bergerak naik?',
          answer: 'Karena balok A bergerak NAIK sepanjang bidang miring, gaya gesek kinetis fk harus melawan gerak tersebut, yaitu berarah ke BAWAH sepanjang bidang miring.'
        },
        {
          question: 'Gaya apa saja yang menahan gerak turunnya balok B?',
          answer: 'Komponen gaya berat balok A ke bawah lereng (W_Ax) dan gaya gesek kinetis balok A ke bawah lereng (fk).'
        },
        {
          question: 'Berapakah resultan gaya pendorong netto sistem?',
          answer: 'Gaya netto = W_B - (W_Ax + fk). Jika nilai ini positif, sistem pasti bergerak dengan balok A meluncur naik.'
        }
      ],
      summary: 'Arah gesekan selalu berlawanan arah dengan arah kecepatan relatif benda. Ketika balok naik lereng, berat sejajar dan gesekan bersama-sama menahan tarikan.'
    },
    ttsAnalysis:
      'Analisis arah gaya sangat penting di sini. Karena balok A bergerak naik, gaya gesek kinetis delapan Newton berarah ke bawah lereng, bergabung dengan komponen berat dua puluh empat Newton ke bawah lereng. Total gaya penahannya adalah tiga puluh dua Newton. Beban gantung B menarik dengan gaya enam puluh Newton. Karena enam puluh lebih besar dari tiga puluh dua, sistem terbukti bergerak naik dipercepat.',
    fbdBodies: [
      {
        id: 'balok-A-naik',
        name: 'Balok A Bergerak Naik (m_A = 4 kg)',
        mass: 4,
        forces: [
          {
            id: 'T',
            name: 'Tegangan Tali Penarik Naik',
            symbol: 'T',
            magnitude: 43.2,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Tali menarik ke atas sejajar lereng (43,2 N).'
          },
          {
            id: 'WAx',
            name: 'Komponen Berat Sejajar',
            symbol: 'm_A g\\sin 37^\\circ',
            magnitude: 24,
            unit: 'N',
            angleDeg: 180,
            color: '#6B7280',
            isComponent: true,
            description: 'Komponen berat ke bawah lereng (4 × 10 × 0,6 = 24 N).'
          },
          {
            id: 'fk',
            name: 'Gaya Gesek Kinetis',
            symbol: 'f_k',
            magnitude: 8,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Melawan arah gerak naik, berarah ke bawah lereng (8 N).'
          },
          {
            id: 'NA',
            name: 'Gaya Normal Lereng',
            symbol: 'N_A',
            magnitude: 32,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lereng tegak lurus (4 × 10 × 0,8 = 32 N).'
          }
        ],
        notes: 'ΣFx = T - WAx - fk = 43,2 - 24 - 8 = 11,2 N = m_A · a (4 × 2,8 = 11,2 N).'
      },
      {
        id: 'balok-B-turun',
        name: 'Balok Gantung B Turun (m_B = 6 kg)',
        mass: 6,
        forces: [
          {
            id: 'T_B',
            name: 'Tegangan Tali Penahan',
            symbol: 'T',
            magnitude: 43.2,
            unit: 'N',
            angleDeg: 90,
            color: '#008F8C',
            description: 'Tali menahan ke atas (43,2 N).'
          },
          {
            id: 'WB',
            name: 'Gaya Berat Balok B',
            symbol: 'W_B',
            magnitude: 60,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi menarik ke bawah (6 × 10 = 60 N).'
          }
        ],
        notes: 'ΣFy = W_B - T = 60 - 43,2 = 16,8 N = m_B · a (6 × 2,8 = 16,8 N).'
      }
    ],
    ttsFbd:
      'Perhatikan FBD sistem naik. Pada balok A di tanjakan, tegangan tali empat puluh tiga koma dua Newton menarik ke atas tanjakan. Di arah berlawanan ke bawah tanjakan, ada dua gaya: komponen berat dua puluh empat Newton dan gaya gesek kinetis delapan Newton. Gaya normal bernilai tiga puluh dua Newton. Pada balok B, berat enam puluh Newton ke bawah dilawan tegangan tali empat puluh tiga koma dua Newton ke atas.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Uraikan Gaya pada Balok A (mA = 4 kg, θ = 37°)',
          explanation: 'Komponen berat balok A: W_Ax = 4 × 10 × 0,60 = 24,0 N. W_Ay = 4 × 10 × 0,80 = 32,0 N.'
        },
        {
          stepNumber: 2,
          title: 'Hitung Gaya Normal dan Gesek Kinetis Balok A',
          explanation: 'Gaya normal N_A = W_Ay = 32,0 N.',
          mathFormula: 'f_k = \\mu_k \\cdot N_A = 0{,}25 \\times 32{,}0 = 8{,}0\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Hitung Gaya Berat Balok B',
          explanation: 'Gaya penggerak ke bawah pada balok B.',
          mathFormula: 'W_B = m_B \\cdot g = 6{,}0 \\times 10 = 60{,}0\\text{ N}'
        },
        {
          stepNumber: 4,
          title: 'Buktikan Balok A Bergerak Naik',
          explanation: 'Total gaya penahan pada balok A = W_Ax + fk = 24 + 8 = 32,0 N. Karena W_B = 60 N > 32 N, resultan gaya pendorong positif searah gerak naik A.',
          consistencyCheck: 'W_B - (W_{Ax} + f_k) = 60 - 32 = 28{,}0\\text{ N} > 0 \\quad (\\text{Terbukti Naik})'
        },
        {
          stepNumber: 5,
          title: 'Susun Persamaan Gerak Balok A (Bergerak Naik)',
          explanation: 'Tegangan tali menarik ke atas lereng, berat dan gesek menahan ke bawah.',
          mathFormula: 'T - W_{Ax} - f_k = m_A \\cdot a \\implies T - 24 - 8 = 4a \\implies T - 32 = 4a'
        },
        {
          stepNumber: 6,
          title: 'Susun Persamaan Gerak Balok B (Bergerak Turun)',
          explanation: 'Berat menarik turun, tegangan tali menahan ke atas.',
          mathFormula: 'W_B - T = m_B \\cdot a \\implies 60 - T = 6a'
        },
        {
          stepNumber: 7,
          title: 'Eliminasi Tali T dengan Menjumlahkan Kedua Persamaan',
          explanation: 'Jumlahkan persamaan Balok A dan Balok B.',
          substitution: '(T - 32) + (60 - T) = 4a + 6a \\implies 28 = 10a'
        },
        {
          stepNumber: 8,
          title: 'Hitung Percepatan Sistem a',
          explanation: 'Bagi gaya netto dengan massa total.',
          result: 'a = \\frac{28}{10} = 2{,}8\\text{ m/s}^2'
        },
        {
          stepNumber: 9,
          title: 'Hitung Tegangan Tali T',
          explanation: 'Substitusi a = 2,8 m/s² ke dalam persamaan Balok B.',
          substitution: 'T = W_B - m_B \\cdot a = 60 - 6(2{,}8) = 60 - 16{,}8 = 43{,}2\\text{ N}'
        },
        {
          stepNumber: 10,
          title: 'Verifikasi Konsistensi pada Balok A',
          explanation: 'Periksa nilai tegangan pada balok A.',
          consistencyCheck: 'T = 32 + 4(2{,}8) = 32 + 11{,}2 = 43{,}2\\text{ N} \\quad (\\text{Sangat Presisi})'
        }
      ],
      finalAnswer: 'Percepatan a = 2,8 m/s²; Tegangan tali T = 43,2 N (Balok A bergerak naik)',
      consistencyCheck: 'W_B (60 N) > T (43,2 N) > W_Ax + fk (32 N) konsisten dengan gerak naik dipercepat.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, komponen berat balok A adalah dua puluh empat Newton dan gaya normalnya tiga puluh dua Newton. Gaya gesek kinetisnya nol koma dua puluh lima dikali tiga puluh dua sama dengan delapan Newton. Karena balok A bergerak naik, gaya gesek berarah ke bawah lereng, sehingga total hambatan di lereng adalah dua puluh empat ditambah delapan sama dengan tiga puluh dua Newton. Beban gantung B memiliki berat enam puluh Newton. Gaya penggerak netto adalah enam puluh dikurang tiga puluh dua sama dengan dua puluh delapan Newton. Kedua, bagi dua puluh delapan Newton dengan total massa sepuluh kilogram, menghasilkan percepatan dua koma delapan meter per sekon kuadrat. Ketiga, tegangan tali adalah enam puluh dikurang enam kali dua koma delapan, menghasilkan empat puluh tiga koma dua Newton.',
    fastSolution: {
      concept: 'Hukum II Newton Sistem Global Pada Sumbu Miring',
      reasoning: 'Gaya penggerak eksternal murni adalah W_B. Gaya penghambat eksternal adalah komponen berat W_Ax dan gesekan fk. Percepatan adalah resultan gaya dibagi total massa.',
      mathFormula: 'a = \\frac{W_B - W_{Ax} - f_k}{m_A + m_B} = \\frac{60 - 24 - 8}{4 + 6} = \\frac{28}{10} = 2{,}8\\text{ m/s}^2',
      steps: [
        'Hitung gaya penggerak netto: 60 - (24 + 8) = 28 N.',
        'Massa total = 4 + 6 = 10 kg.',
        'Percepatan = 28 / 10 = 2,8 m/s².',
        'Tegangan tali = 6(10 - 2,8) = 43,2 N.'
      ],
      finalAnswer: 'a = 2,8 m/s²; T = 43,2 N'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Ambil gaya penggerak enam puluh Newton, kurangi komponen berat dua puluh empat Newton, kurangi gaya gesek delapan Newton. Bersihnya dua puluh delapan Newton. Langsung bagi sepuluh kilogram, dapat dua koma delapan meter per sekon kuadrat! Tegangan talinya enam dikali tujuh koma dua sama dengan empat puluh tiga koma dua Newton!',
    simulation: {
      type: 'incline_pulley_up',
      state: 'BERGERAK',
      acceleration: 2.8,
      initialVelocity: 0,
      duration: 1.5,
      displacement: 3.15,
      directionDescription: 'Balok A meluncur NAIK di tanjakan 37° dengan a = 2,8 m/s², beban B turun',
      extraValues: { mA: '4,0 kg', mB: '6,0 kg', WAx: '24 N', fk: '8 N', T: '43,2 N', a: '2,8 m/s²' },
      misterJoComment:
        'Simulasi membuktikan: Balok A meluncur naik di lereng kasar dengan percepatan konstan 2,8 m/s² ditarik beban B. Dalam 1,5 sekon menempuh lintasan s = 1/2 · 2,8 · 1,5² = 3,15 meter!'
    },
    misterJoTakeaway:
      'Ketika benda bergerak NAIK pada bidang miring, komponen gravitasi mg sin θ dan gaya gesek kinetis fk searah dan bekerja sama menghambat laju gerak benda.'
  },

  // ==========================================
  // SOAL 11: BIDANG MIRING BERGERAK TURUN
  // ==========================================
  {
    id: 11,
    title: 'Soal 11: Bidang Miring Sistem Bergerak Turun',
    subtitle: 'Dinamika Balok Meluncur Turun Melawan Tali & Gesekan',
    topic: 'Katrol Bidang Miring Kasar – Gerak Turun',
    difficulty: 'Tinggi',
    stimulusType: 'cerita',
    stimulusTitle: 'Peluncuran Balok Berat Menarik Beban Ringan ke Atas',
    stimulusText:
      'Balok A bermassa cukup besar, yaitu m_A = 8,0 kg, ditempatkan pada lereng miring curam bersudut θ = 53° terhadap horizontal (sin 53° = 0,80 dan cos 53° = 0,60). Permukaan lereng memiliki koefisien gesek kinetis μk = 0,20. Balok A dihubungkan melalui tali ringan dan katrol tetap licin di puncak lereng dengan balok gantung B yang massanya lebih kecil, yaitu m_B = 2,0 kg. Percepatan gravitasi g = 10 m/s².',
    problemStatement:
      'Sistem dilepaskan dari keadaan diam. Komponen berat balok A yang curam mampu mengatasi gaya gesek dan menarik beban gantung B ke atas.',
    questionText:
      '(a) Analisis arah gaya gesek kinetis pada balok A dan buktikan bahwa balok A meluncur turun!\n(b) Tentukan percepatan gerak sistem a.\n(c) Hitung besar gaya tegangan tali penghubung T selama pergerakan!',
    ttsQuestion:
      'Soal sebelas. Bidang miring dengan sistem bergerak turun. Balok A bermassa delapan kilogram berada pada bidang miring curam lima puluh tiga derajat dengan koefisien gesek kinetis nol koma dua puluh, terhubung tali melalui katrol ke balok gantung B bermassa dua kilogram. Diberikan sinus lima puluh tiga derajat nol koma delapan puluh dan kosinusnya nol koma enam puluh. Buktikan balok A meluncur turun, hitung percepatan sistem, dan tentukan tegangan talinya!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Ke mana arah gaya gesek kinetis bekerja jika balok A meluncur turun?',
          answer: 'Karena balok A meluncur TURUN lereng, gaya gesek kinetis fk berarah ke ATAS lereng (melawan arah gerak).'
        },
        {
          question: 'Apa gaya pendorong yang menggerakkan sistem?',
          answer: 'Komponen gaya berat balok A sejajar lereng: W_Ax = m_A · g · sin 53° = 8 · 10 · 0,80 = 64 N.'
        },
        {
          question: 'Apa saja gaya yang menahan pergerakan turun tersebut?',
          answer: 'Gaya berat beban gantung B (W_B = 2 · 10 = 20 N) dan gaya gesek kinetis lereng (fk = 0,20 · 48 = 9,6 N).'
        }
      ],
      summary: 'Ketika balok meluncur turun, komponen gravitasi mg sin θ bertindak sebagai pendorong, sedangkan beban gantung dan gesekan bertindak sebagai penghambat.'
    },
    ttsAnalysis:
      'Mari kita cermati fisika gerak turun. Balok A ditarik turun oleh komponen beratnya yang besar, yaitu delapan kali sepuluh kali sinus lima puluh tiga derajat sama dengan enam puluh empat Newton. Gaya yang menahannya ada dua: berat beban gantung dua puluh Newton dan gesekan kinetis sembilan koma enam Newton ke atas lereng. Total hambatannya dua puluh sembilan koma enam Newton. Karena enam puluh empat jauh lebih besar, balok A meluncur turun dan menarik beban B naik.',
    fbdBodies: [
      {
        id: 'balok-A-turun',
        name: 'Balok A Meluncur Turun (m_A = 8 kg)',
        mass: 8,
        forces: [
          {
            id: 'WAx',
            name: 'Komponen Berat Sejajar (Pendorong)',
            symbol: 'm_A g\\sin 53^\\circ',
            magnitude: 64,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            isComponent: true,
            description: 'Menarik turun lereng (8 × 10 × 0,8 = 64 N).'
          },
          {
            id: 'T',
            name: 'Tegangan Tali Menahan Naik',
            symbol: 'T',
            magnitude: 26.88,
            unit: 'N',
            angleDeg: 180,
            color: '#2563EB',
            description: 'Tali menahan ke atas lereng (26,88 N).'
          },
          {
            id: 'fk',
            name: 'Gaya Gesek Kinetis',
            symbol: 'f_k',
            magnitude: 9.6,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Melawan gerak turun, berarah ke atas lereng (9,6 N).'
          },
          {
            id: 'NA',
            name: 'Gaya Normal Lereng',
            symbol: 'N_A',
            magnitude: 48,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lereng tegak lurus (8 × 10 × 0,6 = 48 N).'
          }
        ],
        notes: 'ΣFx = WAx - T - fk = 64 - 26,88 - 9,6 = 27,52 N = m_A · a (8 × 3,44 = 27,52 N).'
      },
      {
        id: 'balok-B-naik',
        name: 'Balok Gantung B Ditarik Naik (m_B = 2 kg)',
        mass: 2,
        forces: [
          {
            id: 'T_B',
            name: 'Tegangan Tali Penarik Naik',
            symbol: 'T',
            magnitude: 26.88,
            unit: 'N',
            angleDeg: 90,
            color: '#008F8C',
            description: 'Tali menarik ke atas (26,88 N).'
          },
          {
            id: 'WB',
            name: 'Gaya Berat Balok B',
            symbol: 'W_B',
            magnitude: 20,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi menarik ke bawah (2 × 10 = 20 N).'
          }
        ],
        notes: 'ΣFy = T - W_B = 26,88 - 20 = 6,88 N = m_B · a (2 × 3,44 = 6,88 N).'
      }
    ],
    ttsFbd:
      'Perhatikan diagram benda bebas pada kasus gerak turun. Pada balok A di lereng curam, komponen berat enam puluh empat Newton menarik ke bawah lereng. Ke atas lereng, ada tegangan tali dua puluh enam koma delapan puluh delapan Newton dan gaya gesek kinetis sembilan koma enam Newton. Pada balok B, tegangan tali dua puluh enam koma delapan puluh delapan Newton ke atas mengatasi berat balok B dua puluh Newton sehingga balok B dipercepat ke atas.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Uraikan Gaya pada Balok A (mA = 8 kg, θ = 53°)',
          explanation: 'W_Ax = 8 × 10 × 0,80 = 64,0 N. W_Ay = 8 × 10 × 0,60 = 48,0 N.'
        },
        {
          stepNumber: 2,
          title: 'Hitung Gaya Normal dan Gesek Kinetis Balok A',
          explanation: 'Gaya normal N_A = W_Ay = 48,0 N.',
          mathFormula: 'f_k = \\mu_k \\cdot N_A = 0{,}20 \\times 48{,}0 = 9{,}6\\text{ N (arah ke atas lereng)}'
        },
        {
          stepNumber: 3,
          title: 'Hitung Gaya Berat Balok Gantung B',
          explanation: 'Gaya berat gravitasi pada balok B.',
          mathFormula: 'W_B = m_B \\cdot g = 2{,}0 \\times 10 = 20{,}0\\text{ N}'
        },
        {
          stepNumber: 4,
          title: 'Buktikan Balok A Meluncur Turun',
          explanation: 'Gaya pendorong turun = W_Ax = 64,0 N. Total gaya penahan = W_B + fk = 20 + 9,6 = 29,6 N. Karena 64 N > 29,6 N, balok A terbukti meluncur turun.',
          consistencyCheck: '\\Sigma F_{\\text{netto}} = 64{,}0 - 29{,}6 = 34{,}4\\text{ N} > 0 \\quad (\\text{Terbukti Turun})'
        },
        {
          stepNumber: 5,
          title: 'Susun Persamaan Gerak Balok A (Meluncur Turun)',
          explanation: 'Komponen berat searah gerak turun, tali dan gesek menghambat.',
          mathFormula: 'W_{Ax} - T - f_k = m_A \\cdot a \\implies 64 - T - 9{,}6 = 8a \\implies 54{,}4 - T = 8a'
        },
        {
          stepNumber: 6,
          title: 'Susun Persamaan Gerak Balok B (Ditarik Naik)',
          explanation: 'Tegangan tali menarik ke atas, berat menahan ke bawah.',
          mathFormula: 'T - W_B = m_B \\cdot a \\implies T - 20 = 2a'
        },
        {
          stepNumber: 7,
          title: 'Eliminasi Tali T dengan Menjumlahkan Kedua Persamaan',
          explanation: 'Jumlahkan kedua persamaan gerak.',
          substitution: '(54{,}4 - T) + (T - 20) = 8a + 2a \\implies 34{,}4 = 10a'
        },
        {
          stepNumber: 8,
          title: 'Hitung Percepatan Sistem a',
          explanation: 'Selesaikan nilai percepatan.',
          result: 'a = \\frac{34{,}4}{10} = 3{,}44\\text{ m/s}^2'
        },
        {
          stepNumber: 9,
          title: 'Hitung Tegangan Tali T',
          explanation: 'Substitusi a = 3,44 m/s² ke dalam persamaan Balok B.',
          substitution: 'T = W_B + m_B \\cdot a = 20 + 2(3{,}44) = 20 + 6{,}88 = 26{,}88\\text{ N}'
        },
        {
          stepNumber: 10,
          title: 'Verifikasi Konsistensi pada Balok A',
          explanation: 'Periksa nilai tegangan pada balok A.',
          consistencyCheck: 'T = 54{,}4 - 8(3{,}44) = 54{,}4 - 27{,}52 = 26{,}88\\text{ N} \\quad (\\text{Sangat Presisi})'
        }
      ],
      finalAnswer: 'Percepatan a = 3,44 m/s²; Tegangan tali T = 26,88 N (Balok A meluncur turun)',
      consistencyCheck: 'Komponen berat W_Ax (64 N) mendominasi seluruh hambatan sistem.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, komponen berat balok A ke bawah lereng adalah delapan kali sepuluh kali sinus lima puluh tiga derajat sama dengan enam puluh empat Newton. Gaya normalnya empat puluh delapan Newton, sehingga gaya gesek kinetisnya nol koma dua puluh dikali empat puluh delapan sama dengan sembilan koma enam Newton ke atas lereng. Berat balok gantung B adalah dua puluh Newton. Kedua, gaya penggerak netto adalah enam puluh empat dikurang dua puluh dikurang sembilan koma enam, menghasilkan tiga puluh empat koma empat Newton. Ketiga, bagi tiga puluh empat koma empat dengan total massa sepuluh kilogram, diperoleh percepatan tiga koma empat puluh empat meter per sekon kuadrat. Keempat, tegangan tali adalah dua puluh ditambah dua dikali tiga koma empat puluh empat, menghasilkan dua puluh enam koma delapan puluh delapan Newton.',
    fastSolution: {
      concept: 'Hukum II Newton Sistem Global Gerak Turun',
      reasoning: 'Gaya penggerak netto adalah W_Ax dikurangi seluruh hambatan (W_B dan fk). Percepatan adalah gaya netto dibagi total massa.',
      mathFormula: 'a = \\frac{W_{Ax} - W_B - f_k}{m_A + m_B} = \\frac{64 - 20 - 9{,}6}{8 + 2} = \\frac{34{,}4}{10} = 3{,}44\\text{ m/s}^2',
      steps: [
        'Hitung gaya penggerak netto: 64 - 20 - 9,6 = 34,4 N.',
        'Massa total sistem: 8 + 2 = 10 kg.',
        'Percepatan: a = 34,4 / 10 = 3,44 m/s².',
        'Tegangan tali: T = mB(g + a) = 2(10 + 3,44) = 26,88 N.'
      ],
      finalAnswer: 'a = 3,44 m/s²; T = 26,88 N'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Ambil gaya penarik enam puluh empat Newton, kurangi berat beban gantung dua puluh Newton, kurangi gaya gesek sembilan koma enam Newton. Tersisa gaya netto tiga puluh empat koma empat Newton. Bagi langsung dengan total massa sepuluh kilogram, menghasilkan percepatan tiga koma empat puluh empat meter per sekon kuadrat! Tegangan tali tinggal dua dikali tiga belas koma empat puluh empat sama dengan dua puluh enam koma delapan puluh delapan Newton!',
    simulation: {
      type: 'incline_pulley_down',
      state: 'BERGERAK',
      acceleration: 3.44,
      initialVelocity: 0,
      duration: 1.4,
      displacement: 3.37,
      directionDescription: 'Balok A meluncur TURUN di lereng 53° dengan a = 3,44 m/s², beban B terangkat naik',
      extraValues: { mA: '8,0 kg', mB: '2,0 kg', WAx: '64 N', fk: '9,6 N', T: '26,88 N', a: '3,44 m/s²' },
      misterJoComment:
        'Simulasi membuktikan: Balok A yang berat meluncur turun di lereng curam dengan a = 3,44 m/s², menarik beban B naik setinggi 3,37 meter dalam 1,4 sekon!'
    },
    misterJoTakeaway:
      'Arah gaya gesek kinetis selalu berlawanan dengan vektor kecepatan relatif; pada balok meluncur turun lereng, gesekan mengarah ke atas lereng.'
  },

  // ==========================================
  // SOAL 12: DUA BIDANG MIRING TERHUBUNG KATROL
  // ==========================================
  {
    id: 12,
    title: 'Soal 12: Dua Bidang Miring Dihubungkan Katrol Tetap',
    subtitle: 'Kompetisi Sudut Kemiringan pada Baji Simetris Ganda',
    topic: 'Katrol Tetap pada Prisma Segitiga Licin Ganda',
    difficulty: 'Tinggi',
    stimulusType: 'diagram',
    stimulusTitle: 'Dua Balok Bermassa Identik pada Dua Sisi Tanjakan Prisma',
    stimulusText:
      'Dua balok 1 (massa m1 = 5,0 kg) dan 2 (massa m2 = 5,0 kg) diletakkan pada baji prisma segitiga ganda yang kedua permukaannya licin tanpa gesekan. Sudut kemiringan sisi lereng kiri adalah θ1 = 53° (sin 53° = 0,80, cos 53° = 0,60), sedangkan sudut kemiringan sisi lereng kanan adalah θ2 = 30° (sin 30° = 0,50, cos 30° = 0,866). Kedua balok dihubungkan oleh seutas tali ringan tak elastis melalui katrol tetap ideal di puncak baji. Percepatan gravitasi g = 10 m/s².',
    problemStatement:
      'Meskipun kedua balok memiliki massa yang sama persis (5,0 kg), perbedaan sudut kemiringan menyebabkan resultan gaya tidak seimbang.',
    questionText:
      '(a) Tentukan ke arah mana sistem akan bergerak dipercepat, dan jelaskan alasannya secara konsep fisika!\n(b) Hitung percepatan sistem gerak balok a.\n(c) Hitung besar tegangan tali penghubung T selama pergerakan!',
    ttsQuestion:
      'Soal dua belas. Dua bidang miring dihubungkan katrol tetap. Dua balok bermassa sama, masing-masing lima kilogram, berada pada dua lereng licin yang berbeda sudut. Lereng kiri bersudut lima puluh tiga derajat dengan sinus nol koma delapan puluh. Lereng kanan bersudut tiga puluh derajat dengan sinus nol koma lima puluh. Tentukan arah pergerakan sistem, hitung percepatan sistem, dan tentukan tegangan tali penghubungnya!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Mengapa kedua massa yang sama tidak menghasilkan kesetimbangan diam?',
          answer: 'Karena gaya yang menarik balok di lereng bukan berat total (mg), melainkan komponen berat sejajar lereng (mg sin θ). Karena sin 53° > sin 30°, gaya penarik di lereng kiri lebih besar.'
        },
        {
          question: 'Berapakah komponen penarik balok 1 dan balok 2?',
          answer: 'Balok 1: F1 = m1 g sin 53° = 5 · 10 · 0,80 = 40 N. Balok 2: F2 = m2 g sin 30° = 5 · 10 · 0,50 = 25 N.'
        },
        {
          question: 'Bagaimana arah pergerakan sistem?',
          answer: 'Karena F1 (40 N) > F2 (25 N), balok 1 meluncur turun di lereng kiri, sementara balok 2 ditarik naik di lereng kanan.'
        }
      ],
      summary: 'Pergerakan sistem dua bidang miring ditentukan oleh perbandingan nilai m1 sin θ1 dan m2 sin θ2.'
    },
    ttsAnalysis:
      'Ini adalah demonstrasi indah mekanika Newton. Walaupun kedua massa sama-sama lima kilogram, lereng kiri lebih curam dengan sinus nol koma delapan puluh, menghasilkan tarikan empat puluh Newton. Lereng kanan lebih landai dengan sinus nol koma lima puluh, menghasilkan tarikan dua puluh lima Newton. Selisih gaya sebesar lima belas Newton mempercepat sistem sepuluh kilogram, sehingga balok satu meluncur turun dan balok dua terangkat naik.',
    fbdBodies: [
      {
        id: 'balok-1-lereng-kiri',
        name: 'Balok 1 di Lereng Kiri 53° (m1 = 5 kg)',
        mass: 5,
        forces: [
          {
            id: 'W1x',
            name: 'Komponen Berat Sejajar Lereng Kiri',
            symbol: 'm_1 g\\sin 53^\\circ',
            magnitude: 40,
            unit: 'N',
            angleDeg: 180,
            color: '#008F8C',
            isComponent: true,
            description: 'Menarik turun ke kiri bawah (5 × 10 × 0,8 = 40 N).'
          },
          {
            id: 'T1',
            name: 'Tegangan Tali Penahan',
            symbol: 'T',
            magnitude: 32.5,
            unit: 'N',
            angleDeg: 0,
            color: '#2563EB',
            description: 'Tali menahan ke atas puncak (32,5 N).'
          },
          {
            id: 'N1',
            name: 'Gaya Normal Lereng Kiri',
            symbol: 'N_1',
            magnitude: 30,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lereng kiri (5 × 10 × 0,6 = 30 N).'
          }
        ],
        notes: 'ΣFx = W1x - T = 40 - 32,5 = 7,5 N = m1 · a (5 × 1,5 = 7,5 N).'
      },
      {
        id: 'balok-2-lereng-kanan',
        name: 'Balok 2 di Lereng Kanan 30° (m2 = 5 kg)',
        mass: 5,
        forces: [
          {
            id: 'T2',
            name: 'Tegangan Tali Penarik Naik',
            symbol: 'T',
            magnitude: 32.5,
            unit: 'N',
            angleDeg: 180,
            color: '#008F8C',
            description: 'Tali menarik ke atas puncak lereng (32,5 N).'
          },
          {
            id: 'W2x',
            name: 'Komponen Berat Sejajar Lereng Kanan',
            symbol: 'm_2 g\\sin 30^\\circ',
            magnitude: 25,
            unit: 'N',
            angleDeg: 0,
            color: '#E05638',
            isComponent: true,
            description: 'Menarik turun ke kanan bawah (5 × 10 × 0,5 = 25 N).'
          },
          {
            id: 'N2',
            name: 'Gaya Normal Lereng Kanan',
            symbol: 'N_2',
            magnitude: 43.3,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lereng kanan (5 × 10 × 0,866 = 43,3 N).'
          }
        ],
        notes: 'ΣFx = T - W2x = 32,5 - 25 = 7,5 N = m2 · a (5 × 1,5 = 7,5 N).'
      }
    ],
    ttsFbd:
      'Perhatikan diagram benda bebas kedua balok pada baji. Pada balok satu di lereng kiri, komponen berat empat puluh Newton menarik ke kiri bawah, dilawan tegangan tali tiga puluh dua koma lima Newton ke atas. Pada balok dua di lereng kanan, tegangan tali tiga puluh dua koma lima Newton ke atas puncak lereng mengatasi komponen berat dua puluh lima Newton ke kanan bawah. Kedua balok mengalami gaya netto tujuh koma lima Newton searah lintasannya.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Hitung Komponen Berat Sejajar Lereng Kiri (Balok 1)',
          explanation: 'Gaya pendorong sejajar pada lereng θ1 = 53°.',
          mathFormula: 'F_1 = m_1 g \\sin 53^\\circ = 5{,}0 \\times 10 \\times 0{,}80 = 40{,}0\\text{ N}'
        },
        {
          stepNumber: 2,
          title: 'Hitung Komponen Berat Sejajar Lereng Kanan (Balok 2)',
          explanation: 'Gaya penahan sejajar pada lereng θ2 = 30°.',
          mathFormula: 'F_2 = m_2 g \\sin 30^\\circ = 5{,}0 \\times 10 \\times 0{,}50 = 25{,}0\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Tentukan Arah Pergerakan Sistem',
          explanation: 'Karena F1 (40 N) > F2 (25 N), balok 1 bergerak turun lereng kiri dan balok 2 bergerak naik lereng kanan.'
        },
        {
          stepNumber: 4,
          title: 'Susun Persamaan Gerak Balok 1',
          explanation: 'Komponen berat menarik turun, tali menahan ke atas.',
          mathFormula: 'F_1 - T = m_1 \\cdot a \\implies 40 - T = 5a \\quad \\text{--- (Pers. 1)}'
        },
        {
          stepNumber: 5,
          title: 'Susun Persamaan Gerak Balok 2',
          explanation: 'Tegangan tali menarik naik, komponen berat menahan ke bawah.',
          mathFormula: 'T - F_2 = m_2 \\cdot a \\implies T - 25 = 5a \\quad \\text{--- (Pers. 2)}'
        },
        {
          stepNumber: 6,
          title: 'Eliminasi T dengan Menjumlahkan Pers. 1 dan Pers. 2',
          explanation: 'Jumlahkan kedua persamaan gerak.',
          substitution: '(40 - T) + (T - 25) = 5a + 5a \\implies 15 = 10a'
        },
        {
          stepNumber: 7,
          title: 'Hitung Percepatan Sistem a',
          explanation: 'Selesaikan persamaan aljabar untuk a.',
          result: 'a = \\frac{15}{10} = 1{,}5\\text{ m/s}^2'
        },
        {
          stepNumber: 8,
          title: 'Hitung Tegangan Tali T',
          explanation: 'Substitusi a = 1,5 m/s² ke dalam Persamaan 2.',
          substitution: 'T = F_2 + m_2 \\cdot a = 25 + 5(1{,}5) = 25 + 7{,}5 = 32{,}5\\text{ N}'
        },
        {
          stepNumber: 9,
          title: 'Verifikasi Tegangan Tali pada Persamaan 1',
          explanation: 'Periksa konsistensi hasil perhitungan pada Balok 1.',
          consistencyCheck: 'T = 40 - 5(1{,}5) = 40 - 7{,}5 = 32{,}5\\text{ N} \\quad (\\text{Identik})'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Fisis',
          explanation: 'Tegangan tali (32,5 N) berada tepat di antara F2 (25 N) dan F1 (40 N). Percepatan 1,5 m/s² positif dan realistis.',
          consistencyCheck: '25\\text{ N} < T (32{,}5\\text{ N}) < 40\\text{ N} \\quad (\\text{Sangat Rasional})'
        }
      ],
      finalAnswer: 'Balok 1 turun, Balok 2 naik; a = 1,5 m/s²; T = 32,5 N',
      consistencyCheck: 'Resultan gaya netto = 40 - 25 = 15 N; massa total = 10 kg; a = 1,5 m/s².'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, hitung komponen berat sejajar. Balok satu di lereng kiri ditarik dengan gaya lima dikali sepuluh dikali sinus lima puluh tiga derajat sama dengan empat puluh Newton. Balok dua di lereng kanan ditarik dengan gaya lima dikali sepuluh dikali sinus tiga puluh derajat sama dengan dua puluh lima Newton. Karena empat puluh lebih besar dari dua puluh lima, balok satu meluncur turun lereng kiri sambil menarik balok dua naik lereng kanan. Kedua, kurangkan kedua gaya untuk mencari gaya netto: empat puluh dikurang dua puluh lima sama dengan lima belas Newton. Bagi lima belas Newton dengan total massa sepuluh kilogram, diperoleh percepatan satu koma lima meter per sekon kuadrat. Ketiga, tegangan tali adalah dua puluh lima ditambah lima kali satu koma lima, menghasilkan tiga puluh dua koma lima Newton.',
    fastSolution: {
      concept: 'Hukum II Newton Sistem Global Dua Sisi Tanjakan',
      reasoning: 'Gaya penggerak netto sistem adalah selisih proyeksi gaya gravitasi kedua sisi tanjakan: a = (m1 g sin θ1 - m2 g sin θ2) / (m1 + m2).',
      mathFormula: 'a = \\frac{40 - 25}{5 + 5} = \\frac{15}{10} = 1{,}5\\text{ m/s}^2',
      steps: [
        'Gaya dorong lereng kiri: 50 × 0,8 = 40 N.',
        'Gaya hambat lereng kanan: 50 × 0,5 = 25 N.',
        'Gaya netto: 40 - 25 = 15 N.',
        'Percepatan: a = 15 / 10 = 1,5 m/s².',
        'Tegangan tali: T = 25 + 5(1,5) = 32,5 N.'
      ],
      finalAnswer: 'a = 1,5 m/s²; T = 32,5 N'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Hitung langsung gaya sejajar masing-masing lereng: empat puluh Newton di kiri melawan dua puluh lima Newton di kanan. Selisih gayanya lima belas Newton. Bagi langsung dengan total massa sepuluh kilogram, dapat percepatan satu koma lima meter per sekon kuadrat. Lalu cari tegangan tali: dua puluh lima ditambah tujuh koma lima sama dengan tiga puluh dua koma lima Newton!',
    simulation: {
      type: 'double_incline',
      state: 'BERGERAK',
      acceleration: 1.5,
      initialVelocity: 0,
      duration: 2.0,
      displacement: 3.0,
      directionDescription: 'Balok 1 meluncur turun lereng 53°, Balok 2 meluncur naik lereng 30° dengan a = 1,5 m/s²',
      extraValues: { F1: '40 N', F2: '25 N', a: '1,5 m/s²', T: '32,5 N' },
      misterJoComment:
        'Simulasi membuktikan: Pada prisma segitiga licin ganda, balok 1 meluncur turun lereng 53° sejauh 3,0 meter dalam 2 sekon dengan a = 1,5 m/s², membuktikan dominasi sudut kemiringan!'
    },
    misterJoTakeaway:
      'Pada sistem katrol terhubung lereng, massa yang sama tidak menjamin kesetimbangan; komponen gaya sejajar bidang miring (mg sin θ)-lah yang menjadi penentu arah gerak.'
  },

  // ==========================================
  // SOAL 13: KATROL BEBAS / BERGERAK (MANDATORY SPECIAL)
  // ==========================================
  {
    id: 13,
    title: 'Soal 13: Katrol Bebas / Katrol Bergerak',
    subtitle: 'Analisis Kendala Panjang Tali, Faktor 2 Percepatan & Gaya 2T',
    topic: 'Katrol Bergerak (Movable Pulley) – Mekanika Kendala Kinematika',
    difficulty: 'Kompleks',
    stimulusType: 'diagram',
    stimulusTitle: 'Konfigurasi Presisi Katrol Bergerak Menopang Beban Gantung',
    stimulusText:
      'Sebuah balok 1 bermassa m1 = 1,0 kg berada di atas meja horizontal yang licin sempurna. Balok 1 dihubungkan ke salah satu ujung seutas tali ideal ringan tak elastis. Tali tersebut dilewatkan melalui sebuah katrol bergerak (katrol bebas) bermassa diabaikan yang menopang beban gantung 2 bermassa m2 = 6,0 kg, kemudian tali melewati katrol tetap di tepi meja dan ujung lainnya diikat kuat ke dinding vertikal yang kokoh. Sistem mula-mula ditahan diam lalu dilepaskan. Percepatan gravitasi g = 10 m/s².',
    problemStatement:
      'DILARANG menyamakan percepatan kedua benda! Katrol bergerak ditopang oleh DUA segmen tali vertikal yang masing-masing memiliki tegangan T.',
    questionText:
      '(a) Turunkan hubungan kendala kinematika (constraint relation) antara perpindahan dan percepatan balok 1 (a1) serta beban 2 (a2).\n(b) Buat FBD terpisah untuk balok 1 dan katrol bergerak bersama beban 2.\n(c) Hitung percepatan masing-masing benda (a1 dan a2) serta besar gaya tegang tali T!\n(d) Buktikan bahwa resultan gaya ke atas pada katrol bergerak adalah 2T!',
    ttsQuestion:
      'Soal tiga belas. Soal khusus katrol bergerak. Balok satu bermassa satu kilogram di atas meja licin dihubungkan tali melalui katrol bergerak yang menopang beban dua bermassa enam kilogram. Ujung tali lainnya diikat ke dinding. Turunkan hubungan kendala panjang tali antara percepatan balok satu dan beban dua, tentukan percepatan masing-masing benda, dan hitung tegangan talinya!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Berapa segmen tali yang menopang katrol bergerak?',
          answer: 'Katrol bergerak ditopang oleh dua segmen tali vertikal paralel. Karena tali kontinu dan ideal, masing-masing segmen memiliki tegangan T yang sama, sehingga gaya total ke atas pada katrol bergerak adalah 2T.'
        },
        {
          question: 'Bagaimana hubungan kendala panjang tali (string constraint)?',
          answer: 'Panjang tali konstan L = x1 + 2·y2 + C. Menurunkan dua kali terhadap waktu menghasilkan hubungan percepatan: a1 = 2·a2 (percepatan balok 1 dua kali lebih besar dari percepatan beban 2).'
        },
        {
          question: 'Mengapa percepatan balok 1 dan beban 2 tidak sama?',
          answer: 'Karena jika beban 2 turun 1 cm, kedua segmen tali penyangga masing-masing harus memanjang 1 cm, sehingga balok 1 harus maju sejauh 2 cm (x1 = 2·y2).'
        }
      ],
      summary: 'Pada katrol bergerak: Kendala tali mengharuskan a1 = 2·a2, dan hukum Newton pada katrol bergerak mensyaratkan gaya ke atas sebesar 2T.'
    },
    ttsAnalysis:
      'Ini adalah puncak pemahaman kendala gerak tali. Katrol bergerak ditopang oleh dua utas tali, sehingga gaya angkat ke atasnya adalah dua T. Menurut kendala panjang tali, jika beban katrol turun satu meter, tali di meja harus memanjang dua meter! Artinya percepatan balok di meja tepat dua kali lipat percepatan beban gantung. Jangan pernah menyamakan percepatan kedua benda ini!',
    fbdBodies: [
      {
        id: 'balok-1-meja-katrol',
        name: 'Balok 1 di Meja Licin (m1 = 1 kg)',
        mass: 1,
        forces: [
          {
            id: 'T1',
            name: 'Tegangan Tali Tunggal',
            symbol: 'T',
            magnitude: 12,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Satu segmen tali menarik balok 1 ke kanan (T = 12 N).'
          },
          {
            id: 'N1',
            name: 'Gaya Normal Meja',
            symbol: 'N_1',
            magnitude: 10,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal meja menopang balok 1 (10 N).'
          },
          {
            id: 'W1',
            name: 'Gaya Berat Balok 1',
            symbol: 'W_1',
            magnitude: 10,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok 1 (10 N).'
          }
        ],
        notes: 'Pada balok 1: ΣFx = T = m1 · a1 = 1 × 12 = 12 N.'
      },
      {
        id: 'katrol-beban-2',
        name: 'Katrol Bergerak + Beban 2 (m2 = 6 kg)',
        mass: 6,
        forces: [
          {
            id: 'T_kiri',
            name: 'Tegangan Tali Segmen Kiri',
            symbol: 'T',
            magnitude: 12,
            unit: 'N',
            angleDeg: 90,
            color: '#008F8C',
            description: 'Segmen tali kiri menarik ke atas (12 N).'
          },
          {
            id: 'T_kanan',
            name: 'Tegangan Tali Segmen Kanan',
            symbol: 'T',
            magnitude: 12,
            unit: 'N',
            angleDeg: 90,
            color: '#2563EB',
            description: 'Segmen tali kanan menarik ke atas (12 N). Total ke atas = 2T = 24 N.'
          },
          {
            id: 'W2',
            name: 'Gaya Berat Beban 2',
            symbol: 'W_2 = m_2 g',
            magnitude: 60,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada beban gantung (6 × 10 = 60 N).'
          }
        ],
        notes: 'Pada katrol bergerak: ΣFy = W2 - 2T = 60 - 2(12) = 36 N = m2 · a2 (6 × 6 = 36 N).'
      }
    ],
    ttsFbd:
      'Perhatikan FBD katrol bergerak secara sangat teliti. Pada balok satu di meja, hanya ada satu gaya horizontal yaitu tegangan tali T sebesar dua belas Newton ke kanan. Namun pada katrol bergerak yang menopang beban dua, terdapat dua segmen tali yang menarik ke atas, masing-masing dengan tegangan T dua belas Newton, sehingga total gaya angkat ke atas adalah dua T atau dua puluh empat Newton. Gaya ke bawah adalah berat beban enam puluh Newton.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Penurunan Hubungan Kendala Panjang Tali (String Constraint)',
          explanation: 'Panjang total tali ideal tak elastis adalah L = x1 + 2·y2 + C, di mana x1 posisi balok 1 dan y2 posisi katrol bergerak.'
        },
        {
          stepNumber: 2,
          title: 'Diferensiasi Dua Kali terhadap Waktu',
          explanation: 'Karena d²L/dt² = 0, turunan kedua menghasilkan hubungan percepatan yang mutlak.',
          mathFormula: '\\frac{d^2 x_1}{dt^2} + 2\\frac{d^2 y_2}{dt^2} = 0 \\implies a_1 = 2a_2 \\quad (\\text{atau } a_2 = \\frac{a_1}{2})'
        },
        {
          stepNumber: 3,
          title: 'Susun Persamaan Hukum II Newton Balok 1',
          explanation: 'Balok 1 di meja licin hanya ditarik satu segmen tali bertransmisi T.',
          mathFormula: '\\sum F_{1x} = T = m_1 \\cdot a_1 \\implies T = m_1 (2a_2) \\quad \\text{--- (Pers. 1)}'
        },
        {
          stepNumber: 4,
          title: 'Susun Persamaan Hukum II Newton Katrol Bergerak & Beban 2',
          explanation: 'Katrol bergerak ditopang DUA segmen tali ke atas (2T) dan ditarik berat W2 = m2 g ke bawah.',
          mathFormula: '\\sum F_{2y} = m_2 g - 2T = m_2 \\cdot a_2 \\quad \\text{--- (Pers. 2)}'
        },
        {
          stepNumber: 5,
          title: 'Substitusi Nilai T dari Pers. 1 ke Pers. 2',
          explanation: 'Gantikan T dengan 2 m1 a2.',
          substitution: 'm_2 g - 2(2 m_1 a_2) = m_2 a_2 \\implies m_2 g - 4 m_1 a_2 = m_2 a_2'
        },
        {
          stepNumber: 6,
          title: 'Kumpulkan Variabel Percepatan a2',
          explanation: 'Pindahkan suku ke ruas kanan.',
          substitution: 'm_2 g = (4 m_1 + m_2) a_2 \\implies a_2 = \\frac{m_2 g}{4 m_1 + m_2}'
        },
        {
          stepNumber: 7,
          title: 'Hitung Percepatan Beban Katrol Bergerak a2',
          explanation: 'Substitusi m1 = 1,0 kg, m2 = 6,0 kg, dan g = 10 m/s².',
          substitution: 'a_2 = \\frac{6{,}0 \\times 10}{4(1{,}0) + 6{,}0} = \\frac{60}{4 + 6} = \\frac{60}{10} = 6{,}0\\text{ m/s}^2'
        },
        {
          stepNumber: 8,
          title: 'Hitung Percepatan Balok 1 (a1)',
          explanation: 'Gunakan hubungan kendala tali a1 = 2 a2.',
          substitution: 'a_1 = 2 \\times 6{,}0 = 12{,}0\\text{ m/s}^2'
        },
        {
          stepNumber: 9,
          title: 'Hitung Gaya Tegang Tali T',
          explanation: 'Gunakan Persamaan 1.',
          substitution: 'T = m_1 \\cdot a_1 = 1{,}0 \\times 12{,}0 = 12{,}0\\text{ N}'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Fisis Katrol Bergerak',
          explanation: 'Gaya ke atas pada katrol bergerak: 2T = 2(12) = 24 N. Gaya netto pada beban 2: W2 - 2T = 60 - 24 = 36 N. Bandingkan dengan m2 · a2 = 6 × 6 = 36 N. Cocok sempurna!',
          consistencyCheck: 'm_2 g - 2T = 60 - 24 = 36\\text{ N} = m_2 a_2 \\quad (\\text{Sempurna!})'
        }
      ],
      finalAnswer: 'a2 = 6,0 m/s²; a1 = 12,0 m/s²; T = 12,0 N; Gaya penopang katrol = 2T = 24,0 N',
      consistencyCheck: 'Hubungan kendala x1 = 2 y2 dan gaya 2T terpenuhi tanpa asumsi sembarangan.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, dari hubungan kendala tali, panjang tali adalah x satu ditambah dua y dua. Karena panjang tali konstan, maka percepatan balok satu adalah dua kali percepatan beban dua. Kedua, balok satu ditarik tali dengan gaya T sama dengan m satu dikali a satu, yang bernilai dua m satu dikali a dua. Ketiga, katrol bergerak ditopang dua segmen tali ke atas, sehingga persamaannya adalah m dua kali g dikurang dua T sama dengan m dua dikali a dua. Keempat, substitusi T menghasilkan persamaan: m dua g sama dengan empat m satu ditambah m dua, dikalikan a dua. Masukkan angka: enam puluh dibagi empat tambah enam sama dengan enam puluh bagi sepuluh, diperoleh percepatan beban dua adalah enam meter per sekon kuadrat. Kelima, percepatan balok satu adalah dua kali enam, yaitu dua belas meter per sekon kuadrat, dan tegangan talinya adalah dua belas Newton.',
    fastSolution: {
      concept: 'Metode Inersia Ekivalen Sistem Kendala Katrol Bebas',
      reasoning: 'Karena a1 = 2 a2, maka setiap satuan percepatan a2 menggerakkan massa m1 dengan percepatan 2 a2, yang dalam neraca energi/kerja memberikan inersia efektif 4 m1. Maka penyebut massa efektif sistem adalah (4 m1 + m2).',
      mathFormula: 'a_2 = \\frac{m_2 g}{4 m_1 + m_2} = \\frac{60}{4(1) + 6} = 6{,}0\\text{ m/s}^2, \\quad a_1 = 2 a_2 = 12{,}0\\text{ m/s}^2',
      steps: [
        'Identifikasi faktor kendala tali: balok 1 dipercepat 2×, inersia meja menjadi 2² × m1 = 4 m1.',
        'Massa inersia total sistem relatif terhadap beban: 4(1) + 6 = 10 kg.',
        'Percepatan beban katrol: a2 = 60 / 10 = 6,0 m/s².',
        'Percepatan balok meja: a1 = 2 × 6 = 12,0 m/s².',
        'Tegangan tali: T = m1 a1 = 1 × 12 = 12 N.'
      ],
      finalAnswer: 'a1 = 12 m/s², a2 = 6 m/s², T = 12 N'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Gunakan konsep inersia efektif! Karena balok meja bergerak dua kali lebih cepat dari katrol bergerak, bobot inersianya menjadi dua kuadrat yaitu empat kali massa balok meja. Empat dikali satu adalah empat kilogram. Ditambah massa beban enam kilogram, total inersianya sepuluh kilogram. Beban enam puluh Newton dibagi sepuluh kilogram langsung menghasilkan percepatan katrol enam meter per sekon kuadrat! Percepatan balok meja dua kalinya yaitu dua belas meter per sekon kuadrat, dan tegangan tali dua belas Newton!',
    simulation: {
      type: 'movable_pulley',
      state: 'BERGERAK',
      acceleration: 6.0,
      initialVelocity: 0,
      duration: 1.0,
      displacement: 3.0,
      directionDescription: 'Katrol bergerak turun sejauh 3,0 m (a = 6 m/s²), Balok meja maju 6,0 m (a = 12 m/s²)',
      extraValues: { a1_meja: '12,0 m/s²', a2_beban: '6,0 m/s²', T: '12,0 N', gaya_2T: '24,0 N', rasio_s: 's1 = 2 s2' },
      misterJoComment:
        'Saksikan keajaiban kinematika katrol bergerak: Dalam 1 sekon, beban katrol turun sejauh 3,0 meter (s2 = 1/2 · 6 · 1²), sedangkan balok di meja melesat maju sejauh 6,0 meter (s1 = 1/2 · 12 · 1²)! Terbukti presisi rasio faktor 2!'
    },
    misterJoTakeaway:
      'Pada katrol bergerak yang ditopang dua segmen tali: gaya angkat tali bernilai 2T, dan hubungan kendala kinematika mengharuskan perpindahan serta percepatan memiliki rasio tepat 1 banding 2.'
  },

  // ==========================================
  // SOAL 14: GAYA MEMBENTUK SUDUT DAN GESEKAN
  // ==========================================
  {
    id: 14,
    title: 'Soal 14: Gaya Membentuk Sudut & Gesekan',
    subtitle: 'Modifikasi Gaya Normal, Perubahan Gesekan & Analisis Sudut',
    topic: 'Gaya Tarik Membentuk Sudut Elevasi – Lantai Kasar',
    difficulty: 'Tinggi',
    stimulusType: 'diagram',
    stimulusTitle: 'Peti Perkakas Ditarik dengan Sudut Elevasi 37° ke Atas',
    stimulusText:
      'Sebuah peti perkakas bermassa m = 20,0 kg berada di atas lantai gudang beton horizontal yang kasar. Koefisien gesek statis lantai adalah μs = 0,35 dan koefisien gesek kinetisnya adalah μk = 0,20. Peti ditarik menggunakan tali dengan gaya konstan F = 100,0 N yang membentuk sudut elevasi θ = 37° terhadap arah horizontal ke atas (sin 37° = 0,60, cos 37° = 0,80, g = 10 m/s²). Peti mula-mula diam.',
    problemStatement:
      'Banyak siswa salah mengasumsikan bahwa gaya normal selalu N = mg. Pada kasus ini, komponen vertikal gaya tarik mengangkat sebagian beban peti.',
    questionText:
      '(a) Tentukan besar gaya normal N yang bekerja pada peti (buktikan mengapa N ≠ mg)!\n(b) Periksa apakah gaya tarik mampu menggerakkan peti dari keadaan diam, lalu hitung percepatan peti a!\n(c) Analisislah apa yang terjadi pada gaya normal dan percepatan peti jika gaya F = 100 N tersebut diubah arahnya menjadi mendorong peti miring ke bawah dengan sudut 37° yang sama!',
    ttsQuestion:
      'Soal empat belas. Gaya membentuk sudut dan gesekan. Sebuah peti bermassa dua puluh kilogram di atas lantai kasar ditarik dengan gaya seratus Newton yang membentuk sudut tiga puluh tujuh derajat ke atas terhadap horizontal. Koefisien gesek statis nol koma tiga puluh lima dan kinetis nol koma dua puluh. Tentukan gaya normal peti, tentukan apakah peti bergerak dan hitung percepatannya, serta analisis apa yang terjadi jika gaya tersebut diubah menjadi mendorong ke bawah!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Bagaimana penguraian gaya tarik F = 100 N?',
          answer: 'Komponen horizontal yang menarik peti maju: Fx = F cos 37° = 100 · 0,80 = 80 N. Komponen vertikal yang mengangkat peti: Fy = F sin 37° = 100 · 0,60 = 60 N.'
        },
        {
          question: 'Mengapa gaya normal N berkurang?',
          answer: 'Karena Fy membantu menopang beban peti ke atas, lantai tidak perlu menahan seluruh berat peti: N = mg - Fy = 200 - 60 = 140 N.'
        },
        {
          question: 'Bagaimana jika peti didorong miring ke bawah?',
          answer: 'Fy akan menekan lantai ke bawah, sehingga gaya normal membesar: N = mg + Fy = 200 + 60 = 260 N, yang menyebabkan gaya gesek melonjak drastis dan memperkecil percepatan.'
        }
      ],
      summary: 'Menarik dengan sudut elevasi mengurangi gaya normal sehingga memperkecil gaya gesek. Mendorong miring ke bawah memperbesar gaya normal dan memperbesar gaya gesek.'
    },
    ttsAnalysis:
      'Pahami perbedaan krusial antara menarik dan mendorong. Gaya seratus Newton terurai menjadi delapan puluh Newton ke kanan dan enam puluh Newton ke atas. Karena terangkat sebagian ke atas, gaya normal lantai berkurang dari dua ratus Newton menjadi seratus empat puluh Newton. Gaya gesek pun ikut mengecil. Sebaliknya, jika didorong ke bawah, normal membengkak menjadi dua ratus enam puluh Newton dan gesekan menjadi sangat berat.',
    fbdBodies: [
      {
        id: 'peti-tarik-sudut',
        name: 'Peti Perkakas Ditarik ke Atas (m = 20 kg)',
        mass: 20,
        forces: [
          {
            id: 'Fx',
            name: 'Komponen Gaya Tarik Horizontal',
            symbol: 'F\\cos 37^\\circ',
            magnitude: 80,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            isComponent: true,
            description: 'Menarik horizontal ke kanan (100 × 0,8 = 80 N).'
          },
          {
            id: 'Fy',
            name: 'Komponen Gaya Tarik Vertikal',
            symbol: 'F\\sin 37^\\circ',
            magnitude: 60,
            unit: 'N',
            angleDeg: 90,
            color: '#2563EB',
            isComponent: true,
            description: 'Mengangkat ke atas mengurangi beban lantai (100 × 0,6 = 60 N).'
          },
          {
            id: 'N',
            name: 'Gaya Normal Lantai',
            symbol: 'N',
            magnitude: 140,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal lantai berkurang: N = W - Fy = 200 - 60 = 140 N.'
          },
          {
            id: 'W',
            name: 'Gaya Berat Peti',
            symbol: 'W = mg',
            magnitude: 200,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada peti (20 × 10 = 200 N).'
          },
          {
            id: 'fk',
            name: 'Gaya Gesek Kinetis',
            symbol: 'f_k',
            magnitude: 28,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Melawan gerak meluncur ke kanan (fk = 0,20 × 140 = 28 N).'
          }
        ],
        notes: 'ΣFy = N + Fy - W = 140 + 60 - 200 = 0 N. ΣFx = Fx - fk = 80 - 28 = 52 N = m · a.'
      }
    ],
    ttsFbd:
      'Perhatikan diagram benda bebas. Pada sumbu vertikal, ada dua gaya ke atas: gaya normal lantai seratus empat puluh Newton dan komponen gaya tarik vertikal enam puluh Newton. Keduanya bersama-sama mengimbangi gaya berat dua ratus Newton ke bawah. Pada sumbu horizontal, komponen gaya tarik delapan puluh Newton ke kanan dilawan gaya gesek kinetis dua puluh delapan Newton ke kiri, menghasilkan gaya netto lima puluh dua Newton.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Hitung Berat Peti dan Uraikan Gaya Tarik F',
          explanation: 'W = mg = 20 × 10 = 200 N. Fx = F cos 37° = 100 × 0,80 = 80 N. Fy = F sin 37° = 100 × 0,60 = 60 N (ke atas).'
        },
        {
          stepNumber: 2,
          title: 'Tinjau Kesetimbangan Sumbu Vertikal (Sumbu Y)',
          explanation: 'Peti tidak terangkat dari lantai karena Fy = 60 N < W = 200 N, maka ΣFy = 0.',
          mathFormula: '\\sum F_y = N + F_y - W = 0 \\implies N = W - F_y'
        },
        {
          stepNumber: 3,
          title: 'Hitung Gaya Normal N',
          explanation: 'Substitusi nilai W dan Fy.',
          substitution: 'N = 200 - 60 = 140{,}0\\text{ N (Terbukti N < mg)}'
        },
        {
          stepNumber: 4,
          title: 'Hitung Ambang Batas Gesek Statis Maksimum',
          explanation: 'Gunakan gaya normal tereduksi N = 140 N.',
          mathFormula: 'f_{s,\\text{maks}} = \\mu_s \\cdot N = 0{,}35 \\times 140{,}0 = 49{,}0\\text{ N}'
        },
        {
          stepNumber: 5,
          title: 'Uji Syarat Gerak Peti',
          explanation: 'Bandingkan gaya penarik horizontal Fx dengan fs,maks: Fx = 80 N > fs,maks = 49 N. Peti terbukti BERGERAK DIPERCEPAT.'
        },
        {
          stepNumber: 6,
          title: 'Hitung Gaya Gesek Kinetis fk',
          explanation: 'Gunakan koefisien kinetis μk = 0,20.',
          mathFormula: 'f_k = \\mu_k \\cdot N = 0{,}20 \\times 140{,}0 = 28{,}0\\text{ N}'
        },
        {
          stepNumber: 7,
          title: 'Hitung Percepatan Peti a',
          explanation: 'Terapkan Hukum II Newton pada sumbu horizontal.',
          mathFormula: 'a = \\frac{F_x - f_k}{m} = \\frac{80{,}0 - 28{,}0}{20{,}0} = \\frac{52{,}0}{20{,}0} = 2{,}6\\text{ m/s}^2'
        },
        {
          stepNumber: 8,
          title: 'Analisis Kasus Dorong ke Bawah: Gaya Normal',
          explanation: 'Jika gaya mendorong miring ke bawah, komponen Fy = 60 N menekan ke bawah.',
          mathFormula: 'N_{\\text{dorong}} = W + F_y = 200 + 60 = 260{,}0\\text{ N}'
        },
        {
          stepNumber: 9,
          title: 'Analisis Kasus Dorong ke Bawah: Gesek & Percepatan',
          explanation: 'Gaya gesek kinetis baru: fk_dorong = 0,20 × 260 = 52 N.',
          substitution: 'a_{\\text{dorong}} = \\frac{80 - 52}{20} = \\frac{28}{20} = 1{,}4\\text{ m/s}^2'
        },
        {
          stepNumber: 10,
          title: 'Pemeriksaan Konsistensi Fisis',
          explanation: 'Saat ditarik: a = 2,6 m/s². Saat didorong: a = 1,4 m/s² (turun hampir separuhnya). Menarik terbukti jauh lebih efisien daripada mendorong pada permukaan kasar.',
          consistencyCheck: 'a_{\\text{tarik}} = 2{,}6\\text{ m/s}^2 > a_{\\text{dorong}} = 1{,}4\\text{ m/s}^2 \\quad (\\text{Rasional})'
        }
      ],
      finalAnswer: '(a) N = 140,0 N; (b) Peti bergerak, a = 2,6 m/s²; (c) Jika didorong: N = 260 N, a = 1,4 m/s²',
      consistencyCheck: 'Perubahan gaya normal memengaruhi gaya gesek dan percepatan secara proporsional.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, gaya tarik diuraikan menjadi delapan puluh Newton horizontal dan enam puluh Newton vertikal ke atas. Karena ditarik ke atas, gaya normal lantai berkurang menjadi dua ratus kurang enam puluh sama dengan seratus empat puluh Newton. Kedua, batas gesek statisnya adalah nol koma tiga puluh lima dikali seratus empat puluh sama dengan empat puluh sembilan Newton. Karena gaya penarik delapan puluh Newton lebih besar dari empat puluh sembilan Newton, peti bergerak. Gaya gesek kinetisnya adalah nol koma dua puluh dikali seratus empat puluh sama dengan dua puluh delapan Newton. Percepatannya adalah delapan puluh dikurang dua puluh delapan dibagi dua puluh sama dengan dua koma enam meter per sekon kuadrat. Ketiga, jika didorong ke bawah, normal membengkak menjadi dua ratus enam puluh Newton, gesekan naik menjadi lima puluh dua Newton, dan percepatan turun drastis menjadi satu koma empat meter per sekon kuadrat.',
    fastSolution: {
      concept: 'Koreksi Langsung Gaya Normal pada Neraca Gesekan',
      reasoning: 'N = mg - F sin θ. Masukkan N ke rumus percepatan langsung: a = (F cos θ - μk(mg - F sin θ)) / m.',
      mathFormula: 'a = \\frac{80 - 0{,}20(200 - 60)}{20} = \\frac{80 - 28}{20} = 2{,}6\\text{ m/s}^2',
      steps: [
        'Hitung N tereduksi: 200 - 60 = 140 N.',
        'Hitung gaya gesek: fk = 0,2 × 140 = 28 N.',
        'Percepatan tarik: a = (80 - 28) / 20 = 2,6 m/s².',
        'Percepatan dorong: N = 260 N => fk = 52 N => a = (80 - 52) / 20 = 1,4 m/s².'
      ],
      finalAnswer: 'N = 140 N; a = 2,6 m/s² (Tarik); a = 1,4 m/s² (Dorong)'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Kurangi gaya normal terlebih dahulu: dua ratus kurang enam puluh adalah seratus empat puluh Newton. Gesekan kinetisnya langsung nol koma dua kali seratus empat puluh sama dengan dua puluh delapan Newton. Kurangkan gaya horizontal delapan puluh dengan dua puluh delapan, dapat lima puluh dua Newton. Bagi massa dua puluh, hasilnya tepat dua koma enam meter per sekon kuadrat!',
    simulation: {
      type: 'angle_force_flat',
      state: 'BERGERAK',
      acceleration: 2.6,
      initialVelocity: 0,
      duration: 2.0,
      displacement: 5.2,
      directionDescription: 'Peti meluncur ke kanan dengan a = 2,6 m/s², gaya tarik miring 37° ke atas',
      extraValues: { F: '100 N', theta: '37°', N_tarik: '140 N', fk: '28 N', a_tarik: '2,6 m/s²', a_dorong: '1,4 m/s²' },
      misterJoComment:
        'Simulasi membuktikan: Dengan gaya normal tereduksi 140 N, peti meluncur mulus sejauh s = 1/2 · 2,6 · 2² = 5,2 meter dalam 2 sekon dengan a = 2,6 m/s²!'
    },
    misterJoTakeaway:
      'Gaya normal tidak selalu sama dengan mg; gaya luar yang memiliki komponen vertikal akan memodifikasi gaya normal dan mengubah besar gaya gesekan secara signifikan.'
  },

  // ==========================================
  // SOAL 15: SINTESIS DINAMIKA MULTIBENDA TINGKAT LANJUT
  // ==========================================
  {
    id: 15,
    title: 'Soal 15: Sintesis Dinamika Multibenda Tingkat Lanjut',
    subtitle: 'Sistem Tiga Benda, Dua Tali Terpisah & Satu Katrol Tetap',
    topic: 'Sistem Multibenda Dinamik – Meja Kasar Terhubung Katrol',
    difficulty: 'Kompleks',
    stimulusType: 'diagram',
    stimulusTitle: 'Rangkaian Tiga Balok Terhubung Dua Tali Berbeda',
    stimulusText:
      'Tiga buah balok dihubungkan dalam satu sistem terangkai di laboratorium. Balok A (massa m_A = 3,0 kg) dan Balok B (massa m_B = 5,0 kg) berada di atas meja horizontal kasar yang memiliki koefisien gesek kinetis seragam μk = 0,15. Balok A dan Balok B dihubungkan oleh Tali 1 yang ringan dan tak elastis. Balok B kemudian dihubungkan ke Balok Gantung C (massa m_C = 8,0 kg) menggunakan Tali 2 yang berbeda, yang dilewatkan melalui sebuah katrol tetap ideal di tepi meja. Sistem dilepaskan dari keadaan diam. Percepatan gravitasi g = 10 m/s².',
    problemStatement:
      'Sistem bergerak bersama dengan percepatan konstan a. Tali 1 dan Tali 2 memiliki peran penarikan massa yang berbeda.',
    questionText:
      '(a) Tentukan percepatan bersama seluruh sistem gerak ketiga benda a.\n(b) Hitung besar gaya tegangan Tali 1 (T1) dan tegangan Tali 2 (T2).\n(c) Analisislah secara mendalam mengapa nilai T2 jauh lebih besar daripada T1 berdasarkan konsep mekanika Newton!',
    ttsQuestion:
      'Soal lima belas. Sintesis dinamika multibenda tingkat lanjut. Tiga balok dihubungkan dalam satu sistem. Balok A tiga kilogram dan balok B lima kilogram berada di atas meja kasar dengan koefisien gesek kinetis nol koma lima belas, dihubungkan Tali satu. Balok B dihubungkan ke balok gantung C delapan kilogram melalui Tali dua yang melewati katrol tetap. Sistem dilepas dari diam. Tentukan percepatan sistem, hitung tegangan Tali satu dan Tali dua, serta jelaskan mengapa tegangan Tali dua jauh lebih besar daripada Tali satu!',
    physicsAnalysis: {
      guidingQuestions: [
        {
          question: 'Berapakah total gaya penggerak dan total gaya penghambat sistem?',
          answer: 'Gaya penggerak murni adalah berat balok C: W_C = 8 · 10 = 80 N. Gaya penghambat adalah gesekan kinetis balok A (fkA = 0,15 · 30 = 4,5 N) dan balok B (fkB = 0,15 · 50 = 7,5 N). Total gaya gesek = 12,0 N.'
        },
        {
          question: 'Beban apa saja yang harus ditarik oleh Tali 1?',
          answer: 'Tali 1 HANYA bertugas menarik balok A (3 kg) dan mengatasi gaya gesek balok A (fkA = 4,5 N).'
        },
        {
          question: 'Beban apa saja yang harus ditarik oleh Tali 2?',
          answer: 'Tali 2 harus menarik KEDUA balok di atas meja (A dan B, total 8 kg) serta melawan seluruh gaya gesek di meja (fkA + fkB = 12 N). Oleh karena itu T2 pasti jauh lebih besar daripada T1.'
        }
      ],
      summary: 'Tegangan tali internal pada rangkaian multibenda mencerminkan akumulasi massa inersia dan gaya hambat yang berada di belakang segmen tali tersebut.'
    },
    ttsAnalysis:
      'Ini adalah sintesis dinamika multibenda tingkat mahir. Gaya penarik total adalah berat balok C sebesar delapan puluh Newton. Hambatan total adalah gesekan balok A empat koma lima Newton ditambah gesekan balok B tujuh koma lima Newton, menghasilkan total hambatan dua belas Newton. Gaya penggerak bersihnya enam puluh delapan Newton, yang mempercepat massa total enam belas kilogram. Tali dua menegang jauh lebih kuat daripada Tali satu karena Tali dua harus menyeret balok B sekaligus balok A.',
    fbdBodies: [
      {
        id: 'balok-A',
        name: 'Balok A di Meja (m_A = 3 kg)',
        mass: 3,
        forces: [
          {
            id: 'T1',
            name: 'Tegangan Tali 1 Penarik',
            symbol: 'T_1',
            magnitude: 17.25,
            unit: 'N',
            angleDeg: 0,
            color: '#008F8C',
            description: 'Tali 1 menarik balok A ke kanan (17,25 N).'
          },
          {
            id: 'fkA',
            name: 'Gaya Gesek Kinetis Balok A',
            symbol: 'f_{kA}',
            magnitude: 4.5,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Gesekan lantai pada balok A (0,15 × 30 = 4,5 N).'
          },
          {
            id: 'NA',
            name: 'Gaya Normal Meja pada A',
            symbol: 'N_A',
            magnitude: 30,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal meja menopang balok A (30 N).'
          },
          {
            id: 'WA',
            name: 'Gaya Berat Balok A',
            symbol: 'W_A',
            magnitude: 30,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok A (30 N).'
          }
        ],
        notes: 'ΣFx = T1 - fkA = 17,25 - 4,5 = 12,75 N = m_A · a (3 × 4,25 = 12,75 N).'
      },
      {
        id: 'balok-B',
        name: 'Balok B di Meja (m_B = 5 kg)',
        mass: 5,
        forces: [
          {
            id: 'T2',
            name: 'Tegangan Tali 2 Penarik',
            symbol: 'T_2',
            magnitude: 46,
            unit: 'N',
            angleDeg: 0,
            color: '#2563EB',
            description: 'Tali 2 menarik balok B ke kanan (46,0 N).'
          },
          {
            id: 'T1_retard',
            name: 'Tegangan Tali 1 Menahan',
            symbol: 'T_1',
            magnitude: 17.25,
            unit: 'N',
            angleDeg: 180,
            color: '#008F8C',
            description: 'Tali 1 menahan balok B ke kiri (17,25 N).'
          },
          {
            id: 'fkB',
            name: 'Gaya Gesek Kinetis Balok B',
            symbol: 'f_{kB}',
            magnitude: 7.5,
            unit: 'N',
            angleDeg: 180,
            color: '#E05638',
            description: 'Gesekan meja pada balok B (0,15 × 50 = 7,5 N).'
          },
          {
            id: 'NB',
            name: 'Gaya Normal Meja pada B',
            symbol: 'N_B',
            magnitude: 50,
            unit: 'N',
            angleDeg: 90,
            color: '#10B981',
            description: 'Normal meja menopang balok B (50 N).'
          },
          {
            id: 'WB',
            name: 'Gaya Berat Balok B',
            symbol: 'W_B',
            magnitude: 50,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi pada balok B (50 N).'
          }
        ],
        notes: 'ΣFx = T2 - T1 - fkB = 46 - 17,25 - 7,5 = 21,25 N = m_B · a (5 × 4,25 = 21,25 N).'
      },
      {
        id: 'balok-C',
        name: 'Balok Gantung C (m_C = 8 kg)',
        mass: 8,
        forces: [
          {
            id: 'T2_retard',
            name: 'Tegangan Tali 2 Menahan',
            symbol: 'T_2',
            magnitude: 46,
            unit: 'N',
            angleDeg: 90,
            color: '#2563EB',
            description: 'Tali 2 menahan balok C ke atas (46,0 N).'
          },
          {
            id: 'WC',
            name: 'Gaya Berat Balok C',
            symbol: 'W_C = m_C g',
            magnitude: 80,
            unit: 'N',
            angleDeg: 270,
            color: '#6B7280',
            description: 'Gravitasi menarik balok C ke bawah (8 × 10 = 80 N).'
          }
        ],
        notes: 'ΣFy = W_C - T2 = 80 - 46 = 34 N = m_C · a (8 × 4,25 = 34 N).'
      }
    ],
    ttsFbd:
      'Perhatikan tiga FBD terpisah. Pada balok A di meja, hanya ada Tali satu sebesar tujuh belas koma dua puluh lima Newton ke kanan dilawan gesekan empat koma lima Newton. Pada balok B, ada Tali dua sebesar empat puluh enam Newton ke kanan, ditahan Tali satu tujuh belas koma dua puluh lima Newton dan gesekan tujuh koma lima Newton ke kiri. Pada balok gantung C, berat delapan puluh Newton ke bawah dilawan Tali dua empat puluh enam Newton ke atas.',
    normalSolution: {
      steps: [
        {
          stepNumber: 1,
          title: 'Hitung Gaya Normal dan Gesek Kinetis Balok A dan B',
          explanation: 'N_A = 3 × 10 = 30 N, N_B = 5 × 10 = 50 N. fkA = 0,15 × 30 = 4,5 N. fkB = 0,15 × 50 = 7,5 N.'
        },
        {
          stepNumber: 2,
          title: 'Hitung Total Gaya Gesek Penghambat di Meja',
          explanation: 'Jumlah seluruh gesekan kinetis yang melawan laju balok di atas meja.',
          mathFormula: 'f_{k,\\text{total}} = f_{kA} + f_{kB} = 4{,}5 + 7{,}5 = 12{,}0\\text{ N}'
        },
        {
          stepNumber: 3,
          title: 'Hitung Gaya Berat Balok Gantung C',
          explanation: 'Gaya penggerak eksternal utama.',
          mathFormula: 'W_C = m_C \\cdot g = 8{,}0 \\times 10 = 80{,}0\\text{ N}'
        },
        {
          stepNumber: 4,
          title: 'Susun Persamaan Gerak Masing-Masing Benda',
          explanation: 'Balok A: T1 - fkA = mA · a. Balok B: T2 - T1 - fkB = mB · a. Balok C: WC - T2 = mC · a.'
        },
        {
          stepNumber: 5,
          title: 'Jumlahkan Ketiga Persamaan untuk Menghilangkan T1 dan T2',
          explanation: 'Tegangan T1 dan T2 adalah gaya internal yang saling meniadakan secara aljabar.',
          substitution: '(T_1 - 4{,}5) + (T_2 - T_1 - 7{,}5) + (80 - T_2) = (3 + 5 + 8) a \\implies 80 - 12 = 16 a'
        },
        {
          stepNumber: 6,
          title: 'Hitung Percepatan Bersama Sistem a',
          explanation: 'Selesaikan nilai a.',
          result: 'a = \\frac{68{,}0}{16{,}0} = 4{,}25\\text{ m/s}^2'
        },
        {
          stepNumber: 7,
          title: 'Hitung Tegangan Tali 1 (T1)',
          explanation: 'Tinjau FBD Balok A.',
          substitution: 'T_1 = f_{kA} + m_A \\cdot a = 4{,}5 + 3(4{,}25) = 4{,}5 + 12{,}75 = 17{,}25\\text{ N}'
        },
        {
          stepNumber: 8,
          title: 'Hitung Tegangan Tali 2 (T2)',
          explanation: 'Tinjau FBD Balok Gantung C.',
          substitution: 'T_2 = W_C - m_C \\cdot a = 80 - 8(4{,}25) = 80 - 34{,}0 = 46{,}0\\text{ N}'
        },
        {
          stepNumber: 9,
          title: 'Verifikasi Keseimbangan Dinamis pada Balok B',
          explanation: 'Gaya netto horizontal pada balok B: T2 - T1 - fkB = 46,0 - 17,25 - 7,5 = 21,25 N.',
          consistencyCheck: 'm_B \\cdot a = 5{,}0 \\times 4{,}25 = 21{,}25\\text{ N} \\quad (\\text{Cocok Sempurna!})'
        },
        {
          stepNumber: 10,
          title: 'Analisis Mengapa T2 > T1',
          explanation: 'T2 (46,0 N) lebih dari 2,6 kali lebih besar dari T1 (17,25 N) karena T2 harus mempercepat dua balok sekaligus (mA + mB = 8 kg) dan melawan dua gaya gesek (12 N), sedangkan T1 hanya mempercepat satu balok (3 kg) dan melawan satu gaya gesek (4,5 N).',
          consistencyCheck: 'T_2 = 46{,}0\\text{ N} > T_1 = 17{,}25\\text{ N} \\quad (\\text{Konsisten Fisika})'
        }
      ],
      finalAnswer: 'a = 4,25 m/s²; T1 = 17,25 N; T2 = 46,0 N',
      consistencyCheck: 'Konsistensi gaya internal dan eksternal terbukti pada ketiga benda.'
    },
    ttsNormalSolution:
      'Langkah pembahasan normal. Pertama, gaya penggerak netto sistem adalah berat balok C delapan puluh Newton dikurangi gesekan balok A empat koma lima Newton dan gesekan balok B tujuh koma lima Newton, menghasilkan gaya bersih enam puluh delapan Newton. Kedua, bagi enam puluh delapan Newton dengan total massa enam belas kilogram, diperoleh percepatan empat koma dua puluh lima meter per sekon kuadrat. Ketiga, tegangan Tali satu dihitung dari balok A: empat koma lima ditambah tiga kali empat koma dua puluh lima sama dengan tujuh belas koma dua puluh lima Newton. Keempat, tegangan Tali dua dihitung dari balok C: delapan puluh dikurang delapan kali empat koma dua puluh lima sama dengan empat puluh enam Newton. Tali dua jauh lebih besar karena harus menarik balok B dan balok A sekaligus.',
    fastSolution: {
      concept: 'Hukum II Newton Sistem Global & Akumulasi Inersia Tali',
      reasoning: 'a = (Gaya Penggerak Luar - Gaya Hambat Luar) / Massa Total. Lalu T1 = m_seret1 · a + fk_seret1, T2 = m_seret2 · a + fk_seret2.',
      mathFormula: 'a = \\frac{80 - (4{,}5 + 7{,}5)}{3 + 5 + 8} = \\frac{68}{16} = 4{,}25\\text{ m/s}^2',
      steps: [
        'Percepatan sistem langsung: a = (80 - 12) / 16 = 4,25 m/s².',
        'Tali 1 (menyeret A): T1 = 3(4,25) + 4,5 = 17,25 N.',
        'Tali 2 (menyeret A+B): T2 = (3+5)(4,25) + 12 = 34 + 12 = 46,0 N.'
      ],
      finalAnswer: 'a = 4,25 m/s²; T1 = 17,25 N; T2 = 46,0 N'
    },
    ttsFastSolution:
      'Cara cepat Mister Jo. Ambil gaya penarik delapan puluh Newton, kurangi total gesekan dua belas Newton, dapat enam puluh delapan Newton. Bagi dengan massa total enam belas kilogram, seketika dapat empat koma dua puluh lima meter per sekon kuadrat! Untuk Tali satu, kalikan massa balok A tiga kilogram dengan percepatan lalu tambah gesekannya: dapat tujuh belas koma dua puluh lima Newton. Untuk Tali dua, kalikan massa total delapan kilogram di meja dengan percepatan lalu tambah total gesekan: langsung dapat empat puluh enam Newton!',
    simulation: {
      type: 'three_bodies_pulley',
      state: 'BERGERAK',
      acceleration: 4.25,
      initialVelocity: 0,
      duration: 1.2,
      displacement: 3.06,
      directionDescription: 'Balok A dan B meluncur di meja dengan a = 4,25 m/s², Balok C meluncur turun',
      extraValues: { mA: '3 kg', mB: '5 kg', mC: '8 kg', a: '4,25 m/s²', T1: '17,25 N', T2: '46,0 N' },
      misterJoComment:
        'Simulasi membuktikan: Rangkaian 3 balok meluncur serentak dengan percepatan 4,25 m/s². Tali 1 menegang 17,25 N dan Tali 2 menegang kokoh 46,0 N tanpa kendor!'
    },
    misterJoTakeaway:
      'Pada sistem multibenda, tegangan tali terus meningkat semakin dekat posisinya ke sumber gaya penggerak utama, karena tali tersebut harus memikul akumulasi beban massa dan gesekan di belakangnya.'
  }
];
