import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Inventario} from './inventario';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';


@Injectable()
export class InventarioService {
  private headers=  new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8000/inventario';
  constructor(
    private http: Http
  ) { }

  getInventarios():Observable<Inventario[]>{    
    return this.http.get(this.url).map(r => r.json()).catch(this.handleError);
  }

   getInventario(id: number):Observable<Inventario[]>{    
    return this.http.get(this.url+'/'+id).first().map(r => r.json()).catch(this.handleError);
  }

  addInventario(inventario: Inventario){  
    return this.http.post(this.url,inventario).map(r => r.json()).catch(this.handleError);
  }

  putInventario(inventario: Inventario){  
    return this.http.put(this.url,inventario).map(r => r.json()).catch(this.handleError);
  }

  delInventario(id: number){  
    return this.http.delete(this.url+'/'+id).map(r => r.json()).catch(this.handleError);
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if(error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = '${error.status} - ${errro.statusText || ""}  ${err}';
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
