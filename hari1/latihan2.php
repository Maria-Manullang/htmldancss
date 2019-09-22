<!DOCTYPE html>
<html>
<head>
    <title>Dasar Html</title>
    <style>
    table,
    th,
    td{
        border: 1px solid red;
    }
 
    table{
        border-collapse: collapse;
        width: 100%;
    }
 
    th{
        height: 50px;
    }
 
    th,
    td{
        padding: 15px;
        text-align: left;
    }
    </style>
</head>
<body>
<!-- colspan untuk menggabungan dua judul kota misalnya nomor urut 
rowspan untuk menggabungkan kolom kebawah yang memiliki identitas sama-->
    <table border="2">
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Roy</td>
            <td>Bandung</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Si Boy</td>
            <td>Jakarta</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Roni</td>
            <td>Surabaya</td>
        </tr>
    </table>
</body>
</html>
