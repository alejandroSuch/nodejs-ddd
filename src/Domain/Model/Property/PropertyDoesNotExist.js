module.exports = class PropertyDoesNotExist extends Error {
  constructor() {
    super('Property does not exist');
    this.name = 'PropertyNotFoundError';
  }
}