import {PATH_BADGES} from './../constant.js';

export default class Badge {
  static get ALLOWS_PARAMS() {
    return ['id', 'describe', 'name', 'filename'];
  }

  constructor(params) {
    this.hydrate(params);
  }

  hydrate(params) {
    if (typeof params !== 'object') {
      // manual hydrate
      return;
    }

    Object.keys(params).forEach(attribute => {
      if (Badge.ALLOWS_PARAMS.includes(attribute)) {
        this[attribute] = params[attribute];
      } else {
        console.warn(`
					Badge entity constructor property: "${attribute}",
					is not a valid property should be one of: "${Badge.ALLOWS_PARAMS.join(', ')}",
					this property have been skip.
				`);
      }
    });
  }

  /**
   * @return {number|null} - uniq identifier `entity` is use for verify equality between two `Badge entity` by `badgeReducers`
   */
  get id() {
    return this._id || null;
  }
  set id(id) {
    this._id = typeof id === 'number' && !isNaN(id) ? id : null;

    if (!this._id) {
      throw new RangeError('Badge entity `id` property should be a number');
    }
  }

  /**
   * @return {string|null} - filename badge into `./assets/images/badges`
   */
  get filename() {
    return this._filename || null;
  }
  set filename(filename) {
    this._filename = typeof filename === 'string' ? filename : null;

    if (!this._filename) {
      throw new RangeError(
        'Badge entity `filename` property should be a string (relative path from `./assets` directory)',
      );
    }
  }

  /**
   * @return {string} - relative path from `./assets/images/badges/` directory to a `svg file`
   */
  get uriImage() {
    return PATH_BADGES + `/${this.filename}`;
  }

  /**
   * @return {string|null} - funny title badge
   */
  get name() {
    return this._name || null;
  }

  /**
   * @return {string|null} - short block text describe action have unlock badge
   */
  get describe() {
    return this._describe || null;
  }
}
