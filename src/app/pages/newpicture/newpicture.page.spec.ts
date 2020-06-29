import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewpicturePage } from './newpicture.page';

describe('NewpicturePage', () => {
  let component: NewpicturePage;
  let fixture: ComponentFixture<NewpicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpicturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewpicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
