import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from './material-design.module';
import { AppComponent } from '../app.component';

export const skeletonComponents = [
    AppComponent
];

export const myModules = [
    MaterialDesignModule,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...myModules,
    ],
    exports: [
        RouterModule,
        ...skeletonComponents,
        ...myModules,
    ],
    declarations: [
        ...skeletonComponents
    ]
})
export class SkeletonModule { }
