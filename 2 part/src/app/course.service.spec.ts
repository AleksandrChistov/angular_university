import {TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CourseService} from './course.service';

describe('CourseService', () => {
  let service: CourseService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(CourseService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the get service', () => {
    const httpMock = spyOn(http, 'get');

    service.getAllCourses();

    expect(httpMock).toHaveBeenCalled();
  });
});
