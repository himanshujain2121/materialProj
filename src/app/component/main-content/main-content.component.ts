import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../service/photos/photos.service';
import { Photos, PhotosObj } from '../../model/photos';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  providers: [PhotosService]  
})
export class MainContentComponent implements OnInit {
items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
myPhotosList: Photos[] = [];  
  page: number = 1; 
  constructor(private service: PhotosService) { }

  ngOnInit() {
    this.getPhotos(); 
  }

  getPhotos() {  
    console.log(this.page);  
    this.service.getMyPhotos(this.page).subscribe((res) => this.onSuccess(res));  
  } 

  onSuccess(res:any){
    console.log(res);
    res.array.forEach(item => {
      this.myPhotosList.push(new PhotosObj(item));
    });
  }
  onScroll()  
  {  
    console.log("Scrolled");  
    this.page = this.page + 1;  
    this.getPhotos();  
  }  
}
