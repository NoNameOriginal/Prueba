import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyfieldComponent } from './dummyfield.component';

describe('DummyfieldComponent', () => {
  let component: DummyfieldComponent;
  let fixture: ComponentFixture<DummyfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
