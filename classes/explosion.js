import {Particle} from "./particle.js"
export class Explosion{
    constructor(source){
      this.x = source.x
      this.y = source.y
      this.size = source.size
      this.particles = []
      this.init(source)
    }
    init(source){
      let particleNo = this.size*2
      for(let i =0;i<particleNo;i++){
        let dx = 1.3* source.dx * (Math.random() - 0.2);
        dx += 3 * (Math.random() - 0.5);
        let dy = 1.3* source.dy * (Math.random() - 0.2);
        dy += 3 * (Math.random() - 0.5);
        let particle = new Particle(this.x,this.y,dx,dy)
        this.particles.push(particle)
      }
    }
    draw(c){
      this.particles.forEach(particle => {
        particle.draw(c)
      });
    }
    move(){
      console.log(this.particles)
      for(let i = this.particles.length-1; i >= 0; i--){
        if(this.particles[i].life <= 0){
          this.particles.splice(i,1)
        }
      }
      this.particles.forEach((particle,index) => {
        particle.move()
      });
    }
  }
  