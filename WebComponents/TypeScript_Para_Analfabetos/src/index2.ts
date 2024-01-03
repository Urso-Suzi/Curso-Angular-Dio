//classes 

/*
    data modifiers
    public padrão, pode ser acessado global
    private só pode ser acessado por dentro da classe original.
    protected só pode ser enchergado pela classe, ou por subclasses.

    esses data modifiers podem ser aplicados em métodos e propriedades 
    
    podemos utilizar "?" para indicar que uma propriedade não é obrigatória

    ao aplicarmos readonly, definimos uma propriedade como apenas leitura, onde não pode ser alterada.
*/



class Character {
    private name?: string;
    readonly stregth: number;
    Skill: number;

    constructor(name: string, stregth: number, Skill: number){
        this.name = name;
        this.stregth = stregth;
        this.Skill = Skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }

    myName() {
     console.log(`My name is ${this.name}`);
    }
}


//Character super class
//Magician subclass
class Magician extends Character{

    magicPoints:number;

    constructor(name: string, stregth: number, Skill: number, magicPoints:number){
        super(name, stregth, Skill);
        this.magicPoints = magicPoints;
        
    }
}


const p1 = new Character("Roberto", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.myName();
console.log(p2.magicPoints)