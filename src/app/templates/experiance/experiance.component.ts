import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IExperiance } from 'src/app/modules/common';
import { Datastore } from 'src/app/service/datastore.service';
import {
  selectExperiance
} from 'src/app/state/datastore.selector';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss'],
})
export class ExperianceComponent implements OnInit {
  
  experiance$: Observable<IExperiance[]>;
  
  constructor(private store: Store) {
    this.experiance$ = this.store.select(selectExperiance);
  }

  ngOnInit(): void {
    //run
  }
}
