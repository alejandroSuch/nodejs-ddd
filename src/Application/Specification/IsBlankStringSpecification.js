import { IsWhitespaceSpecification } from '@Application/Specification/IsWhitespaceSpecification';
import { Specification } from '@Application/Specification/Specification';

export class IsBlankStringSpecification extends Specification {
  isSatisfiedBy(value) {
    if (value === null || typeof value === 'undefined') {
      return true;
    }

    if (typeof value !== 'string') {
      throw new Error('invalid type');
    }

    const strlen = value.trim().length;

    if (strlen === 0) {
      return true;
    }

    const isWhitespace = new IsWhitespaceSpecification();

    return value.split('').every(char => isWhitespace.isSatisfiedBy(char));
  }
}
