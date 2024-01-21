import { SkillData } from "./skilldata"

export class CharacterData {
  character_details = {
    alignment: 'LB' || 'NB' || 'CB' || 'NB' || 'NN' || 'CN' || 'LM' || 'NM' || 'CM',
    deity: '',
    appearance: {
      size: 0,
      genre: '',
      age: 0,
      height: '',
      weight: '',
      skin: '',
      hair: '',
      eyes: '',
    },
    lore: {
      origin_context: '',
      motivations_objectives: '',
      relations: '',
      highlight_events: '',
    }
  }
  armor_class: number = 0
  class: string[] = []
  class_level: number[] = []
  equipment: string[] = []
  experience_points: number = 0
  feats: {
    racefeats: string[]
  }
  money: {
    cooper: number
    silver: number
    gold: number
    platinium: number
  }
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
    acrobatics: SkillData
    apraise: SkillData
    bluff: SkillData
    climb: SkillData
    craft1: SkillData
    craft3: SkillData
    craft2: SkillData
    diplomacy: SkillData
    disable_device: SkillData
    disguise: SkillData
    escape_artist: SkillData
    fly: SkillData
    handle_animal: SkillData
    heal: SkillData
    intimidate: SkillData
    knowledge_arcana: SkillData
    knowledge_dungeoneering: SkillData
    knowledge_engineering: SkillData
    knowledge_geography: SkillData
    knowledge_History: SkillData
    knowledge_local: SkillData
    knowledge_nature: SkillData
    knowledge_nobility: SkillData
    knowledge_planes: SkillData
    knowledge_religion: SkillData
    linguistics: SkillData
    perception: SkillData
    perform1: SkillData
    perform2: SkillData
    profesion1: SkillData
    profesion2: SkillData
    ride: SkillData
    sense_motive: SkillData
    sleight_of_hand: SkillData
    spellcraft: SkillData
    stealth: SkillData
    survival: SkillData
    swim: SkillData
    use_magic_device: SkillData
  } | Object
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
    this.armor_class = 0
    this.class = []
    this.class_level = []
    this.equipment = []
    this.experience_points = 0
    this.feats = {
      racefeats: []
    }
    this.money = {
      cooper: 0,
      silver: 0,
      gold: 0,
      platinium: 0
    }
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
      acrobatics: {
        name: 'Acrobacias',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'DES',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      apraise: {
        name: 'Tasación',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      bluff: {
        name: 'Engañar',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      climb: {
        name: 'Trepar',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'FUE',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      craft1: {
        name: 'Artesania',
        customName: '',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      craft2: {
        name: 'Artesania',
        customName: '',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      craft3: {
        name: 'Artesania',
        customName: '',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      diplomacy: {
        name: 'Diplomacia',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      disable_device: {
        name: 'Inutilizar Mecanismo',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      disguise: {
        name: 'Disfrazarse',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      escape_artist: {
        name: 'Escapismo',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'DES',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      fly: {
        name: 'Volar',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'DES',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      handle_animal: {
        name: 'Trato con animales',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      heal: {
        name: 'Sanar',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'SAB',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      intimidate: {
        name: 'Intimidar',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_arcana: {
        name: 'Saber (Arcano',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_dungeoneering: {
        name: 'Saber (Dungeons)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_engineering: {
        name: 'Saber (Ingeniería)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_geography: {
        name: 'Saber (Geografía)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_History: {
        name: 'Saber (Historia)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_local: {
        name: 'Saber (Local)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_nature: {
        name: 'Saber (Naturaleza)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_nobility: {
        name: 'Saber (Nobleza)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_planes: {
        name: 'Saber (Los Planos)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      knowledge_religion: {
        name: 'Saber (Religión)',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      linguistics: {
        name: 'Lingüística',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      perception: {
        name: 'Percepción',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'SAB',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      perform1: {
        name: 'Interpretar 1',
        customName: '',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      perform2: {
        name: 'Interpretar 2',
        customName: '',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      profesion1: {
        name: 'Profesión 1',
        customName: '',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'SAB',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      profesion2: {
        name: 'Profesión 2',
        customName: '',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'SAB',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      ride: {
        name: 'Montar',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'DES',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      sense_motive: {
        name: 'Averiguar Intenciones',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'SAB',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      sleight_of_hand: {
        name: 'Juego de manos',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'DES',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      spellcraft: {
        name: 'Conocimiento de conjuros',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'INT',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      stealth: {
        name: 'Sigilo',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'DES',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      survival: {
        name: 'Supervivencia',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'SAB',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      swim: {
        name: 'Nadar',
        isClassSkill: false,
        isTrainedRequired: false,
        modStat: 'FUE',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
      use_magic_device: {
        name: 'Usar objeto mágico',
        isClassSkill: false,
        isTrainedRequired: true,
        modStat: 'CAR',
        ranks: 0,
        mod: {
          racial: 0,
          trait: 0,
          misc: 0
        }
      },
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

  copyFrom?(other: CharacterData | undefined): void {
    if (other!) {
      CharacterData.copyObject(this, other);
    }
  }


}