@extends('visitor.layouts.master')
@section('content')

<head>
<style>
       .space {
               text-align: center;
           }
       </style>  
      
</head>
<body>

<div class='container'>
<table border ="3">
<td>
<!-- <div class="col-10">
<div  class="dropdown">
 
<div  class="dropdown-menu nav-link nav-dark ml-auto">

  <h3  class="dropdown-header btn-lg" >FAQ</h6>
    <a  class="dropdown-item" type="button">Payment</a>
    <a class="dropdown-item" type="button">How to shop</button>
    <a class="dropdown-item" type="button">Delivery</button>
    <a class="dropdown-item" type="button">Product return</button>
    <a class="dropdown-item" type="button">Our store</button>
    <a class="dropdown-item" type="button">Terms and condition</button>
  </div>
</div>
</div> -->
</td>
<td>
<h1 class="space">PAYMENT</h1>

<h2>Store Purchase</h2>


<h4>CASH</h4>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Indonesia_2004_100000r_o.jpg" id="showgambar" style="max-width:150px;max-height:100px;" />

<h4 class="mt-3">TRANSFER BANK</h4>
<img src="iconfinder_BCA_2425807.svg" id="showgambar" style="max-width:100px;max-height:100px;"/>  
<img src="iconfinder_BRI_2425806.svg" id="showgambar" style="max-width:100px;max-height:100px;"/> 
<img src="iconfinder_Mandiri_2425804.svg" id="showgambar" style="max-width:100px;max-height:100px;"/>

<h4 class="mt-3">VIA ONLINE</h4>
<p> For online purchases, payment can be made via bank transfer to a virtual account, then confirm your payment to the WA number or email below: </p>
<p> <img src="logo-whatsapp-png-46044.png" id="showgambar" style="max-width:30px;max-height:30px;"> 0813-2943-1519</p>
<p> <img src="logo-whatsapp-png-46044.png" id="showgambar" style="max-width:30px;max-height:30px;"> 0895-6124-3455</p>
<p> <img src="email-logo-png-1114.png" id="showgambar" style="max-width:30px;max-height:30px;"> sales_onankomputer@gmail.com</p>

</td>
</table>
</div>
</body>

@endsection