import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const matModules = [
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatMenuModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  ScrollingModule
];

@NgModule({
  exports: matModules,
  imports: matModules
})
export class MaterialDesignModule { }
