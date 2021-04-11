import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: ContactsComponent,
        pathMatch: 'full',
        data: {
            title: 'Contacts'
        }
    },
    {
        path: 'contact/:id',
        component: ContactComponent,
        pathMatch: 'full',
        data: {
            title: 'Contact Details'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    providers: []
})

export class ContactsRoutingModule { }
