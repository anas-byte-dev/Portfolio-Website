import { createCanvas, loadImage } from 'canvas'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const img = await loadImage(join(root, 'public', 'favicon-photo.jpg'))

const SIZE = 512
const canvas = createCanvas(SIZE, SIZE)
const ctx = canvas.getContext('2d')

// Draw circular clip
ctx.beginPath()
ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2, 0, Math.PI * 2)
ctx.closePath()
ctx.clip()

// Draw the image centered and cover-cropped
const scale = Math.max(SIZE / img.width, SIZE / img.height)
const w = img.width * scale
const h = img.height * scale
const x = (SIZE - w) / 2
const y = (SIZE - h) / 2
ctx.drawImage(img, x, y, w, h)

// Save as PNG (supports transparency)
writeFileSync(join(root, 'public', 'favicon-round.png'), canvas.toBuffer('image/png'))
console.log('✅ Created public/favicon-round.png')
