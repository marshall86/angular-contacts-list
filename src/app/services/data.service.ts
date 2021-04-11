import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address, Contacts, Countries } from './interfaces/IContacts';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  // PLEASE MAKE SURE TO RUN json-server .\src\assets\contacts.json FIRST!
  path = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getContactsList(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this.path + 'contacts').pipe(
      map((res: Contacts[]) => res.map(
        (value: Contacts) => {
          if (value.avatar === 'https://handmade.network/static/light/empty-avatar.svg') {
            value.avatar = 'https://handmade.network/static/themes/light/empty-avatar.svg';
          }

          return value;
        }
      ))
    );
  }

  getContactById(id: number): Observable<Contacts> {
    return this.http.get<Contacts>(this.path + 'contacts/' + id).pipe(
      map((value: Contacts) => {
         if (value.avatar === 'https://handmade.network/static/light/empty-avatar.svg') {
            value.avatar = 'https://handmade.network/static/themes/light/empty-avatar.svg';
          }

          return value;
      })
    );
  }

  getContactAddressById(id: number): Observable<Address[]> {
    return this.http.get<Address[]>(this.path + `contacts/${id}/addresses`);
  }

  addNewAddress(id: number, data: any): Observable<void> {
    return this.http.post<void>(this.path + `contacts/${id}/addresses`, data);
  }

  deleteAddressById(addressId: number): Observable<void> {
    return this.http.delete<void>(this.path + `addresses/${addressId}`);
  }

  addNewContact(contact: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(this.path + 'contacts', contact);
  }

  deleteContactById(contactId: number): Observable<void> {
    return this.http.delete<void>(this.path + 'contacts/' + contactId);
  }

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.path + 'countries');
  }

}
