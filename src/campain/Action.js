export class Action{
  exit
  constructor(){
    this.exit=false
    this.Exitintent()
  }

  Exitintent(){
    this.exit=true
  }
}