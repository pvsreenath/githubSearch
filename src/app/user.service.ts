import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username:string;
  private pageNo=1;
 
  constructor(private http:HttpClient) {}
  
  getUsers(username){
    var _url = "https://api.github.com/search/users?q="+username+"&per_page=100"
    return  this.http.get(_url);
  }
  getRepos(reposname){
    var _url = "https://api.github.com/search/repositories?q="+reposname+"&per_page=100"
    return  this.http.get(_url);
  }
  getUserDetails(username){
    var _url = "https://api.github.com/users/"+username
    return  this.http.get(_url);
  }
  getUserRepos(username){
    var _url = "https://api.github.com/users/"+username+"/repos"
    return  this.http.get(_url);
  }
  
  getRepositoryDetails(username,repository){
    var _url = "https://api.github.com/repos/"+username+"/"+repository
    return  this.http.get(_url);

  }
  
   
}
