import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatModule } from './mat.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyContentComponent } from './body-content/body-content.component';
import { ExperianceComponent } from './templates/experiance/experiance.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillComponent } from './blocks/skill/skill.component';
import { SkillModule } from './blocks/skill/skill.module';
import { HttpClientModule } from '@angular/common/http';
import { datastoreReducer } from './state/datastore.reducer';
import { StoreModule } from '@ngrx/store';
import { DatastoreEffects } from './state/datastore.effects';
import { EffectsModule } from '@ngrx/effects';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    BodyContentComponent,
    ExperianceComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatModule,
    SkillModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('experiance', datastoreReducer),
    StoreModule.forFeature('markdownContent', datastoreReducer),
    EffectsModule.forRoot([DatastoreEffects]),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
