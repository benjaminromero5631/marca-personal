import { removeBackground } from "@imgly/background-removal-node"
import { readFileSync, writeFileSync } from "fs"
import path from "path"

const IMAGES_DIR = path.join(process.cwd(), "public/images")

const pairs = [
  { src: "lata-antigua.png", dst: "lata-antigua-nobg.png" },
  { src: "aceiteantiguo.png", dst: "aceiteantiguo-nobg.png" },
  { src: "latasolanuevas.png", dst: "latasolanuevas-nobg.png" },
  { src: "lataaceitenueva.png", dst: "lataaceitenueva-nobg.png" },
]

for (const { src, dst } of pairs) {
  const srcPath = path.join(IMAGES_DIR, src)
  const dstPath = path.join(IMAGES_DIR, dst)
  console.log(`Procesando ${src}...`)
  const blob = new Blob([readFileSync(srcPath)], { type: "image/png" })
  const result = await removeBackground(blob)
  const buffer = Buffer.from(await result.arrayBuffer())
  writeFileSync(dstPath, buffer)
  console.log(`✓ Guardado: ${dst}`)
}
