//Jogo Interativo
var h1 = document.querySelector('h1');
var cabeca = document.querySelectorAll('#cabeçalho');
var resultado = document.getElementById('resultado');
var bot1 = document.querySelector('#afirma');
var bot2 = document.querySelector('#nega');

function Recarrega() {
    addEventListener('click', (bot1) => {
        window.location.reload();
    })
}

function afirma() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você resolveu sair, mas está protegido?? ~')
    bot1.innerHTML = "Sim, levei uma máscara e álcool pra me proteger! :)"
    bot2.innerHTML = "Não levei nada para me proteger! :("
    bot1.onclick = afirma1
    bot2.onclick = nega1
    h1.parentNode.removeChild(h1);

}

function nega() {
    var texto = document.querySelector("#cabeçalho p").textContent = (`~ Você resolveu ficar em casa, mas o problema da comida ainda não foi solucionado. ~~ Você abre o seu armário e dá de cara com uma lata de sardinha fechada, o que você vai fazer? ~`)
    bot1.innerHTML = "Abro a lata para verificar se ainda está bom o alimento"
    bot2.innerHTML = "Jogo a lata fora, pois percebo que já faz um tempo e pode estar fora da validade"
    bot1.onclick = afirma2
    bot2.onclick = nega2
    h1.parentNode.removeChild(h1);
}

function afirma1() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você encontra alguns supermercados abertos, mas eles estão infestados de pessoas contaminadas e sem máscara! ~' + '~ o que você vai fazer? ~')
    bot1.innerHTML = "Irei procurar outros supermercados que não estejam com aglomeração"
    bot2.innerHTML = "Entro no primeiro mercado que encontro porque os preços estão mais baixos que nos outros"
    bot1.onclick = afirma3
    bot2.onclick = nega1

}

function nega1() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você encontrou uma pessoa contaminada e foi contaminado!! ~~' + '~ GAME OVER!!');
    bot1.innerHTML = "Você perdeu!!!!"
    bot1.onclick = Recarrega
    bot2.parentNode.removeChild(bot2);
}

function afirma2() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Oh não o alimento está estragado e era o único que você tinha guardado. o que você vai fazer agora? ~')
    bot1.innerHTML = "Continuo em casa e tento contatar um serviço de entrega a domicílios."
    bot2.innerHTML = "Saio de casa, pois tenho família para alimentar e preciso urgente comprar comida."
    bot1.onclick = afirma4
    bot2.onclick = afirma
}

function nega2() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você jogou fora sua última lata de comida, e agora não há mais nada pra comer. o que você vai fazer agora? ~')
    bot1.innerHTML = "Continuo em casa e tento contatar um serviço de entrega a domicílios."
    bot2.innerHTML = "Saio de casa, pois tenho família para alimentar e preciso urgente comprar comida."
    bot1.onclick = afirma4
    bot2.onclick = afirma
}

function afirma3() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Encontramos um supermercado com preços bons e que não está tão cheio. Porém esse supermercado não exige o uso de máscara, quando fomos passar no caixa a atendente parece que está muito doente, e não está usando máscara. o que você vai fazer agora? ~')
    bot1.innerHTML = "Peço gentilmente para a atendente colocar uma máscara."
    bot2.innerHTML = "Ignoro o estado da atendente e continuo a pagar minhas compras mesmo assim."
    bot1.onclick = afirma5
    bot2.onclick = nega5
}

function nega3() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você foi contaminado e depois de alguns dias morreu!! ~')
    bot1.innerHTML = "Você perdeu!!!!"
    bot1.onclick = Recarrega
    bot2.parentNode.removeChild(bot2)
}


function afirma4() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('Essa não, os serviços de entrega não estão funcionando hoje e você já não tem mais o que comer em casa. o que você vai fazer agora? ~')
    bot1.innerHTML = "Saio na rua para tentar encontrar algo para comer."
    bot2.innerHTML = "morro de fome"
    bot1.onclick = afirma
    bot2.onclick = nega6
}

function nega4() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você foi contaminado e depois de alguns dias morreu!! ~')
    bot1.innerHTML = "Você perdeu!!!!"
    bot1.onclick = Recarrega
    bot2.parentNode.removeChild(bot2)
}


function afirma5() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('Parece que a atendente se sentiu ofendida porque você disse para ela colocar a máscara e começou a discutir com você. o que você vai fazer? ~')
    bot1.innerHTML = "Peço alguém para chamar o gerente para resolvermos essa situação."
    bot2.innerHTML = "Me irrito e saio do mercado sem comprar nada."
    bot1.onclick = afirma7
    bot2.onclick = nega7
}

function nega5() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você morreu!! ~')
    bot1.innerHTML = "Você perdeu!!!!"
    bot1.onclick = Recarrega
    bot2.parentNode.removeChild(bot2)
}


function afirma6() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('O gerente é chamado e ele apoia você pois o cliente sempre tem razão. Ele pune a funcionária e pergunta se você se importa de se dirigir até outro caixa. Você percebe que o único caixa com uma atendente com máscara está com uma fila enorme. o que você vai fazer? ~')
    bot1.innerHTML = "Enfrento a fila gigante, pois preciso comprar comida para mim e para minha família."
    bot2.innerHTML = "Saio desse supermercado e tento encontrar outro."
    bot1.onclick = afirma8
    bot2.onclick = nega7
}

function nega6() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('Você encontra outro supermercado em que os funcionários estão mais protegidos. Porém nesse os preços são mais caros. o que você vai fazer? ~')
    bot1.innerHTML = "Compro nesse mercado mesmo independente do preço pois preciso levar comida para casa."
    bot2.innerHTML = "Volto para casa sem comprar nada."
    bot1.onclick = afirma9
    bot2.onclick = nega9
}

function afirma7() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Consigo fazer minhas compras, apesar de gastar mais, mas volto pra casa sã e salvo. ~')
    bot1.innerHTML = "Parabéns você venceu!!!"
    bot1.onclick = Recarrega
    bot2.parentNode.removeChild(bot2);
}

function nega7() {
    var texto = document.querySelector("#cabeçalho p").textContent = ('~ Você voltou para casa, mas como não há nada para comer, você morreu!! ~')
    bot1.innerHTML = "Você perdeu!!!!"
    bot1.onclick = Recarrega
    bot2.parentNode.removeChild(bot2);
}