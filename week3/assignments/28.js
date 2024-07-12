function Car(name,mileage,max_speed,){
    this.name=name
    this.mileage=mileage
    this.max_speed=max_speed
    this.displayer=()=>{
        console.log(this.name,this.mileage,this.max_speed)
    }
}

let Maruti= new Car("Alto",10,120)
Maruti.displayer()