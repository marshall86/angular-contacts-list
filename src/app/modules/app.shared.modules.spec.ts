import { TestBed } from '@angular/core/testing';
import { AppSharedModule } from './app.shared.modules';

describe('AppSharedModule', () => {
  let pipe: AppSharedModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AppSharedModule] });
    pipe = TestBed.inject(AppSharedModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
