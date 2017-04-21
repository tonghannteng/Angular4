import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = []

    if(!value) return value;

    for (let post of value) {
      if (post.title.includes(args)) {
        result.push(post);
      }
    }

    return result;
  }

}
