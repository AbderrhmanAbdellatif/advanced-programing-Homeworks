class Course {

    constructor(name="", time="", date="", rooms=[]) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;

    }

}
class Student {
    constructor(id=0, name="", gpa=0, courses=[]) {
        this.id = id
        this.name = name
        this.gpa = gpa
        this.courses = courses
    }

}
class Database {
    constructor() {
        this.arrystu = [];
        this.arrycor = [];

    }
    addstudent(s=[]) {
        var studentMap = new Map();
        for (let index = 0; index < s.length; index++) {

            this.studensset = new Student();

            this.arrystu.push(this.studensset);

            for (let i = 0; i < s[index].length; i++) {
                if (i == 0) {
                    this.studensset.id = parseInt(s[index][i]);
                    this.arrystu[index].id = parseInt(s[index][i]);
                }
                if (i == 1) {
                    this.studensset.name = (s[index][i]);
                    this.arrystu[index].name = (s[index][i]);
                }
                if (i == 2) {
                    this.studensset.gpa = s[index][i];
                    this.arrystu[index].gpa = s[index][i];
                }
                if (i > 2) {
                    this.studensset.courses.push(s[index][i] + "\t");
                    this.arrystu[index].courses.push(s[index][i] + "\t")
                }
                studentMap.set(this.studensset.id, this.studensset.name + "     |      " + this.studensset.gpa + "      |      " + this.studensset.courses);
            }
        }
        return studentMap;
    }
    addcourses(c=[]) {
        var coursesMap = new Map();
        for (let index = 0; index < c.length; index++) {
            this.coursesset = new Course();
            this.arrycor.push(this.coursesset);
            for (let i = 0; i < c[index].length; i++) {
                if (i == 0) {
                    this.coursesset.name = c[index][i];
                    this.arrycor[index].name = c[index][i];
                }
                if (i == 1) {
                    this.coursesset.time = c[index][i];
                    this.arrycor[index].time = c[index][i];
                }
                if (i == 2) {
                    this.coursesset.date = c[index][i];
                    this.arrycor[index].date = c[index][i];
                }
                if (i > 2) {
                    this.coursesset.rooms.push(c[index][i]);
                    this.arrycor[index].rooms.push(c[index][i]);
                }
                coursesMap.set(this.coursesset.name, this.coursesset.time + " | " + this.coursesset.date + " | " + this.coursesset.rooms);
            }
        }
        return coursesMap;
    }

    bubbleSortid(a) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i].id > a[i + 1].id) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }
    
      bubbleSortgpa(a) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i].gpa > a[i + 1].gpa) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }
    
   indexs(arr=[],value){
       console.log(arr);
       let index=0;
       for(let i=0;i<arr.length;i++){
             if(value==arr[i].gpa){
                 index=i;
                 break;
              }
       }
       return index;
   }
    
    
}
