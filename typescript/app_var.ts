let message:string = "Ok. Teste realizado com sucesso"
console.log(message)

let episode: number  = 4
console.log(episode)

episode = episode + 1
console.log("next episode is = " + episode)

// variavel do tipo any
let favoriteDroid
favoriteDroid = 'BB-8'
favoriteDroid = 10
console.log('My favorite Droid is ' + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
  return (parsecs < 12)
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance)?'YES':'NO'}` )

let call = (name:string) => console.log(`Do you copy, ${name} ?`)
call('R2')

function inc (speed: number, inc: number  = 1): number {
  return speed + inc
}

console.log (`inc (5,1) = ${inc(5,1)}`)
console.log (`inc (5) = ${inc(5)}`)
