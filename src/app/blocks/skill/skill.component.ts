import { Component, Input, OnInit } from '@angular/core';
import  {IconName} from '@fortawesome/free-brands-svg-icons';
import { SkillModel } from './skillModel';
@Component({
  selector: 'app-skill',
  template: `<mat-chip><fa-icon *ngIf="icon" [icon]="['fab', icon]"></fa-icon><span *ngIf="icon">&nbsp;</span>{{title}}</mat-chip>`,
})

export class SkillComponent implements OnInit {
  @Input() title: string = '';
  icon: IconName | undefined;
  skills:SkillModel;
  constructor(){
    this.skills = new SkillModel();
  }

  ngOnInit(): void {
  
    if(this.skills.isIconName(<IconName>this.title.toLowerCase())){
      //show icon 
      this.title = this.title.toLowerCase();
      this.icon = <IconName>this.title
    }else{
      //text only
    }
    
  }

  

}
