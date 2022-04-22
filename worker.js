addEventListener('message', (d) => {
  const imageData = d.data

  for (let x = 0; x < imageData.width; x++) {
    for (let y = 0; y < imageData.height; y++) {
      let index = (x + y * imageData.width) * 4
      imageData.data[index + 3] = 127
    }
  }
  postMessage(imageData, [imageData.data.buffer])
})
