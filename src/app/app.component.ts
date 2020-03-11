import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as jsPDF from 'jspdf'
import { Chart } from 'angular-highcharts';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  graphComplete = false;

  pdfSafe: SafeResourceUrl;
  title = 'print-test';
  chart = new Chart({
    exporting: {
      fallbackToExportServer: false
    },
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
        type: 'line'
      }
    ]
  });

  constructor(private sanitizer: DomSanitizer) {
  }

  print() {
    window.print();
  }
  
  ngOnInit(): void {
    // this.graphComplete = false;
    // let doc = new jsPDF('p', 'cm', 'a4');
    // doc.text(1, 1, 'some text');
    // doc.setProperties({
    //   title: 'myPdf'
    // });
    // this.chart.ref$.pipe(
    //   filter(ref => ref != null && !this.graphComplete),
    // ).subscribe(ref => {
    //   this.graphComplete = true;
    //   const svg = ref['getSVG']();
    //   console.log(svg);
    //   // const datauri = doc.output('datauristring', {
    //   //   filename: 'myPdf'
    //   // });
    //   // this.pdfSafe = this.sanitizer.bypassSecurityTrustResourceUrl(datauri);
    // });
  }
}
