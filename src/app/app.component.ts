import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { IContent } from './modules/common';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Datastore } from './service/datastore.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnDestroy{
  profileContent: IContent[] = [];
  subscription: Subscription;
  
  constructor(
    title: Title, 
    private datastore: Datastore) {
    
      //set title as portfolio name
    title.setTitle(environment.name);
    
    this.subscription = this.datastore.profileContent$
      .subscribe(content => {
        this.profileContent = this.datastore.getSections();
      })
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

  title = environment.name;
  contentType: string = '';

  //ontab change show component
  tabChanged($event: MatTabChangeEvent) {
    this.contentType = $event.tab.textLabel.toLowerCase();
    this.datastore.setTabType(this.contentType);
  }

  loadDefaultTemplate() {
    for (const item of this.profileContent) {
      if (item.name == this.contentType) {
        return item.markdown_file ? false : true;
      }
    }
    return true;
  }
}
