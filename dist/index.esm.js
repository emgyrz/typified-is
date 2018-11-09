function getFullType(some) {
  return Object.prototype.toString.call(some);
}

function isArr(any) {
  return Array.isArray(any);
}

function isF(any) {
  return typeof any === 'function';
}

function isNum(any) {
  // eslint-disable-next-line no-restricted-globals
  return typeof any === 'number' && !isNaN(any);
}

function isNull(any) {
  return any === null;
}

function isUndef(any) {
  return any === undefined;
}

function isNil(any) {
  return isNull(any) || isUndef(any);
}

function isStr(any) {
  return typeof any === 'string';
}

function isNonEmptyStr(any) {
  return typeof any === 'string' && any.length !== 0;
}

function isBool(any) {
  return typeof any === 'boolean';
}

function isObj(any) {
  return getFullType(any) === '[object Object]';
}

function isBlob(any) {
  return getFullType(any) === '[object Blob]';
}

function isFile(any) {
  return getFullType(any) === '[object File]';
}

function isSVG(any) {
  return any instanceof window.SVGElement;
}

function isEl(any) {
  return any instanceof HTMLElement || isSVG(any);
}

function isPromise(any) {
  return getFullType(any) === '[object Promise]';
}

export { isArr, isF, isNum, isNull, isUndef, isNil, isStr, isNonEmptyStr, isBool, isObj, isBlob, isFile, isSVG, isEl, isPromise };
