declare module "js-yaml" {
  export function dump(input: unknown): string;
  export function load(input: string): unknown;
}
