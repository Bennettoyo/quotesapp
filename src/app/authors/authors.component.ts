import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { author } from '../interfaces/author';
import { DataService } from '../data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  stop$ = new Subject<void>();
  authors: author[] = [];

  constructor(private location: Location, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.authorsSubject.pipe(takeUntil(this.stop$)).subscribe((authors: author[]) => {
      this.authors = authors;
    });
    this.dataService.getAuthors();
  }

  back(): void {
    this.location.back()
  }

  showOrHideQuotes(showQuotes: boolean, authorId: string) {
    this.authors = this.authors.map((author) => {
      if (author.authorId == authorId) {
        author.showQuotes = showQuotes;
      }
      return author;
    });

    this.dataService.setAuthorsAsLocalStorage(this.authors);
    this.dataService.authorsSubject.next(this.dataService.authors);
    this.dataService.getQuotes();
  }

  ngOnDestroy() {
    this.stop$.next();
    this.stop$.complete();
  }
}
