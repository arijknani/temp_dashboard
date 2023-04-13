import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalabelComponent } from './datalabel.component';

describe('DatalabelComponent', () => {
  let component: DatalabelComponent;
  let fixture: ComponentFixture<DatalabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatalabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatalabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
