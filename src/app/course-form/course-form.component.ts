import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
    categoryMethods=[
        {id:1,name:'Web development'},
        {id:2,name:'Mobile development'},
        {id:3,name:'Machine Learning'}
    ]
    submit(f){
        console.log(f);
    }

}
