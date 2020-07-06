$.getJSON('dados/pokedex.json', function(data){    
  $('div').hide(1)
 let botaoAdicionar = document.querySelector("#adcionar")
   
     botaoAdicionar.addEventListener("click", function(event) {
     event.preventDefault()
      $('div').show(2000)
     let form = document.querySelector("#form-adiciona")
     let numero = form.numero.value*1 
     document.getElementById("number").innerHTML = `Número: ${data[numero-1].id}`
     document.getElementById("pokemon").innerHTML = `Nome: ${data[numero-1].name.english}`
     document.getElementById("type").innerHTML = `Tipo: ${data[numero-1].type}`
     document.getElementById("hp").innerHTML = `HP: ${data[numero-1].base.HP}`
     document.getElementById("atack").innerHTML = `Atack: ${data[numero-1].base.Attack}`
     document.getElementById("defense").innerHTML = `Defense: ${data[numero-1].base.Defense}`
     document.getElementById("satack").innerHTML = `Sp Atack: ${data[numero-1].base.Spattack}`
     document.getElementById("sdefense").innerHTML = `Sp. Defense: ${data[numero-1].base.Spdefense}`
     document.getElementById("speed").innerHTML = `Speed: ${data[numero-1].base.Speed}`
 
     if (form.numero.value < 9){ 
     let numeroEscrito = '00' + form.numero.value
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     //Outra fonte 
     //https://www.serebii.net/pokemongo/pokemon/025.png    
     console.log(numeroEscrito)
     }
 
   //  if (form.numero.value == 10){ 
   //   let numeroEscrito = '' + form.numero.value
   //   img = document.getElementById("imagem")
   //   img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png`
   //   console.log(numeroEscrito)
   //    }
 
     if (form.numero.value > 10 && form.numero.value < 100){ 
     let numeroEscrito = '0' + form.numero.value
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log(numeroEscrito)
      }
 
     if (form.numero.value >= 100){ 
     let numeroEscrito = form.numero.value
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log(numeroEscrito)
      }
     
     
 let botaoProximo = document.querySelector("#proximo")
     botaoProximo.addEventListener("click", function(event) {
     event.preventDefault()
     let somar = (numero++) 
     console.log(somar)
     document.getElementById("number").innerHTML = `Número: ${data[somar].id}`
     document.getElementById("pokemon").innerHTML = `Nome: ${data[somar].name.english}`
     document.getElementById("type").innerHTML = `Tipo: ${data[somar].type}`
     document.getElementById("hp").innerHTML = `HP: ${data[somar].base.HP}`
     document.getElementById("atack").innerHTML = `Atack: ${data[somar].base.Attack}`
     document.getElementById("defense").innerHTML = `Defense: ${data[somar].base.Defense}`
     document.getElementById("satack").innerHTML = `Sp Atack: ${data[somar].base.Spattack}`
     document.getElementById("sdefense").innerHTML = `Sp. Defense: ${data[somar].base.Spdefense}`
     document.getElementById("speed").innerHTML = `Speed: ${data[somar].base.Speed}`
 
     if (somar < 9){ 
     let numeroEscrito = '00' + ((somar*1)+1)
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log('A foto esta ' + numeroEscrito)
     }
 
     if (somar > 8 && somar < 100){ 
     let numeroEscrito = '0' + ((somar*1)+1)
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log('A foto esta ' + numeroEscrito)
      }
 
     if (somar >= 99){ 
     let numeroEscrito = + ((somar*1)+1)
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log('A foto esta ' + numeroEscrito)
      }
     
     
     })
 
     let botaoAnterior = document.querySelector("#anterior")
     botaoAnterior.addEventListener("click", function(event) {
     event.preventDefault()
     let diminuir = (numero--) 
     console.log(diminuir)
     document.getElementById("number").innerHTML = `Número: ${data[diminuir].id}`
     document.getElementById("pokemon").innerHTML = `Nome: ${data[diminuir].name.english}`
     document.getElementById("type").innerHTML = `Tipo: ${data[diminuir].type}`
     document.getElementById("hp").innerHTML = `HP: ${data[diminuir].base.HP}`
     document.getElementById("atack").innerHTML = `Atack: ${data[diminuir].base.Attack}`
     document.getElementById("defense").innerHTML = `Defense: ${data[diminuir].base.Defense}`
     document.getElementById("satack").innerHTML = `Sp Atack: ${data[diminuir].base.Spattack}`
     document.getElementById("sdefense").innerHTML = `Sp. Defense: ${data[diminuir].base.Spdefense}`
     document.getElementById("speed").innerHTML = `Speed: ${data[diminuir].base.Speed}`
 
     if (diminuir < 9){ 
     let numeroEscrito = '00' + ((diminuir*1)+1)
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log('A foto esta ' + numeroEscrito)
     }
 
     if (diminuir >= 8 && diminuir < 100){ 
     let numeroEscrito = '0' + ((diminuir*1)+1)
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log('A foto esta ' + numeroEscrito)
     }
 
     if (diminuir >= 99) { 
     let numeroEscrito = (diminuir*1)+1
     img = document.getElementById("imagem")
     img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full//${numeroEscrito}.png`
     console.log('A foto esta ' + numeroEscrito)
     }
     
     
     
     }) 
 
     
        
 
 
 
   })    
 
 
 })