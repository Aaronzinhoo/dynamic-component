import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatChipsModule} from '@angular/material/chips';

import {SupriseComponent} from './suprise.component';

describe('SupriseComponent', () => {
  let component: SupriseComponent;
  let fixture: ComponentFixture<SupriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupriseComponent],
      imports: [MatChipsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
