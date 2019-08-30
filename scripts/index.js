const sharp = require('sharp')
const fs = require('fs')
const lines = require('../data/lines.json')

if (lines && lines.list && lines.list.length) {
  const placeholder = fs.readFileSync('./src/gfx/svg/placeholder.svg', 'utf8')

  lines.list.forEach((line) => {
    try {
      const path = `./src/gfx/cover/${line.date}.png`

      if (!fs.existsSync(path)) {
        let svg = placeholder.replace('line', line.line)
        svg = svg.replace('note', line.note)
        svg = svg.replace('language', line.language)

        sharp(Buffer.from(svg))
          .png()
          .toFile(path)
          .catch((err) => {
            console.error(err)
          })
      }
    } catch (err) {
      console.error(err)
    }
  })
}

console.log('Images has been created.')

// // Will process cover files
// function gfxStart () {
//   return src(helpers.trim(`${helpers.source()}/${global.config.gfx.src}/svg/placeholder.svg`))
//     .pipe(data(() => {
//       const temp = {}

//       siteConfigs.forEach((siteConfig) => {
//         replace('div', 'link')
//         temp[siteConfig.name] = JSON.parse(fs.readFileSync(siteConfig.path))
//       })

//       return temp
//     }))
//     .pipe(imagemin([
//       imagemin.gifsicle(gfxConfig.gifConfig),
//       imageminMozjpeg(gfxConfig.jpegConfig),
//       imageminPngquant(gfxConfig.pngConfig),
//       imagemin.svgo(gfxConfig.svgConfig)
//     ]))
//     .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.gfx.dist}`)))
//     .pipe(gulpif(global.config.sync.run, global.bs.stream()))
// }
