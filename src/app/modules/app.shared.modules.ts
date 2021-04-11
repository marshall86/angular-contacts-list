import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from './SkeletonModule';

export const myComponents = [ ];

export const angularModules = [
    FormsModule,
    ReactiveFormsModule
];

@NgModule({
    imports: [
        ...angularModules,
        SkeletonModule,
        RouterModule,
    ],
    exports: [
        ...angularModules,
        SkeletonModule,
        ...myComponents
    ],
    declarations: [
        ...myComponents
    ],
    providers: [ ]
})
export class AppSharedModule { }
