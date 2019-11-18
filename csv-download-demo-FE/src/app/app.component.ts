import {Component} from '@angular/core';
 
import * as fileSaver from 'file-saver'; // npm i --save file-saver
import { CSVService } from './_services/csv.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileSystemName: string;
  classpathFileName: string;
 
  constructor(private csvService: CSVService) {
 
  }
 
  downloadFileSystem() {
    this.csvService.downloadFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename');
 
        this.saveFile(response.body, filename);
      });
  }
 
  downloadClasspathFile() {
    this.csvService.downloadClasspathFile(this.classpathFileName)
      .subscribe(response => {
        const filename = response.headers.get('filename');
 
        this.saveFile(response.body, filename);
      });
  }
 
  saveFile(data: any, filename?: string) {
    const blob = new Blob([data], {type: 'text/csv; charset=utf-8'});
    fileSaver.saveAs(blob, "users.csv");
  }
}