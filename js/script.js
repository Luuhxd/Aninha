
        function logar(){

            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;

            if(login == "dexter" && senha == "miami123"){
                alert('Você acertou ');
                location.href = "home.html";
            }else{
                alert('Usuario ou senha incorretos');
            }

        }