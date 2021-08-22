import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
