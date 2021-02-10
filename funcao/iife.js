// IIFE - Immediately Invoked Function Expression

(function (nome) {
    this.nome = nome
    console.log(this.nome)
    console.log('Será Executado na Hora')           //Tudo executado só toca o escopo local
    console.log('Foge do Escopo Mais abrangente')
}) ('Lucas')



