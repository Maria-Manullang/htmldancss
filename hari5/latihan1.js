console.log("Hello World!");
var nama = 'Fauziah';
console.log(nama);

//1 Tipe data
var nama = 'Manshour';
var umur = 32;
var sudah_menikah = true;
var nama_anak = ['Ghamidi','Fauziah'];
var perabotan = {'mobil':'Ferrari','jam':'rolex'};
var hutang = null;
var rumah;

console.log(typeof umur);

//2 Operator Penugasan
var x = 29;
var y = 19;
console.log('Nilai x sebelum assignment: ' + x + '<br/>');
x += y;
console.log('Nilai x setelah assignment: ' + x + '<br/>');

//3 Operator perbandingan
var x = 29;
var y = 19;
console.log( typeof x == y );

//4 Operator increment decrement
var x = 13;
++x;
console.log(x);

//5 Operator String
var x = 'Halo';
var y = 'Coders';
var z = x + ' ' + y;

console.log('x: ' + x + '<br/>')
console.log('y: ' + y + '<br/>')
console.log('z: ' + z + '<br/>')

//6 Operator Logika
var x = true;
var y = true;
 
console.log('x        : ' + x + '<br/>');
console.log('y        : ' + y + '<br/>');
console.log('!x       : ' + !x + '<br/>');
console.log('!y       : ' + !y + '<br/>');
console.log('x and y  : ' + (x && y) + '<br/>');
console.log('x or y   : ' + (x || y) + '<br/>');
console.log('x xor y  : ' + Boolean(x ^ y) + '<br/>');

//7 statement if else
var panjang = 7; // atau diameter lingkaran
var lebar = 3;
var tinggi = 2; // tinggi bangun ruang
 
// tinggi = 0;
if(tinggi > 0)
{
console.log('Luas selimut balok: ' + panjang * lebar * tinggi + '<br/>');
    console.log('Luas selimut tabung: ' + 2 * 3.14 * (panjang/2) * (panjang/2 + tinggi) + '<br/>');
}
else
{
console.log('Luas persegi: ' + panjang * lebar + '<br/>');
    console.log('Luas lingkaran: ' + 0.25 * 3.14 * (panjang*panjang) + '<br/>');
}

//8 stament if else else
console.log('Nilai: ');

var skor = 83;
if(skor < 25)
{
    console.log('D');
}
else if(skor < 50)
{
    console.log('C');
}
else if(skor < 80)
{
    console.log('B');
}
else

//9 statement if bersarang
var matematika = 63;
var wawancara = 'A';

if(matematika > 60)
{
    var keterangan = 'Lolos tes, dengan predikat ';
    if(wawancara == 'A')
    {
        keterangan += 'Memuaskan';
        console.log(keterangan);
    }
    else if(wawancara == 'B')
    {
        keterangan += 'Cukup';
        console.log(keterangan);
    }
    else
    {
        keterangan += 'Tidak lolos tes';
        console.log(keterangan);
    }
}

//10 statement switch case
console.log('<img src="');

var les_animaux = 'chiens';
switch(les_animaux)
{
    case 'chats':
    	console.log('http://i.imgur.com/4AiXzf8.jpg');
        break;
    case 'chiens':
    	console.log('http://i.imgur.com/A8eQsll.jpg');
        break;
    case 'singes':
    	console.log('http://i.imgur.com/CXwaR8c.jpg');
        break;
    case 'les humains':
    	console.log('http://i.imgur.com/u0mFu.jpg');
        break;
}

console.log('"/>');

//11 switch(2)
var binatang = 'kambing';
switch(binatang)
{
    case 'ayam':
      console.log(binatang + " termasuk hewan omnivora");
        break;
    case 'sapi':
      console.log(binatang + " termasuk hewan herbivora");
        break;
    case 'kambing':
      console.log(binatang + " termasuk hewan herbivora");
        break;
    case 'serigala':
      console.log(binatang + " termasuk hewan karnivora");
        break;
    case 'harimau':
      console.log(binatang + " termasuk hewan karnivora");
        break;
    case 'tikus':
      console.log(binatang + " termasuk hewan omnivora");
        break;
    default:
      console.log(binatang + " tidak terdaftar di program");
      break;
}

//12 switchh
var binatang = 'babi';
switch(binatang)
{
    case 'ayam':
    case 'tikus':
      console.log(binatang + " termasuk hewan omnivora");
        break;
    case 'sapi':
    case 'kambing':
      console.log(binatang + " termasuk hewan herbivora");
        break;
    case 'serigala':
    case 'harimau':
      console.log(binatang + " termasuk hewan karnivora");
        break;
    default:
      console.log(binatang + " tidak terdaftar di program");
      break;
}

//13 Array
var sayuran = ['kangkung','bayam','brokoli'];
 
console.log('Beberapa nama sayuran:' + '<br/>');
console.log('1. ' + sayuran[0]);

//14 Array berindeks

var sayuran = ['kangkung', 'bayam', 'kol'];
sayuran[0] = 'selada';
sayuran[3] = 'brokoli';
console.log('Output: ');
console.log(sayuran)

//15 Array asosiatif
var kegemaran = {
    aktivitas:'Berenang',
    makanan:'Singkong Keju', 
    minuman:'Jus Alpukat'};
    
console.log(kegemaran)

//16 array berasarang atau array multidimensi
var herbivora = new Array('kambing', 'sapi');
var karnivora = new Array('harimau', 'serigala');
var omnivora = new Array('ayam', 'monyet');
var binatang = new Array(herbivora, karnivora, omnivora);

// Isi Array `binatang`
console.log('Binatang: ');
console.log(binatang);

