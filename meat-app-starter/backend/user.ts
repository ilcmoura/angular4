export class User {
  constructor(public email: string,
              public name: string,
              private password: string) {}

  matches(another:User) : boolean  {
    return another !== undefined && 
          another.email === this.email &&
          another.password === this.password
  }
}

export const users = {
  "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana123'),
  "clarice@gmail.com": new User('clarice@gmail.com', 'Clarice', 'clarice123'),
  "igor@gmail.com": new User('igor@gmail.com', 'Igor', 'igor123')
}
