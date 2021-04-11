import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { ContactsComponent } from './contacts.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(() => {
    const matSnackBarStub = () => ({ open: () => ({}) });
    const dataServiceStub = () => ({
      getContactsList: () => ({ pipe: () => ({}) }),
      addNewContact: () => ({ subscribe: ()=> ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ContactsComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        FormBuilder,
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: DataService, useFactory: dataServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    component.lastId = 0;
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`lastId has default value`, () => {
    expect(component.lastId).toEqual(0);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getList').and.callThrough();
      component.ngOnInit();
      expect(component.getList).toHaveBeenCalled();
    });
  });

  describe('getList', () => {
    it('makes expected calls', () => {
      const dataServiceStub: DataService = fixture.debugElement.injector.get(
        DataService
      );
      spyOn(dataServiceStub, 'getContactsList').and.callThrough();
      component.getList();
      expect(dataServiceStub.getContactsList).toHaveBeenCalled();
    });
  });

  describe('addContact', () => {
    it('makes expected calls', () => {
      const matSnackBarStub: MatSnackBar = fixture.debugElement.injector.get(
        MatSnackBar
      );
      const dataServiceStub: DataService = fixture.debugElement.injector.get(
        DataService
      );
      spyOn(component, 'getList').and.callThrough();
      spyOn(matSnackBarStub, 'open').and.callThrough();
      spyOn(dataServiceStub, 'addNewContact').and.callThrough();
      component.addContact();
      expect(component.getList).toHaveBeenCalledTimes(0);
      expect(matSnackBarStub.open).toHaveBeenCalledTimes(0);
      expect(dataServiceStub.addNewContact).toHaveBeenCalledTimes(1);
    });
  });
});
