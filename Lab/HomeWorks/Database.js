class Course {

    constructor(name = "", time = "", date = "", rooms = []) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;

    }


}
class Student {
    constructor(id = 0, name = "", gpa = 0, courses = []) {
        this.id = id
        this.name = name
        this.gpa = gpa
        this.courses = courses
    }


}
class Database {

    constructor() {

    }
    addstudent(s = []) {
        var studentMap = new Map();

        for (let index = 0; index < s.length; index++) {
            this.studensset = new Student();
            for (let i = 0; i < s[index].length; i++) {


                if (i == 0) {
                    this.studensset.id = parseInt(s[index][i]);

                }
                if (i == 1) {
                    this.studensset.name = (s[index][i]);

                }
                if (i == 2) {
                    this.studensset.gpa = s[index][i];

                }
                if (i > 2) {
                    this.studensset.courses.push(s[index][i]);

                }
                studentMap.set(this.studensset.id, this.studensset.name + " , " + this.studensset.gpa + " , " + this.studensset.courses);
            }

        }
        for (var [key, value] of studentMap) {
            console.log(key + ' => ' + value);
        }
    }
}