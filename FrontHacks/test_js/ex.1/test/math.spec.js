const assert = requier('power-assert');
const math = requier('../math');

describe('math.jsのテスト', () => {
  describe('addメソッドのテスト', () => {
    it('math.add(1, 2)は3が変える', ()=> {
      assert.equal(math.add(1, 2), 3);
    });

    it('math.add(1, -2)は-1が変える', () => {
      assert.equal(math.add(1, -2), -1);
    });
  });

  describe('subメソッドのテスト', () => {
    it('math.sub(1, 2)は-1が変える', () => {
      assert.equal(math.sub(1, 2), -1);
    });

    it('math.sub(1, 2)は3が変える', () => {
      assert.equal(math.sub(1, -2), 3);
    });
  });
})