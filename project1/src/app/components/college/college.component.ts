import { Component } from '@angular/core';

@Component({
  selector: 'app-college',
  template:`
    <p>college works!</p>
    <p>{{title}}</p>
    <ul>
      <li *ngFor="let course of course">
        {{ course }}
      </li>
    </ul>
  `,
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {
  title= "Welcome to the course";
  course=["course1","course2","course3"];
}
