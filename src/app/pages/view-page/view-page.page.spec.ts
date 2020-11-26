import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPagePage } from './view-page.page';

describe('ViewPagePage', () => {
  let component: ViewPagePage;
  let fixture: ComponentFixture<ViewPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
