import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamTileComponent } from './ice-cream-tile.component';

describe('IceCreamTileComponent', () => {
  let component: IceCreamTileComponent;
  let fixture: ComponentFixture<IceCreamTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