//17 menghitung jumlah array
var herbivora = new Array('kambing', 'sapi');
var karnivora = new Array('harimau', 'serigala');
var omnivora = new Array('ayam', 'monyet');

var binatang = new Array(herbivora, karnivora, omnivora);
console.log('Jumlah isi Array `binatang`: ');
console.log(binatang[0].length+binatang[1].length+binatang[2].length);

//18 perulangan while
var x = 1;
while(x <= 5)
{
    console.log( x + '<br/>' );
    x++;
}

//19 perulangan do while
var x = 1;
do
{
    console.log( x + '<br/>' );
    x++;
}
while(x <=5);

//20 Perulangan dengan for
var x;
for(x=10;x>0;x-=2)
{
    console.log( 'Nomor: '+ x );
}

//21 Perulangan dengan foreach
var warna = new Array('papua','nusa tenggara','maluku','sulawesi','kalimantan');
warna.forEach(function(value, index)
{
    console.log('Indeks ke-' + index + ' berwarna ' + value + '<br/>');
});

//22 foreach bersarang untuk menampilkan setiap elemen array yang ada di dalam array (array bersarang/multidimensi)
var herbivora = new Array('kambing', 'sapi', 'kuda');
var karnivora = new Array('harimau', 'serigala', 'anjing');
var omnivora = new Array('ayam', 'monyet', 'beruang');
var binatang = new Array(herbivora, karnivora, omnivora);

  binatang.forEach(function(jenis)
  {
      jenis.forEach(function(nama)
      {
          console.log(nama + '<br/>');
      });
  });

  //	TUGAS nampilkan indeks dua dimensi
  var herbivora = new Array('kambing', 'sapi', 'kuda');
var karnivora = new Array('harimau', 'serigala', 'anjing');
var omnivora = new Array('ayam', 'monyet', 'beruang');
var binatang = new Array(herbivora, karnivora, omnivora);

  binatang.forEach(function(jenis,index)
  {
      
      jenis.forEach(function(nama,index)
      {
          console.log('Indeks ke-'+index+' '+'ada binatang'+' '+ nama + '<br/>');
      });
  });

//23 Memahami Fungsi
var kalimat = 'Saya suka sate';
var output = kalimat.replace('sate','rendang');
console.log(output);

//24 Membuat Fungsi
// buat fungsi dibawah ini
function greetings(){
    console.log('Selamat belajar Javascript!');
}
// panggil fungsi di bawah ini
greetings();

//26 Skup variabel pada fungsi
// var x;
var x = 5;
function kuadrat()
{
    x *= x;
}

console.log('sebelum dikuadratkan: ' + x + '<br/>');
kuadrat();
console.log('setelah dikuadratkan: ' + x + '<br/>');

//27.skup variabel pada fungsi
function profil(nama, kota, lahir)
{
    console.log('Nama saya ' + nama + '<br/>');
    console.log('Saya berasal dari kota ' + kota + '<br/>');
    console.log('Lahir pada tahun '+ lahir + '<br/>');
    
}
var nama = 'James';
var kota = 'Medan';
var lahir ='1999';

profil(nama, kota, lahir);

//28. Argumen referensi pada fungsi
function cetakPesan(nama, bahasa='id')
{
    var pesan = 'Selamat datang, ' + nama;
    if(bahasa == 'en')
    {
        pesan = 'Welcome, ' + nama;
    }
    else if(bahasa=='id'){
    console.log(pesan);
    }
    console.log('Mohon maaf bahasa yang diminta belum terdaftar');
}
var nama = 'Bambang';
cetakPesan(nama, bahasa='in');

//29. Mengembalikan nilai fungsi
// fungsi untuk menghitung luas lingkaran
function luasLingkaran(length)
{
    return 1/4 * 3.14 * length * length;
}

// menghitung luas berdasarkan diameter
var diameter = 14;
var luas = luasLingkaran(diameter);
console.log('luas berdasarkan diameter: ' + luas +'<br/>');

// menghitung luas berdasarkan jari-jari
var radius = 7;
var luas = luasLingkaran(radius, false);
console.log('luas berdasarkan radius: ' + luas +'<br/>');


//menghitung luas berdasarkan use_diameter
var use_diameter=true;
if(use_diameter=true){
    console.log('luas berdasarkan diameter: ' + luas +'<br/>');
}console.log('luas berdasarkan radius: ' + luas +'<br/>');

//30. Mengenal string

var nama = 'Jenderal Soedirman';
console.log('Panjang string "' + nama + '" adalah ' + nama.length + ' karakter <br/>');

var pasukan = "Pasukan berkata: \"Kami adalah Gerilyawan\". <br/>";
console.log(pasukan);

//31. Transformasi teks string
var teks = "Valentino Rossi adalah seorang pembalap MotoGP";
console.log(teks + '<br/>');
console.log(teks.toUpperCase() + '<br/>');
console.log(teks.toLowerCase() + '<br/>');

//case insensitive
//32. Mencari dan Mengganti Teks dalam String
//string.replace(searchvalue, newvalue)
var pesan = "saya suka baso sapi, sate kambing dan iga bakar";
var hasil=pesan.replace(/a/gi,"b");
console.log(hasil);

//perform global
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");

//33.Menghapus Karakter di Depan dan Belakang String
var herbivora = new Array('    kambing   ', '   sapi    ', '   kuda   ');
herbivora.forEach(function(nama,index){
    // gunakan method trim() atau yang lain dibawah ini
console.log(nama);
console.log('Sebelum menghapus karakter depan dan belakang, panjang string var nama:'+nama.length);
nama=nama.trim();
console.log(nama);
console.log('Sebelum menghapus karakter depan dan belakang, panjang string var nama:'+nama.length);
    
})