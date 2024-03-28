import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId=100010;
  serverStatus="offline";
  allowAddServer=false;
  serverAdditionStatus="New Server isnt added :("
  serverName='TestServer';
  userName='';
  userNamestatus=false;
  allowReset=false;
  addServer=false;
  servers=['TestServer'];
  showStatus=false;
  log=[];


  onShowStatus(){
    this.showStatus=true;
  }
  constructor(){
    setTimeout(()=>{
      this.allowAddServer=true;
    },2000);
    this.serverStatus = Math.random() >0.5? "online":"offline";

  }

  getUserNameStatus(userName){
    console.log(this.userName);
    if(this.userName=='')
      this.userNamestatus=false;
    console.log(this.userNamestatus);
  }
  getAllowResetStatus(userNameStatus){
    if(userNameStatus){
      console.log(this.allowReset);
      return this.allowReset=true;

    }
  }
  getServerStatus=()=>{
    return this.serverStatus;
  }
  onClickAddServer(){
    //this.serverAdditionStatus=" Added server,name is "+this.serverName+"  id is "+this.serverId;
    this.addServer=true;
    this.servers.push(this.serverName);
  } 
  updateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  getColor(){
    return this.serverStatus =="online"? 'green':'red';
  }
  onToggle(){
    this.showStatus=!this.showStatus;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
  
}
