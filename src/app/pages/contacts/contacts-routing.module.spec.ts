import { TestBed } from '@angular/core/testing';
import { ContactsRoutingModule } from './contacts-routing.module';

describe('ContactsRoutingModule', () => {
  let pipe: ContactsRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ContactsRoutingModule] });
    pipe = TestBed.inject(ContactsRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
