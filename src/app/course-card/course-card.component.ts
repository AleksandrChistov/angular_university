import { EventEmitter } from '@angular/core';
import {Component, Input, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course: Course;
  @Input() courseIndex: number;

  @Output() clickedCourseBtn = new EventEmitter<string>();

  onClick(courseTitle: string): void {
    console.log('CourseCardComponent: onClick!');
    this.clickedCourseBtn.emit(courseTitle);
  }
}
