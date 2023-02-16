'use strict'
var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

var gImgs = [
  { id: 1, url: '1.jpg', keywords: ['Trump', 'Angry'] },
  { id: 2, url: '2.jpg', keywords: ['Dog', 'Cute'] },
  { id: 3, url: '3.jpg', keywords: ['Dog', 'Baby'] },
  { id: 4, url: '4.jpg', keywords: ['Cat', 'Cute'] },
  { id: 5, url: '5.jpg', keywords: ['Boy', 'Angry'] },
  { id: 6, url: '6.jpg', keywords: ['Man', 'Cute'] },
  { id: 7, url: '7.jpg', keywords: ['Boy', 'Shock'] },
  { id: 8, url: '8.jpg', keywords: ['Man', 'Happy'] },
  { id: 9, url: '9.jpg', keywords: ['Boy', 'Laughing'] },
  { id: 10, url: '10.jpg', keywords: ['obama', 'Laughing'] },
  { id: 11, url: '11.jpg', keywords: ['Man', 'Cute'] },
  { id: 12, url: '12.jpg', keywords: ['Man', 'Cute'] },
  { id: 13, url: '13.jpg', keywords: ['Man', 'Romantic'] },
  { id: 14, url: '14.jpg', keywords: ['Man', 'Cute'] },
  { id: 15, url: '15.jpg', keywords: ['Man', 'Cute'] },
  { id: 16, url: '16.jpg', keywords: ['Man', 'Cute'] },
  { id: 17, url: '17.jpg', keywords: ['Pottin', 'Cute'] },
  { id: 18, url: '18.jpg', keywords: ['Dog', 'Cute'] },
]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 40,
      align: 'center',
      color: 'white',
    },
  ],
}

function getMeme() {
  const memeImg = gImgs.find((img) => img.id === gMeme.selectedImgId)
  const memeTxt = gMeme.lines[gMeme.selectedLineIdx]
  return { memeImg, memeTxt }
}

function setLineTxt(userTxt) {
  const { memeTxt } = getMeme()
  memeTxt.txt = userTxt
}

function getImgs() {
  return gImgs
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId
}

function setMemeColor(userColor) {
  const { memeTxt } = getMeme()
  memeTxt.color = userColor
}
