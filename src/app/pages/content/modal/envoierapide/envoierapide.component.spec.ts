import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoierapideComponent } from './envoierapide.component';

describe('EnvoierapideComponent', () => {
  let component: EnvoierapideComponent;
  let fixture: ComponentFixture<EnvoierapideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoierapideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvoierapideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
