import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kbDisplay',
})
export class KBDisplayPipe implements PipeTransform {
  private numToMax2Decimals(num: number): string {
    return num.toFixed(2).replace(/\.?0+$/, '');
  }

  transform(valueInKB: number): string {
    if (valueInKB < 1024) {
      return `${this.numToMax2Decimals(valueInKB)} KB`;
    }

    const valueInMB = valueInKB / 1024;
    if (valueInMB < 1024) {
      return `${this.numToMax2Decimals(valueInMB)} MB`;
    }

    const valueInGB = valueInMB / 1024;
    return `${this.numToMax2Decimals(valueInGB)} GB`;
  }
}
