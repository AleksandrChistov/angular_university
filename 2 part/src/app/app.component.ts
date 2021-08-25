import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Course} from './model/course';
import {CourseService} from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.courseService.getAllCourses()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
        this.cdr.markForCheck();
      });
  }

  saveCourse(course: Course): void {
    this.courseService.saveCourse(course).subscribe((newCourse) => {
      const currentCourseIndex = this.courses.findIndex((crs: Course) => crs.id === newCourse.id);
      if (currentCourseIndex !== -1) {
        this.courses.splice(currentCourseIndex, 1, newCourse);
        this.cdr.markForCheck();
      }
    });
  }
}
