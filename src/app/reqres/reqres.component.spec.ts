import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqresComponent } from './reqres.component';

describe('ReqresComponent', () => {
  let component: ReqresComponent;
  let fixture: ComponentFixture<ReqresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqresComponent]
    });
    fixture = TestBed.createComponent(ReqresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
