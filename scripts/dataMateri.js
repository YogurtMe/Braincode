let dataMateri = [
  {
    "type": "first"
  },
  {
    "type": "JS",
    "id": "js-mat-1",
    'isVisited': 0,
    "header": {
      "title": "Sejarah dan pengertian",
      "subTitle": "Pelajari bagaimana javascript dapat terbentuk"
    },
    "content": [
      {
        "type": "t",
        "content": "Siapa Penemu Javascript?"
      },
      {
        "type": "p",
        "content": "Javascript pertama kali dibuat tahun 1995 oleh pak Brendan Eich, seorang pekerja di netscape communications."
      },
      {
        "type": "t",
        "content": "Apa Tujuan Dibuatnya Javascript?"
      },
      {
        "type": "p",
        "content": "Tujuan utama dibutnya Javascript oleh pak Brendan adalah untuk membuat website yang lebih interaktif."
      },
      {
        "type": "p",
        "content": "Saat itu orang orang mulai bosen sama tampilan website yang cuman bisa nampilin gambar dan teks statis aja, akhirnya pak Brendan pun diminta untuk buat"
      },
      {
        "type": "t",
        "content": "Apa Itu Javascript ?"
      },
      {
        "type": "p",
        "content": "Javascript itu adalah bahasa pemrograman tingkat tinggi dan dinamis yang bisa berjalan di browser, seperti Google Chrome, Internet Explorer, Mozilla Firefox dan lain lain."
      },
      {
        "type": "p",
        "content": "Di dalam browser, Javascript berjalan sebagai bagian dari website, disana Javascript bertugas sebagai otak, dia bisa melakukan operasi matematika seperti penjumlahan pengurangan perkalian dan pembagian, dia juga bisa melakukan operasi logika, seperti bandingin dua nilai, ngecek nilai yang lebih kecil atau lebih besar, dan banyak hal keren lain yang bisa dilakukan sama Javascript."
      }
    ]
  },
  {
    "type": "JS",
    "id": "js-mat-2",
    'isVisited': 0,
    "header": {
      "title": "Meletakkan Skrip Javascript",
      "subTitle": "Pelajari berbagai cara meletakkan Skrip Javascript"
    },
    "content": [
      {
        "type": "t",
        "content": "Peletakn Skrip Javascript"
      },
      {
        "type": "p",
        "content": "skrip Javascript bisa diletakkan di dalam file html (internal), maupun diluar file html (eksternal)"
      },
      {
        "type": "t",
        "content": "Skrip Internal"
      },
      {
        "type": "p",
        "content": "Peletakan skrip secara internal ini dilakuin dengan menggunakan tag &lt;script&gt; di html, didalam tag &lt;script&gt; ini kamu bisa nulis Javascript."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "&lt;!DOCTYPE HTML&gt;",
          "&lt;html&gt;",
          "  &lt;head&gt;",
          "    &lt;title&gt;internal Javascript&lt;/title&gt;",
          "  &lt;head&gt;",
          "  &lt;body&gt;",
          "    &lt;script&gt;",
          "      document.write(\"ini Javascript internal\");",
          "    &lt;/script&gt;",
          "  &lt;body&gt;",
          "&lt;html&gt;"
        ]
      },
      {
        "type": "t",
        "content": "Skrip Eksternal"
      },
      {
        "type": "p",
        "content": "Cara peletakan Javascript secara eksternal sebenernya mirip kayak peletakan Javascript secara internal, tapi kalau skrip internal tadi kita langsung nulis di dalam tag &lt;script&gt;, kali ini kita bakal ngehubungin tag &lt;script&gt; ini ke file javascript di luar file html."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "&lt;!DOCTYPE HTML&gt;",
          "&lt;html&gt;",
          "  &lt;head&gt;",
          "    &lt;title&gt;eksternal Javascript&lt;/title&gt;",
          "  &lt;head&gt;",
          "  &lt;body&gt;",
          "    &lt;script src=\"File_javascript.js\"&gt;&lt;/script&gt;",
          "  &lt;body&gt;",
          "&lt;html&gt;"
        ]
      },
      {
        "type": "p",
        "content": "Pada tag &lt;script&gt; ditambahkan properti src=\"\" sebagai pengambil source atau sumber Javascript, isinya merupakan nama dari file js yang mau dijadikan source atau sumber Javascript."
      },
      {
        "type": "p",
        "content": "Setelah dihubungkan satu sama lain, di dalam file javascript sudah bisa dijalankan, sebagai contoh."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "document.write(\"ini Javascript eksternal\");"
        ]
      }
    ]
  },
  {
    "type": "JS",
    "id": "js-mat-3",
    'isVisited': 0,
    "header": {
      "title": "Menampilkan Output",
      "subTitle": "Pelajari berbagai cara menampilkan output program pada javascript"
    },
    "content": [
      {
        "type": "p",
        "content": "Ada beberapa cara yang bisa kamu pilih buat nampilin hasil dari program Javascript kamu, diantaranya adalah:"
      },
      {
        "type": "t",
        "content": "alert();"
      },
      {
        "type": "p",
        "content": "Kalau kamu pakai cara ini, hasil program kamu bakal ditampilin sebagai popup yang muncul pas website dijalanin."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "&lt;!DOCTYPE HTML&gt;",
          "&lt;html&gt;",
          "  &lt;head&gt;",
          "    &lt;title&gt;output alert Javascript&lt;/title&gt;",
          "  &lt;head&gt;",
          "  &lt;body&gt;",
          "    &lt;script&gt;",
          "      alert(\"ini hasil program kamu\");",
          "    &lt;/script&gt;",
          "  &lt;body&gt;",
          "&lt;html&gt;"
        ]
      },
      {
        "type": "t",
        "content": "document.write();"
      },
      {
        "type": "p",
        "content": "Mungkin kamu udah liat code ini di contoh contoh kode sebelumnya, kedepannya juga kamu bakal sering lihat kode ini sebagai contoh kode karena ini cara paling simple untuk nampilin hasil dari program Javascript kamu karena hasil dari program kamu bakal langsung muncul di halaman website saat dijalankan."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "&lt;!DOCTYPE HTML&gt;",
          "&lt;html&gt;",
          "  &lt;head&gt;",
          "    &lt;title&gt;output write Javascript&lt;/title&gt;",
          "  &lt;head&gt;",
          "  &lt;body&gt;",
          "    &lt;script&gt;",
          "      document.write(\"ini hasil program kamu\");",
          "    &lt;/script&gt;",
          "  &lt;body&gt;",
          "&lt;html&gt;"
        ]
      },
      {
        "type": "t",
        "content": "console.log();"
      },
      {
        "type": "p",
        "content": "Ini juga salah satu cara paling umum untuk nampilin hasil program Javascript kamu tanpa mengganggu tampilan website seperti document.write(), dengan cara ini hasil program kamu bakal tampil di console."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "&lt;!DOCTYPE HTML&gt;",
          "&lt;html&gt;",
          "  &lt;head&gt;",
          "    &lt;title&gt;output console.log Javascript&lt;/title&gt;",
          "  &lt;head&gt;",
          "  &lt;body&gt;",
          "    &lt;script&gt;",
          "      console.log(\"ini hasil program kamu\");",
          "    &lt;/script&gt;",
          "  &lt;body&gt;",
          "&lt;html&gt;"
        ]
      }
    ]
  },
{
    "type": "JS",
    "id": "js-mat-4",
    'isVisited': 0,
    "header": {
      "title": "Variabel",
      "subTitle": "Pelajari apa itu variabel di Javascript"
    },
    "content": [
      {
        "type": "p",
        "content": "Variabel adalah semacam penyimpanan data di Javascript, variabel ini bisa berisi teks (string), angka (integer) dan berbagai nilai lainnya, variabel punya nama, untuk mudahin kamu mengakses data dari variabel tersebut."
      },
      {
        "type": "t",
        "content": "Penulisan Variabel"
      },
      {
        "type": "p",
        "content": "Variabel dideklarasikan dengan var, contohnya sebagai berikut."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "var text = \"contoh variabel\""
        ]
      },
      {
        "type": "p",
        "content": "Di contoh tersebut kita membuat sebuah variabel dengan nama text dan berisi kata \"contoh variabel\", var sebagai deklarasi pembuatan variabel, text sebagai nama variabel dan \"contoh variabel\" sebagai isi variabel."
      },
      {
        "type": "p",
        "content": "Variabel ini bisa ditampilkan sebagai hasil dengan cara menuliskan nama variabel di dalam fungsi yng bisa menampilkan output (alert, document.write, console.log), sebagai contoh, dibawah ini contoh menampilkan variabel dengan document.write."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "&lt;!DOCTYPE HTML&gt;",
          "&lt;html&gt;",
          "  &lt;head&gt;",
          "    &lt;title&gt;menampilkan variabel&lt;/title&gt;",
          "  &lt;head&gt;",
          "  &lt;body&gt;",
          "    &lt;script&gt;",
          "      var text = \"ini variabel text\";",
          "      document.write(text);",
          "    &lt;/script&gt;",
          "  &lt;body&gt;",
          "&lt;html&gt;"
        ]
      }
    ]
  },
  {
    "type": "JS",
    "id": "js-mat-5",
    'isVisited': 0,
    "header": {
      "title": "Tipe Data",
      "subTitle": "Pelajari berbagai tipe data dasar di Javascript"
    },
    "content": [
      {
        "type": "t",
        "content": "Apa Itu Tipe Data"
      },
      {
        "type": "p",
        "content": "Tipe data adalah berbagai jenis data yang bisa ditampung oleh variabel, tipe data di Javascript itu ada banyak banget, tapi ada 4 tipe data yang harus diketahui oleh pemula, yaitu string, integer, undefined dan null, berikut penjelasannya:"
      },
      {
        "type": "t",
        "content": "Tipe Data String"
      },
      {
        "type": "p",
        "content": "Tipe data string adalah tie data yang isinya adalah string atau teks, penulisannya adalah dengan menggunakan tanda kutip, bisa kutip satu ( ' ) ataupun kutip ganda ( \" ). berikut contohnya."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "var stringA = \"hello\";",
          "var stringB = 'world';"
        ]
      },
      {
        "type": "t",
        "content": "Tipe Data Number"
      },
      {
        "type": "p",
        "content": "Sesuai namanya ini pastinya tipe data yang isinya berupa angka bulat maupun desimal, untuk desimal, tanda ( , ) diganti dengan ( . ),  berikut contohnya."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "var numberA = 12;",
          "var numberB = 2.4;"
        ]
      },
      {
        "type": "t",
        "content": "Tipe Data Undefined Dan Null"
      },
      {
        "type": "p",
        "content": "Sebenarnya kedua tipe data ini mengartikan bahwa sebuah variabel itu tidak diberi nilai atau variabel tidak ada, pemula perlu tahu tipe data ini karena kalau sewaktu waktu hasil kode kamu menghasilkan dua tipe data ini berarti ada kesalahan di kode kamu khususnya di variabelnya."
      }
    ]
  },
  {
    "type": "JS",
    "id": "js-mat-6",
    'isVisited': 0,
    "header": {
      "title": "Operator Aritmatika Dan Perbandingan",
      "subTitle": "Pelajari apa itu operator dalam javascript"
    },
    "content": [
      {
        "type": "t",
        "content": "Operator Aritmatika"
      },
      {
        "type": "p",
        "content": "Operator aritmatika adalah operator yng digunain buat ngelakuin perhitungan matematika seperti penjumlahan pengurangan perkalian dan pembagian, dalam Javascript operasi operasi matematika tersebut dituliskan dengan simbol sebagai berikut:\n- penjumlahan, ditulis dengan simbol ( + )\n- pengurangan, ditulis dengan simbol ( - )\n- perkalian, ditulis dengan simbol ( * )\n- pembagian, ditulis dengan simbol ( / )"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "// penjumlahan menghasilkan 10",
          "var penjumlahan = 4 + 6;",
          "",
          "// pengurangan menghasilkan 4",
          "var pengurangan = 10 - 6;",
          "",
          "// perkalian menghasilkan 6",
          "var perkalian = 2 * 3;",
          "",
          "// pembagian menghasilkan 4",
          "var pembagian = 8 / 2;"
        ]
      },
      {
        "type": "t",
        "content": "Operator Perbandingan"
      },
      {
        "type": "p",
        "content": "Sama kayak namanya, operator perbandingan digunain untuk membandingkan dua variabel atau data, misal lebih kecil, lebih besar, sama dengan atau bukan sama dengan, perbandingan akan menghasilkan true jika benar dan false jika salah, operator ini didalam Javascript ditulis sebagai berikut:\n- ( a &gt; b ), berarti a lebih besar dari b\n- ( a &lt; b ), berarti a lebih kecil dari b\n- ( a &gt;= b ), berarti a lebih besar atau sama dengan b\n- ( a &lt;= ), berarti a lebih kecil atau sama dengan b\n- ( a == b ), berarti a sama dengan b\n- ( a != ), berarti a bukan sama dengan b"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "// Perbandingan menghasilkan true",
          "var lebihDari = 1 &gt; 0;",
          "var kurangDari = 2 &lt; 10;",
          "",
          "// Perbandingan menghasilkan false",
          "// Dibaca 3 bukan sama dengan 6 dibagi 2",
          "var bukanSamaDengan = 3 != (6/2);",
          "",
          "// Dibaca 4 sama dengan 5 dikali 2",
          "var samaDengan = 4 == (5*2);"
        ]
      }
    ]
  },
{
  "type": "JS",
  "id": "js-mat-7",
  'isVisited': 0,
  "header": {
    "title": "Percabangan If",
    "subTitle": "Pelajari percabangan if di Javascript"
  },
  "content": [
    {
      "type": "p",
      "content": "Sama kayak namanya, if adalah jika, if digunakan untuk mengeksekusi sebuah baris kode hanya jika sebuah kondisi tertentu terpenuhi, misal jika variabel a lebih kecil dari 0 maka program nampilin tulisan \"nilai a adalah minus atau kurang dari 0\" ke layar."
    },
    {
      "type": "p",
      "content": "Penulisan if di Javascript adalah sebagai berikut:"
    },
    {
      "type": "c",
      'title': 'Contoh',
      "content": [
      'if( kondisi ){',
      '    Kode jalan jika kondisi terpenuhi',
      '}'
      ]
    },
    {
      "type": "p",
      "content": "Kondisi ada if diisi pake operator perbandingan yang sudah dipelajari sebelumnya, misal perbandingan a &lt; b, jika dimasukkan ke if, maka program di dalam if hanya dijalankan jika a lebih kecil dari b, begitu juga dengan perbandingan lainnya."
    },
    {
      "type": "c",
      'title': 'Contoh',
      "content": [
      'var x = -10;',
      'if( x &lt; 0 ){',
      '    // jalan jika x kurang dari 0',
      '    document.write("x lebih kecil dari 0");',
      '}'
      ]
    }
  ]
},
{
  "type": "JS",
  "id": "js-mat-8",
  'isVisited': 0,
  "header": {
    "title": "Percabangan If Else",
    "subTitle": "Pelajari percabangan if else di Javascript"
  },
  "content": [
    {
      "type": "p",
      "content": "Percabangan ini sebenarnya sama aja dengan percabangan if, tapi disini kita nambahin else untuk menjalankan kode jika kondisi dari if tidak terpenuhi, contohnya seperti, jika A lebih kecil dari B maka lakukan perintah C, selain dari itu lakukan perintah D."
    },
    {
      "type": "p",
      "content": "Penulisan if else di Javascript adalah sebagai berikut:"
    },
    {
      "type": "c",
      'title': 'Contoh',
      "content": [
      'if ( kondisi ){',
      '    Kode jalan jika kondisi terpenuhi',
      '}else{',
      '    Kode jalan jika kondisi tidak terpenuhi',
      '}'
      ]
    },
    {
      "type": "p",
      "content": "Berikut contoh penggunaan if else di Javascript:"
    },
    {
      "type": "c",
      'title': 'Contoh',
      "content": [
      'var x = 10;',
      'if ( x &gt; 0 ){',
      '    // jalan jika x lebih dari 0',
      '    document.write("x diatas 0");',
      '}else{',
      '    // jalan jika x kurang dari 0',
      '    document.write("x dibawah 0");',
      '}'
      ]
    }
  ]
},
{
  "type": "JS",
  "id": "js-mat-9",
  'isVisited': 0,
  "header": {
    "title": "Perulangan",
    "subTitle": "Pelajari berbagai perulangan di javascript"
  },
  "content": [
    {
      "type": "p",
      "content": "Perulangan atau nama kerennya looping itu adalah program yang mengulang baris kode tertentu sampai suatu kondisi terpenuhi, atau selama suatu kondisi tertentu."
    },
    {
      "type": "t",
      "content": "Perulangan While"
    },
    {
      "type": "p",
      "content": "While bisa diartikan jadi selama, maka perulangan while adalah program yang mengulang baris kode tertentu selama sebuah kondisi tertentu terpenuhi, kondisi disini bisa berupa operator perbandingan."
    },
    {
      "type": "p",
      "content": "Penulisan perulangan while adalah sebagai berikut:"
    },
    {
      "type": "c",
      'title': 'Contoh',
      "content": [
      'while( kondisi ){',
      '    // Jalan selama kondisi bernilai true',
      '    Kode',
      '}'
      ]
    },
    {
      "type": "p",
      "content": "Berikut contoh penggunaan perulangan while:"
    },
    {
      "type": "c",
      'title': 'Contoh',
      "content": [
      'let x = 0;',
      'while( x &lt; 100 ){',
      '    // Jalan selama x kurang dari 100',
      '    document.write("x dibawah 100");',
      '    x++',
      '};'
      ]
    },
    {
      "type": "t",
      "content": "Perulangan For"
    },
    {
      "type": "p",
      "content": "Kalau pada perulangan while, baris kode akan dieksekusi terus menerus selama kondisi terpenuhi, di perulangan for ini agak sedikit beda, disini batis kode dieksekusi secara terus menerus sampai kondisi tertentu terpenuhi."
    },
    {
      "type": "p",
      "content": "Penulisan perulangan for adalah sebagai berikut:"
    },
    {
      "type": "c",
      'title': 'Contoh',
      "content": [
      'for( deklarasi counter ; kondisi ; increment/decrement ){',
      '    // Jalan sampai kondisi terpenuhi',
      '    kode',
      '}',
      ]
    },
    {
      "type": "p",
      "content": "Deklarasi counter maksudnya adalah deklarasi variabel yang akan digunakan sebagai penghitung perulangan dan juga akan menjadi awal dari perulangan, misal kita menggunakan var i = 0, berarti perulangan mulai dari angka 0 sampai kondisi tertentu."
    },
    {
      "type": "p",
      "content": "Kondisi disana berupa perbandingan terhadap counter, misal tadi counter kita var i = 0, berarti kondisinya harus berupa perbandingan terhadap variabel i, misal i &lt; 100, berarti perulangan akan dimulai saat i = 0 dan berakhir saat i = 100"
    },
    {
      "type": "p",
      "content": "Increment dan decrement adalah penambahan atau pengurangan terhadap counter, misal tiap perulangan counter ingin ditambah satu berarti tambahkan tanda ( ++ ) dibelakang nama counter, misal pada counter var i = 0, jika diberikan increment i++, berarti tiap perulangan i akan ditambah 1"
    }
  ]
},
{
    "type": "JS",
    "id": "js-mat-10",
    'isVisited': 0,
    "header": {
      "title": "Function",
      "subTitle": "Pelajari fungsi dalam Javascript"
    },
    "content": [
      {
        "type": "p",
        "content": "Function itu adalah baris kode yang bisa kamu gunain berulang kali dengan cara memanggil nama Function tersebut, Function bisa mengembalikan nilai ( return ) ataupun tanpa mengembalikan nilai."
      },
      {
        "type": "p",
        "content": "Di dalam Function ada yang dinamakan parameter, ini adalah variabel di dalam Function yang bisa menerima nilai dari luar function."
      },
      {
        "type": "p",
        "content": "Penulisan Function di Javascript adalah sebagai berikut:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "function namaFungsi( parameter ){",
          "    Kode;",
          "    return nilaiKeluar;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Contoh penggunaan Function adalah sebagai berikut."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "function jumlahkan( x, y ){",
          "    var hasil = x + y;",
          "    return hasil;",
          "}",
          "",
          "// Function mengembalikan nilai 12",
          "jumlahkan( 8, 4 );",
          "",
          "// Function mengembalikan nilai 6",
          "jumlahkan( 2, 4 );"
        ]
      }
    ]
  },
  {
    "type": "JS",
    "id": "js-mat-11",
    'isVisited': 0,
    "header": {
      "title": "Popup",
      "subTitle": "Pelajari apa itu Popup dalm javascript"
    },
    "content": [
      {
        "type": "p",
        "content": "Popup atau kotak dialog di Javascript itu adalah sebuah Function yng digunain untuk nampilin pesan tertentu ke pengguna, ada tiga jenis popup yaitu:\n- alert(), untuk nampilin pesan ke pengguna \n- confirm(), hampir sama seperti alert(), tapi ada dua tombol yaitu oke dan batal yng bisa digunain buat konfirmasi ke pengguna \n- prompt(), untuk menerima input atau masukan dari pengguna"
      },
      {
        "type": "p",
        "content": "Berikut contoh penggunaan popup"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "// Meminta nama pengguna",
          "var nama = prompt(\"masukkan nama anda\");",
          "",
          "// Memastikan nama, benar",
          "confirm(\"apakah benar nama kamu \" + nama + \"?\");",
          "",
          "// Menyapa pengguna",
          "alert(\"selamat datang \" + nama);"
        ]
      },
      {
        "type": "p",
        "content": "Pada contoh di atas, prompt dimasukkan ke sebuah variabel, ini adalah cara kita untuk menangkap input dari pengguna, jika input sudah berupa variabel, kita bebas mau olah input itu jadi apa yang kita mau, seperti pada contoh diatas, kita mengolah input berupa nama pengguna menjadi sebuah kata sapaan."
      },
      {
        "type": "p",
        "content": "Pada contoh diatas terdapat operator penjumlahan ( + ), pada string, operator ini digunakan untuk menggabungkan dua string menjadi satu, misal ada string \"hello\" dan string \"World\", jika kita gabungkan keduanya dengan \"hello\" + \"World\", maka stringnya menjadi \"helloWorld\", penggabungan ini juga bisa dilakukan dengan menggunakan variabel, misalmya ada dua variabel yang berisi string, variabel A dan B misal, jika kita lakukan penggabungan dengan cara A + B maka hasilnya adalah string yang berisi gabung antara string A dan string B."
      }
    ]
  },
  {
    "type": "JS",
    "id": "js-mat-12",
    'isVisited': 0,
    "header": {
      "title": "Array",
      "subTitle": "Pelajari apa itu array dalam Javascript"
    },
    "content": [
      {
        "type": "p",
        "content": "Array adalah variabel yang bisa nyimpen lebih dari satu data, dia bisa nyimpen banyak data sekaligus secara teratur, array di deklarasiin dengan tanda ( [ ] ), penulisan array adalah sebagai berikut:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "var hewan = [\"sapi\", \"ayam\", \"domba\"]"
        ]
      },
      {
        "type": "p",
        "content": "Pada contoh di atas terdapat array bernama hewan yang berisi tiga string yaitu string \"sapi\", \"ayam\" dan \"domba\", untuk mengakses atau memakai sebuah data di dalam array tersebut, kita bisa memanggil nama array dan urutan data tersebut di dalam array dimulai dari 0, misal saya ingin mengambil string \"ayam\" berarti saya harus menulis hewan[1], indeks atau uratannya ke 1 karena urutan array dimulai dari 0."
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-1",
    'isVisited': 0,
    "header": {
      "title": "Sejarah python",
      "subTitle": "Pelajari bagaimana python dapat terbentuk"
    },
    "content": [
      {
        "type": "t",
        "content": "Apa itu python?"
      },
      {
        "type": "p",
        "content": "Python adalah bahasa pemrograman yang sangat populer saat ini karena sintaksnya sederhana dan mudah dipelajari. Bahasa ini pertama kali muncul pada akhir tahun 1980-an dan secara resmi dirilis pada tahun 1991."
      },
      {
        "type": "t",
        "content": "Siapa pencipta python?"
      },
      {
        "type": "p",
        "content": "Python diciptakan oleh Guido van Rossum, seorang programmer asal Belanda, di Centrum Wiskunde & Informatica (CWI) pada tahun 1989. Saat itu, Guido ingin membuat bahasa pemrograman yang mudah digunakan, fleksibel, namun tetap powerful. Python terinspirasi dari bahasa pemrograman ABC dan juga dipengaruhi oleh bahasa lain seperti C."
      },
      {
        "type": "p",
        "content": "Nama Python sendiri bukan berasal dari ular, melainkan dari acara komedi Inggris “Monty Python’s Flying Circus”, karena Guido adalah penggemar acara tersebut."
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-2",
    'isVisited': 0,
    "header": {
      "title": "Instalasi python",
      "subTitle": "Pelajari cara menginstal python"
    },
    "content": [
      {
        "type": "p",
        "content": "Sebelum kita bisa membuat program dengan Python, kita harus menginstalnya terlebih dahulu di komputer atau perangkat yang digunakan."
      },
      {
        "type": "p",
        "content": "Python bisa diinstal di berbagai sistem operasi, seperti Windows, Linux, dan macOS. Selain itu, ada juga versi Python yang bisa langsung dijalankan tanpa instalasi lewat online compiler atau melalui Google Colab / Jupyter Notebook."
      },
      {
        "type": "t",
        "content": "Langkah langkah menginstal python"
      },
      {
        "type": "p",
        "content": "1. Buka browser dan pergi ke situs resmi Python: https://www.python.org/downloads/."
      },
      {
        "type": "p",
        "content": "2. Pilih versi terbaru Python (misalnya Python 3.12)."
      },
      {
        "type": "p",
        "content": "3. Klik tombol Download sesuai dengan sistem operasi (Windows)."
      },
      {
        "type": "p",
        "content": "4. Jalankan file installer yang sudah diunduh."
      },
      {
        "type": "p",
        "content": "5. Pada saat instalasi, jangan lupa centang Add Python to PATH, lalu klik Install Now."
      },
      {
        "type": "p",
        "content": "6. Tunggu hingga proses selesai, lalu klik Finish."
      },
      {
        "type": "p",
        "content": "Untuk mengecek apakah instalasi berhasil, buka Command Prompt (CMD) dan ketik:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "python --version"
        ]
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-3",
    'isVisited': 0,
    "header": {
      "title": "Run python",
      "subTitle": "Pelajari cara menjalankan program python"
    },
    "content": [
      {
        "type": "p",
        "content": "Setelah Python terinstal, kita bisa langsung menjalankan program pertama kita. Program Python bisa dijalankan dengan berbagai cara, seperti lewat terminal, IDE (Integrated Development Environment), atau dengan editor teks sederhana."
      },
      {
        "type": "p",
        "content": "Ada dua cara utama untuk menjalankan Python:"
      },
      {
        "type": "p",
        "content": "1. Interactive Mode (REPL) → langsung mengetik perintah Python di terminal/command prompt."
      },
      {
        "type": "p",
        "content": "2. Script Mode → menulis kode di file .py lalu menjalankannya."
      },
      {
        "type": "p",
        "content": "Contoh program Python paling sederhana adalah program Hello World, yang biasanya menjadi program pertama setiap orang saat belajar bahasa pemrograman."
      },
      {
        "type": "t",
        "content": "Langkah-langkah Menjalankan Program Python"
      },
      {
        "type": "p",
        "content": "1. Menjalankan lewat terminal (Interactive Mode):"
      },
      {
        "type": "p",
        "content": "Buka Command Prompt atau Terminal."
      },
      {
        "type": "p",
        "content": "Ketik python lalu tekan Enter."
      },
      {
        "type": "p",
        "content": "Setelah itu, kamu bisa mengetik kode Python secara langsung, misalnya:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "print(\"Hello World\")"
        ]
      },
      {
        "type": "p",
        "content": "Tekan Enter, maka hasil akan langsung muncul."
      },
      {
        "type": "p",
        "content": "2. Menjalankan lewat file (Script Mode):"
      },
      {
        "type": "p",
        "content": "Buka teks editor (misalnya Notepad, VS Code, atau PyCharm)."
      },
      {
        "type": "p",
        "content": "Tulis kode berikut:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "print(\"Hello World\")"
        ]
      },
      {
        "type": "p",
        "content": "Simpan file dengan nama hello.py."
      },
      {
        "type": "p",
        "content": "Buka terminal, lalu jalankan dengan perintah:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "python hello.py"
        ]
      },
      {
        "type": "p",
        "content": "Jika berhasil, terminal akan menampilkan:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "Hello World"
        ]
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-4",
    'isVisited': 0,
    "header": {
      "title": "Penulisan program dalam python",
      "subTitle": "Pelajari aturan penulisan code python"
    },
    "content": [
      {
        "type": "p",
        "content": "Menulis kode Python berarti membuat serangkaian perintah menggunakan sintaks Python yang sederhana dan mudah dipahami, mirip dengan bahasa sehari-hari. Kode tersebut kemudian dijalankan menggunakan interpreter Python. Untuk menulisnya, Anda dapat memanfaatkan editor teks atau IDE, misalnya Visual Studio Code, dan menyimpannya dalam file berekstensi .py sebelum dieksekusi."
      },
      {
        "type": "t",
        "content": "Case sensitive"
      },
      {
        "type": "p",
        "content": "Case sensitive berarti program python mengganggap huruf besar dan huruf kecil sebagain huruf yang berbeda, jadi string 'Kamu' tidak sama dengan string 'kamu'"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "nama = \"Edo\"",
          "Nama = \"Budi\"",
          "print(nama)   # akan mencetak Edo",
          "print(Nama)   # akan mencetak Budi"
        ]
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "print(\"Halo\")   # benar, mencetak Halo",
          "Print(\"Halo\")   # salah, menimbulkan error"
        ]
      },
      {
        "type": "t",
        "content": "Identation"
      },
      {
        "type": "p",
        "content": "Indentasi adalah penggunaan spasi atau tab di awal baris kode. Jika di banyak bahasa pemrograman lain indentasi hanya dipakai untuk mempercantik tampilan agar kode lebih mudah dibaca, di Python indentasi justru memiliki peran yang sangat penting."
      },
      {
        "type": "p",
        "content": "Python menggunakan indentasi untuk menandai blok kode, misalnya di dalam perulangan (loop), percabangan (if-else), atau fungsi. Jika indentasi salah, program akan menimbulkan error."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "# if dengan indentasi yang benar",
          "nilai = 80",
          "if nilai >= 75:",
          "print(\"Lulus\")",
          "print(\"Selamat, kamu berhasil!\")"
        ]
      },
      {
        "type": "p",
        "content": "Output :<br>Lulus<br>Selamat, kamu berhasil!"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "# if dengan identasi yang salah",
          "nilai = 80",
          "if nilai >= 75:",
          "print(\"Lulus\")",
          "print(\"Selamat, kamu berhasil!\")"
        ]
      },
      {
        "type": "p",
        "content": "Output :<br>Error"
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-5",
    'isVisited': 0,
    "header": {
      "title": "Variabel",
      "subTitle": "Pengenalan variabel pada python"
    },
    "content": [
      {
        "type": "p",
        "content": "Dalam Python, ada beberapa tipe variabel yang sering digunakan dalam program sehari-hari."
      },
      {
        "type": "t",
        "content": "String"
      },
      {
        "type": "p",
        "content": "String adalah variabel yang menyimpan teks. Misalnya untuk menyimpan nama, pesan, atau kalimat lainnya. String dapat digabungkan, dipotong, dan diubah hurufnya."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "nama = “Udin”",
          "sapaan = “Hallo, “ + nama",
          "print(sapaan)"
        ]
      },
      {
        "type": "p",
        "content": "Output: <br>Hallo, Udin"
      },
      {
        "type": "t",
        "content": "Integer"
      },
      {
        "type": "p",
        "content": "Integer adalah variabel yang berisi angka bulat tanpa koma. Integer biasanya dipakai untuk menyimpan umur, jumlah barang, atau skor."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "umur = 17",
          "tahun_lahir = 2025 – umur",
          "print(“Tahun lahir:”, tahun_lahir)"
        ]
      },
      {
        "type": "p",
        "content": "Output: <br>Tahun lahir: 2008"
      },
      {
        "type": "t",
        "content": "Float"
      },
      {
        "type": "p",
        "content": "Float adalah variabel yang berisi angka desimal. Contohnya untuk tinggi badan atau nilai rata-rata."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "tinggi = 170.5",
          "print(“Tinggi badan:”, tinggi, “cm”)"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br>Tinggi badan: 170.5 cm"
      },
      {
        "type": "t",
        "content": "Boolean"
      },
      {
        "type": "p",
        "content": "Boolean adalah variabel yang hanya memiliki dua nilai yaitu, TRUE atau FALSE. Boolean sering dipakai untuk membuat logika,  misalnya menentukan apakah seorang siswa lulus atau tidak."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "lulus = True",
          "if lulus:",
          "print(“Selamat, kamu lulus!”)"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br>Selamat, kamu lulus!"
      },
      {
        "type": "t",
        "content": "List"
      },
      {
        "type": "p",
        "content": "List adalah variabel yang dapat menyimpan banyak data sekaligus dalam satu tempat. List bisa diubah isinya, ditambah, atau dihapus sesuai kebutuhan."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "hobi = [“Coding”, “Berolahraga”, “Memancing”,]",
          "print(hobi[0])",
          "hobi.append(“Jalan-jalan”)",
          "print(hobi)"
        ]
      },
      {
        "type": "p",
        "content": "Output: <br>[‘Coding’, ‘Berolahraga’, ‘Memancing’, ‘Jalan-jalan’]"
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-6",
    'isVisited': 0,
    "header": {
      "title": "Menampilkan output",
      "subTitle": "Pelajari bagaimana cara menampilkan output pada python"
    },
    "content": [
      {
        "type": "t",
        "content": "Fungsi print() dalam Python"
      },
      {
        "type": "p",
        "content": "Fungsi print() adalah salah satu fungsi bawaan (built-in function) di Python yang digunakan untuk menampilkan informasi atau output ke layar. Dengan menggunakan fungsi ini, programmer dapat menampilkan teks, angka, variabel, maupun hasil dari suatu operasi."
      },
      {
        "type": "t",
        "content": "Menampilkan Teks"
      },
      {
        "type": "p",
        "content": "Teks harus ditulis di dalam tanda kutip tunggal (' ') atau ganda (\" \")."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "print(\"Halo, Python!\")"
        ]
      },
      {
        "type": "p",
        "content": "Output:"
      },
      {
        "type": "t",
        "content": "Menampilkan Angka"
      },
      {
        "type": "p",
        "content": "Fungsi print() juga dapat digunakan untuk menampilkan angka secara langsung."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "print(123)",
          "print(3.14)"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br>123<br>3.14"
      },
      {
        "type": "t",
        "content": "Menampilkan Nilai Variabel"
      },
      {
        "type": "p",
        "content": "Selain teks dan angka, variabel juga dapat ditampilkan menggunakan print()."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "nama = \"Python\"",
          "versi = 3",
          "print(\"Bahasa:\", nama, \"Versi:\", versi)"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br>Bahasa: Python Versi: 3"
      },
      {
        "type": "t",
        "content": "Menampilkan Hasil Operasi"
      },
      {
        "type": "p",
        "content": "Fungsi print() dapat menampilkan hasil perhitungan atau operasi tertentu."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "Contoh:",
          "print(10 + 5)",
          "print(8 * 3)"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br>15<br>24"
      },
      {
        "type": "t",
        "content": "Menambahkan Pemisah (separator) dan Akhiran (end)"
      },
      {
        "type": "p",
        "content": "Fungsi print() memiliki parameter tambahan seperti sep (separator) untuk mengatur pemisah antar elemen, dan end untuk mengatur karakter di akhir output."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "print(\"A\", \"B\", \"C\", sep=\"-\")",
          "print(\"Baris pertama\", end=\" \")",
          "print(\"lanjutan baris\")"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br>A-B-C <br>Baris pertama lanjutan baris"
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-7",
    'isVisited': 0,
    "header": {
      "title": "Program numerik",
      "subTitle": "Mengerjakan program dengan tipe data numerik"
    },
    "content": [
      {
        "type": "p",
        "content": "Python mendukung beberapa tipe data numerik yang umum digunakan dalam pemrograman. Berikut penjelasannya:"
      },
      {
        "type": "t",
        "content": "Jenis Tipe Data Numerik"
      },
      {
        "type": "p",
        "content": "Integer (int) → bilangan bulat tanpa pecahan. Contoh: -10, 0, 25."
      },
      {
        "type": "p",
        "content": "Float (float) → bilangan desimal atau bilangan dengan pecahan. Contoh: 3.14, -2.5."
      },
      {
        "type": "p",
        "content": "Complex (complex) → bilangan kompleks dengan bagian nyata dan imajiner. Contoh: 3 + 5j"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "x = 10        # integer",
          "y = 3.14      # float",
          "z = 2 + 3j    # complex",
          "print(type(x))",
          "print(type(y))",
          "print(type(z))"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br><class 'int'><br><class 'float'><br><class 'complex'>"
      },
      {
        "type": "t",
        "content": "Operasi Aritmatika"
      },
      {
        "type": "p",
        "content": "Python mendukung berbagai operasi matematika dasar pada angka.<br>(+)→ penjumlahan<br>(-)→ pengurangan<br>(*) → perkalian<br>(/) → pembagian (hasil float)<br>(//)→ pembagian bulat (integer division)<br>(%) → modulus (sisa pembagian)<br>(**) → perpangkatan"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "a = 15",
          "b = 4",
          "print(a + b)   # 19",
          "print(a - b)   # 11",
          "print(a * b)   # 60",
          "print(a / b)   # 3.75"
        ]
      },
      {
        "type": "t",
        "content": "Konversi Tipe Data Numerik"
      },
      {
        "type": "p",
        "content": "Python dapat mengubah nilai antar tipe numerik menggunakan fungsi bawaan:<br>int() → mengubah ke bilangan bulat.<br>float() → mengubah ke bilangan desimal.<br>complex() → membuat bilangan kompleks."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "angka = 5.8",
          "print(int(angka))     # 5",
          "print(float(10))      # 10.0",
          "print(complex(4))     # (4+0j)"
        ]
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-8",
    'isVisited': 0,
    "header": {
      "title": "Operator",
      "subTitle": "Pelajari operator apa itu python"
    },
    "content": [
      {
        "type": "p",
        "content": "Dalam Python, operator adalah simbol atau konstruk khusus yang digunakan untuk melakukan operasi pada nilai atau variabel. Operator digunakan dalam ekspresi untuk memanipulasi data dan menghasilkan hasil tertentu."
      },
      {
        "type": "t",
        "content": "Jenis-jenis operator"
      },
      {
        "type": "t",
        "content": "Operator aritmatika"
      },
      {
        "type": "p",
        "content": "Operator aritmatika digunakan untuk perhitungan matematika. Misalnya, tanda tambah (+) untuk menjumlahkan, tanda minus (-) untuk mengurangkan, tanda bintang (*) untuk mengalikan, garis miring (/) untuk membagi, dua garis miring (//) untuk pembagian bulat, tanda persen (%) untuk mencari sisa bagi, dan tanda bintang ganda (**) untuk pemangkatan."
      },
      {
        "type": "t",
        "content": "Operator perbandingan"
      },
      {
        "type": "p",
        "content": "Operator perbandingan dipakai untuk membandingkan dua nilai dan hasilnya berupa benar (True) atau salah (False). Contohnya, ( == ) untuk mengecek kesamaan, ( != ) untuk mengecek ketidaksamaan,( > ) untuk lebih besar,( < ) untuk lebih kecil, ( >= ) untuk lebih besar atau sama dengan, dan ( <= ) untuk lebih kecil atau sama dengan."
      },
      {
        "type": "p",
        "content": "Operator logika digunakan untuk operasi bernilai logis, seperti ( and ) untuk mengembalikan benar jika kedua kondisi benar, ( or ) untuk benar jika salah satu kondisi benar, dan ( not ) untuk membalikkan nilai logis."
      },
      {
        "type": "t",
        "content": "Assignment Operator"
      },
      {
        "type": "p",
        "content": "Assignment Operator dipakai untuk memberikan nilai ke dalam variabel. Simbol sama dengan (=) digunakan untuk menetapkan nilai, sedangkan bentuk gabungan seperti ( +=, -=, *=, /=, //=, %=, dan **= ) digunakan untuk operasi sekaligus penugasan."
      },
      {
        "type": "p",
        "content": "Contoh operator aritmatika"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "a = 10",
          "b = 3",
          "print(\"a + b =\", a + b)",
          "print(\"a - b =\", a - b)",
          "print(\"a * b =\", a * b)"
        ]
      },
      {
        "type": "p",
        "content": "Output: <br>13<br>7<br>30"
      },
      {
        "type": "p",
        "content": "Contoh Operator perbandingan"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "print(\"a == b:\", a == b)",
          "print(\"a != b:\", a != b)",
          "print(\"a > b:\", a > b)"
        ]
      },
      {
        "type": "p",
        "content": "Output:<br>False<br>True<br>True"
      },
      {
        "type": "p",
        "content": "Contoh Operator Logika"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "x = True",
          "y = False",
          "print(\"x and y:\", x and y)",
          "print(\"x or y:\", x or y)",
          "print(\"not x:\", not x)"
        ]
      },
      {
        "type": "p",
        "content": "Output : <br>False<br>True<br>False"
      },
      {
        "type": "p",
        "content": "Contoh Assignment Operator"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "c = 5",
          "print(\"c =\", c)   # 5",
          "c += 2",
          "print(\"c += 2:\", c) # 7",
          "c *= 3",
          "print(\"c *= 3:\", c) # 21",
          "c //= 4",
          "print(\"c //= 4:\", c) # 5"
        ]
      },
      {
        "type": "p",
        "content": "Output :<br>5<br>7<br>21<br>5"
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-9",
    'isVisited': 0,
    "header": {
      "title": "Fungsi",
      "subTitle": "Membuat Fungsi pada Python"
    },
    "content": [
      {
        "type": "p",
        "content": "Fungsi adalah salah satu konsep paling penting dalam pemrograman. Dengan fungsi, kita bisa mengelompokkan kode agar lebih terstruktur, mudah dipahami, dan bisa digunakan kembali (reusable)."
      },
      {
        "type": "p",
        "content": "Fungsi di Python didefinisikan dengan kata kunci “def”, diikuti “nama_fungsi”, tanda kurung ” () ”, dan titik dua “ : “."
      },
      {
        "type": "p",
        "content": "Isi fungsi ditulis dengan indentasi (spasi ke dalam)."
      },
      {
        "type": "p",
        "content": "Sintaks dasar:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "def nama_fungsi():",
          "# blok kode",
          "perintah1",
          "perintah2"
        ]
      },
      {
        "type": "p",
        "content": "Contoh :"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "def sapa():",
          "print(\"Halo, selamat datang di Python!\")"
        ]
      },
      {
        "type": "p",
        "content": "Sapa adalah nama_fungsi yang berfungsi sebagai identitas agar bisa dipanggil dan dijalankan kembali sesuai tugasnya."
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-10",
    'isVisited': 0,
    "header": {
      "title": "Fungsi dan argumen",
      "subTitle": "Memanggil Fungsi dan Mengenal Argumen"
    },
    "content": [
      {
        "type": "t",
        "content": "Memanggil Fungsi dan Mengenal Argumen"
      },
      {
        "type": "p",
        "content": "Setelah sebuah fungsi dibuat dengan def, fungsi tersebut tidak akan berjalan otomatis, tetapi harus dipanggil dengan menuliskan nama fungsi diikuti tanda kurung. Jika fungsi hanya berisi instruksi tanpa parameter, pemanggilannya cukup dengan menuliskan nama fungsi saja, misalnya salam(). Namun, agar lebih fleksibel, fungsi bisa menerima parameter, yaitu variabel yang didefinisikan di dalam tanda kurung saat mendefinisikan fungsi, dan saat fungsi dipanggil kita bisa memberikan argumen, yaitu nilai nyata yang dikirim ke parameter tersebut."
      },
      {
        "type": "p",
        "content": "Dalam Python, argumen dapat diberikan dengan beberapa cara. Pertama, argumen posisi, yaitu argumen diberikan sesuai urutan parameter pada fungsi. Kedua, argumen dengan nama (keyword argument), yaitu argumen diberikan dengan menyebut nama parameternya secara eksplisit. Ketiga, default argument, yaitu parameter memiliki nilai bawaan yang akan digunakan jika tidak diberi argumen ketika fungsi dipanggil. Selain itu, Python juga mendukung argumen tak terbatas, yang ditulis dengan *args untuk menampung banyak nilai dalam bentuk tuple, dan **kwargs untuk menampung banyak pasangan nama–nilai dalam bentuk dictionary."
      },
      {
        "type": "p",
        "content": "Contoh Syntax Fungsi"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "# Fungsi dasar dengan parameter",
          "def sebut(isi):",
          "print(isi)",
          "/n",
          "# Fungsi dengan lebih dari satu parameter",
          "def perkenalan(nama, asal):",
          "print(\"Saya\", nama, \"dari\", asal)",
          "/n",
          "sebut(\"Saya suka python\")",
          "perkenalan(\"hinata\",\"jepang\")"
        ]
      },
      {
        "type": "p",
        "content": "Output :<br>Saya suka python<br>Saya Hinata dari jepang"
      },
      {
        "type": "p",
        "content": "Kedua fungsi tersebut pada dasarnya melakukan hal yang sama yaitu menerima parameter lalu menampilkannya, yang berbeda adalah pada jumlah parameternya dan cara menampilkannya, pada fungsi pertama, parameter langsung ditampilkan, sedangkan pada fungsi kedua parameter disisipkan diantara string sehingga membentuk kata."
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-11",
    'isVisited': 0,
    "header": {
      "title": "Variabel dalam Fungsi",
      "subTitle": "Pelajari variabel dalam fungsi di python"
    },
    "content": [
      {
        "type": "p",
        "content": "Dalam Python, variabel yang dibuat di dalam fungsi disebut variabel lokal, yaitu variabel yang hanya bisa digunakan di dalam fungsi tersebut dan tidak bisa diakses dari luar. Sebaliknya, variabel yang dibuat di luar fungsi disebut variabel global, yang bisa digunakan oleh semua bagian program. Jika sebuah variabel global ingin diubah nilainya dari dalam fungsi, maka harus menggunakan kata kunci global agar Python tahu bahwa variabel yang dimaksud adalah variabel global, bukan variabel lokal baru."
      },
      {
        "type": "p",
        "content": "Contoh variabel local :"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "def hitung():",
          "a = 5   # variabel lokal",
          "b = 3   # variabel lokal",
          "hasil = a + b",
          "print(\"Hasil penjumlahan di dalam fungsi =\", hasil)",
          "hitung()",
          "# print(a)"
        ]
      },
      {
        "type": "p",
        "content": "Output : <br>Hasil penjumlahan di dalam fungsi = 8"
      },
      {
        "type": "p",
        "content": "Penjeasan :"
      },
      {
        "type": "p",
        "content": "Contoh Variabel Global :"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "x = 10",
          "def ubah():",
          "global x",
          "x = 20",
          "print(\"Nilai x di dalam fungsi setelah diubah:\", x)",
          "ubah()",
          "print(\"Nilai x di luar fungsi:\", x)"
        ]
      },
      {
        "type": "p",
        "content": "Output :<br>Nilai x di dalam fungsi setelah diubah: 20<br>Nilai x di luar fungsi: 20"
      },
      {
        "type": "p",
        "content": "Penjelasan :"
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-12",
    'isVisited': 0,
    "header": {
      "title": "Input",
      "subTitle": "Pelajari apa itu input pada python"
    },
    "content": [
      {
        "type": "p",
        "content": "Fungsi input() pada Python digunakan untuk meminta data dari pengguna melalui keyboard. Data yang dimasukkan selalu disimpan dalam bentuk string, sehingga perlu disimpan di dalam variabel agar bisa digunakan kembali."
      },
      {
        "type": "p",
        "content": "Contoh :"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "nama = input(\"Masukkan nama kamu: \")",
          "print(\"Halo,\", nama)"
        ]
      },
      {
        "type": "p",
        "content": "Output : <br>Masukkan nama kamu: Budi<br>Halo, Budi"
      },
      {
        "type": "p",
        "content": "Fungsi input() selalu menghasilkan data dalam bentuk string. Data hasil input biasanya disimpan ke dalam variabel agar bisa dipanggil lagi. Teks yang ditulis di dalam tanda kurung (\"...\") pada fungsi input() berfungsi sebagai pesan yang akan ditampilkan ke pengguna."
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-13",
    'isVisited': 0,
    "header": {
      "title": "String dan Numerik",
      "subTitle": "Pelajari hasil input pada python"
    },
    "content": [
      {
        "type": "p",
        "content": "Hasil dari fungsi input() selalu berupa string, padahal dalam banyak kasus kita membutuhkan data dalam bentuk angka. Untuk mengubah string menjadi bilangan bulat kita menggunakan fungsi int(), sedangkan untuk mengubah string menjadi bilangan desimal kita menggunakan fungsi float(). Dengan cara ini, data input dapat diproses sebagai angka dan dipakai dalam perhitungan."
      },
      {
        "type": "p",
        "content": "Contoh Angka Bulat  (int) :"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "umur = int(input(\"Masukkan umur kamu: \"))",
          "print(\"Umur kamu tahun depan:\", umur + 1)"
        ]
      },
      {
        "type": "p",
        "content": "Output ( jika user mengetik 17 ) :<br>Masukkan umur kamu: 17<br>Umur kamu tahun depan: 18"
      },
      {
        "type": "p",
        "content": "Contoh Angka Desimal :<br>nilai = float(input(\"Masukkan nilai ujian: \"))<br>print(\"Nilai kamu ditambah bonus:\", nilai + 5)"
      },
      {
        "type": "p",
        "content": "Input dari pengguna pada Python selalu dianggap sebagai string. Jika ingin dipakai sebagai bilangan bulat, maka string tersebut harus dikonversi menggunakan fungsi int(). Jika ingin dipakai sebagai bilangan desimal, maka string tersebut harus dikonversi menggunakan fungsi float(). Data string dapat digunakan untuk mengolah teks, sedangkan data numerik dapat digunakan untuk melakukan perhitungan."
      }
    ]
  },
  {
    "type": "PY",
    "id": "py-mat-14",
    'isVisited': 0,
    "header": {
      "title": "Perulangan",
      "subTitle": "Pelajari perulangan ada python"
    },
    "content": [
      {
        "type": "t",
        "content": "Perulangan while"
      },
      {
        "type": "p",
        "content": "Perulangan while digunakan untuk menjalankan suatu blok kode secara berulang selama kondisi yang diberikan bernilai benar (True). Jika kondisi menjadi salah (False), maka perulangan akan berhenti."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "i = 1",
          "while i <= 5:",
          "print(\"Angka ke-\", i)",
          "i += 1"
        ]
      },
      {
        "type": "p",
        "content": "Output :<br>Angka ke- 1<br>Angka ke- 2<br>Angka ke- 3<br>Angka ke- 4<br>Angka ke- 5"
      },
      {
        "type": "p",
        "content": "Perulangan while sangat cocok digunakan ketika jumlah perulangan belum diketahui dengan pasti. Kondisi yang digunakan harus bisa berubah agar perulangan dapat berhenti, jika tidak maka akan terjadi perulangan tanpa akhir (infinite loop)."
      },
      {
        "type": "t",
        "content": "Perulangan for"
      },
      {
        "type": "p",
        "content": "Perulangan for dalam Python digunakan untuk mengulang setiap elemen dalam sebuah urutan, seperti list, string, atau range. Perulangan ini lebih sederhana jika kita sudah mengetahui jumlah perulangan yang pasti."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "for i in range(1, 3):",
          "print(\"Angka ke-\", i)"
        ]
      },
      {
        "type": "p",
        "content": "Output :<br>Angka ke- 1<br>Angka ke- 2<br>Angka ke- 3"
      },
      {
        "type": "p",
        "content": "Perulangan for pada Python sering digunakan bersama fungsi range() untuk menghasilkan urutan angka. Selain itu, for juga bisa digunakan untuk menelusuri setiap elemen dalam list, string, atau struktur data lainnya."
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-1",
    'isVisited': 0,
    "header": {
      "title": "Instalasi",
      "subTitle": "Pelajari cara menginstal C++"
    },
    "content": [
      {
        "type": "p",
        "content": "Sebelum mulai menulis kode C++, kita perlu menyiapkan lingkungan pengembangan yang tepat. Visual Studio Code (VS Code) adalah editor kode sumber yang populer, ringan, dan mendukung banyak bahasa pemrograman, termasuk C++."
      },
      {
        "type": "t",
        "content": "Install Visual Studio Code"
      },
      {
        "type": "p",
        "content": "Unduh VSCode dari situs resminya (https://code.visualstudio.com/). VS Code tersedia untuk Windows, macOS, dan Linux. Setelah diunduh, lakukan instalasi seperti biasa."
      },
      {
        "type": "t",
        "content": "Install Compiler C++"
      },
      {
        "type": "p",
        "content": "Compiler adalah program yang mengubah kode sumber C++ menjadi program yang bisa dijalankan oleh komputer."
      },
      {
        "type": "p",
        "content": "- Windows<br>Anda bisa menggunakan MinGW (Minimalist GNU for Windows) atau TDM-GCC."
      },
      {
        "type": "p",
        "content": "Cara instalasi MinGW:  <br>1. Unduh installer MinGW dari https://sourceforge.net/projects/mingw/.  <br>2. Pilih paket mingw32-gcc-g++ untuk compiler C++.<br>3. Setelah instalasi, tambahkan path bin MinGW ke variabel lingkungan PATH agar bisa diakses dari terminal."
      },
      {
        "type": "p",
        "content": "- Linux  <br>Biasanya sudah ada compiler GCC. Jika belum, jalankan perintah:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "bash",
          "sudo apt update",
          "sudo apt install build-essential"
        ]
      },
      {
        "type": "p",
        "content": "- macOS  <br>install Xcode Command Line Tools dengan perintah:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "bash",
          "xcode-select --install"
        ]
      },
      {
        "type": "t",
        "content": "Persiapan lingkungan"
      },
      {
        "type": "p",
        "content": "Buka VS Code, lalu buka Extensions (Ctrl+Shift+X). Cari dan install extension *C/C++* dari Microsoft, buat folder proyek baru dan buat file dengan ekstensi .cpp."
      },
      {
        "type": "p",
        "content": "Untuk menjalankan dan debug program, Anda perlu membuat konfigurasi tasks.json (untuk build) dan launch.json (untuk debug). VSCode biasanya menawarkan wizard otomatis saat Anda pertama kali menjalankan program C++."
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-2",
    'isVisited': 0,
    "header": {
      "title": "Struktur dasar",
      "subTitle": "Pelajari bagaimana struktur dasar pemrograman C++"
    },
    "content": [
      {
        "type": "p",
        "content": "Setiap program C++ memiliki struktur dasar yang harus dipahami agar program bisa berjalan dengan benar."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "int main() {",
          "std::cout << \"Hello, World!\" << std::endl;",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Penjelasan detail"
      },
      {
        "type": "t",
        "content": "#include <iostream>"
      },
      {
        "type": "p",
        "content": "Ini adalah directive preprocessor yang memberitahu compiler untuk menyertakan library iostream yang berisi fungsi-fungsi untuk input dan output, seperti std::cout dan std::cin."
      },
      {
        "type": "t",
        "content": "int main()"
      },
      {
        "type": "p",
        "content": "Fungsi main adalah titik awal eksekusi program. Setiap program C++ harus memiliki fungsi main. Kata kunci int menunjukkan bahwa fungsi ini mengembalikan nilai integer ke sistem operasi setelah program selesai."
      },
      {
        "type": "t",
        "content": "{ ... }"
      },
      {
        "type": "p",
        "content": "Kurung kurawal menandai blok kode. Semua perintah yang ingin dijalankan dalam fungsi main harus ditulis di dalamnya."
      },
      {
        "type": "t",
        "content": "std::cout << \"Hello, World!\" << std::endl;"
      },
      {
        "type": "p",
        "content": "std::cout adalah objek standar untuk menampilkan output ke layar. Operator << digunakan untuk mengirim data ke cout. std::endl menambahkan karakter newline (baris baru) dan membersihkan buffer output."
      },
      {
        "type": "t",
        "content": "return 0;"
      },
      {
        "type": "p",
        "content": "Menandakan program selesai dengan status sukses. Nilai 0 biasanya berarti tidak ada error."
      },
      {
        "type": "p",
        "content": "Jadi,kalian dapat memahami struktur dasar penting agar program bisa berjalan dengan benar.Dan kalian juga mengetahui fungsi main sebagai titik awal program membantu dalam memahami alur eksekusi."
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-3",
    'isVisited': 0,
    "header": {
      "title": "Variabel dan tipe data",
      "subTitle": "Pelajari berbagai variabel dan tipe data di C++"
    },
    "content": [
      {
        "type": "p",
        "content": "Variabel adalah tempat menyimpan data sementara selama program berjalan. Setiap variabel memiliki tipe data yang menentukan jenis nilai yang bisa disimpan."
      },
      {
        "type": "t",
        "content": "Tipe data dasar di C++"
      },
      {
        "type": "p",
        "content": "- int : menyimpan bilangan bulat (contoh: 1, 20, -5)<br>- float : menyimpan bilangan desimal dengan presisi tunggal (contoh: 3.14, 0.5)<br>- double : menyimpan bilangan desimal dengan presisi ganda (lebih akurat dari float)<br>- char : menyimpan satu karakter (contoh: 'A', 'z')<br>- bool : menyimpan nilai benar/salah (true atau false)"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "#include <string>",
          "int main() {",
          "// Deklarasi dan inisialisasi variabel",
          "// Tipe data integer",
          "int umur = 25;",
          "// Tipe data float",
          "float tinggi = 1.75;",
          "// Tipe data double",
          "double berat = 68.5;",
          "// Tipe data char",
          "char inisial = 'B';",
          "// Tipe data string",
          "std::string nama = \"Budi Santoso\";",
          "// Mencetak nilai dari setiap variabel",
          "std::cout << \"Nama saya: \" << nama << std::endl;",
          "std::cout << \"Umur saya: \" << umur << \" tahun\" << std::endl;",
          "std::cout << \"Tinggi saya: \" << tinggi << \" meter\" << std::endl;",
          "std::cout << \"Berat saya: \" << berat << \" kg\" << std::endl;",
          "std::cout << \"Inisial nama saya: \" << inisial << std::endl;",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Sedangkan dibawah ini contoh penggunaan tipe data boolean"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "int main() {",
          "// Deklarasi dan inisialisasi boolean",
          "bool isSiswa = true;",
          "bool isLulus = false;",
          "// Menampilkan nilai variabel boolean",
          "std::cout << \"Apakah dia seorang siswa? \" << isSiswa << std::endl;",
          "std::cout << \"Apakah dia lulus? \" << isLulus << std::endl;",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Jadi teman-teman dapat menggunakan berbagai macam fungsi sesuai dengan kebutuhan kalian,yaitu ddengan menggunakan variabel/tipe data.Variabel memungkinkan program menyimpan dan memanipulasi data.Memahami tipe data penting agar data disimpan dengan benar dan efisien.Jadi gunakanlah fungsi-fungsi tersebut secara efisien dan bijak ya guys."
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-4",
    'isVisited': 0,
    "header": {
      "title": "Operator",
      "subTitle": "Pelajari berbagai operator di C++"
    },
    "content": [
      {
        "type": "p",
        "content": "Operator adalah simbol yang digunakan untuk melakukan operasi pada variabel dan nilai.Operator juga sebagai fungsi perbandingan data yang dapat diproses oleh program."
      },
      {
        "type": "t",
        "content": "Operator Aritmatika"
      },
      {
        "type": "p",
        "content": "Digunakan untuk operasi matematika:  <br>- penjumlahan: ( + )<br>- pengurangan: ( - )<br>- perkalian: ( * )<br>- pembagian: ( / )<br>- modulus: ( % )"
      },
      {
        "type": "t",
        "content": "Operator Perbandingan"
      },
      {
        "type": "p",
        "content": "Membandingkan dua nilai dan menghasilkan nilai boolean:  <br>- sama dengan: ( == )  <br>- tidak sama dengan: ( != )<br>- kurang dari: ( < )<br>- lebih dari: ( > )<br>- kurang dari atau sama dengan: ( <= )<br>- lebih dari atau sama dengan: ( >= )"
      },
      {
        "type": "t",
        "content": "Operator Logika"
      },
      {
        "type": "p",
        "content": "Digunakan untuk operasi logika pada nilai boolean:  <br>- AND: ( && )<br>- OR: ( || )<br>- NOT: ( ! )"
      },
      {
        "type": "p",
        "content": "Contoh penggunaan operator aritmatika:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "int main() {",
          "// Deklarasi variabel",
          "int a = 10;",
          "int b = 3;",
          "int hasil;",
          "hasil = a + b;",
          "std::cout << \"Hasil dari 10 + 3 = \" << hasil << std::endl;",
          "hasil = a - b;",
          "std::cout << \"Hasil dari 10 - 3 = \" << hasil << std::endl;",
          "hasil = a * b;",
          "std::cout << \"Hasil dari 10 * 3 = \" << hasil << std::endl;",
          "// Catatan: Jika kedua operand adalah integer, hasilnya juga integer (bagian desimal akan dibulatkan ke bawah)",
          "hasil = a / b;",
          "std::cout << \"Hasil dari 10 / 3 = \" << hasil << std::endl;",
          "// Modulus menghasilkan sisa dari operasi pembagian",
          "hasil = a % b;",
          "std::cout << \"Hasil dari 10 % 3 = \" << hasil << std::endl;",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Contoh penggunaan operator perbandingan:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>"
        ]
      },
      {
        "type": "p",
        "content": "Contoh penggunaan operator logika:"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>"
        ]
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-5",
    'isVisited': 0,
    "header": {
      "title": "Percabangan",
      "subTitle": "Pelajari apa itu percabangan pada C++"
    },
    "content": [
      {
        "type": "t",
        "content": "Percabangan if"
      },
      {
        "type": "p",
        "content": "Dalam kehidupan sehari-hari, kita sering membuat keputusan berdasarkan kondisi tertentu. Misalnya, \"Kalau hujan, saya akan membawa payung.\" Kalau tidak hujan, ya tidak perlu bawa payung. Logika seperti ini bisa kita tuliskan di program dengan if."
      },
      {
        "type": "p",
        "content": "Di C++, if dipakai untuk mengecek sebuah kondisi. Kondisi ini biasanya berupa perbandingan, misalnya: lebih besar, lebih kecil, sama dengan, dan sebagainya. Jika kondisi tersebut bernilai benar (true), maka perintah di dalam if akan dijalankan. Jika salah (false), maka program akan melewati bagian itu."
      },
      {
        "type": "p",
        "content": "Jadi, if hanya menjalankan perintah jika syaratnya terpenuhi, berikut adalah cara penulisan kode if dalam C++."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "if (kondisi) {",
          "// perintah yang akan dijalankan jika kondisi benar",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Dan berikut adalah contoh penggunaan if dalam program C++"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "using namespace std;",
          "int main() {",
          "int umur = 20;",
          "if (umur >= 18) {",
          "cout << \"Kamu sudah cukup umur untuk membuat KTP.\" << endl;",
          "}",
          "cout << \"Program selesai.\" << endl;",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Kalau nilai umur diganti jadi 15, maka teks \"Kamu sudah cukup umur...\" tidak akan muncul, karena kondisinya salah."
      },
      {
        "type": "t",
        "content": "Percabangan if else"
      },
      {
        "type": "p",
        "content": "Kadang kita tidak hanya punya satu pilihan. Misalnya: \"Kalau nilai ujian ≥ 70, maka lulus. Kalau kurang dari 70, maka tidak lulus.\""
      },
      {
        "type": "p",
        "content": "Bedanya dengan if biasa, if else memberikan dua kemungkinan jalan. Kalau kondisi benar, jalankan perintah di dalam if. Kalau salah, otomatis jalankan perintah di dalam else. Jadi tidak ada kondisi yang diabaikan, salah satu pasti dijalankan."
      },
      {
        "type": "p",
        "content": "Berikut adalah contoh penulisan kode if else pada program C++"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "if (kondisi) {",
          "// perintah jika kondisi benar",
          "} else {",
          "// perintah jika kondisi salah",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Dan berikut adalah contoh penggunaannya dalam program C++"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "using namespace std;",
          "int main() {",
          "int nilai = 60;",
          "if (nilai >= 70) {",
          "cout << \"Kamu lulus!\" << endl;",
          "} else {",
          "cout << \"Kamu belum lulus.\" << endl;",
          "}",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Kalau nilai diganti jadi 80, maka program akan menampilkan \"Kamu lulus!\""
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-6",
    'isVisited': 0,
    "header": {
      "title": "Perulangan for",
      "subTitle": "Pelajari perulangan for pada C++"
    },
    "content": [
      {
        "type": "t",
        "content": "Perulangan for"
      },
      {
        "type": "p",
        "content": "Perulangan digunakan ketika kita ingin menjalankan sebuah perintah berulang kali. Bayangkan kalau kita ingin menampilkan tulisan \"Halo!\" sebanyak 100 kali. Kalau kita tulis cout 100 kali, tentu capek dan tidak efisien. Dengan perulangan, kita cukup menulis sekali, lalu biarkan komputer mengulanginya."
      },
      {
        "type": "p",
        "content": "for biasanya digunakan jika kita sudah tahu berapa kali pengulangan yang diperlukan. Misalnya: \"Cetak angka dari 1 sampai 10.\""
      },
      {
        "type": "p",
        "content": "Struktur for terdiri dari tiga bagian:<br>1. Inisialisasi → biasanya membuat variabel penghitung, misalnya int i = 1;<br>2. Kondisi → perulangan akan terus berjalan selama kondisi ini benar, misalnya i <= 10;<br>3. Perubahan → biasanya menambah nilai variabel penghitung, misalnya i++"
      },
      {
        "type": "p",
        "content": "Berikut adalah cara penulisan perulangan for pada program C++"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "for (inisialisasi; kondisi; perubahan) {",
          "// perintah yang akan diulang",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Dan berikut adalah contoh penggunaannya"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "using namespace std;",
          "int main() {",
          "for (int i = 1; i <= 5; i++) {",
          "cout << \"Perulangan ke-\" << i << endl;",
          "}",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Program di atas akan menampilkan:<br>Perulangan ke-1<br>Perulangan ke-2<br>Perulangan ke-3<br>Perulangan ke-4<br>Perulangan ke-5"
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-7",
    'isVisited': 0,
    "header": {
      "title": "Perulangan while",
      "subTitle": "Pelajari perulangan while pada C++"
    },
    "content": [
      {
        "type": "p",
        "content": "Berbeda dengan for, perulangan while biasanya dipakai saat kita belum tahu pasti berapa kali pengulangan, tetapi tahu kondisinya. Program akan terus mengulang selama kondisinya benar. Kalau kondisi sudah salah, perulangan berhenti."
      },
      {
        "type": "p",
        "content": "Misalnya: \"Terus isi air ke botol selama botol belum penuh.\" Kita tidak tahu butuh berapa kali tuang, tapi tahu syarat berhentinya: ketika botol penuh."
      },
      {
        "type": "p",
        "content": "Dalam while, kita harus hati-hati menambahkan perubahan pada variabel. Kalau lupa menambah atau mengurangi, bisa jadi program jalan selamanya (infinite loop), penulisannya dalam program adalah sebagai berikut"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "while (kondisi) {",
          "// perintah yang diulang",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Dan berikut adalah contoh penggunaannya"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "using namespace std;",
          "int main() {",
          "int i = 1;",
          "while (i <= 5) {",
          "cout << \"Hitungan: \" << i << endl;",
          "i++; // menambah nilai agar kondisi berubah",
          "}",
          "return 0;",
          "}"
        ]
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-8",
    'isVisited': 0,
    "header": {
      "title": "Perulangan do while",
      "subTitle": "Pelajari perulangan do while pada C++"
    },
    "content": [
      {
        "type": "p",
        "content": "do while mirip dengan while, tapi ada perbedaan penting. Pada while, program mengecek kondisi dulu sebelum menjalankan perintah. Jadi kalau kondisi salah dari awal, perintah tidak akan jalan sama sekali."
      },
      {
        "type": "p",
        "content": "Sedangkan do while, perintah dijalankan minimal sekali dulu, baru setelah itu kondisi dicek. Artinya, meskipun kondisi salah dari awal, perintah tetap dijalankan sekali, kode do while ini dapat ditulis dengan cara sebagai berikut."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "do {",
          "// perintah yang diulang",
          "} while (kondisi);"
        ]
      },
      {
        "type": "p",
        "content": "Dan berikut contoh penggunaannya pada program C++."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "using namespace std;",
          "int main() {",
          "int i = 6;",
          "do {",
          "cout << \"Nilai i: \" << i << endl;",
          "i++;",
          "} while (i <= 5);",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Walaupun kondisi i <= 5 sudah salah dari awal (karena i = 6), program tetap akan menampilkan \"Nilai i: 6\" sekali."
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-9",
    'isVisited': 0,
    "header": {
      "title": "Array",
      "subTitle": "Pelajari Array pada C++"
    },
    "content": [
      {
        "type": "t",
        "content": "Apa itu Array ?"
      },
      {
        "type": "p",
        "content": "Yaitu struktur data fundamental yang berupa kumpulan elemen dengan tipe data yang sama, disimpan dalam lokasi memori yang berdekatan (bersebelahan), dan memungkinkan akses data secara efisien menggunakan indeks."
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "#include <string>",
          "int main() {",
          "// Mendeklarasikan sebuah array bernama 'buah' yang bisa menampung 4 string",
          "std::string buah[4];",
          "// Mengisi data ke dalam array",
          "buah[0] = \"Apel\";",
          "buah[1] = \"Mangga\";",
          "buah[2] = \"Jeruk\";",
          "buah[3] = \"Pisang\";",
          "// Menampilkan elemen array menggunakan for loop",
          "std::cout << \"Daftar buah-buahan:\" << std::endl;",
          "for (int i = 0; i < 4; i++) {",
          "std::cout << \"Buah ke-\" << i + 1 << \": \" << buah[i] << std::endl;",
          "}",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "Angka yang didalam kurung adalah array yang menyimpan 4 elemen integer,mulai dari 0 hingga 3 tetapi berjumlah 4 elemen.Lalu dapat di tampilkan menggunakan fungsi for loop,jadi pada elemen array pertama akan ditampilkan lalu lanjut dengan menampilkan elemen array yang kedua"
      }
    ]
  },
  {
    "type": "CPP",
    "id": "cpp-mat-10",
    'isVisited': 0,
    "header": {
      "title": "Class dan Object",
      "subTitle": "Pelajari class dan object pada C++"
    },
    "content": [
      {
        "type": "p",
        "content": "Bayangin kamu lagi bikin blueprint atau cetak biru untuk sebuah mobil. Nah, blueprint itu belum jadi mobil sungguhan, tapi dia punya semua informasi tentang gimana bentuk, warna, dan fitur mobilnya."
      },
      {
        "type": "p",
        "content": "Nah, kalau class itu blueprint, maka object adalah mobil benerannya yang dibuat dari blueprint itu. Jadi object adalah benda nyata yang dibentuk berdasarkan class."
      },
      {
        "type": "p",
        "content": "Contoh penggunaan class dan object"
      },
      {
        "type": "c",
        "title": "Contoh:",
        "content": [
          "#include <iostream>",
          "#include <string>",
          "// Mendefinisikan class 'Mobil'",
          "class Mobil {",
          "public:",
          "// Atribut (variabel) dari class",
          "std::string merk;",
          "std::string warna;",
          "int tahun;",
          "// Method (fungsi) dari class",
          "void displayInfo() {",
          "std::cout << \"Merk: \" << merk << std::endl;",
          "std::cout << \"Warna: \" << warna << std::endl;",
          "std::cout << \"Tahun: \" << tahun << std::endl;",
          "}",
          "};",
          "int main() {",
          "// Membuat object pertama dari class 'Mobil'",
          "Mobil mobil1;",
          "mobil1.merk = \"Toyota\";",
          "mobil1.warna = \"Hitam\";",
          "mobil1.tahun = 2020;",
          "// Membuat object kedua dari class 'Mobil'",
          "Mobil mobil2;",
          "mobil2.merk = \"Honda\";",
          "mobil2.warna = \"Putih\";",
          "mobil2.tahun = 2022;",
          "// Memanggil method untuk menampilkan informasi mobil",
          "std::cout << \"Informasi Mobil 1:\" << std::endl;",
          "mobil1.displayInfo();",
          "std::cout << std::endl;",
          "std::cout << \"Informasi Mobil 2:\" << std::endl;",
          "mobil2.displayInfo();",
          "return 0;",
          "}"
        ]
      },
      {
        "type": "p",
        "content": "class Mobil { ... };: Ini adalah definisi dari sebuah class. class adalah cetak biru (blueprint) atau templat untuk membuat object. Dalam kasus ini, Mobil adalah cetak biru untuk setiap mobil yang akan kita buat."
      },
      {
        "type": "p",
        "content": "std::string merk;, std::string warna;, int tahun;: Ini adalah atribut atau properti dari class. Setiap object yang dibuat dari class ini akan memiliki variabel-variabel ini."
      },
      {
        "type": "p",
        "content": "Mobil mobil1;: Baris ini adalah saat kita membuat object. mobil1 adalah instance atau objek dari class Mobil. Sekarang mobil1 memiliki semua atribut (merk, warna, tahun) dan method (displayInfo()) yang didefinisikan di class."
      },
      {
        "type": "p",
        "content": "mobil1.merk = \"Toyota\";: Kita dapat mengakses dan mengisi nilai ke atribut object menggunakan operator titik (.)."
      }
    ]
  },
  {
    "type": "last"
  }
];