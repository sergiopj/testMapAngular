import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCoordinates'
})
export class FormatCoordinatesPipe implements PipeTransform {

  transform(dms: any, args?: any): any {
    const parts = dms.split(/[^\d+(\,\d+)\d+(\.\d+)?\w]+/);
    const degrees = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2].replace(',', '.'));
    const direction = parts[3];
    let dd = degrees + minutes / 60 + seconds / (60 * 60);

    if (direction === 'S' || direction === 'W') {
     dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
  }

}
