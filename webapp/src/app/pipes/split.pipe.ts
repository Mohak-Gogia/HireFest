import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(input: string): string[] {
    let res = input.split(",");
    return res;
  }

}
