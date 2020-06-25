import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitnessgoalPage } from './fitnessgoal.page';

describe('FitnessgoalPage', () => {
  let component: FitnessgoalPage;
  let fixture: ComponentFixture<FitnessgoalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessgoalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitnessgoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
