<script>

/*
*/
  function validar(form)
{
    if (bebida.selecbebida.options[bebida.selecbebida.selectedIndex].value == "1")

    {

    alert("HA ELEGIDO: RON");
    document.getElementById('precio').value = 150.00;
    document.getElementById('txtigv').value = (150*0.19);
    document.getElementById('importetxt').value = (150.00);

    form.mes.focus(); return true;
    }
    else if (bebida.selecbebida.options[bebida.selecbebida.selectedIndex].value == "2")

    {

    alert("HA ELEGIDO: WHISKY");
    document.getElementById('precio').value = "170.00";
    document.getElementById('txtigv').value = (170*0.19);
    document.getElementById('importetxt').value = (170);

    form.mes.focus(); return true;

    }
    else if (bebida.selecbebida.options[bebida.selecbebida.selectedIndex].value == "3")

    {

    alert("HA ELEGIDO: PISCO");
    document.getElementById('precio').value = "210.00";
    document.getElementById('txtigv').value = (210*0.19);
    document.getElementById('importetxt').value = (210);

    form.mes.focus(); return true;

    }
      form.submit();
    }
    /*situacion funcion*/

    function recar()
    {
           var opcion = document.frmrecargo.chekRecargo; //acceso al botón
           if (opcion.checked == true) { //botón seleccionado
              alert("Sele se le hizo un recargo de: s/. 7.00")
              document.getElementById('txtrecar').value = "7.00";
              form.mes.focus(); return true;
              }
     }

     function situacion()
    {
           var opcion1 = document.Nuevo.radionuevo; //acceso al botón
           var opcion2 = document.Nuevo.radioantiguo; //acceso al botón
           if (opcion1.checked == true) { //botón seleccionado
              alert("Se le hizo un descuento de: s/. 5.00")
              document.getElementById('txtdesc').value = "5.00";
              form.mes.focus(); return true;
              }

            else if (opcion2.checked == true) { //botón seleccionado
              alert("Se le hizo un descuento de: s/. 10.00")
              document.getElementById('txtdesc').value = "10.00";
              form.mes.focus(); return true;
              }

      }

     function formapago(){

        var A1 = document.pago.radiocontado; //acceso al botón
        var A2 = document.pago.radiopartes; //acceso al botón

        var valorimporte =document.derechatxt.importetxt.value;
        var valorigv=document.derechatxt.txtigv.value;
        var impor=document.derechatxt.importetxt.value;

        var reca=document.izquierdatxt.txtrecar;
        var des=document.izquierdatxt.txtdesc;
        var rec_desc=document.izquierdatxt;
        var invis=document.derechatxt.invisible;
        var tot=document.derechatxt.txttotal;


        impor=parseFloat(valorimporte)+parseFloat(valorigv);
        tot=parseFloat(valorimporte)+parseFloat(valorigv);
        if (A1.checked == true) {
          //forma de pago
           alert("Se le hizo un recargo de: s/. 0.00")
           document.derechatxt.importetxt.value=impor;
           document.getElementById('importetxt').value =impor ;


           document.getElementById('txttotal').value =tot+((txtrecar.value)-(txtdesc.value));
          form.mes.focus(); return true;
          //fin forma de pago

           } else if (A2.checked == true)
           {
             //forma de pago
          var numero = document.izquierdatxt.txtrecar;
           alert("Se le hizo un recargo de: s/. 5.00")
           numero = parseInt(txtrecar.value)+5.00;
           document.getElementById('txtrecar').value =numero ;
           //forma de pago
           document.derechatxt.importetxt.value=impor;
           document.getElementById('importetxt').value =impor ;
           document.getElementById('txttotal').value =tot+((txtrecar.value)-(txtdesc.value));


           form.mes.focus(); return true;


           } }
           function totalfinal(){
             var valigv=document.derechatxt.txtigv.value;
             var valimporte =document.derechatxt.importetxt.value;
             var totpago=document.derechatxt.txttotal.value;
             totpago=impor+tot;
             document.getElementById('txttotal').value =totpago ;
           }

</script>
