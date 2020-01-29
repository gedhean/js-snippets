/**
 * Take an image url and return its Blob
 * 
 * @param {String} url image url
 * @returns {Promise} resolve image's blob
 */
function imageUrlToBlog(url) {
  return new Promise(function (resolve, reject) {
    const img = new Image()
    const canvas = document.createElement('canvas')

    img.onload = function () {
      canvas.width = img.width
      canvas.height = img.height

      var context = canvas.getContext('2d')

      context.drawImage(img, 0, 0)

      canvas.toBlob(resolve, 'image/png', 1)
    }

    img.onerror = reject
    img.crossOrigin = "anonymous"
    img.src = url
  })
}


// Exapmle 
const url = 'https://images.unsplash.com/photo-1580184481690-5546bb513ae7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'

imageUrlToBlog(url).then(console.log)
// Blob {size: 1010151, type: "image/png"}