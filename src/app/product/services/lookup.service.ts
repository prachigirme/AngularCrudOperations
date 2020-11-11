import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lookup } from '../models/lookup';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private units: Array<Lookup>=
  [
    {name:'pcs' ,code:"1" ,category:1},
    {name:'carton' ,code:"2" ,category:1},
    {name:'gram' ,code:"3" ,category:1},
    {name:'ltr' ,code:"4" ,category:1}

  ];
  private productCategories:Array<Lookup>=[
    {name:'pickles' ,code:"1" ,category:1},
    {name:'rice' ,code:"1" ,category:1},
    {name:'oil' ,code:"1" ,category:1},
    {name:'masala' ,code:"1" ,category:1}

  ];

  constructor() { }


  getProductCategories():Observable<Lookup[]>
  {
    return of(this.productCategories);
  }

  getUnits():Observable<Lookup[]>
  {
    return of(this.units);
  }


}
