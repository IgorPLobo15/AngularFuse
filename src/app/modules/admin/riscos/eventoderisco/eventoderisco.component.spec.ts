import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoderiscoComponent } from './eventoderisco.component';

describe('EventoderiscoComponent', () => {
  let component: EventoderiscoComponent;
  let fixture: ComponentFixture<EventoderiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoderiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventoderiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
