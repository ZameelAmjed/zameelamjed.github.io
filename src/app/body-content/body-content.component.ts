import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PageModel } from '../modules/pageModel';
import { Datastore } from '../service/datastore.service';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectMarkdownContent } from '../state/datastore.selector';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
})
export class BodyContentComponent implements OnInit, OnDestroy {
  @Input() type: string;
  page: PageModel;
  //show template from markdown or dynamic
  @Input() showTemplate: boolean;
  summery: string = '';
  skills: string[] = [];
  faTwitter = faTwitter;
  jobTitle: string = '';
  profileImage: string = '';
  accomplishments: string[] | null = null;
  markdownContent$: Observable<string | null>;
  subscription;

  constructor(datastore: Datastore, private store: Store) {
    this.type = '';
    this.page = new PageModel();
    this.showTemplate = false;

    this.subscription = datastore.profileContent$.subscribe((content) => {
      this.summery = content.summery;
      this.skills = datastore.getSkills();
      this.jobTitle = datastore.getJobTitle();
      this.accomplishments = datastore.getAccomplishments();
      this.profileImage = datastore.getImage();
    });

    this.markdownContent$ = this.store.select(selectMarkdownContent);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    //if type empty set default summery component
    if (!this.type) {
      this.type = this.page.SUMMERY;
    }
  }

  markdownReady() {
    console.log('Markdown');
  }
}
