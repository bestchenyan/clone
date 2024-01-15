import expect from 'expect.js';
import { deepClone } from '../src/index.js';

describe('function deepClone', function () {
  describe('param data', function () {
    it('正确的测试用例', function () {
      // 基本数据类型
      expect(deepClone('abc')).to.equal('abc');

      // 数组
      const arr = [1, 2];
      const cloneArr = deepClone(arr);

      expect(cloneArr).to.eql(arr);
      expect(cloneArr).not.to.equal(arr);

      // 对象
      const obj = [
        1,
        { a: [3], b: true, c: () => {} },
        new Date(),
        new RegExp(/ab+c/, 'i'),
        new Map([['aa', 'vv']]),
        new Set(['a', 'v']),
      ];
      const cloneObj = deepClone(obj);

      expect(cloneObj).to.eql(obj);
      expect(cloneObj).not.to.equal(obj);
    });

    it('边界的测试用例', function () {
      expect(deepClone()).to.eql(undefined);
      expect(deepClone(undefined)).to.eql(undefined);
      expect(deepClone(null)).to.eql(null);
    });
  });
});
