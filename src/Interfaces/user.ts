interface ITranslate {
  fr: string;
  en: string;
}
export interface ITechonlogies {
  title: string;
  description: ITranslate;
  period: ITranslate;
}

export default interface IUserData {
  id?: any | null;
  name?: ITranslate;
  description?: ITranslate;
  cv?: ITranslate;
  technologies?: ITechonlogies[];
  image: string;
  createdAt: Date;
}
