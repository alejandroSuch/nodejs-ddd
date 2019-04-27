module.exports = class PropertyViewRequest {
  constructor(
    propertyId,
    ownerId
  ) {
    this.propertyId = propertyId;
    this.ownerId = ownerId;
  }

  propertyId() {
    return this.propertyId;
  }

  ownerId() {
    return this.ownerId;
  }
}