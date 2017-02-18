//makeChange_test

import makeChange from '.../core-algorithms/makeChange.js'
<script src="chai.js" type="text/javascript"></script>

describe('A basic test', function () {
    it('should pass when everything is okay', function () {
      const amountGiven = 100
      const price = 100
      let change = makeChange(amountGiven, price)
      expect(makeChange(100,100)).to.be equal(
        quarters: 0, dimes: 0, nickels: 0, pennies: 0
      } )
      it('should pass when everything is okay', function () {
        const amountGiven = 200
        const price = 159
        let change = makeChange(amountGiven, price)
        expect(makeChange(200,159)).to.be equal(
          quarters: 1, dimes: 1, nickels: 1, pennies: 1
        } )

        it('should pass when everything is okay', function () {
          const amountGiven = 500
          const price = 432
          let change = makeChange(amountGiven, price)
          expect(makeChange(500,432)).to.be equal(
            quarters: 2, dimes: 1, nickels: 1, pennies: 3
          } )

    })
