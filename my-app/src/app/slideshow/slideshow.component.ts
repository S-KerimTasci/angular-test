import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit{
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
