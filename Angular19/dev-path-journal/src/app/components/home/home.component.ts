import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { PostListComponent } from "../post-list/post-list.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, PostListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
