import { IContact } from "./icontact";

export class Contact implements IContact {
    constructor(
        public id: string,
        public email: string,
        public name: string,
    ){}
}
