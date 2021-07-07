import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsDetailsComponent } from './seasons-details.component';

describe('SeasonsDetailsComponent', () => {
  let component: SeasonsDetailsComponent;
  let fixture: ComponentFixture<SeasonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
