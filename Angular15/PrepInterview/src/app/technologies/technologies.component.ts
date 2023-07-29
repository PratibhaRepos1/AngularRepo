import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../shared/technology.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologyData: any = [];
  constructor(private techService: TechnologyService) {}
  
  ngOnInit(): void {
    // this.technologyData = this.techService.getTechData();
    // console.log(this.technologyData);

    fetch('../../assets/data/technologyData.json').then(res => res.json())
    .then(jsonData => {
      this.technologyData = jsonData;
    });
  }
  
  
}
