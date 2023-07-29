import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as techData from '../../assets/data/technologyData.json';


@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  technologyData: any = [];

  constructor(private httpClient: HttpClient) { }

  getTechData() {

    this.httpClient.get("../../assets/data/technologyData.json").subscribe(data => {
      console.log(data);
      this.technologyData = data;
    });

  }
}
