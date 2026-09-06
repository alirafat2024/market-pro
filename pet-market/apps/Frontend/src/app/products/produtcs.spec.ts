import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Produtcs } from './produtcs';

describe('Produtcs', () => {
  let component: Produtcs;
  let fixture: ComponentFixture<Produtcs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produtcs],
    }).compileComponents();

    fixture = TestBed.createComponent(Produtcs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
