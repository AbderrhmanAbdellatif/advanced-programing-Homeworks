"use strict";

class Student
{
	constructor(id,name,gpa)
	{
		this.id=id
		this.name=name
		this.gpa=gpa
		this.courses=[]
	}
	addCourse(c)
	{
		this.courses.push(c)
	}
	toString()
	{
		return this.id +""
		
	}
	
}

class Course
{
	constructor(name,time,date,rooms)
	{
		this.name=name
		this.time=time
		this.date=date
		this.rooms=rooms
	}
	toString()
	{
		return this.name + ""
	}
}