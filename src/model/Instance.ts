import {Course} from "./Course.ts";

export class Instance{
    instanceId:number;
    yearOfDelivery:number;
    semester:number;
    courses:Course[];


    constructor(instanceId: number, yearOfDelivery: number, semester: number, courses: Course[]) {
        this.instanceId = instanceId;
        this.yearOfDelivery = yearOfDelivery;
        this.semester = semester;
        this.courses = courses;
    }

   get _instanceId():number{
        return this.instanceId;
   }
    get _yearOfDelivery():number{
        return this.yearOfDelivery;
    }
    get _semester():number{
        return this.semester;
    }
    get _courses():Course[]{
        return this.courses;
    }


}