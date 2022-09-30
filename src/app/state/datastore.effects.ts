import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { IExperiance } from '../modules/common';
import { Datastore } from '../service/datastore.service';
import * as DatastoreActions from './datastore.action';
import { DatastoreActionType } from './datastore.action.type';
import { selectExperiance } from './datastore.selector';

@Injectable()
export class DatastoreEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private datastore: Datastore
  ) {}

  //EFFECT fetch data from server if state variable is empty
  $effectsInitData: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<DatastoreActions.initData>(
        DatastoreActionType.INIT_DATA
      ),
      withLatestFrom(this.store.select(selectExperiance)),
      filter(([payload, latest]) => {
        return (!latest)?true:false;
      }),
      debounceTime(5000),
      switchMap(([payload, latest]) => {
        //empty selector value so make api call
        return this.datastore.apiExperiance().pipe(
          map(data=>data as IExperiance[]),
          switchMap((data)=>{
            return of(new DatastoreActions.setExperiance(data));
          }),catchError((error)=>{
            throw new Error("not fetched from API");
          })
        )
      })
    )
  );

  $effectssetMarkdown: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType<DatastoreActions.getMarkdown>(
      DatastoreActionType.GET_MARKDOWN
    ),
    switchMap((payload) => {
      //empty selector value so make api call
      return this.datastore.apiMarkdown().pipe(
        switchMap((data)=>{
          console.log(data);
          return of(new DatastoreActions.setMarkdown(data));
        }),catchError((error)=>{
          console.log(error)
          throw new Error("not fetched from API");
        })
      );
    })
  )
);

}
