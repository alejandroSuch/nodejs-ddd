import { builder } from '@Application/Service/Property/PropertyViewRequest';

const OWNER_ID = 'e2594a46-8391-4394-8c97-05a1c72845bc';
const PROPERTY_ID = 33;

describe('PropertyViewRequestBuilder', () => {
  describe('build', () => {
    it('should work with proper data', () => {
      const result = builder()
        .withPropertyId(PROPERTY_ID)
        .withOwnerId(OWNER_ID)
        .build();

      expect(result).toBeDefined();
      expect(result.ownerId()).toBe(OWNER_ID);
      expect(result.propertyId()).toBe(PROPERTY_ID);
    });

    it('should fail when building with no data', () => {
      expect(() => builder().build()).toThrowErrorMatchingSnapshot();
    });

    it('should fail when building with no propertyId', () => {
      expect(() =>
        builder()
          .withOwnerId(OWNER_ID)
          .build()
      ).toThrowErrorMatchingSnapshot();
    });

    it('should fail when building with no ownerId', () => {
      expect(() =>
        builder()
          .withPropertyId(PROPERTY_ID)
          .build()
      ).toThrowErrorMatchingSnapshot();
    });

    it('should fail when building with an owner id that is not a string', () => {
      expect(() =>
        builder()
          .withPropertyId(PROPERTY_ID)
          .withOwnerId(48)
          .build()
      ).toThrowErrorMatchingSnapshot();
    });

    it('should fail when building with an owner id that is an empty string', () => {
      expect(() =>
        builder()
          .withPropertyId(PROPERTY_ID)
          .withOwnerId('    ')
          .build()
      ).toThrowErrorMatchingSnapshot();
    });

    it('should fail when building with a property id that is not a number', () => {
      expect(() =>
        builder()
          .withPropertyId('58')
          .withOwnerId(OWNER_ID)
          .build()
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
