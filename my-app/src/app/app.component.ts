import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  currentIMG = 0;

  ngOnInit() {
    this.updateImages();
  }

  updateImages(){
    setInterval(()=>{
      this.currentIMG++;
      this.currentIMG = this.currentIMG % this.images.length;
    },5000)
  }

}
