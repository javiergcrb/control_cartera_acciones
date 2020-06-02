import { Injectable } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';

/* OJO: Para que funcione el CAST automático JSON -> CLASS 
los campos deben llamarse exactamente igual que los campos 
de la repsuesta JSON.*/
export class MarketData{
  c:number;
  h:number;
  l:number;
}

export class MarketSymbol{
  description:string;
  displaySymbol:string;
  symbol:string;
}

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  token:string="br2cibvrh5rbm8ou2a1g"; //Pedir token a la plataforma
  api_cotizaciones:string="https://finnhub.io/api/v1/quote";
  api_simbolos:string="https://finnhub.io/api/v1/stock/symbol"
  //symbol:string="REP.MC";  /* Corresponde a Repsol en el Mercado Continuo Español */
  dato:MarketData=new MarketData;

  constructor(private http: HttpClient) { }

  public get_cotizacion(symbol:string):Promise<MarketData>{
    let url:string=this.api_cotizaciones+"?symbol="+symbol+"&token="+this.token;
    return this.http.get<MarketData>(url).toPromise();
  }

  public get_symbols(s:string): Promise<MarketSymbol[]>{
    let url:string=this.api_simbolos+"?exchange="+s+"&token="+this.token;
    return this.http.get<MarketSymbol[]>(url).toPromise();
  }
/*
  get_nombres():Promise<string[]>{

  }
  
  demo(){

  let url:string=api_cotizaciones+"?symbol="+symbol+"&token="+token;
  this.http.get<any>(url).subscribe((res)=>{
    console.log("Respuesta:"+JSON.stringify(res));
    console.log("Cotizacion de "+symbol+":" + res["c"]);
    this.cotizacion=res["c"];
    this.low=res["l"];
    this.high=res["h"];
  })

  // EJEMLO 3: Uso de un API REST con Respuesta JSON Tipada 
  this.http.get<MarketData>(url).subscribe((res)=>{
    this.dato=res;
    console.log(this.dato);
  })
  }*/
}
