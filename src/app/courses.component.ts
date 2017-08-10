import {CoursesService} from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector:'courses',
    template:`
        <h2>{{courses.length}} {{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive">Save</button><br/>
        <h3>Style Binding</h3>
        <button class="btn" [style.backgroundColor]="isActive ? 'blue' : 'red'">Style Binding</button>
        <h3>Event Binding</h3>
        <div (click)="onDivClicked()"><!--event bubbling--->
            <button (click)="onSave($event)">Click Event</button>
        </div>
        <h3>Event Filtering</h3>
        <input (keyup)="onKeyUp($event)"/><br/>
        <h4>Another Method</h4>
        <input #email (keyup.enter)="onKeyUpAnother(email.value)"/><br/>
        <h3>Two Way binding</h3>
        <input [(ngModel)]="emailId" (keyup.enter)="onKey()"/>
        <h3>Built-in Pipes</h3>
        {{course.title | uppercase}}<br/>
        {{course.rating | number:"1.2-2"}}<br/>
        {{course.students | number}}<br/>
        {{course.price | currency:'INR':true:'3.1-1'}}<br/>
        {{course.releaseDate |date:'shortDate'}}<br/>
        <h3>Custom Pipes</h3>
        {{text | summary:10}}<br/>
        <h4>Assignment 1</h4>
        <span
        class="glyphicon"
        [class.glyphicon-star]="isFavourite"
        [class.glyphicon-star-empty]="!isFavourite"
        (click)="onStar()"></span>
        <h4>Assignment 2</h4>
        <input [(ngModel)]="disply" (keyup)="dispalyTitleCase(disp.value)"/>
        {{disply |  titlecase}}
        `
})
export class CoursesComponent{
    title="List Of Courses";
    courses;
    disply="";
    emailId="xxx@mail.com";
    isActive=true;
    isFavourite =false;
    //isActive=false;
    constructor(service : CoursesService){
        this.courses=service.getCourses();
    }
    onSave($event){
        $event.stopPropagation();//will stop event bubbling
        console.log("button was clicked",$event);
    }
    onDivClicked(){
        console.log("div was clicked");
    }
    onKeyUp($event){
        if($event.keyCode===13) console.log("Enter was pressed");//'13' is the code for enter key
    }
    onKeyUpAnother(email){
        console.log("Email id is ",email);
    }
    onKey(){
        console.log(this.emailId);
    }
    onStar(){
        this.isFavourite=!this.isFavourite;

    }
    dispalyTitleCase(disp){
        this.disply=disp.value;
    }
    course={
        title : "The Complete Angular Course",
        rating : 4.9745,
        students : 30123,
        price : 190.85,
        releaseDate : new Date(2017,2,1),
    }
    text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel enim vitae nibh condimentum posuere ut non neque. Maecenas a turpis et nulla aliquam maximus. Mauris placerat elit id augue laoreet, vel aliquet dui imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet arcu elementum, fermentum quam ut, tristique urna. Suspendisse finibus lacus et mi scelerisque commodo. Fusce ut erat nisi. Pellentesque porta tempor interdum. Cras mollis odio dui, et placerat orci lobortis nec. Vivamus turpis erat, volutpat sed lorem vel, imperdiet congue ante. Ut vel diam sapien. `
}
