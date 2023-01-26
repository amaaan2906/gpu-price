/**
 * [x] create one prisma object
 * [ ] pull all PRODUCTS from db
 * [ ] loop thru PRODUCTS and get price for all
 *    [ ] check seller and and create related class object
 *    [ ] call and await run() on object
 *    [ ] call and await save()
 *      - pass prisma db obj
 *      - pass product id foreign key
 *    [ ] check save() return and print log message based
 */
import { PrismaClient, Prisma } from '@prisma/client'

import Factory from './helper/sellerFactory.js'
