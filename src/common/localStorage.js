export const localAdd = function (item, data) {
  localStorage.setItem(item, JSON.stringify(data))
}

export const localRead = function (item) {
  return JSON.parse(localStorage.getItem(item))
}
