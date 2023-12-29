export class CharacterData {
    alignment: string = ''
    appearance: string = ''
    armor_class: number = 0
    background_story: string = ''
    class: string[] = []
    class_level: number[] = []
    equipment: string[] = []
    experience_points: number = 0
    feats: string[] = []
    gold: number = 0
    hit_points: number = 0
    imagesrc: string = ''
    initiative: number = 0
    inventory: string[] = []
    languages: string[] = []
    level: number[] = []
    name: string = ''
    personality_traits: string = ''
    race: string = ''
    saving_throws: {
      fortitude: number
      reflex: number
      will: number
    } | number = 0
    skills: {
      acrobatics: number
      apraise: number
      bluff: number
      climb: number
      craft1: number
      craft2: number
      craft3: number
      diplomacy: number
      disable_device: number
      disguise: number
      escape_artist: number
      fly: number
      handle_animal: number
      heal: number
      intimidate: number
      knowledge_arcana: number
      knowledge_dungeoneering: number
      knowledge_engineering: number
      knowledge_geography: number
      knowledge_History: number
      knowledge_local: number
      knowledge_nature: number
      knowledge_nobility: number
      knowledge_planes: number
      knowledge_religion: number
      linguistics: number
      perception: number
      perform1: number
      perform2: number
      profesion1: number
      profesion2: number
      ride: number
      sense_motive: number
      sleight_of_hand: number
      spellcraft: number
      stealth: number
      survival: number
      swim: number
      use_magic_device: number
    } | number = 0
    speed: number = 0
    spells!: Array<string>;
    stats: {
      charisma: number,
      constitution: number,
      dexterity: number,
      intelligence: number,
      strength: number,
      wisdom: number
    } | number = 0
}