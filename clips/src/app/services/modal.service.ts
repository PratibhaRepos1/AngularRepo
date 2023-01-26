import { Injectable } from '@angular/core';
interface IModal {
  Id: string;
  visible: boolean;

}

@Injectable({
  providedIn: 'root'
})


export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  register(Id: string) {
    this.modals.push({
      Id,
      visible: false
    })

  }

  isModalOpen(Id: string): boolean {
    return !!this.modals.find(element => element.Id === Id)?.visible;

  }

  toggleModal(Id: string) {
    const modal = this.modals.find(element => element.Id === Id)

    if(modal) {
      modal.visible  = !modal.visible;
    }
   // this.visible = !this.visible;

  }

  unregister(Id:string) {
    this.modals = this.modals.filter(
      element => element.Id !== Id
    )
  }
}
