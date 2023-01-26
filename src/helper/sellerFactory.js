import CanadaComputer from '../classes/canadacomputer.js'
// import BestBuy from "../classes/bestbuy.js"

export default function (seller_name, link) {
  switch (seller_name) {
    case 'CANADACOMPUTER':
      return new CanadaComputer(link)
      break

    case 'BESTBUY':
      // return new BestBuy(link)
      break
  }
}
