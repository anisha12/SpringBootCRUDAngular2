import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(fname:string ,id:string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    
    let serversJson = {
      "firstName" : fname,
       "lastName" : "Basak",
        "_links" : {
        "self" : {
           "href" : "http://localhost:9000/persons/"+id 
        },
        "person" : {
        "href" : "http://localhost:9000/persons/"+id
   }
 } 
    };

    console.log(serversJson);

    return this.http.post('http://localhost:9000/persons',
      serversJson,
      {headers: headers});
  }
  getServers() {
    return this.http.get('http://localhost:9000/persons')
      .map(
        (response: Response) => {
          var data = response.json();
         var data_r = data._embedded.persons;
          console.log(data_r);
          // for (const server of data) {
          //   server.name = 'FETCHED_' + server.firstName;
          // }
          return data_r;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  getAppName() {
    // return this.http.get('http://localhost:9000/persons')
    //   .map(
    //     (response: Response) => {
    //       const data = response.json();
    //       console.log(data);

          return "Person Management";
     //   }
   //   );
  }
}
