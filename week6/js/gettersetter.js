let obj={
    name:"sirajudeen",
    get fullname(){
        return this.name
    },
    set fullname(name){
        this.name=name
    }
}

console.log(obj.fullname)
obj.fullname="salman"
console.log(obj.fullname)