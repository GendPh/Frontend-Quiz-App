import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToQuizPageComponent } from './go-to-quiz-page.component';

describe('GoToQuizPageComponent', () => {
  let component: GoToQuizPageComponent;
  let fixture: ComponentFixture<GoToQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToQuizPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
