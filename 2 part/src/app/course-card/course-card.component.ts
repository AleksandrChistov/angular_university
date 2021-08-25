import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    onSaveClicked(description: string) {
        this.courseEmitter.emit({...this.course, description});
    }
}
