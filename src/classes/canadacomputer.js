import { parse } from 'node-html-parser'
import axios from 'axios'

import Seller from './_seller.js'

class CanadaComputer extends Seller {
  #price
  #product_name
  #product_code

  constructor(link) {
    super(link)
  }
  info() {
    console.log(`[canadacomputer] '${this.link}'`)
  }
  async #getInfo() {
    const res = await axios(this.link)
    const parsed_html = parse(await res.data)
    // Item name
    let temp_name = parsed_html
      .querySelector(
        '.page-product_info.container > div.row > div > div:nth-child(3) > div:nth-child(2) > h1'
      )
      .innerText.toString()
      .trim()
    this.#product_name = temp_name.substring(
      0,
      temp_name.indexOf(',') == -1 ? temp_name.length : temp_name.indexOf(',')
    )
    // Item code
    this.#product_code = parsed_html
      .querySelector(
        'body > div.page-product_info.container > div.row > div > div:nth-child(3) > div:nth-child(2) > div.row.pb-1 > div.col-auto.pr-0'
      )
      .innerText.toString()
      .trim()
      .substring(12)
    // Price
    this.#price = parsed_html
      .querySelector('.price-show-panel > .col-6.col-lg-4.p-0 .h2-big')
      .innerText.toString()
      .trim()
      .replace(/\s/g, '')
  }
  #printInfo() {
    console.log(`[canadacomputer] Name: ${this.#product_name}`)
    console.log(`[canadacomputer] Item code: ${this.#product_code}`)
    console.log(`[canadacomputer] Price: ${this.#price}`)
  }
  async run() {
    console.log(`[canadacomputer] Starting job on ${this.link}`)
    const st = performance.now()
    await this.#getInfo()
    const et = performance.now()
    this.#printInfo()
    console.log(
      `[canadacomputer] Run competed in ${(et - st).toFixed(3)}ms\n${'-'.repeat(
        50
      )}`
    )
  }
  async save(prisma, product_id) {
    // save in prisma
    // return bool for success.
  }
}

export default CanadaComputer
