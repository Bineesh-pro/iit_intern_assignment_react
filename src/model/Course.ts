export class Course{
    courseId:number;
    tittle:string;
    courseCode:string;
    description:string;


    constructor(courseId: number, tittle: string, courseCode: string, description: string) {
        this.courseId = courseId;
        this.tittle = tittle;
        this.courseCode = courseCode;
        this.description = description;
    }

    get _courseId():number{
        return this.courseId;
    }
    get _tittle():string{
        return this.tittle;
    }
    get _courseCode():string{
        return this.courseCode;
    }
    get _description():string{
        return this.description;
    }
}