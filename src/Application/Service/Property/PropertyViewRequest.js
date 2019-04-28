function PropertyViewRequest(propertyId,
  ownerId) {
    this.propertyId = propertyId;
    this.ownerId = ownerId;

    if (this.constructor === PropertyViewRequest) {
      Object.freeze(this);
    }
    console.log(this.propertyId)
  }

PropertyViewRequest.propertyId = function propertyId() {
  return this.propertyId;
};

PropertyViewRequest.ownerId = function ownerId() {
  return this.ownerId;
};

module.exports = PropertyViewRequest

