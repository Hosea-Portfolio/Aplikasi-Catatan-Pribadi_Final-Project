  <h2><b>Latar Belakang Project</b></h2>

  Project ini merupakan final project dari kelas dicoding "Belajar Membuat Aplikasi Web dengan React" sehingga pembuatan dilakukan dengan menggunakan React JS. Project ini merupakan sebuah aplikasi untuk menyimpan catatan pribadi, user dapat menginput data catatan namun belum dapat tersimpan pada database. Dalam project ini terdapat beberapa fungsi yang dibutuhkan dalam project, sebagai berikut:

1. <b>Menampilkan Daftar Catatan</b>
   <ul>
     <li>Aplikasi harus mampu menampilkan daftar catatan dengan data awal (initial data) yang telah kami sediakan.</li>
   <li>Memanfaatkan state component untuk menyimpan data catatan.</li>
   <li>Menggunakan teknik array map untuk menampilkan daftar catatan.</li>
   </ul>
   
2. <b>Menambahkan Catatan</b>
   <ul>
   <li>Aplikasi harus mampu menambahkan data catatan baru.</li>  
   <li>Memanfaatkan controlled component dalam membuat form input.</li>  
   <li>Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh).</li>  
   <li>Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut</li>  
   <img src="https://github.com/Hosea-Portfolio/Aplikasi-Catatan-Pribadi_Final-Project/assets/152163145/3d8ea1c6-bebc-4df8-a7c7-c6f91f295d48"/>
   </ul>

3. <b>Menghapus Catatan</b>
   <ul>
     <li>Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan.</li>
     <li>Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong.</li>
   </ul>

4. <b>Terdapat Fitur Pencarian Catatan</b>
   <ul>
     <li>Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan</li>
     <ul>
       <li>Jika kolom pencarian tidak kosong, maka aplikasi hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan.</li>
       <li>Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.</li>
     </ul>
     <li>Memanfaatkan controlled component dalam membangun fitur catatan.</li>
   </ul>
      
5. <b>Terdapat Limit Karakter pada Input Judul Catatan</b>
   <ul>
     <li>Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter.</li>
     <li>Menggunakan state dalam melimitasi, bukan atribut maxlength.</li>
     <li>Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.</li>
   </ul>

6. <b>Terdapat Fitur Arsip Catatan</b>
   <ul>
     <li>Aplikasi memiliki fitur arsip catatan.</li>
     <li>Aplikasi harus menyediakan tombol arsipkan/pindahkan untuk mengarsipkan atau memindahkan catatan dari arsip.</li>
     <li>Daftar catatan yang diarsip harus ditampilkan pada tempat terpisah dari catatan yang tidak diarsip.</li>
   </ul>
    
    
    
