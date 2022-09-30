import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class SkillModule { 
  constructor(private library: FaIconLibrary){
    library.addIconPacks(fab)
  }
}
