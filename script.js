
// Aparecer o menu mobile

let n=0;

$( "#btn-menu" ).click(function() {

    if(n===0){
        $( "#hidder-menu" ).css("display","flex")
        n=1;
        $( "#img-toggle").attr("src","./imagem/icons8-x-48 (1).png");
          
    }else if(n===1){
        $( "#hidder-menu" ).css("display","none")
        n=0
        $( "#img-toggle").attr("src","./imagem/icons8-menu-arredondado-50.png ");
        
    }
  });