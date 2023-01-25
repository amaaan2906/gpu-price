import { parse } from 'node-html-parser'
import axios from 'axios'

import Seller from './_seller.js'

class CanadaComputer extends Seller {
  #price

  constructor(link) {
    super(link)
  }
  info() {
    console.log(`[canadacomputer] '${this.link}'`)
  }
  async #getPrice() {
    const res = await axios(this.link)
    const parsed_html = parse(await res.data)
    this.#price = parsed_html
      .querySelector('.price-show-panel > .col-6.col-lg-4.p-0 .h2-big')
      .innerText.toString()
      .trim()
      .replace(/\s/g, '')
  }
  #printPrice() {
    console.log(`[canadacomputer] ${this.#price}`)
  }
  async run() {
    console.log(`[canadacomputer] Starting job on ${this.link}`)
    const st = performance.now()
    await this.#getPrice()
    const et = performance.now()
    console.log(`[canadacomputer] Run competed in ${(et - st).toFixed(3)}ms`)
    this.#printPrice()
  }
  async save(prisma, product_id) {
    // save in prisma
    // return bool for success
  }
}

export default CanadaComputer
