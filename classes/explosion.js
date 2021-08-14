import {Particle} from "./particle.js"
export class Explosion{
    constructor(source){
      this.x = source.x
      this.y = source.y
      this.size = 2
      this.particles = []
      this.init()
    }
    init(){
      let particleNo = this.size*2
      for(let i =0;i<particleNo;i++){
        let dx = Math.random()*4-2
        let dy = Math.random()*4-2
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
  