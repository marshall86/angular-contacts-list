import { TestBed } from '@angular/core/testing';
import { MaterialDesignModule } from './material-design.module';

describe('MaterialDesignModule', () => {
  let pipe: MaterialDesignModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MaterialDesignModule] });
    pipe = TestBed.inject(MaterialDesignModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
