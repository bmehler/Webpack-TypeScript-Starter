import { User } from "./user";

export class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getId(): number {
        return this.id;

    }

    getName(): string {
        return this.name;

    }

    setName(name: string): string {
        this.name = name;
        return this.name;
    }
}