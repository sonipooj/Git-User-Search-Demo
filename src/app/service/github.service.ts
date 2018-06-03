import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {

    private username: string;
    private login: string;
    private client_id = '4d3b8b8c9fc37c03985b';
    private client_secret = '84e2291b211eef7bbccaf39886297340f2101cba';

    constructor(private _http: Http) {
        this.username = '';
        this.login = '';
    }

    getUser() {
        return this._http.get('http://api.github.com/search/users?q='
            + this.username + '&client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;

    }
    updateLoginName(login: string) {
        this.login = login;

    }

    getRepos() {
        return this._http
            .get('http://api.github.com/users/'
            + this.login + '/repos?client_id='
            + this.client_id + '&client_secret='
            + this.client_secret)
            .map(res => res.json());
    }
}
