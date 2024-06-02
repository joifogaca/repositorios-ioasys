import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryCardComponent } from './repository-card.component';

describe('RepositoryComponent', () => {
  let component: RepositoryCardComponent;
  let fixture: ComponentFixture<RepositoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RepositoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
