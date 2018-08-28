/**
 * @description 获取一个数的整数位数
 * @param {*} num 传递的数字
 * @return {Number} length
 */
export function getIntLength (num) {
  num = '' + num
  let dotIndex = num.indexOf('.')
  if (dotIndex !== -1) {
    num = num.substring(0, dotIndex)
  }
  return num.length
}

/**
 * @description 金额单位转化
 * @param {*} num 传递的金额
 * @return {Number}
 */
export function unitConverter (num) {
  let units = ['元', '万元', '亿', '万亿']
  let dividend = 10000
  let currentNum = num
  let currentUnit = units[0]
  for (let i = 0; i < 4; i++) {
    currentUnit = units[i]
    if (getIntLength(currentNum) < 5) break
    currentNum = currentNum / dividend
  }
  let result = {}
  result.num = currentNum.toFixed(2)
  result.unit = currentUnit
  return result
}

/**
 * @description 确定传递的值是否为数组
 * @param {*} obj 传递的值
 * @return {Boolean}
 */
export function isArray (obj) {
  return Array.isArray(obj)
}

/**
 * @description 获取一个数的小数位数
 * @param {*} num 传递的数字
 * @return {Number}
 */
export function getDECPOS (num) {
  return Math.ceil(num) === num ? 0 : num.toString().split('.')[1].length
}

/**
 * @description 确定传递的值是否为对象
 * @param {*} obj 传递的值
 * @return {Boolean}
 */
export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * @description 判断要查询的数组中至少有一项包含在目标数组中
 * @param {Array} target 目标数组
 * @param {Array} arr 要查询的数组
 * @return {Boolean}
*/
export function hasOneOf(target, arr) {
  return target.some(_ => arr.indexOf(_) > -1)
}

/**
 * @description 验证当前值是否存在验证列表中
 * @param {String|Number} value 被验证的值
 * @param {*} validList 验证列表
 * @return {Boolean}
*/
export function oneOf(value, validList) {
  return validList.some(_ => {
    if (value === _) {
      return true
    }
    return false
  })
}

/**
 * @description 数字前置补领（指定总长度）
 * @param {String|Number} value 需要前置补零的数
 * @param {Number} len 补零后的长度
 * @return {Boolean}
*/
export function prefixInteger(value, len) {
  return (Array(len).join(0) + value).slice(-len)
}

/**
 * @description 获取浏览器名称
 * @return {String}
*/
export function getExplorer() {
  const ua = window.navigator.userAgent
  let isExplorer = (exp) => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) return 'MSIE'
  if (isExplorer('Chrome')) return 'Chrome'
  if (isExplorer('Opera')) return 'Opera'
  if (isExplorer('Safari')) return 'Safari'
}
