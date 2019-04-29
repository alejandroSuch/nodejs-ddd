export class Specification {
  and(spec) {
    return new AndSpecification(this, spec);
  }

  or(spec) {
    return new OrSpecification(this, spec);
  }

  not(spec) {
    return new NotSpecification(this, spec);
  }

  isSatisfiedBy(value) {
    throw new Error('not yet implemented');
  }
}

export class AndSpecification {
  constructor(leftSpec, rightSpec) {
    if (!leftSpec instanceof Specification) {
      throw new Error('leftspec is not a specification');
    }

    if (!rightSpec instanceof Specification) {
      throw new Error('rightSpec is not a specification');
    }

    this.leftSpec = leftSpec;
    this.rightSpec = rightSpec;
  }

  isSatisfiedBy(value) {
    const leftIsSatisfied = this.leftSpec.isSatisfiedBy(value);

    if (!leftIsSatisfied) {
      return false;
    }

    const rightIsSatisfied = this.rightSpec.isSatisfiedBy(value);

    return rightIsSatisfied;
  }
}

export class OrSpecification {
  constructor(leftSpec, rightSpec) {
    if (!leftSpec instanceof Specification) {
      throw new Error('leftspec is not a specification');
    }

    if (!rightSpec instanceof Specification) {
      throw new Error('rightSpec is not a specification');
    }

    this.leftSpec = leftSpec;
    this.rightSpec = rightSpec;
  }

  isSatisfiedBy(value) {
    const leftIsSatisfied = this.leftSpec.isSatisfiedBy(value);

    if (leftIsSatisfied) {
      return true;
    }

    const rightIsSatisfied = this.rightSpec.isSatisfiedBy(value);

    return rightIsSatisfied;
  }
}

export class NotSpecification {
  constructor(spec) {
    if (!spec instanceof Specification) {
      throw new Error('spec is not a specification');
    }

    this.spec = spec;
  }

  isSatisfiedBy(value) {
    const result = this.spec.isSatisfiedBy(value);

    return !result;
  }
}
