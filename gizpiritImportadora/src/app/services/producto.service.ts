import { Injectable  } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import {Producto} from "../models/producto";
import { Global } from "./global";

@Injectable()
export class ProductoService{
  public url:string;
  constructor(private _http:HttpClient){
    this.url=Global.url;
  }

  //ver informacion de producto
  getProductos():Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'productos',{headers:headers});
    //http://localhost:3600/autos

  }

}
