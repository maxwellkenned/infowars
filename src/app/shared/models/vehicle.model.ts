import { serializable, alias, primitive, list } from 'serializr';

export class Vehicle {
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

  @serializable(alias('consumables', primitive()))
  consumables: string;

  @serializable(alias('vehicle_class', primitive()))
  vehicle_class: string;

  @serializable(alias('pilots', list(primitive())))
  pilots: any[];

  @serializable(alias('films', list(primitive())))
  films: any[];

  @serializable(alias('url', primitive()))
  url: string;
}