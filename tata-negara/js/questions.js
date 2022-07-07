// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Salah satu sistem pemerintahan negara Indonesia menurut Undang-Undang Dasar 1945 adalah ...",
    answer: "Negara berdasarkan sistem konstitusi",
    options: [
      "Negara berdasarkan kekuasaan",
      "Negara berdasarkan sistem absolutisme",
      "Negara berdasarkan sistem absolutisme",
      " Negara berdasarkan ketuhanan",
      "Negara berdasarkan sistem konstitusi"
    ]
  },

    {
    numb: 2,
    question: "Lembaga Yudikatif sejak masa reformasi dan adanya amandemen Undang-Undang Dasar 1945 dijalankan oleh ...",
    answer: "Mahkamah Agung",
    options: [
      "Mahkamah Agung",
      "Mahkamah Konstitusi",
      "Dewan Perwakilan Rakyat (DPR)",
      "Majelis Permusyawaratan Rakyat (MPR)",
      "Dewan Pertimbangan Agung (DPA)"
    ]
  },

    {
    numb: 3,
    question: "Komisi III Dewan Perwakilan Rakyat (DPR) membawahi bidang ...",
    answer: "hukum, HAM, dan keamanan",
    options: [
      "pertanian dan pangan",
      "transportasi dan infrastruktur",
      "industri dan perdagangan",
      "hukum, HAM, dan keamanan",
      "kependudukan dan kesejahteraan"
    ]
  },

    {
    numb: 4,
    question: "Anggota Komisi Yudisial diangkat dan diberhentikan oleh ...",
    answer: "Cornellis de HoutmanPresiden dengan persetujuan Dewan Perwakilan Rakyat",
    options: [
      "Presiden dengan persetujuan Dewan Perwakilan Rakyat",
      "Presiden dengan persetujuan Majelis Permusyawaratan Rakyat",
      "Mahkamah Konstitusi",
      "Mahkamah Agung",
      "Jaksa Agung"
    ]
  },

    {
    numb: 5,
    question: "Pemegang kekuasan untuk membentuk undang-undang di Indonesia adalah ...",
    answer: "Dewan Perwakilan Rakyat (DPR)",
    options: [
      "Majelis Permusyawaratan Rakyat (MPR)",
      "Mahkamah Agung",
      "Mahkamah Konstitusi",
      "Dewan Perwakilan Rakyat (DPR)",
      "Komisi Yudisial"
    ]
  },

  {
    numb: 6,
    question: "Hukum perdata adalah ...",
    answer: "hukum yang mengatur hak, harta benda, dan hubungan antara orang dan orang dalam satu negara",
    options: [
      "hukum yang mengatur hubungan hukum negara dengan orang, antara negara dan bagian-bagiannya, antara negara yang satu dengan negara lainnya",
      "hukum yang menentukan peristiwa atau perbuatan kriminal",
      "hukum yang mengatur antara negara dengan perorangan",
      "hukum yang menentukan keadaan atau kedudukan serta hak dan kewajiban pribadi",
      "hukum yang mengatur hak, harta benda, dan hubungan antara orang dan orang dalam satu negara"
    ]
  },

  {
    numb: 7,
    question: "Bangsa Indonesia memandang untuk melakukan kerja sama dengan bangsa lain di dunia ini karena ...",
    answer: "Bangsa Indonesia merupakan bagian dari masyarakat internasional",
    options: [
      "Bangsa Indonesia membutuhkan pengakuan internasional perihal keberadaannya",
      "Bangsa Indonesia membutuhkan ilmu pengetahuan dan teknologi yang belum dikuasainya",
      "Bangsa Indonesia membutuhkan dukungan bangsa-bangsa lain jika terlibat konflik",
      "Bangsa Indonesia membutuhkan pinjaman internasional untuk melanjutkan pembangunan",
      "Bangsa Indonesia merupakan bagian dari masyarakat internasional"
    ]
  },

  {
    numb: 8,
    question: "Pemerintahan daerah provinsi, daerah kabupaten, dan kota mengatur dan mengurus sendiri urusan pemerintahan menurut asas ... dan tugas pembantuan.",
    answer: "Otonomi",
    options: [
      "Dikotomi",
      "Hegemoni",
      "Ekonomi",
      "Otonomi",
      "Musyawarah mufakat"
    ]
  },

  {
    numb: 9,
    question: "Menurut Pasal 17 Peraturan Pemerintah Republik Indonesia Nomor 9 Tahun 2003, pemindahan Pegawai Negeri Sipil Daerah antar-Kabupaten/Kota dalam suatu provinsi ditetapkan oleh ...",
    answer: "Pejabat Pembina Kepegawaian Daerah Provinsi",
    options: [
      "Presiden",
      "Gubernur",
      "Pejabat Pembina Kepegawaian Daerah Provinsi",
      "Kepala Badan Kepegawaian Negara",
      "Sekretaris Daerah Kabupaten/Kota"
    ]
  },

  {
    numb: 10,
    question: "Tugas Komisi D Majelis Permusyawaratan Rakyat adalah membahas ...",
    answer: "Pertanggungjawaban Presiden",
    options: [
      "Garis-Garis Besar Haluan Negara (GBHN)",
      "Non-GBHN",
      "Pertanggungjawaban Presiden",
      "Amandemen Undang-Undang Dasar",
      "Perubahan Undang-Undang"
    ]
  },

  {
    numb: 11,
    question: "Lembaga Negara nondepartemen kelengkapan Pemerintah Republik Indonesia adalah sebagai berikut, kecuali ...",
    answer: "Lembaga Pertahanan Nasional",
    options: [
      "Lembaga Pertahanan Nasional",
      "Lembaga Ilmu Pengetahuan Indonesia",
      "Lembaga Administrasi Negara",
      "Lembaga Sandi Nasional",
      "Lembaga Penerbangan dan Antariksa Nasional"
    ]
  },

  {
    numb: 12,
    question: "Kampanye Pemilihan Umum kerap disebut dengan pesta demokrasi. Peserta pemilu akan berusaha mencari pendukung sebanyak-banyaknya melalui cara ...",
    answer: "Menyampaikan program-program yang akan dilaksanakan",
    options: [
      "Memberikan janji-janji yang membius",
      "Mengerahkan massa melalui pawai keliling",
      "Menyampaikan program-program yang akan dilaksanakan",
      "Memberikan hiburan dengan mendatangkan pesohor-pesohor terkenal",
      "Memberikan siraman rohani"
    ]
  },

  {
    numb: 13,
    question: "Selain bertugas untuk memajukan perkembangan yang sehat dari urusan kredit dan perbankan, tugas bank sentral yang penting lainnya adalah ...",
    answer: "Mencetak dan mengedarkan uang kertas dan logam sebagai alat pembayaran yang sah",
    options: [
      "Mencetak dan mengedarkan perangko dan materai",
      "Mengawasi kegiatan ekonomi di dalam maupun luar negeri",
      "Mendorong kegiatan ekspor untuk mendatangkan devisa",
      "Mendorong kian bergulirnya kegiatan ekonomi",
      "Mencetak dan mengedarkan uang kertas dan logam sebagai alat pembayaran yang sah"
    ]
  },

  {
    numb: 14,
    question: "Asas-asas pemilihan umum adalah ...",
    answer: "Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil",
    options: [
      "Langsung, Umum, Bebas, Rahasia",
      "Jujur, dan Adil",
      "Rahasia",
      "Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil",
      "Bebas"
    ]
  },

  {
    numb: 15,
    question: "Hubungan kerja antara Komisi Pemilihan Umum (KPU) dengan Panitia Pengawas Pemilihan Umum (Panwaslu) adalah ...",
    answer: "KPU adalah penyelenggara pemilihan umum dan Panwaslu adalah pengawas proses pemilihan umum",
    options: [
      "KPU adalah pengawas proses pemilihan umum dan Panwaslu adalah penyelenggara pemilihan umum",
      "KPU dan Panwaslu adalah penyelenggara pemilihan umum",
      "KPU dan Panwaslu adalah penyelenggara sekaligus pengawas proses pemilihan umum",
      "KPU dan Panwaslu adalah pelaksana sekaligus penanggung jawab proses pemilihan umum agar dapat berlangsung sesuai asas-asas pemilihan umum",
      "KPU adalah penyelenggara pemilihan umum dan Panwaslu adalah pengawas proses pemilihan umum"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];