const frm =document.querySelector("form")
const resp =document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)
    const peso = Number(frm.inPeso.value)
    
    let imc
    let aviso 
    imc = peso/(altura*altura)
    if(imc <= 18.5 ){
        aviso = ("abaixo do peso")
    }else if(imc > 18.5 && imc <=24.99 ){
        aviso = ("no peso ideal")
    }else if(imc >= 25 && imc <=29.99){
        aviso = (" com sobrepeso")
    }else{
        aviso = ("com obesidade")
    }

    resp.innerText = `Olá, ${nome} Seu IMC é ${imc.toFixed(3)}, você está ${aviso}` 
})