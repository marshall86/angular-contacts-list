import { ChangeDetectionStrategy, ChangeDetectorRef, Component,  OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { Address, Contacts, Countries } from 'src/app/services/interfaces/IContacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit, OnDestroy{

  selectedCountry = '';
  contact: Contacts = {
    first_name: '',
    last_name: '',
    avatar: '',
    id: 0
  };
  countries: Countries[] = [];
  form!: FormGroup;

  private _destroyed$ = new Subject();

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef, private fb: FormBuilder, private snackBar: MatSnackBar, private data: DataService) {
    this.getData(this.route.snapshot.params.id);
  }

  ngOnInit() {
    this.form = this.fb.group({
      addresses: this.fb.array([this.newAddress()]),
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
    this._destroyed$.unsubscribe();
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  createNewAddress() {
    this.addresses.push(this.newAddress());
  }

  getData(id: number) {
    forkJoin([this.data.getContactAddressById(id), this.data.getCountries(), this.data.getContactById(id)])
      .pipe(takeUntil(this._destroyed$))
      .subscribe(
        (res) => {
          this.contact = res[2];

          const addressList = res[0].map((address: Address) => {
            const newAddress = {
              ...address,
              countryName: res[1].filter((country) => country.iso2 === address.country).map((c) => c.name).toString()
            };

            return newAddress;
          });

          if (addressList.length > 0) {
            for (let i = 0; i < addressList.length -1; i++) {
              this.addresses.push(this.newAddress());
            }

            this.addresses.patchValue(addressList);
          }

          this.countries = res[1];
          this.cdr.detectChanges();
        }
      );
  }

  newAddress(): FormGroup {
    return this.fb.group({
      country: '',
      street1: '',
      street2: '',
      town: ''
    });
  }

  deleteAddress(currentId: number, addressId: number) {
    this.addresses.removeAt(currentId);

    if (addressId) {
      this.data.deleteAddressById(addressId).subscribe();
    }

    this.snackBar.open('Contact deleted', 'ok', { duration: 3000 });
  }

  onSubmit() {
    this.data.addNewAddress(this.contact.id, this.addresses.value).subscribe(() => this.snackBar.open('Address updated', 'ok', { duration: 3000 }));
  }

  identify(_index: any, item: any) {
    return item.id;
  }

}
