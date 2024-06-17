import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFormBuilderComponent } from './ad-form-builder.component';

describe('AdFormBuilderComponent', () => {
  let component: AdFormBuilderComponent;
  let fixture: ComponentFixture<AdFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
