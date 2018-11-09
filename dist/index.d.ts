export function isArr( some: any ): some is any[];

export function isF( some: any ): some is Func;

export function isNum( some: any ): some is number;

export function isNull( some: any ): some is null;

export function isUndef( some: any ): some is undefined;

export function isNil( some: any ): some is null | undefined;

export function isStr( some: any ): some is string;

export function isNonEmptyStr( some: any ): some is string;

export function isBool( some: any ): some is boolean;

export function isObj( some: any ): some is { [key: string]: any };

export function isBlob( some: any ): some is Blob;

export function isFile( some: any ): some is File;

export function isSVG( some: any ): some is SVGElement;

export function isEl( some: any ): some is HTMLElement;

export function isPromise( some: any ): some is Promise;
