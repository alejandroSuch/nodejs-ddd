import { Specification } from '@Application/Specification/Specification';

// https://docs.oracle.com/javase/7/docs/api/java/lang/Character.html#isWhitespace(char)

const WHITESPACES = [
  '\n',
  '\t',
  '\f',
  '\r',
  ' ',
  '\u00A0',
  '\u2007',
  '\u202F',
  '\u0009',
  '\u000a',
  '\u000b',
  '\u000c',
  '\u000d',
  '\u001c',
  '\u001d',
  '\u000e',
  '\u000f',
];

export class IsWhitespaceSpecification extends Specification {
  isSatisfiedBy(value) {
    return WHITESPACES.includes(value);
  }
}
