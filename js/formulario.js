$(function(){

    
    formularioPrenchido(this);


    const Nome = $('input[name=Nome]').val();
    const Telefone = $('input[name=Telefone]').val();
    const Email = $('input[name=Email]').val();

    function formularioPrenchido(){
    $('.form').first().submit(function(e){ 
        e.preventDefault();
        mail();
        tele();
        name();
        // console.log(Nome,Telefone,Email);
        });
    }

    function tele(){
       var telefone = Telefone.match(/^[0-9]$/)
        if(telefone == telefone){
            return Telefone
        }else{
            $('input[type=text]').css('border','2px solid red');
        }
    }

    function mail(){
    var ma = Email 
       var email = Email.match(/^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) 
        if(email == email){
            return Email
        }else{
            $('input[type=text]').css('border','2px solid red');
        }
    }

     function name(){  //melhora condiçao e resultados

        if(Nome == " " || Nome == null || Nome.lenght < 3) {
            alert("Por favor, indique o seu nome.");
            Nome.focus();
            return false;
        }
    }

    // estudar e usar essas funçoes nativas para validar o form 

    // .length(); me retorna quantos caracteres que tem na string
    // .split();  me retorna tudo na string
    // .match();  me retorna uma parte da string por uma RegExp
    // document.getElementById("demo").innerHTML = res;

})