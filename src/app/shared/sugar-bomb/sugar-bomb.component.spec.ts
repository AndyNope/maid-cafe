import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarBombComponent } from './sugar-bomb.component';

describe('SugarBombComponent', () => {
  let component: SugarBombComponent;
  let fixture: ComponentFixture<SugarBombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarBombComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarBombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
