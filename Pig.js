class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }
  display(){
    //to make bird disappear once they either turn to their side or speed up when bird hits them
  if(this.body.speed<3){
    super.display();
    
  }
  else{
   World.remove(world,this.body);
   push();
   this.visibility=this.visibility-5;
   tint(255,this.visibility);
   image(this.image,this.body.position.x,this.body.position.y,50,50);
   pop();
  }
}
};