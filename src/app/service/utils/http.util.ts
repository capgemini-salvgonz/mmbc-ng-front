import { HttpHeaders } from '@angular/common/http';

export class HttpUtil {  

  constructor(){}

  public createHeaders() : HttpHeaders{
    let httpHeaders: HttpHeaders;
    let authorization = "Bearer " + sessionStorage.getItem("tokenId");
    httpHeaders = new HttpHeaders({
      'Authorization': authorization,
      'Content-Type' : 'application/json'
    });
    
    return httpHeaders;
  }
}
