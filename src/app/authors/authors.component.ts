import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { author } from '../interfaces/author';
import { DataService } from '../data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authors: author[] = this.dataService.getAuthors();

  constructor(private location: Location, private dataService: DataService) { }

  ngOnInit() {

  }

  back(): void {
    this.location.back()
  }

  showOrHideQuotes(showQuotes: boolean, authorId: string) {
    this.dataService.authors = this.authors.map((author) => {
      if (author.authorId == authorId) {
        author.showQuotes = showQuotes;
      }
      return author;
    });
    this.dataService.setAuthorsAsLocalStorage(this.dataService.authors);
    this.dataService.authorsSubject.next(this.dataService.authors);
  }
}
