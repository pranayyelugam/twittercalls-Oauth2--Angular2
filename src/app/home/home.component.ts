import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { FooterComponent  } from '../footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'app works!';
  searchquery = '';
  tweetsdata;
  
  constructor(private http: Http){}
  
  makecall() {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }
  
  searchcall(){
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }
  
  usercall(){
    var headers = new Headers();
    var searchterm = 'screenname=Yasmin_Payne1';
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/user', searchterm, {headers: headers}).subscribe((res) => {
      console.log(res.json().data);
      
    });
  }
  
}
