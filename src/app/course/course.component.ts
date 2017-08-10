import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{
    courseList=[1,2];
    course=[
        {id:1,name:'course1'},
        {id:2,name:'course2'},
        {id:3,name:'course3'}
    ]
    courseTrack;
    viewMode='map';
    loadCourses(){
        this.courseTrack=[
            {id:1,name:'course1'},
            {id:2,name:'course2'},
            {id:3,name:'course3'}
        ]
    }
    trackCourse(index, course){
        return course ? course.id :undefined;
    }

}
