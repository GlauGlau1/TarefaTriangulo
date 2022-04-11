window.onload = function(){
    let botao = document.getElementById("verifica");
    botao.addEventListener("click", function(){
      
        let result = document.getElementById("resultado");
        let a = parseInt(document.getElementById("lado1").value);
        let b = parseInt(document.getElementById("lado2").value);
        let c = parseInt (document.getElementById("lado3").value);

        if ((a+b>c) && (a+c>b) && (b+c>a)){
            if(a==b && b==c) result.value = "Triângulo Equilátero";
            else if (a==b || a==c || b==c) { result.value = "Triângulo Isóceles";
            } else 
            result.value = "Triângulo Escaleno";
            }else result.value = "Com esses valores não conseguimos formar um triângulo";
    });

}