sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    bad_bear.setPosition(randint(35, 160), randint(35, 160))
    info.changeLifeBy(-1)
})
let bad_bear: Sprite = null
info.setScore(0)
info.setLife(3)
let main_bear = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e . . . . . . e e . . . 
    . . . e 3 . . . . . . 3 e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e f e e e e f e e . . . 
    . . . e e e e e f e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e e e f f e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . . e e e e e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
bad_bear = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e . . . . . . . e e . . . 
    . . e 3 . . . . . . . 3 e . . . 
    . . e e e e e e e e e e e . . . 
    . . e e f e e e e e f e e . . . 
    . . e e 2 f e e e f 2 e e . . . 
    . . e e e e e f e e e e e . . . 
    . . e e e e e e e e e e e . . . 
    . . e e e f f f f f e e e . . . 
    . . e e e d 2 2 2 d e e e . . . 
    . . e e e f f f f f e e e . . . 
    . . . e e e e e e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
bad_bear.setPosition(randint(40, 160), randint(35, 150))
controller.moveSprite(main_bear)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(main_bear)
game.onUpdate(function () {
    bad_bear.follow(main_bear)
})
