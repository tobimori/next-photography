const getImgUrl = ({ farm, server, id, secret }, size) => {
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`
}

export default getImgUrl
