import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmojiPage } from './emoji.page';

describe('EmojiPage', () => {
  let component: EmojiPage;
  let fixture: ComponentFixture<EmojiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmojiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
