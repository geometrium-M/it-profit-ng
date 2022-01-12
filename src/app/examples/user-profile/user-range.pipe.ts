import { Pipe, PipeTransform } from '@angular/core';
import {min} from "rxjs";

@Pipe({
  name: 'userRange'
})
export class UserRangePipe implements PipeTransform {

  transform(minYear: number, maxYear: number = -1,): number {
    return maxYear-minYear;

  }
}
