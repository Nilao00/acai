import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceProvider {

  constructor(public http: Http) {

    console.log('Hello ServiceProvider Provider');

  }
  registerUser(values: string): Observable<any> {
    let body = values;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.post('http://shop-app.com.br/server/api/users', body, options)
      .map(res => res.json());
  }
  logIn(values: string): Observable<any> {
    let body = values;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://shop-app.com.br/server/api/authenticate/mobile', body, options)
      .map(res => res.json())
  }

  getBusiness() {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', token);
    return this.http.get('http://shop-app.com.br/server/api/business', options)
      .map(res => res.json());
  }
  getCategoriesBusiness($id) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', token);
    return this.http.get('http://shop-app.com.br/server/api/business_categories/' + $id, options)
      .map(res => res.json());
  }
  getProdByCatAndBusns($id, $id2) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', token);
    return this.http.get('http://localhost/server/api/products/' + $id + '/' + $id2, options)
      .map(res => res.json());
  }
  registerOrder(values: string): Observable<any> {
    let body = values;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.post('http://shop-app.com.br/server/api/orders', body, options)
      .map(res => res.json());
  }

  getOrder(id) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.get('http://shop-app.com.br/server/api/order_by_order/' + id, options)
      .map(res => res.json());
  }
  getOrderFinish($id, $order) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.get('http://shop-app.com.br/server/api/orders_finish/' + $id + '/' + $order, options)
      .map(res => res.json());
  }
  setOrderFinish(values: string, id): Observable<any> {
    const body = values;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.post('http://shop-app.com.br/server/api/orders_finish/' + id, body, options)
      .map(res => res.json());
  }
  deleteItemCart(id) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.delete('http://shop-app.com.br/server/api/orders/' + id, options)
      .map(res => res.json());
  }
  getCep(cep) {
    return this.http.get('http://cep.republicavirtual.com.br/web_cep.php?formato=json&cep=' + cep).map(res => res.json());
  }
  resetPass(mail): Observable<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let token = localStorage.getItem('token');
    headers.append('Authorization', token);
    return this.http.post('http://shop-app.com.br/server/api/changepwd' + mail , options)
      .map(res => res.json());
  }

}