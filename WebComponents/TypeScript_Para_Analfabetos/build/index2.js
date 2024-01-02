"use strict";
//classes 
/*
    data modifiers
    public padrão, pode ser acessado global
    private só pode ser acessado por dentro da classe original.
    protected só pode ser enchergado pela classe, ou por subclasses.
*/
class Character {
    constructor(name, stregth, Skill) {
        this.name = name;
        this.stregth = stregth;
        this.Skill = Skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
    myName() {
        console.log(`My name is ${this.name}`);
    }
}
const p1 = new Character("Robertp", 10, 98);
p1.myName();
