import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvertService {
  convert(value: number, from: string, to: string, base: number) {
    if (from === to) return value;

    // simple conversion logic
    let pxValue: number;

    // convert everything to px first
    switch (from) {
      case 'px':
        pxValue = value;
        break;
      case 'rem':
      case 'em':
        pxValue = value * base;
        break;
      default:
        pxValue = value;
    }

    // convert px to target unit
    switch (to) {
      case 'px':
        return pxValue;
      case 'rem':
      case 'em':
        return pxValue / base;
      default:
        return pxValue;
    }
  }
}
