let n=0;

$( "#btn-menu" ).click(function() {

    if(n===0){
        $( "#hidder-menu" ).css("display","flex")
        n=1;
    }else if(n===1){
        $( "#hidder-menu" ).css("display","none")
        n=0
    }
  });