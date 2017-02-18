//setUnion_test

import makeChange from '.../core-algorithms/setUnion.js'
<script src="chai.js" type="text/javascript"></script>

describe('A basic test', function () {
    it('should pass when everything is okay', function () {
      const a = [1, 2, 3, 4]
      const b = [2, 4, 6, 8]
      expect(setUnion('a','b')).to.be equal([...a, ...b]))
      } )
