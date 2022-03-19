interface ITranslate {
  fr: string;
  en: string;
}

export default interface IProjectData {
  id?: any | null;
  name?: ITranslate;
  second_title?: ITranslate;
  period?: ITranslate;
  tasks?: ITranslate[];
  technologies?: string[];
  description?: ITranslate;
  logo: string;
  medias?: string[];
  createdAt: Date;
}
