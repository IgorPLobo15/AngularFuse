import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Losprodutos1Component } from './losprodutos1.component';

describe('Losprodutos1Component', () => {
  let component: Losprodutos1Component;
  let fixture: ComponentFixture<Losprodutos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Losprodutos1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Losprodutos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
