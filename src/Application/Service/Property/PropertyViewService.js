var PropertyDoesNotExist = require('../../../Domain/Model/Property/PropertyDoesNotExist')

module.exports = class PropertyViewService {
    constructor(
      PropertyRepository
    ) {
      this.propertyRepository = PropertyRepository;
    }

    execute(PropertyViewRequest) {
        var property = this.propertyRepository.ofId(PropertyViewRequest.propertyId)
        console.log('eee')
        if (property === null || property.owner !== PropertyViewRequest.ownerId) {
            throw new PropertyDoesNotExist()
        }

        return property
    }
  }