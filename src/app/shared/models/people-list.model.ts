import { serializable, primitive, alias, object, list } from 'serializr';

import { People } from './people.model';


export class PeopleList {

  @serializable(alias('count', primitive()))
  count: number;

  @serializable(alias('next', primitive()))
  next: string;

  @serializable(alias('previous', primitive()))
  previous: string;

  @serializable(alias('results', list(object(People))))
  peoples: People[];

}
