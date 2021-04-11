import { TestBed } from '@angular/core/testing';
import { ContactsModule } from './contacts.module';

describe('ContactsModule', () => {
  let pipe: ContactsModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ContactsModule] });
    pipe = TestBed.inject(ContactsModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
