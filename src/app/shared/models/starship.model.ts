import { serializable, alias, primitive, list } from 'serializr';

export class Starship {
  @serializable(alias('name', primitive()))
  name: string;

  @serializable(alias('model', primitive()))
  model: string;

  @serializable(alias('manufacturer', primitive()))
  manufacturer: string;

  @serializable(alias('cost_in_credits', primitive()))
  cost_in_credits: string;

  @serializable(alias('length', primitive()))
  length: string;

  @serializable(alias('max_atmosphering_speed', primitive()))
  max_atmosphering_speed: string;

  @serializable(alias('crew', primitive()))
  crew: string;

  @serializable(alias('passengers', primitive()))
  passengers: string;

  @serializable(alias('cargo_capacity', primitive()))
  cargo_capacity: string;

  @serializable(alias('naconsumablesme', primitive()))
  consumables: string;

  @serializable(alias('hyperdrive_rating', primitive()))
  hyperdrive_rating: string;

  @serializable(alias('MGLT', primitive()))
  MGLT: string;

  @serializable(alias('starship_class', primitive()))
  starship_class: string;

  @serializable(alias('pilots', list(primitive())))
  pilots: string[];

  @serializable(alias('films', list(primitive())))
  films: string[];

  @serializable(alias('url', primitive()))
  url: string;
}