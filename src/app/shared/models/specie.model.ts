import { serializable, alias, primitive, list } from 'serializr';

export class Specie {
  @serializable(alias('name', primitive()))
  name: string;

  @serializable(alias('classification', primitive()))
  classification: string;

  @serializable(alias('designation', primitive()))
  designation: string;

  @serializable(alias('average_height', primitive()))
  average_height: string;

  @serializable(alias('skin_colors', primitive()))
  skin_colors: string;

  @serializable(alias('hair_colors', primitive()))
  hair_colors: string;

  @serializable(alias('eye_colors', primitive()))
  eye_colors: string;

  @serializable(alias('average_lifespan', primitive()))
  average_lifespan: string;

  @serializable(alias('homeworld', primitive()))
  homeworld: string;

  @serializable(alias('language', primitive()))
  language: string;

  @serializable(alias('people', list(primitive())))
  people: any[];

  @serializable(alias('films', list(primitive())))
  films: any[];

  @serializable(alias('url', primitive()))
  url: string;
}