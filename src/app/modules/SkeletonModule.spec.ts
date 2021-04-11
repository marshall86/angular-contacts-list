import { TestBed } from '@angular/core/testing';
import { SkeletonModule } from './SkeletonModule';

describe('SkeletonModule', () => {
  let pipe: SkeletonModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SkeletonModule] });
    pipe = TestBed.inject(SkeletonModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
