<?php

$q = $_GET['q'];

if(str_contains($q,'energetica')){
  $q = 'bebida energetica';
}else{
  $q = str_replace(array('%22'),'',$q);
}

if($server->connect_errno){
  $resultado = array("fallo al conectar a Mysql:(".$server->connect_errno.")".$server->connect_error);
  echo $resultado;
  die;
}else{
  //echo "conectado";

  //echo $server->host_info."\n";
  $server->set_charset("utf8");
  //---------------Querrys-------------------
  $category = "SELECT id FROM category where name='".$q."'";
  $Qcategory = $server->query($category);
  $product = "SELECT * FROM product where categoty ='".$Qcategory."'";
  echo $product;
  $Qproduct = $server->query($product);




  if(!$Qcategory && !$Qproduct ){
      echo mysql_error();
      die;
  }

  //-------recopilacion de las tablas-------
  // create data object
  /*$dataCategoria = array();
  for ($x = 0; $x < mysql_num_rows($Qcategory); $x++) {
    $dataCategoria[] = mysql_fetch_assoc($Qcategory);
  }*/

  $dataProducto = array();
  for ($x = 0; $x < mysql_num_rows($Qproduct); $x++) {
    $dataProducto[] = mysql_fetch_assoc($Qproduct);
  }


  //---------close connection--------------
  mysql_close($server);
}
//----------traspaso a JSON--------------


//echo json_encode($dataCategoria);
$json = json_encode($dataProducto);
header('Content-Type: application/json; charset=utf8');
echo $json;

?>