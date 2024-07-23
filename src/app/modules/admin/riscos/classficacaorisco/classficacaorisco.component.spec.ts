import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassficacaoriscoComponent } from './classficacaorisco.component';

describe('ClassficacaoriscoComponent', () => {
  let component: ClassficacaoriscoComponent;
  let fixture: ComponentFixture<ClassficacaoriscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassficacaoriscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassficacaoriscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
