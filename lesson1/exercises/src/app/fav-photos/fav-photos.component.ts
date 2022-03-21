import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXzSrxFMuOdUvF9-JaI4xxUziS4sx3A-zRA&usqp=CAU';
  image2 = 'https://www.kindpng.com/picc/m/225-2254337_popcorn-clip-art-clip-art-popcorn-hd-png.png';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxv05Dz419Ljpkj8KVaLYbdHyAXsCh2jwpw&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}