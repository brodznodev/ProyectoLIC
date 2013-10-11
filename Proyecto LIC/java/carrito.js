function meterencarro(formu) {
unidades=formu.numpedido.value;
descripcion=formu.producto.value;
if (confirm("El siguiente producto se va a añadir al carro de la compra.\n\n " + descripcion + " \n\n¿Está usted. de acuerdo?")) {
numeroregistro = 0;  
numeroregistro = getcookie("numerodeorden");
numeroregistro++;
if ( numeroregistro > 10 )
     alert("ATENCIÓN\nSu carrito esta lleno.\nPor favor, acceda a la hoja de pedido.\nGracias.");
else {
actualizarbase = formu.numpedido.value + "|"  + formu.precio.value  + "|" + formu.referencia.value + "|" + formu.producto.value;
nuevopedido = "Order." + numeroregistro;
setcookie (nuevopedido, actualizarbase, null, "/");
setcookie ("numerodeorden", numeroregistro, null, "/");

aviso = "PRODUCTO SELECCIONADO\n\n" + "Cantidad: " + unidades + " unidad/es.\n"
+ "Producto: \n" + descripcion + ".\n\nPulse sobre Ver Carro para acceder\na su lista de compra.\nGracias";
alert(aviso);
}
}
}

function getcookieval (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
  endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

function getcookie (name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen)
        {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getcookieval (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
        }
   return null;
}

function setcookie (name,value,expires,path,domain,secure) {
   document.cookie = name + "=" + escape (value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
}

