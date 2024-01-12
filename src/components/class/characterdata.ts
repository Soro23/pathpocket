export class CharacterData {
  alignment: string = ''
  appearance: string = ''
  armor_class: number = 0
  background_story: string = ''
  class: string[] = []
  class_level: number[] = []
  equipment: string[] = []
  experience_points: number = 0
  feats: {
    racefeats: string[]
  }
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
  }

  constructor() {
    this.alignment = ''
    this.appearance = ''
    this.armor_class = 0
    this.background_story = ''
    this.class = []
    this.class_level = []
    this.equipment = []
    this.experience_points = 0
    this.feats = {
      racefeats: []
    }
    this.gold = 0
    this.hit_points = 0
    this.imagesrc = 'https://firebasestorage.googleapis.com/v0/b/soro-dashboard.appspot.com/o/users%2FdE3IicCMypbQNL0ojqIBdDGXdxE3%2Fpublic%2Fcharacters%2FT3?alt=media&token=914e6c5d-c018-488a-8b10-ce76f6f0cae3'
    this.initiative = 0
    this.inventory = []
    this.languages = []
    this.level = []
    this.name = ''
    this.personality_traits = ''
    this.race = ''
    this.saving_throws = {
      fortitude: 0,
      reflex: 0,
      will: 0
    }
    this.skills = {
      acrobatics: 0,
      apraise: 0,
      bluff: 0,
      climb: 0,
      craft1: 0,
      craft2: 0,
      craft3: 0,
      diplomacy: 0,
      disable_device: 0,
      disguise: 0,
      escape_artist: 0,
      fly: 0,
      handle_animal: 0,
      heal: 0,
      intimidate: 0,
      knowledge_arcana: 0,
      knowledge_dungeoneering: 0,
      knowledge_engineering: 0,
      knowledge_geography: 0,
      knowledge_History: 0,
      knowledge_local: 0,
      knowledge_nature: 0,
      knowledge_nobility: 0,
      knowledge_planes: 0,
      knowledge_religion: 0,
      linguistics: 0,
      perception: 0,
      perform1: 0,
      perform2: 0,
      profesion1: 0,
      profesion2: 0,
      ride: 0,
      sense_motive: 0,
      sleight_of_hand: 0,
      spellcraft: 0,
      stealth: 0,
      survival: 0,
      swim: 0,
      use_magic_device: 0,
    }
    this.speed = 0
    this.spells = []
    this.stats = {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    };
  }


  private static isObject(obj: any): obj is Record<string, any> {
    return typeof obj === 'object' && obj !== null;
  }

  private static copyObject(target: Record<string, any>, source: Record<string, any>): void {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (CharacterData.isObject(source[key])) {
          target[key] = CharacterData.isObject(target[key]) ? target[key] : {};
          CharacterData.copyObject(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  }

  copyFrom(other: CharacterData | undefined): void {
    if(other!){
      CharacterData.copyObject(this, other);
    }
  }


}