export interface User {
    name: string;
    id: number;
    getId(): number;
    getName(): string;
    setName(name:string): void;
}