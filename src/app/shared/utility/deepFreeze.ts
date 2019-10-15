import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  constructor() {}

  deepFreeze = object => {
    const propNames = Object.getOwnPropertyNames(object);
    for (const name of propNames) {
      const value = object[name];
      object[name] = value && typeof value === 'object' ? this.deepFreeze(value) : value;
    }
    return Object.freeze(object);
  };
}
