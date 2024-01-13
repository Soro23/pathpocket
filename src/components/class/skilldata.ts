export class SkillData{
    name:string = ''
    customName?:string = ''
    isClassSkill:boolean = false
    isTrainedRequired:boolean = false
    modStat:string = 'strength'||'dexterity'||'constitution'||'intelligence'||'wisdom'||'charisma'
    ranks:number = 0
    mod: {
        racial:number,
        trait:number,
        misc:number[]
    } | number = 0

}