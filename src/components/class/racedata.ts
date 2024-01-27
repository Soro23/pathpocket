import { SkillData } from "./skilldata"
export class RaceData {
    name: string = ''
    race_category: string = ''
    race_points: number = 0
    ability_plus: string[] = []
    ability_minus: string[] = []
    // size: string = 'Minúsculo' || 'Diminuto' || 'Menudo' || 'Pequeño' || 'Mediano' || 'Grande' || 'Enorme' || 'Gargantuesco' || 'Colosal'
    size: number = 0
    subtype: string = ''
    speed: number = 0
    languages: string[] = []
    senses: string[] = []
    defensive_traits: string[] = []
    offensive_traits: string[] = []
    skill_bonuses: SkillData[] = []
    feat_bonuses: string[] = []
    spell_bonuses: string[] = []
}