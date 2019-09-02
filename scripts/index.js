const sharp = require('sharp')
const fs = require('fs')
const lines = require('../api/lines.json')

const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
}

function replaceTag (tag) {
  return tagsToReplace[tag] || tag
}

function safeTagsTeplace (str) {
  return str.replace(/[&<>]/g, replaceTag)
}

if (lines && lines.list && lines.list.length) {
  const placeholder = `<svg height="801" viewBox="0 0 801 801" width="801" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="m0 0h800v800h-800z" fill="#0eaf7c" fill-rule="nonzero" />
      <path d="m1 1h799v799h-799z" stroke="#92f6d7" stroke-width="2" />
      <path d="m1 100h799v600h-799z" fill="#12e09f" fill-rule="nonzero" stroke="#92f6d7" stroke-width="2" />
      <g fill="#101413" font-family="PTMono-Regular, PT Mono">
        <text font-size="24" transform="translate(40 11)">
          $note
        </text>
        <text font-size="35" transform="translate(40 311)">
          $line
        </text>
        <text font-size="25" transform="translate(40 730)">
          <tspan x="0" y="30">#$language</tspan>
        </text>
        </g>
    </g>
  </svg>`

  lines.list.forEach((line) => {
    try {
      const path = `./src/gfx/cover/${line.date}.png`
      let lineSvg = ''
      let noteSvg = ''

      const lineText = safeTagsTeplace(line.line)

      if (lineText.length > 40) {
        const lineIndex = lineText.indexOf(' ', 40) + 1

        if (lineIndex > 0) {
          const lineSvg1 = lineText.slice(0, lineIndex)
          const lineSvg2 = lineText.slice(lineIndex, 1000)

          lineSvg += `<tspan x="0" y="60">${lineSvg1}</tspan>`
          lineSvg += `<tspan x="0" y="140">${lineSvg2}</tspan>`
        } else {
          lineSvg = `<tspan x="0" y="100">${lineText}</tspan>`
        }
      } else {
        lineSvg = `<tspan x="0" y="100">${lineText}</tspan>`
      }

      if (line.note.length > 70) {
        const noteIndex = line.note.indexOf(' ', 40) + 1

        if (noteIndex > 0) {
          const noteSvg1 = line.note.slice(0, noteIndex)
          const noteSvg2 = line.note.slice(noteIndex, 1000)

          noteSvg += `<tspan x="0" y="30">${noteSvg1}</tspan>`
          noteSvg += `<tspan x="0" y="60">${noteSvg2}</tspan>`
        } else {
          noteSvg = `<tspan x="0" y="50">${line.note}</tspan>`
        }
      } else {
        noteSvg = `<tspan x="0" y="50">${line.note}</tspan>`
      }

      if (!fs.existsSync(path)) {
        let svg = placeholder.replace('$line', lineSvg)
        svg = svg.replace('$note', noteSvg)
        svg = svg.replace('$language', line.language)

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

console.log('Images have been created.')
