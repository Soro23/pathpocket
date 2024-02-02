export class SkillData{
    name:string = ''
    customName?:string = ''
    isClassSkill:boolean = false
    isTrainedRequired:boolean = false
    modStat:string = 'FUE'||'DES'||'CON'||'INT'||'SAN'||'CAR'
    ranks:number = 0
    mod!: {
        racial: number
        trait: number
        misc: number
    } 

    constructor(){
        this.mod.racial = 0
        this.mod.trait = 0
        this.mod.misc = 0
    }

}