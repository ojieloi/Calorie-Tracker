import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewweightPage } from './newweight.page';

describe('NewweightPage', () => {
  let component: NewweightPage;
  let fixture: ComponentFixture<NewweightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewweightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewweightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
