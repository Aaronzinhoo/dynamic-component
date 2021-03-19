import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UclaRocksComponent} from './ucla-rocks.component';

describe('UclaRocksComponent', () => {
  let component: UclaRocksComponent;
  let fixture: ComponentFixture<UclaRocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UclaRocksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UclaRocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
