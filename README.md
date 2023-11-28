  Latar Belakang Project 

  Project ini merupakan final project dari kelas dicoding "Belajar Membuat Aplikasi Web dengan React" sehingga pembuatan dilakukan dengan menggunakan React JS. Project ini merupakan sebuah aplikasi untuk menyimpan catatan pribadi, user dapat menginput data catatan namun belum dapat tersimpan pada database. Dalam project ini terdapat beberapa fungsi yang dibutuhkan dalam project, sebagai berikut:

1. Menampilkan Daftar Catatan
   <ul>
     <li>Aplikasi harus mampu menampilkan daftar catatan dengan data awal (initial data) yang telah kami sediakan.</li>
   <li>Memanfaatkan state component untuk menyimpan data catatan.</li>
   <li>Menggunakan teknik array map untuk menampilkan daftar catatan.</li>
   </ul>
   
2. Menambahkan Catatan
   <ul>
   <li>Aplikasi harus mampu menambahkan data catatan baru.</li>  
   <li>Memanfaatkan controlled component dalam membuat form input.</li>  
   <li>Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh).</li>  
   <li>Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut</li>  
   </ul>
   ![image](https://github.com/Hosea-Portfolio/Aplikasi-Catatan-Pribadi_Final-Project/assets/152163145/bbf1be18-e9b2-4877-8fb1-32bc35526c85)


3. Menghapus Catatan
   <ul>
     <li>Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan.</li>
     <li>Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong.</li>
   </ul>

4. Terdapat Fitur Pencarian Catatan
   <ul>
     <li>Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan</li>
     <ul>
       <li>Jika kolom pencarian tidak kosong, maka aplikasi hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan.</li>
       <li>Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.</li>
     </ul>
     <li>Memanfaatkan controlled component dalam membangun fitur catatan.</li>
   </ul>
      
5. Terdapat Limit Karakter pada Input Judul Catatan
   <ul>
     <li>Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter.</li>
     <li>Menggunakan state dalam melimitasi, bukan atribut maxlength.</li>
     <li>Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.</li>
   </ul>

6. Terdapat Fitur Arsip Catatan
   <ul>
     <li>Aplikasi memiliki fitur arsip catatan.</li>
     <li>Aplikasi harus menyediakan tombol arsipkan/pindahkan untuk mengarsipkan atau memindahkan catatan dari arsip.</li>
     <li>Daftar catatan yang diarsip harus ditampilkan pada tempat terpisah dari catatan yang tidak diarsip.</li>
   </ul>
    
    
    
