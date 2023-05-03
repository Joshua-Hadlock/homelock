import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { signin } from './sign-in.page';

describe('signin', () => {
  let component: signin;
  let fixture: ComponentFixture<signin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [signin],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(signin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
