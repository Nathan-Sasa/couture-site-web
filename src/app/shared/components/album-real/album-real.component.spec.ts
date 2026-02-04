import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumRealComponent } from './album-real.component';

describe('AlbumRealComponent', () => {
  let component: AlbumRealComponent;
  let fixture: ComponentFixture<AlbumRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumRealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
