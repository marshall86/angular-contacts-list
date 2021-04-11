import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from 'src/app/modules/app.shared.modules';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { MaterialDesignModule } from 'src/app/modules/material-design.module';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from 'src/app/components/list/list.component';

const modules = [
    MaterialDesignModule
];

@NgModule({
    imports: [
        CommonModule,
        AppSharedModule,
        ContactsRoutingModule,
        modules
    ],
    exports: [
        modules,
        ContactsComponent
    ],
    declarations: [
        ContactsComponent,
        ContactComponent,
        ListComponent
    ]
})

export class ContactsModule { }
