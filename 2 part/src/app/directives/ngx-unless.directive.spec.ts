import {NgxUnlessDirective} from './ngx-unless.directive';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'app-my-test-component',
  template: '<ng-template [ngxUnless]="condition"><p>Test</p></ng-template>'
})
class TestComponent {
  condition = true;
}

describe('NgxUnlessDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let pElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        NgxUnlessDirective
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should not create the p element when condition is true', () => {
    pElement = fixture.debugElement.query(By.css('p'));

    expect(pElement && pElement.nativeElement).toBeNull();
  });

  it('should create the p element when condition is false', () => {
    pElement = fixture.debugElement.query(By.css('p'));
    const component = fixture.componentInstance;

    component.condition = false;

    expect(pElement && pElement.nativeElement).toBeDefined();
  });
});
