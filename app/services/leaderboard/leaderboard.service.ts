import { Injectable } from '@angular/core';

import { Leader } from '../../models/leader/leader';

@Injectable()
export class LeaderBoardService {

  getTopLeaders() : Leader[] {
      let leadersObj : Leader[] = this.getLeaders();
      leadersObj.sort(function (a,b) {
        return a.wins < b.wins ? 1 : -1;
      });
      
      let leadersObjSorted : Leader[] = leadersObj.slice(0,3);
      return leadersObjSorted;
  }

  setLeader(playerId : string) : void {
    let leadersStr : string;
    let leadersObj : Leader[] = this.getLeaders();

    let leader : Leader = this.findLeader(leadersObj,playerId);

    if(leader == undefined)
    {
        leader = new Leader();
        leader.id = playerId;
        leader.wins = 1;        
        leadersObj.push(leader);
    }
    else
    {
        leader.wins++;
    }

    leadersStr = JSON.stringify(leadersObj);
    localStorage.setItem('leaders',leadersStr);
  }

  findLeader(leadersObj : Leader[], playerId : string) : Leader {
     return leadersObj.find(function (item) {
            return item.id === playerId;
        });
  }

  getLeaders() : Leader[] {
    let leadersStr = localStorage.getItem('leaders');
    if(leadersStr == null)
        this.initLeaders();

    let leadersObj = JSON.parse(leadersStr);
    return leadersObj;
  }

  initLeaders() : void {
      localStorage.setItem('leaders','[]');
  }
}