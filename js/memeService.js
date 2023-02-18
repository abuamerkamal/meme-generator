'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [
  { id: 1, url: '1.jpg', keywords: ['Trump', 'Angry'] },
  { id: 2, url: '2.jpg', keywords: ['Dogs', 'Cute'] },
  { id: 3, url: '3.jpg', keywords: ['Dog', 'Baby'] },
  { id: 4, url: '4.jpg', keywords: ['Cat', 'Sweet'] },
  { id: 5, url: '5.jpg', keywords: ['Boy', 'Angey'] },
  { id: 6, url: '6.jpg', keywords: ['Man', 'Funny'] },
  { id: 7, url: '7.jpg', keywords: ['Boy', 'Shock'] },
  { id: 8, url: '8.jpg', keywords: ['Man', 'Happy'] },
  { id: 9, url: '9.jpg', keywords: ['Boy', 'Laughing'] },
  { id: 10, url: '10.jpg', keywords: ['Obama', 'Laughing'] },
  { id: 11, url: '11.jpg', keywords: ['Man', 'Bad'] },
  { id: 12, url: '12.jpg', keywords: ['Man', 'Old'] },
  { id: 13, url: '13.jpg', keywords: ['Man', 'Romantic'] },
  { id: 14, url: '14.jpg', keywords: ['Man', 'Strong'] },
  { id: 15, url: '15.jpg', keywords: ['Man', 'Happy'] },
  { id: 16, url: '16.jpg', keywords: ['Man', 'Laughting'] },
  { id: 17, url: '17.jpg', keywords: ['Putin', 'strong'] },
  { id: 18, url: '18.jpg', keywords: ['Carton', 'Surprised'] },
]

let currDragLineIdx = null

const elCanvas = document.querySelector('canvas')
var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  emojis: [],
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 40,
      align: 'center',
      color: 'white',
      x: elCanvas.width / 2,
      y: 30,
      font: 'impact',
      isDrag: false,
    },
  ],
}

function getMeme() {
  return gMeme
}

function getImgById(selectedImgId) {
  const img = gImgs.find((img) => img.id === selectedImgId)
  return img.url
}

function getSelectedLine() {
  return gMeme.lines[gMeme.selectedLineIdx]
}

function setLineTxt(userTxt) {
  const selectedLine = getSelectedLine()
  selectedLine.txt = userTxt
}

function getImgs() {
  return gImgs
}

function setSelectedFont(font) {
  const selectedLine = getSelectedLine()
  selectedLine.font = font
}

function getSelectedFont() {
  return gSelectedFont
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId
}

function setMemeColor(userColor) {
  const selecetedLine = getSelectedLine()
  selecetedLine.color = userColor
}

function addNewLine() {
  let prevY
  var prevText = gMeme.lines[gMeme.lines.length - 1]
  if (!prevText) prevY = 0
  else prevY = prevText.y

  gMeme.lines.push({
    txt: 'New Line',
    size: 40,
    align: 'center',
    color: 'white',
    font: 'impact',
    x: gCanvas.width / 2,
    y: prevY + 40,
    isDrag: false,
  })

  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function RemoveLastLine() {
  gMeme.lines.pop()
  gMeme.selectedLineIdx = gMeme.lines.length - 1

  console.log('gMeme', gMeme)
  console.log('gMeme.lines', gMeme.lines)
}

function changeSelectedLine() {
  gMeme.selectedLineIdx++
  if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
  console.log('gMeme', gMeme)
  console.log('gMeme.lines', gMeme.lines)
}

function getLineClickedIdx(clickedPos) {
  const lineIdx = gMeme.lines.findIndex((line) => {
    const lineMetrics = gCtx.measureText(line.txt)
    const lineX = line.x
    const lineY = line.y
    return (
      clickedPos.x >= lineX - lineMetrics.actualBoundingBoxLeft &&
      clickedPos.x <= lineX + lineMetrics.actualBoundingBoxRight &&
      clickedPos.y >= lineY - lineMetrics.actualBoundingBoxDescent &&
      clickedPos.y <= lineY + lineMetrics.actualBoundingBoxAscent
    )
  })
  return lineIdx
}

function setLineDrag(selectedLineIdx, isDrag) {
  currDragLineIdx = selectedLineIdx
  gMeme.lines[selectedLineIdx].isDrag = isDrag
}
