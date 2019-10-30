 //operação que vai ser realizada ao apertar o botão
    function botao(){
        var pl1 = document.getElementById("placeholder1").value
    var pl2 = document.getElementById("placeholder2").value
    var pl3 = document.getElementById("placeholder4").value
    var n = pl2 * 100 
    var p = n / pl1
    var j = p.toFixed(2) + '%'
    var r = j + pl3 
    document.getElementById("placeholder3").value = j;
    if(p > 20){ 
    document.getElementById("test").innerHTML = `${pl3} você gasta ${j} da sua renda com eletrônicos, você esta sendo consumista!`
    }
 
    else{
     document.getElementById("test").innerHTML = `${pl3} você não esta sendo consumista, o meio ambiente agradece, parabéns!!!`   
    }
     
    
    if(pl1 == ""){
        document.getElementById("test").innerHTML = ""
        document.getElementById("placeholder3").value = ""
    }





    
    //conferir se todos os campos estão preenchidos
    if(pl1 == ""){
        window.alert("preencha todos os campos!")
      
    }

       
    
       }
       //limpar display
    function clearDisplay(){
       document.getElementById('placeholder1').value = ''; 
       document.getElementById('placeholder2').value = '';
       document.getElementById('placeholder3').value = ''; 
       document.getElementById('placeholder4').value = '';   
       document.getElementById("test").innerHTML = "";
    }
    

  