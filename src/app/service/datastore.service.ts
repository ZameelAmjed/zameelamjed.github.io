import { IContent, IExperiance, IPageData } from '../modules/common';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { initData, getMarkdown } from '../state/datastore.action';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Datastore implements OnDestroy {
  public tabType: string;

  pagedata: IPageData = {
    summery: '',
    image: '',
    sections: [],
  };

  private profileContent = new BehaviorSubject<IPageData>(this.pagedata);
  profileContent$ = this.profileContent.asObservable();

  subscription: Subscription;

  constructor(private http: HttpClient, private store: Store) {
    this.tabType = '';

    this.subscription = this.getProfile().subscribe((data) => {
      this.profileContent.next(data);
      this.pagedata = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getProfile(): Observable<IPageData> {
    return this.http.get<IPageData>(environment.apiProfile);
  }

  //api call to get experiance
  apiExperiance(): Observable<IExperiance[]> {
    return this.http.get<IExperiance[]>(environment.apiExperiance);
  }

  //api call to get markdown
  apiMarkdown(): Observable<string> {
    const name = this.getMarkdownFile();
    if (name)
      return this.http
        .get(name, { responseType: 'text' })
        .pipe(map((data) => data as string));
    else throw Error('Markdown file not found');
  }

  setTabType(page: string) {
    this.tabType = page;
    //markdown is specified use markdown file
    //else use default json file
    if (this.getMarkdownFile()) {
      this.store.dispatch(new getMarkdown());
    } else {
      this.store.dispatch(new initData());
    }
  }

  getMarkdownFile(): string | undefined {
    const sections = this.getSections();
    for (let item of sections) {
      if (item.name === this.tabType) {
        return item.markdown_file;
      }
    }
    return undefined;
  }

  getAccomplishments(): string[] | null {
    const accomplishments = this.profileContent.getValue().accomplishments;
    return accomplishments ? accomplishments : null;
  }

  getJobTitle(): string {
    const jobTitle = this.profileContent.getValue().job_title;
    return jobTitle ? jobTitle : '';
  }

  getSkills(): string[] {
    const skills = this.profileContent.getValue().skills;
    return skills ? skills : [];
  }

  getSummery(): string {
    return this.profileContent.getValue().summery;
  }

  getImage(): string {
    return this.profileContent.getValue().image;
  }

  getSections(): IContent[] {
    return this.profileContent.getValue().sections;
  }
}
