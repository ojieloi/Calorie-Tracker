import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitnesslevelPage } from './fitnesslevel.page';

describe('FitnesslevelPage', () => {
  let component: FitnesslevelPage;
  let fixture: ComponentFixture<FitnesslevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnesslevelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitnesslevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
