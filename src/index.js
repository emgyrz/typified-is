// @flow

function getFullType( some: any ): string {
  return Object.prototype.toString.call( some )
}

function isArr( any: mixed ): boolean {
  return Array.isArray( any )
}

function isF( any: mixed ): boolean {
  return typeof any === 'function'
}

function isNum( any: mixed ): boolean {
  // eslint-disable-next-line no-restricted-globals
  return typeof any === 'number' && !isNaN( any )
}

function isNull( any: mixed ): boolean {
  return any === null
}

function isUndef( any: mixed ): boolean {
  return any === undefined
}

function isNil( any: mixed ): boolean {
  return isNull( any ) || isUndef( any )
}

function isStr( any: mixed ): boolean {
  return typeof any === 'string'
}

function isNonEmptyStr( any: mixed ): boolean {
  return typeof any === 'string' && any.length !== 0
}

function isBool( any: mixed ): boolean {
  return typeof any === 'boolean'
}

function isObj( any: mixed ): boolean {
  return getFullType( any ) === '[object Object]'
}

function isBlob( any: mixed ): boolean {
  return getFullType( any ) === '[object Blob]'
}

function isFile( any: mixed ): boolean {
  return getFullType( any ) === '[object File]'
}

function isSVG( any: mixed ): boolean {
  return any instanceof window.SVGElement
}

function isEl( any: mixed ): boolean {
  return any instanceof HTMLElement || isSVG( any )
}

function isPromise( any: mixed ): boolean {
  return getFullType( any ) === '[object Promise]'
}



export {
  isArr,
  isF,
  isNum,
  isNull,
  isUndef,
  isNil,
  isStr,
  isNonEmptyStr,
  isBool,
  isObj,
  isBlob,
  isFile,
  isSVG,
  isEl,
  isPromise
}
