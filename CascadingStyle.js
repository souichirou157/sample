/*
It can be specified as the first argument of the CascadingStyle class initialized with id or class name tag as a specifier.
*/


class CascadingStyle{
  constructor(obj,red,green,blue,R,G,B){
      
      this.red = red;
      this.green = green;
      this.blue = blue;
      this.R = 255;
      this.G = 255;                // new CascadingStyle(args,r, g, b);
      this.B = 255;
      this.obj = obj;
    
  }
  BG(obj){
      this.red = Math.floor(Math.random(Math.random()*this.R));
      this.green = Math.floor(Math.floor(Math.random()*this.G));
      this.blue = Math.floor(Math.floor(Math.random() * this.B));
      this.obj.style.background = `rgb(${this.red},${this.green},${this.green})`;
  }

}
