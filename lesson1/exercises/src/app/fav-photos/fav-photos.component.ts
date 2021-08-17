import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Look Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.google.com/search?q=small+images&tbm=isch&ved=2ahUKEwiy9NykmbLyAhVNfqwKHSV0BvcQ2-cCegQIABAA&oq=small+images&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BggAEAcQHlCtgQFYgIwBYKaQAWgAcAB4AIABuAKIAaIHkgEHMS40LjAuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=_5gYYfL4OM38sQWl6Jm4Dw#imgrc=-z3fNX8GmtnA1M';
  image3 = 'https://www.shutterstock.com/image-photo/summer-landscape-small-lake-forest-1969595212';

  constructor() { }

  ngOnInit() {
  }

}