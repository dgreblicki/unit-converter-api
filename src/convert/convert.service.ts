import { Injectable } from '@nestjs/common';

export type Unit = 'px' | 'rem' | 'em';

@Injectable()
export class ConvertService {
  convert(value: number, from: Unit, to: Unit, base = 16): number {
    if (from === to) return value;

    const toPx = (v: number) => (from === 'px' ? v : v * base);
    const fromPx = (v: number) => (to === 'px' ? v : v / base);

    return fromPx(toPx(value));
  }
}
