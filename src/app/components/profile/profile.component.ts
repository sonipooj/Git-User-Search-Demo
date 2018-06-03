import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../service/github.service';
import {Ng2PaginationModule} from 'ng2-pagination';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

gitHubSearchUsers: any;
username: string;
repos: any [];
login: string;
selectedLogin: string;

constructor(private _githubService: GithubService) { }
  ngOnInit() {
  }


sortBySelectedCriteria(items, selectedVal) {
   switch (selectedVal) {
    case 'nameAsc':
      this.sortNameByAscOrder(items);
      break;

    case 'nameDesc':
      this.sortNameByDescOrder(items);
      break;

      case 'rankAsc':
        this.sortByRankAscOrder(items);
        break;

      case 'rankDesc':
        this.sortByRankDescOrder(items);
        break;
    }
}

sortNameByDescOrder(items) {
  items.sort(function(a, b) {
    const fieldOne = a.login.toLowerCase();
    const fieldTwo = b.login.toLowerCase();
    if (fieldOne > fieldTwo) {
      return -1;
    } if (fieldOne < fieldTwo) {
      return 1;
    }
    return 0;
});
}

sortNameByAscOrder(items) {
  items.sort(function(a, b) {
    const fieldOne = a.login.toLowerCase();
    const fieldTwo = b.login.toLowerCase();
   if (fieldOne < fieldTwo) {
      return -1;
    } if (fieldOne > fieldTwo) {
      return 1;
    }
    return 0;
});
}

sortByRankAscOrder(items) {
  items.sort(function(a, b) {
    return a.score - b.score;
});
}

sortByRankDescOrder(items) {
  items.sort(function(a, b) {
    return b.score - a.score;
});
}

searchUsers () {
       this._githubService.updateUser(this.username);
        this._githubService.getUser().subscribe (gitHubSearchUsers => {
         this.gitHubSearchUsers = gitHubSearchUsers;
        });
    }
    getRepoDetails(login: string) {
      this._githubService.updateLoginName(login);
      this._githubService.getRepos().subscribe (repos => {
        this.repos = repos;
        this.selectedLogin = login;
     });
    }
}
