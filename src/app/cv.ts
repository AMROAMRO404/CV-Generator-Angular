export class CV {
    constructor(
        public id: String,
        public firstName: String,
        public lastName: String,
        public phone: number,
        public address: String,
        public email: String,
        public linkedIn: String,
        public socialMedia: String,
        public objective: String,
        public experience: any,
        public education: any,
        public skills: String[],
        public languges: String[],
        public certifications: String[],
    ) { }
}