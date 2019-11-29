import { serializable, alias, primitive, list } from 'serializr';

export class Planet {
  @serializable(alias('name', primitive()))
  name: string;

  @serializable(alias('rotation_period', primitive()))
  rotation_period: string;

  @serializable(alias('orbital_period', primitive()))
  orbital_period: string;

  @serializable(alias('diameter', primitive()))
  diameter: string;

  @serializable(alias('climate', primitive()))
  climate: string;

  @serializable(alias('gravity', primitive()))
  gravity:string;

  @serializable(alias('terrain', primitive()))
  terrain: string;

  @serializable(alias('surface_water', primitive()))
  surface_water: string;

  @serializable(alias('population', primitive()))
  population: string;

  @serializable(alias('residents', list(primitive())))
  residents: any[];

  @serializable(alias('films', list(primitive())))
  films: any[];

  @serializable(alias('url', primitive()))
  url: string;
}