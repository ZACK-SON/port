import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwnowledgeComponent } from './kwnowledge.component';

describe('KwnowledgeComponent', () => {
  let component: KwnowledgeComponent;
  let fixture: ComponentFixture<KwnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KwnowledgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KwnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
