const getters = {
  caculatePrice: (state) => {
    let caculatePrice = 0
    let itemTotal = 0
    state.goodsCartInfo.forEach(item => {
      if (item.checked === true) {
        itemTotal = item.price * item.number
      }
      caculatePrice = caculatePrice + itemTotal
    })
    return caculatePrice
  }
}
export default getters
