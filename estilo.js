let n1 = document.getElementById('num')
let lista = document.getElementById('final')
let res = document.getElementById('res')
let valores = []

function isnum(n){
    if(Number (n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false 
    }
}

function finlist(n, l){
    if (l.indexOf(Number(n)) != - 1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if ( isnum(n1.value) && ! finlist(n1.value, valores)){
            valores.push(Number(n1.value))
            let item = document.createElement('option')
            item.text = `Valor ${n1.value} adicionado`
            lista.appendChild(item)
    } else {
        window.alert('VALOR INVALIDO OU JA ENCONTRADO NA LISTA')
    }

    n1.value = ''
    n1.focus()
}
    function fim() {
        if(valores.length == 0){
            window.alert('[ERRO]digite um valor')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0 
            let media = 0
            
            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior )
                maior = valores [pos]
                if(valores[pos] < menor)
                menor = valores [pos]

            }

            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>ao todo, temos ${tot} numeros cadastrados.</p>`
            res.innerHTML += `<p>o maior valor encontrado foi ${maior}</p>`
            res.innerHTML += `<p>o menor valor encontrado foi ${menor}</p>`
            res.innerHTML += `<p>a soma entre todos os valores é ${soma}</p>`
            res.innerHTML += `<p>a media é ${media}</P>`
        }
 }
