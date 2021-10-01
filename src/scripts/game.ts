import 'phaser'
import Main from './scenes/Main'
import { Preload } from './scenes/Preload'


const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 980

const config = {
  type: Phaser.AUTO,
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [Preload, Main],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 60 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
