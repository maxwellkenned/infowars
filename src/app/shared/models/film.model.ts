import { serializable, alias, primitive, list } from 'serializr';

export class Film {
  @serializable(alias('title', primitive()))
  title: string;

  @serializable(alias('episode_id', primitive()))
  episode_id: number;

  @serializable(alias('opening_crawl', primitive()))
  opening_crawl: string;

  @serializable(alias('director', primitive()))
  director: string;

  @serializable(alias('producer', primitive()))
  producer: string;

  @serializable(alias('release_date', primitive()))
  release_date: string;

  @serializable(alias('characters', list(primitive())))
  characters: string[];

  @serializable(alias('planets', list(primitive())))
  planets: string[];

  @serializable(alias('starships', list(primitive())))
  starships: string[];

  @serializable(alias('vehicles', list(primitive())))
  vehicles:string[];

  @serializable(alias('species', list(primitive())))
  species: string[];

  @serializable(alias('url', primitive()))
  url: string;
}