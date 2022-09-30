export interface IContent {
  name: string;
  icon: string;
  markdown_file?: string; //if not defined use dynamic page
}

export interface IPageData {
  summery: string;
  job_title?: string;
  accomplishments?:string[],
  skills?: string[];
  image: string;
  sections: IContent[];
}

export interface IExperiance{
  workplace: string;
  role?: string;
  start: string;
  end?: string | null;
  summery: string;
  work?: string[]|null;
  responsibilities?: string[]|null;
  skills?: string[]|null;

}
