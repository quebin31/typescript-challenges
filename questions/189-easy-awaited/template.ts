export type Awaited<T> = T extends Promise<infer R> ? R : T
