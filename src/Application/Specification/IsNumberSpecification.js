import { Specification } from '@Application/Specification/Specification';

export class IsNumberSpecification extends Specification {
  isSatisfiedBy(value) {
    return typeof value === 'number';
  }
}
