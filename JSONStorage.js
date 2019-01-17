/**
 * A persistence module that can perform CRUD operations based on entity data
 * 
 */

/**
 * Dependencies
 */
const fs = require('fs'); // file system
const path = require('path'); // File Paths
const crypto = require('crypto'); // Encryption

class JSONStorage {

  static persistDir() {
    return './.data';
  }

  /**
   * Create a unique id
   */
  static makeID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.rng(1)[0] & 15 >> c / 4).toString(16)
    )
  }

  /**
   * Store entity data to JSON  
   * @param {Object} entity 
   */
  static save(entity) {

    // "Table / Collection"
    const constructor = entity.constructor.name;

    // "Primary Key"
    const _id = this.makeID();

    // File Data
    const filename = `${_id}.json`;
    const filepath = path.join(this.persistDir(), constructor, filename);

    // Merge in the newly generated id with the entity data
    const data = Object.assign({ _id }, entity);

    // Write the JSON to a file
    fs.writeFileSync(filepath, JSON.stringify(data));
  }
}

module.exports = JSONStorage;
