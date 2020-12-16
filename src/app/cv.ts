export class CV {
    constructor(
        public id: String,
        public fName: String,
        public lName: String,
        public phone: number,
        public address: String,
        public email: String,
        public linkedIn: String,
        public socialMedia: String,
        public objective: String,
        public experiences: any,
        public educations: any,
        public skills: String[],
        public languges: String[],
        public certifications: String[],
    ) { }
}