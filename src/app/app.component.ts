import {Component} from '@angular/core';
import {Course} from './model/course';
import {COURSES} from '../db-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-course';
  courses: Course[] = COURSES;
}
