<?php
include ('connect.php');

function retorno_productos($q){
    //$q = $_GET['q'];

    if(str_contains($q,'energetica')){
      $q = 'bebida energetica';
    }else{
      $q = str_replace(array('%22'),'',$q);
    }
    $conet = conectar();
    
    $category = "SELECT id FROM category where name='".$q."'";
    $Qcategory = $conet->query($category);
    $product = "SELECT * FROM product where categoty ='".$Qcategory."'";
    echo $product;
    $Qproduct = $conet->query($product);

    $dataProducto = array();
    for ($x = 0; $x < mysql_num_rows($Qproduct); $x++) {
        $producto = $x['name'];
        $tabla.="<table>";
        $tabla.="<td>" . $product . "</td>";
        $tabla.="</table>";
        $dataProducto[] = mysql_fetch_assoc($Qproduct);
    }

    return $json = json_encode($dataProducto);

}

$q = $_GET['q'];
//echo $q;
retorno_productos($q);
?>