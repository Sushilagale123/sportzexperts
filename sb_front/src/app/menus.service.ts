import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MenusService {

  constructor(private _http: Http) { }
  getMenus(){
    return this._http.get("http://localhost:3000/menus",null).pipe(map((res:Response)=>{ return res.json()}));
  }
}
