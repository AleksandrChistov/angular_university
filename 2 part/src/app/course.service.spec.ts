import {TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CourseService} from './course.service';
import {Course} from './model/course';

describe('CourseService', () => {
  let service: CourseService;
  let http: HttpClient;
  const courseMock: Course = {
    id: 100,
    description: '',
    iconUrl: '',
    longDescription: '',
    category: '',
    lessonsCount: 1
  };

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

  it('should call the http get method', () => {
    const httpMock = spyOn(http, 'get');

    service.getAllCourses();

    expect(httpMock).toHaveBeenCalled();
  });

  it('should call the http put method', () => {
    const httpMock = spyOn(http, 'put');

    service.saveCourse(courseMock);

    expect(httpMock).toHaveBeenCalled();
  });
});
