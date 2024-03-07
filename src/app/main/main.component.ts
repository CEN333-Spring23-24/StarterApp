import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class book {
  title: string;
  author: string;
  cover: string;
  desc: string;

  constructor(title:string, author:string, cover:string, desc:string){
    this.title = title;
    this.author = author;
    this.cover = cover;
    this.desc = desc;
  }
}
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  list:book[];

  constructor(){
    this.list = [];
    let book1 = new book("RPi Receipes","Simon Monk",
    "https://m.media-amazon.com/images/I/91MaPMG2-hL._AC_UF1000,1000_QL80_.jpg","Used in Embedded Links");

    let book2 = new book("Signals and Systems","John Smoth",
    "https://m.media-amazon.com/images/I/91MaPMG2-hL._AC_UF1000,1000_QL80_.jpg","Used in Embedded Links");

    this.list.push(book1);
    this.list.push(book2);
  }


}
