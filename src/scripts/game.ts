import 'phaser'
import { Battle } from './scenes/Battle'
import Main from './scenes/Main'
import { Preload } from './scenes/Preload'


const DEFAULT_WIDTH = document.body.clientWidth
const DEFAULT_HEIGHT = document.body.clientHeight

const config = {
  type: Phaser.AUTO,
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    backgroundColor: '#2d2d88'
  },
  scene: [Preload, Main, Battle],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
