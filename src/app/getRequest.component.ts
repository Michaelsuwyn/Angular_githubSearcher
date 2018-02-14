

import {Component} from '@angular/core';



@Component({
    selector: 'get-request',
    templateUrl: './getRequest.component.html',
  
})
export class GetRequestComponent {
    apiData;
    search: String = "";

getApi(){
    const url = "https://api.github.com/users/" + this.search + "/repos";
     fetch(url)
     .then((resp) => resp.json())
     .then((resp) =>
    this.apiData = resp)
    }

    getApi2(){
        const url = "https://api.github.com/users/" + this.search + "/repos";
         fetch(url)
         .then((resp) => resp.json())
         .then((resp) =>
         console.log(resp))
        }

}