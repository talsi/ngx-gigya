import { DsDeleteParams, DsGetParams, DsStoreParams } from './ds';

export type GigyaDS = {

  /**
   * Deletes object data or an entire object from Gigya's Data Store.
   *
   * @see http://developers.gigya.com/display/GD/ds.delete+REST
   */
  delete(params: DsDeleteParams): void;

  /**
   * Retrieves an object's or the specified datum from Gigya's Data Store.
   *
   * @see http://developers.gigya.com/display/GD/ds.get+REST
   */
  get<T = any>(params: DsGetParams<T>): void;


  /**
   * Stores an object data in Gigya's Data Store (DS).
   *
   * @see http://developers.gigya.com/display/GD/ds.store+REST
   */
  store<T = any>(params: DsStoreParams<T>): void;
};
