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
        this.arrystu = [];
        this.arrycor = [];

    }
    addstudent(s = []) {
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
                    this.arrystu[index].name=(s[index][i]);
                }
                if (i == 2) {
                    this.studensset.gpa = s[index][i];
                    this.arrystu[index].gpa=s[index][i];
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
    addcourses(c = []) {
        var coursesMap = new Map();
        for (let index = 0; index < c.length; index++) {
            this.coursesset = new Course();
                   this.arrycor.push(this.coursesset);
            for (let i = 0; i < c[index].length; i++) {
                if (i == 0) {
                    this.coursesset.name = c[index][i];
                    this.arrycor[index].name= c[index][i];
                }
                if (i == 1) {
                    this.coursesset.time = c[index][i];
                    this.arrycor[index].time=c[index][i];
                }
                if (i == 2) {
                    this.coursesset.date = c[index][i];
                    this.arrycor[index].date=c[index][i];
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

insertion_Sort(arr=[])
{
           
          // this.stuarr = new Student();
          // var arr=[];
          //  arr.push(this.stuarr);
          //  arr.push(a);e
  for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i].gpa < arr[0].gpa) 
    {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i].gpa > arr[i-1].gpa) 
    {
      //leave current element where it is
      continue;
    } 
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i].gpa > arr[j-1].gpa && arr[i].gpa < arr[j].gpa) 
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}



}