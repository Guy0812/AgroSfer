import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiegrouperComponent } from './envoiegrouper.component';

describe('EnvoiegrouperComponent', () => {
  let component: EnvoiegrouperComponent;
  let fixture: ComponentFixture<EnvoiegrouperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiegrouperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvoiegrouperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
