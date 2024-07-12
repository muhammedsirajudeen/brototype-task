function namer(place,number){
    console.log(this.name)
    console.log(this.lastname)
    console.log(place)
    console.log(number)
}

let person={
    name:"roshan",
    lastname:"jabir"
}
namer.call(person,"kannur","1234567890")
namer.apply(person,["kannur","1234567890"])
let newfunc=namer.bind(person,"kannur","12345")
newfunc()