import { Role } from "./role";

export class User {
    id?: Number;
    firstName?: String;
    lastName?: String;
    dateOfBirth?: Date;
    email?: String;
    username?: String;
    password?: String;
    roles?: Role[];
}
