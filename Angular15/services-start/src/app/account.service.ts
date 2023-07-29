import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name: string, status: string) {
        this.accounts.push( {name: name, status: status});
      }

      updateStatus(id: number, status: string) {
        // const updateInfo = {id: id, newStatus: status};
        // this.accounts[updateInfo.id].status = updateInfo.newStatus;

        this.accounts[id].status = status;
      }
}