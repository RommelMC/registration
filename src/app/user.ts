export class User {
    constructor(
        public id: number = null,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public address1: string = "",
        public address2: string = "",
        public city: string = "",
        public state: string = "",
        public password: string = "",
        public confirmPassword: string = "",
        public lucky: boolean = null,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ){}
}
