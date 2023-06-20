import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaAngularComponent } from './prova-angular.component';

describe('ProvaAngularComponent', () => {
  let component: ProvaAngularComponent;
  let fixture: ComponentFixture<ProvaAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
