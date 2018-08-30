import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateTransform'
})
export class TwitterDatePipe implements PipeTransform{
    
    transform(date: any , args?:any){
        if(!date)
            return null;
        
        let dateArr = date.split(' ');
        dateArr.splice(4,1);
        let yr = dateArr[4];
        dateArr[4] = dateArr[3];
        dateArr[3] = yr;
         return dateArr.join(' ');
    }
}
