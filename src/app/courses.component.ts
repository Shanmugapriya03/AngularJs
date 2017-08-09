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
        `
})
export class CoursesComponent{
    title="List Of Courses";
    courses;
    emailId="xxx@mail.com";
    isActive=true;
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
}
