import { IsBlankStringSpecification } from '@Application/Specification/IsBlankStringSpecification';
import { IsNumberSpecification } from '@Application/Specification/IsNumberSpecification';

class PropertyViewRequestBuilder {
  constructor() {
    this.propertyId = null;
    this.ownerId = null;
  }

  withPropertyId(propertyId) {
    this.propertyId = propertyId;
    return this;
  }

  withOwnerId(ownerId) {
    this.ownerId = ownerId;
    return this;
  }

  _assertThatPropertyIdIsValid() {
    const isNumber = new IsNumberSpecification();

    if (!isNumber.isSatisfiedBy(this.propertyId)) {
      throw new Error('propertyId must be a number');
    }
  }

  _assertThatOwnerIdIsValid() {
    const isBlankString = new IsBlankStringSpecification();

    if (isBlankString.isSatisfiedBy(this.ownerId)) {
      throw new Error('ownerId must be a non-blank string');
    }
  }

  build() {
    this._assertThatOwnerIdIsValid();
    this._assertThatPropertyIdIsValid();

    return Object.freeze({
      propertyId: () => this.propertyId,
      ownerId: () => this.ownerId,
    });
  }
}

export const builder = () => new PropertyViewRequestBuilder();
