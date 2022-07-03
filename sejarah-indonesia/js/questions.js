// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Kata Indonesia berasal dari bahasa Yunani, yaitu Indos dan nesos. Apakah arti dua kata tersebut berikut maknanya secara keseluruhan berdasarkan asal katanya?",
    answer: "Indos berarti India dan nesos berarti pulau, sehingga Indonesia bermakna kepulauan yang berada di wilayah India",
    options: [
      "Indos berarti India dan nesos berarti pulau, sehingga Indonesia bermakna kepulauan yang berada di wilayah India",
      "Indos berarti khatulistiwa dan nesos berarti pulau, sehingga Indonesia bermakna kepulauan yang berada di wilayah khatulistiwa",
      "Indos berarti pulau dan nesos berarti khatulistiwa, sehingga Indonesia bermakna kepulauan yang berada di wilayah khatulistiwa",
      "Indos berarti India dan nesos berarti wilayah yang dekat, sehingga Indonesia bermakna wilayah yang berdekatan dengan India",
      "Indos berarti timur dan nesos berarti pulau sehingga Indonesia bermakna kepulauan yang berada di wilayah timur"
    ]
  },

    {
    numb: 2,
    question: "Kalimat Bhinneka Tunggal Ika berasal dari kalimat yang terdapat di dalam sebuah kitab tulisan pujangga Indonesia masa lalu. Apa nama kitab tersebut dan siapakah pengarangnya?",
    answer: "Kitab Sutasoma karangan Mpu Tantular",
    options: [
      "Kitab Sutasoma karangan Mpu Kanwa",
      "Kitab Bharatayuddha karangan Mpu Sedah",
      "Kitab Sutasoma karangan Mpu Tantular",
      "Kitab Sutasoma karangan Mpu Tantular",
      "Kitab Negarakertagama karangan Mpu Prapanca"
    ]
  },

    {
    numb: 3,
    question: "Kerajaan Islam pertama di Indonesia (Nusantara) adalah) ...",
    answer: "Samudra Pasai",
    options: [
      "Samudra Pasai",
      "Demak",
      "Ternate",
      "Tidore",
      "Gowa-Tallo"
    ]
  },

    {
    numb: 4,
    question: "Siapakah pemimpin armada Belanda yang datang pertama kali ke Indonesia pada tahun 1596?",
    answer: "Cornellis de Houtman",
    options: [
      "Wybrand Van Wawyk",
      "Jacob Van Heemskerck",
      "Jan Pieterszoon Coen",
      "Conrad Theodore van Deventer",
      "Cornellis de Houtman"
    ]
  },

    {
    numb: 5,
    question: "Pada tahun 1906 Raden Mas Tirtoadisuryo mendirikan sebuah organisasi yang bertujuan memperjuangkan agar anakanak Jawa bisa mendapatkan pendidikan Barat (Belanda). Apakah nama organisasi tersebut?",
    answer: "Sarekat Priyayi",
    options: [
      "Budi Utomo",
      "Sarekat Priyayi",
      "Pewarta Priyayi",
      "Suria Sumirat",
      "Mardiwara"
    ]
  },

  {
    numb: 6,
    question: "Pada tanggal 18 September 1948 di Madiun para tokoh Partai Komunis Indonesia (PKI) memproklamirkan berdirinya Republik Soviet Indonesia. Pemimpin pemberontakan tersebut yang akhirnya tertembak mati adalah ...",
    answer: "Muso",
    options: [
      "Hendricus Sneevlie",
      "Semaun",
      "Muso",
      "Alimin",
      "Dipa Nusantara Aidi"
    ]
  },

  {
    numb: 7,
    question: " Siapakah tokoh Indonesia yang dikenal sebagai perumus demokrasi ekonomi yang tercantum dalam pasal 33 Undang- Undang Dasar 1945?",
    answer: "Drs. Mohammad Hatta",
    options: [
      "Dr. Samsi",
      "Mr. A.A. Maramis",
      "Sutan Syahrir",
      "Mr. Syafruddin Prawiranegara",
      "Drs. Mohammad Hatta"
    ]
  },

  {
    numb: 8,
    question: "Penggagas Serangan Umum ke kota Yogyakarta yang ketika itu tengah diduduki Belanda adalah ...",
    answer: "Sri Sultan Hamengku Buwono IX",
    options: [
      "Sri Sultan Hamengku Buwono IX",
      "Letnan Kolonel Soeharto",
      "Letnan Jenderal Urip Sumoharjo",
      "Kolonel Gatot Soebroto",
      "Panglima Besar Jenderal Sudirman"
    ]
  },

  {
    numb: 9,
    question: "Taktik perang gerilya (wehkreise) yang diterapkan Tentara Republik Indonesia ternyata sangat merepotkan pasukan Belanda untuk menghadapinya. Salah satu ciri perang gerilya yang diterapkan Tentara Republik Indonesia adalah",
    answer: "menghindari perang secara terbuka",
    options: [
      "Melakukan penyerbuan langsung jika kekuatan musuh dinilai lemah",
      "Menyerang musuh dari tempat tersembunyi",
      "Menghindari perang secara terbuka",
      "Menghindari perang di kota-kota",
      "Melakukan strategi bumi hangus agar fasilitas dan sarana vital yang tersedia tidak dikuasai musuh"
    ]
  },

  {
    numb: 10,
    question: "Kemenangan bersejarah Tentara Keamanan Rakyat (TKR) atas pasukan Sekutu di Ambarawa kemudian diperingati sebagai Hari Infanteri, yang diperingati setiap tanggal ...",
    answer: "15 Desember",
    options: [
      "12 Desember",
      "13 Desember",
      "14 Desember",
      "15 Desember",
      "16 Desember"
    ]
  },

  {
    numb: 11,
    question: "Naskah proklamasi kemerdekaan Indonesia ditulis tangan oleh Ir. Sukarno. Siapakah yang mengetik teks naskah proklamasi tersebut setelah mendapat persetujuan perihal isi dan siapa yang akan menandatanganinya?",
    answer: "Sayuti Melik",
    options: [
      "Mr. Ahmad Subarjo",
      "B.M. Diah",
      "Sayuti Melik",
      "Sukarni",
      "Sudiro"
    ]
  },

  {
    numb: 12,
    question: "Pada tahun 1944 Pemerintah Pendudukan Jepang membentuk Provinsi Sunda Kecil (Syosundashu) dengan ibukota provinsi di ...",
    answer: "Singaraja, Bali",
    options: [
      "Bandung, Jawa Barat",
      "Batavia",
      "Tasikmalaya, Jawa Barat",
      "Singaraja, Bali",
      "Surabaya, Jawa Timur"
    ]
  },

  {
    numb: 13,
    question: "Spanyol adalah negara yang berusaha menjajah berbagai wilayah. Penyebab Spanyol tidak bertahan lama di Nusantara adalah ...",
    answer: "Memiliki konflik persaingan dengan Portugis",
    options: [
      "Memiliki konflik persaingan dengan Portugis",
      "13 DesemberTidak ada kerajaan yang mendukung Spanyol",
      "Spanyol tidak dapat bekerja sama dengan kerajaan di Maluku",
      "Spanyol tidak mempunyai motif apapun saat datang ke Nusantara",
      "Karakter Spanyol yang kasar, jadi tidak disukai"
    ]
  },

  {
    numb: 14,
    question: "Menurut teori Waisya, masuknya kebudayaan Hindu ke Indonesia dibawa oleh ...",
    answer: "Pedagang",
    options: [
      "Biksu",
      "Prajurit",
      "Pedagang",
      "Petani",
      "Pekerja"
    ]
  },

  {
    numb: 15,
    question: "Tujuan utama pemerintah Jepang membentuk PETA adalah ....",
    answer: "Sebagai cadangan pasukan militer untuk melawan Sekutu",
    options: [
      "Memberi bekal pengetahuan militer kepada pemuda-pemudi Indonesia",
      "Sebagai cadangan pasukan militer untuk melawan Sekutu",
      "Melatih keterampilan bagi pemuda-pemudi Indonesia",
      "Sebagai wujud kepedulian Jepang terhadap masa depan Indonesia",
      "Mempersiapkan rencana pemberian kemerdekaan"
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