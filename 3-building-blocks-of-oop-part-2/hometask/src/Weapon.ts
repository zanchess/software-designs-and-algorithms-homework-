import { Item } from "./Item";

export abstract class Weapon extends Item {
    static  MODIFIER_CHANGE_RATE = 0.05;
    protected baseDamage: number;
    protected damageModifier: number = 0;
    private baseDurability: number;
    protected durabilityModifier: number = 0;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDurability = baseDurability;
        this.baseDamage = baseDamage;
    }

    getEffectiveDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    getEffectiveDurability(): number;
    getEffectiveDurability(durabilityModifier?: number): number {
        return durabilityModifier ? this.baseDurability + durabilityModifier : this.baseDurability + this.durabilityModifier;
    }

    toString(): string {
        return `${super.toString()}, Damage: ${(this.baseDamage + this.damageModifier).toFixed(2)}, Durability: ${((this.baseDurability + this.durabilityModifier)*100).toFixed(2)}%`;
    }
    
    use(): string {
        let resultMessage: string;
        if (this.baseDurability <= 0) {
            resultMessage = `You can't use the ${this.name}, it is broken.`;
        } else {
            this.baseDurability = this.baseDurability - Weapon.MODIFIER_CHANGE_RATE;
            resultMessage = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.${this.baseDurability <= 0 ? `\nThe ${this.name} breaks.` : ''}`;
        }

        return resultMessage;
    }
}