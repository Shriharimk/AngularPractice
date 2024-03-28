export class Recipe{
  public name: String='';
  public description: String='';
  public imagepath: String='';

  constructor(name: String, desc:String, imgpath:string){
    this.name=name;
    this.description=desc;
    this.imagepath=imgpath;
  }
}