import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AppSharedModule } from 'src/app/modules/app.shared.modules';
import { MaterialDesignModule } from 'src/app/modules/material-design.module';

const modules = [
    MaterialDesignModule
];

@NgModule({
    imports: [
        CommonModule,
        AppSharedModule,
        HomeRoutingModule,
        modules
    ],
    exports: [
        modules,
        HomeComponent
    ],
    declarations: [ HomeComponent ],
})

export class HomeModule { }
