import { Component ,OnInit, ViewChild, ElementRef} from '@angular/core';
declare var tableau:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{  
  viz:any;
   @ViewChild('angularDiv',{static:false}) angDiv: ElementRef;
  title = 'angular-tableau';

  constructor(){}

  ngAfterViewInit(){
    this.getTableau();
  }
  
  ngOnInit(): void {
    
  }
  getTableau(){
    const angUrl ='https://public.tableau.com/views/DataCenterOperationsironquest/DataCenterOperations?:display_count=y&:origin=viz_share_link?:showVizHome=no&:embed=yes:showShareOptions=true';

    const options = {
      hideTabs: true,
      showShareOptions: false,
      tabs:false,
      toolbar:false
    };
    this.viz = new tableau.Viz(
      this.angDiv.nativeElement,
      angUrl,
      options
    );
  }
}
