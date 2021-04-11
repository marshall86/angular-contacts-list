import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ContactComponent } from './contact.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    const matSnackBarStub = () => ({ open: () => ({}) });
    const activatedRouteStub = () => ({ snapshot: { params: { id: {} } } });
    const dataServiceStub = () => ({
      getContactAddressById: () => ({}),
      getCountries: () => ({}),
      getContactById: () => ({}),
      deleteAddressById: () => ({}),
      addNewAddress: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ContactComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        FormBuilder,
        ChangeDetectorRef,
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: DataService, useFactory: dataServiceStub }
      ]
    });
    spyOn(ContactComponent.prototype, 'getData');
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.contact = {
      first_name: '',
      last_name: '',
      avatar: '',
      id: 0
    };
    component.countries = [];
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`countries has default value`, () => {
    expect(component.countries).toEqual([]);
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(ContactComponent.prototype.getData).toHaveBeenCalledTimes(1);
    });
  });

  describe('newAddress', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.newAddress();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const matSnackBarStub: MatSnackBar = fixture.debugElement.injector.get(
        MatSnackBar
      );
      const dataServiceStub: DataService = fixture.debugElement.injector.get(
        DataService
      );
      spyOn(matSnackBarStub, 'open').and.callThrough();
      spyOn(dataServiceStub, 'addNewAddress').and.callThrough();
      component.onSubmit();
      expect(matSnackBarStub.open).toHaveBeenCalledTimes(0);
      expect(dataServiceStub.addNewAddress).toHaveBeenCalledTimes(1);
    });
  });
});
