import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from './model/course';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('api/courses');
  }

  saveCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders()
      .set('X-auth', 'userId');

    return this.http.put<Course>(`api/courses/${course.id}`, course, {headers});
  }
}
