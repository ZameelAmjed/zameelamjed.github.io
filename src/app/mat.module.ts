//Angular Material modules for the app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports:[
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})

export class MatModule { 
}
