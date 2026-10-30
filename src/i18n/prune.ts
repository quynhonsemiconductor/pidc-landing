// Build-time hiding of unconfirmed content. Dictionary strings that start with "TODO(CEO)"
// are slots waiting for the owner; they must never reach dist/. pruneTodo() drops every such
// string, then drops array items and objects left empty, so a page renders only known facts
// (a block whose items are all unknown ends up with an empty list the template skips).
// Typing: any string leaf may be missing after pruning (optional); nested objects/arrays stay.
type OptionalStrings<T> = { [K in keyof T as T[K] extends string ? K : never]?: T[K] };
type RequiredRest<T> = { [K in keyof T as T[K] extends string ? never : K]: Pruned<T[K]> };
export type Pruned<T> = T extends string
  ? T
  : T extends readonly (infer U)[]
    ? Pruned<U>[]
    : T extends object
      ? OptionalStrings<T> & RequiredRest<T>
      : T;

const isTodo = (v: unknown) => typeof v === 'string' && v.startsWith('TODO(CEO)');

function prune(v: unknown): unknown {
  if (Array.isArray(v))
    return v
      .filter((x) => !isTodo(x))
      .map(prune)
      .filter((x) => x !== undefined);
  if (v && typeof v === 'object') {
    const out = Object.fromEntries(
      Object.entries(v)
        .filter(([, x]) => !isTodo(x))
        .map(([k, x]) => [k, prune(x)])
        .filter(([, x]) => x !== undefined),
    );
    return Object.keys(out).length ? out : undefined;
  }
  return v;
}

export function pruneTodo<T extends object>(dict: T): Pruned<T> {
  return (prune(dict) ?? {}) as Pruned<T>;
}
