import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  headlines =[
    'Bring engineering to the next level',
    'Born to code',
    'Another one'
  ]
  currentIMG = 0;
  showImage = true;

  ngOnInit() {
    this.updateImages();
  }

  updateImages(){
    setInterval(()=>{
      this.currentIMG++;
      this.currentIMG = this.currentIMG % this.images.length;
      this.showImage = false;


      setTimeout(()=>{
        this.showImage = true;
      },10)
    },5000)
  }

}
