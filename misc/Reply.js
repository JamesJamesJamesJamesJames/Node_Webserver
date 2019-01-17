/**
 * Dependencies
 */
const WarpError = require('./WarpError');

module.exports = class Reply {
  /**
   * The Reply object is the de-facto result of Promise resolution/rejection in Warpstone
   * @param {Boolean} success
   * @param {Object} data 
   * @param {Object} error 
   */
  constructor(success, data, error) {
    this.success = typeof success == 'boolean' ? success : false;
    this.data = typeof data == 'object' ? data : {};
   
    try {
      if (typeof error.name == 'string' && typeof error.message == 'string') {
        this.error = new WarpError(error.name, error.message);
      }
    } 
    catch(e) {
      this.error = new WarpError('EMPTY', 'A reply failed, but no error was provided.');
    }
  }
}