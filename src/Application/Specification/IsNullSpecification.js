import { Specification } from '@Application/Specification/Specification';

export class IsNullSpecification extends Specification {
  isSatisfiedBy(value) {
    return value === null;
  }
}
