export class Explosion{
    constructor(source){
      this.x = source.x
      this.y = source.y
      this.size = 2
      this.particles = []
    }
    init(){
      let particleNo = size*2
      for(let i =0;i<particleNo;i++){
        let dx = Math.random()*4-2
        let dy = Math.random()*4-2
        let particle = new Particle(this.x,this.y,dx,dy)
        this.particles.push(particle)
      }
    }
    draw(){
      this.particles.forEach(particle => {
        particle.draw()
      });
    }
    move(){
      this.particles.forEach(particle => {
        particle.move()
      });
    }
  }
  