import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCountries'
})
export class PipePipe implements PipeTransform {

    transform(country: any[], searchValue: string): any[] {
      if (!country) {
        return [];
      }
      if (!searchValue) {
        return country;
      }
      searchValue = searchValue.toLocaleLowerCase();
  
      return country.filter(i => {
        return i.name.toLocaleLowerCase().includes(searchValue);
      });
    }
  }


