import { Specification } from './Specification';

export class IsNullSpecification extends Specification {
  isSatisfiedBy(value) {
    return value === null;
  }
}
