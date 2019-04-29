export class AsyncSpecification {
  and(spec) {
    return new AsyncAndSpecification(this, spec);
  }

  or(spec) {
    return new AsyncOrSpecification(this, spec);
  }

  not(spec) {
    return new AsyncNotSpecification(this, spec);
  }

  async isSatisfiedBy(obj) {
    throw new Error('not yet implemented');
  }
}

export class AsyncAndSpecification {
  constructor(leftSpec, rightSpec) {
    if (!leftSpec instanceof AsyncSpecification) {
      throw new Error('leftspec is not a specification');
    }

    if (!rightSpec instanceof AsyncSpecification) {
      throw new Error('rightSpec is not a specification');
    }

    this.leftSpec = leftSpec;
    this.rightSpec = rightSpec;
  }

  async isSatisfiedBy(obj) {
    const leftIsSatisfied = await this.leftSpec.isSatisfiedBy(obj);

    if (!leftIsSatisfied) {
      return false;
    }

    const rightIsSatisfied = await this.rightSpec.isSatisfiedBy(obj);

    return rightIsSatisfied;
  }
}

export class AsyncOrSpecification {
  constructor(leftSpec, rightSpec) {
    if (!leftSpec instanceof AsyncSpecification) {
      throw new Error('leftspec is not a specification');
    }

    if (!rightSpec instanceof AsyncSpecification) {
      throw new Error('rightSpec is not a specification');
    }

    this.leftSpec = leftSpec;
    this.rightSpec = rightSpec;
  }

  async isSatisfiedBy(obj) {
    const leftIsSatisfied = await this.leftSpec.isSatisfiedBy(obj);

    if (leftIsSatisfied) {
      return true;
    }

    const rightIsSatisfied = await this.rightSpec.isSatisfiedBy(obj);

    return rightIsSatisfied;
  }
}

export class AsyncNotSpecification {
  constructor(spec) {
    if (!spec instanceof AsyncSpecification) {
      throw new Error('spec is not a specification');
    }

    this.spec = spec;
  }

  async isSatisfiedBy(obj) {
    const result = await this.spec.isSatisfiedBy(obj);

    return !result;
  }
}
