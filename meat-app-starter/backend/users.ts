export class User {
    constructor(public email: string,
                public name: string,
                private password: string) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[ key:string ]: User} = {
    "elias@gmail.com": new User('elias@gmail.com', 'Elias', 'elias25'),
    "priscila@gmail.com": new User('priscila@gmail.com', 'Priscila', 'priscila29')
}