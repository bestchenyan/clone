function deepClone(source, memory) {
  const isPrimitive = (value) => {
    return /Number|String|Boolean|Null|Undefined|Symbol|Function/.test(
      Object.prototype.toString.call(value)
    );
  };
  let result = null;
  memory || (memory = new WeakMap());
  // 原始数据类型及函数
  if (isPrimitive(source)) {
    result = source;
  }
  // 数组
  else if (Array.isArray(source)) {
    result = source.map((value) => deepClone(value, memory));
  }
  // 内置对象 Date RegExp
  else if (Object.prototype.toString.call(source) === '[object Date]') {
    result = new Date(source);
  } else if (Object.prototype.toString.call(source) === '[object RegExp]') {
    result = new RegExp(source);
  }
  // map set
  else if (Object.prototype.toString.call(source) === '[object Set]') {
    result = new Set();
    for (let value of source) {
      result.add(deepClone(value, memory));
    }
  } else if (Object.prototype.toString.call(source) === '[object Map]') {
    result = new Map();
    for (let [key, value] of source) {
      result.set(key, deepClone(value, memory));
    }
  }
  // 引用类型
  else {
    if (memory.has(source)) {
      result = memory.get(source);
    } else {
      result = Object.create(null);
      memory.set(source, result);
      Object.keys(source).forEach((key) => {
        result[key] = deepClone(source[key], memory);
      });
    }
  }

  return result;
}

export { deepClone };
