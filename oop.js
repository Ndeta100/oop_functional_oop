const elf={
    name:'Orwell',
    weapon:'Bow',
    attack(){
        return 'Attack with' + elf.weapon
    }
}
elf.name
elf.attack()
// Factory functions
function createElf(name, weapon){
    return {
        name:name,
        weapon:weapon,
        attack(){
            return 'Attack with' + weapon
        }
    }
}
const peter=createElf('Ndeta', "Stones")
peter.attack()
const sam=createElf('Sam', "fire")
sam.attack()

// Using constructor functions
function Elf(name, weapon){
   this.name=name
   this.weapon=weapon
}
Elf.prototype.attack=function(){
    return 'Attack with' + this.weapon
}
const samma=new Elf('Sam', "fire")
const john=new Elf('Sam', "fire")

var a =new Number(5) //a is an object because we used a constructor function

// USING ES6 CLASSES
class Character{
    constructor(name, weapon){
        this.name=name
        this.weapon=weapon
    }
    attack(){
        return 'Attack with' + this.weapon
    }
}
class Jue extends Character{
     constructor(name, weapon,type){ 
         super(name,weapon)
         this.type=type
     }
}
const dolby=new Jue('dolby', 'cloth','house')
const peter2=new Character('Sam', "fire")
const fiona={...peter2}

class Ogre extends Character{
    constructor(name, weapon, color){
        super(name, weapon)
        this.color=color
    }
    makeFort(){
        return 'Strongest fort in the world made'
    }
}

const shrek=new Ogre('Shrek', 'club', 'green')
shrek.makeFort()


