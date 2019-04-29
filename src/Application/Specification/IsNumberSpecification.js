import { Specification } from './Specification';

export class IsNumberSpecification extends Specification {
  isSatisfiedBy(value) {
    return typeof value === 'number';
  }
}
