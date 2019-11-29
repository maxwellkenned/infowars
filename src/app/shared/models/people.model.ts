import { serializable, alias, primitive, list, object } from 'serializr';
import { GoogleSearchService } from '../services/google-search.service';

export class People {
  @serializable(alias('name', primitive()))
  name: string;

  @serializable(alias('height', primitive()))
  height: number;

  @serializable(alias('mass', primitive()))
  mass: number;

  @serializable(alias('hair_color', primitive()))
  hair_color: string;

  @serializable(alias('skin_color', primitive()))
  skin_color: string;

  @serializable(alias('eye_color', primitive()))
  eye_color: string;

  @serializable(alias('birth_year', primitive()))
  birth_year: string;

  @serializable(alias('gender', primitive()))
  gender: string;

  @serializable(alias('homeworld', primitive()))
  homeworld: string;

  @serializable(alias('films', list(primitive())))
  films: any[];

  @serializable(alias('species', list(primitive())))
  species: any[];

  @serializable(alias('vehicles', list(primitive())))
  vehicles: any[];

  @serializable(alias('starships', list(primitive())))
  starships: any[];

  @serializable(alias('url', primitive()))
  url: string;

  @serializable(alias('image', primitive()))
  image: string;

}
