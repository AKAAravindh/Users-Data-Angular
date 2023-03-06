import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allData:any[],searchKey:string,propertyName:string,propertyName2:string): any[] {
    const result:any = []

    if(!allData || searchKey=='' || propertyName=='' || propertyName2=='') {
      return allData
    }
    allData.forEach((data:any)=>{
      if ((data[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())) || data[propertyName2].trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
        result.push(data)
      }
    })

    return result;
  }

}
