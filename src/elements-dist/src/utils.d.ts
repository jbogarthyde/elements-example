/**
 * Provide methods for scheduling the execution of a callback.
 */
export declare const scheduler: {
    schedule(taskFn: () => void, delay: number): () => void;
    scheduleBeforeRender(taskFn: () => void): () => void;
};
/**
 * Convert a camelCased string to kebab-cased.
 */
export declare function camelToDashCase(input: string): string;
/**
 * Create a `CustomEvent` (even on browsers where `CustomEvent` is not a constructor).
 */
export declare function createCustomEvent(doc: Document, name: string, detail: any): CustomEvent;
/**
 * Check whether the input is an `Element`.
 */
export declare function isElement(node: Node): node is Element;
/**
 * Check whether the input is a function.
 */
export declare function isFunction(value: any): value is Function;
/**
 * Convert a kebab-cased string to camelCased.
 */
export declare function kebabToCamelCase(input: string): string;
/**
 * Check whether an `Element` matches a CSS selector.
 */
export declare function matchesSelector(element: Element, selector: string): boolean;
/**
 * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
 */
export declare function strictEquals(value1: any, value2: any): boolean;
