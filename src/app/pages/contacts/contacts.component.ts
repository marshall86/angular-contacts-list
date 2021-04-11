import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Contacts } from 'src/app/services/interfaces/IContacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  providers: [DataService]
})
export class ContactsComponent implements OnInit {

  lastId = 0;
  form!: FormGroup;
  contacts$: Observable<Contacts[]> = of([]);

  constructor(private data: DataService, private snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form  = this.fb.group({
      newContact: [''],
    });
    this.getList();
  }

  getList() {
    this.contacts$ = this.data.getContactsList().pipe(
      map((value: Contacts[]) => {
        this.lastId = value.reduce((c, v) => c = c > v.id ? c : v.id, 0);
        return value;
      })
    );
  }

  addContact() {
    if (this.form.valid) {
      const c: Contacts = {
        id: this.lastId + 1,
        first_name: this.form.value.newContact,
        last_name: '',
        avatar: 'https://handmade.network/static/themes/light/empty-avatar.svg'
      };

      this.data.addNewContact(c).subscribe(() => {
        this.getList();
        this.snackBar.open('Added new contact', 'ok', { duration: 3000 });
      });
    }
  }

}
