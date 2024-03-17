
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model countTasks
 * 
 */
export type countTasks = {
  createdAt: string
  CREATED: number
  READY: number
  ASSIGNED: number
  ING: number
  DONE: number
}

/**
 * Model countTG
 * 
 */
export type countTG = {
  createdAt: string
  CREATED: number
  READY: number
  UPLOADED: number
  GENERATED: number
}

/**
 * Model countTD
 * 
 */
export type countTD = {
  createdAt: string
  READY: number
  DONE: number
  NOT_FOUND: number
  DELETED: number
  ING: number
}

/**
 * Model countT
 * 
 */
export type countT = {
  createdAt: string
  CREATED: number
  ING: number
  DONE: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CountTasks
 * const countTasks = await prisma.countTasks.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CountTasks
   * const countTasks = await prisma.countTasks.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.countTasks`: Exposes CRUD operations for the **countTasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountTasks
    * const countTasks = await prisma.countTasks.findMany()
    * ```
    */
  get countTasks(): Prisma.countTasksDelegate<GlobalReject>;

  /**
   * `prisma.countTG`: Exposes CRUD operations for the **countTG** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountTGS
    * const countTGS = await prisma.countTG.findMany()
    * ```
    */
  get countTG(): Prisma.countTGDelegate<GlobalReject>;

  /**
   * `prisma.countTD`: Exposes CRUD operations for the **countTD** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountTDS
    * const countTDS = await prisma.countTD.findMany()
    * ```
    */
  get countTD(): Prisma.countTDDelegate<GlobalReject>;

  /**
   * `prisma.countT`: Exposes CRUD operations for the **countT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountTS
    * const countTS = await prisma.countT.findMany()
    * ```
    */
  get countT(): Prisma.countTDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    countTasks: 'countTasks',
    countTG: 'countTG',
    countTD: 'countTD',
    countT: 'countT'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model countTasks
   */


  export type AggregateCountTasks = {
    _count: CountTasksCountAggregateOutputType | null
    _avg: CountTasksAvgAggregateOutputType | null
    _sum: CountTasksSumAggregateOutputType | null
    _min: CountTasksMinAggregateOutputType | null
    _max: CountTasksMaxAggregateOutputType | null
  }

  export type CountTasksAvgAggregateOutputType = {
    CREATED: number | null
    READY: number | null
    ASSIGNED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTasksSumAggregateOutputType = {
    CREATED: number | null
    READY: number | null
    ASSIGNED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTasksMinAggregateOutputType = {
    createdAt: string | null
    CREATED: number | null
    READY: number | null
    ASSIGNED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTasksMaxAggregateOutputType = {
    createdAt: string | null
    CREATED: number | null
    READY: number | null
    ASSIGNED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTasksCountAggregateOutputType = {
    createdAt: number
    CREATED: number
    READY: number
    ASSIGNED: number
    ING: number
    DONE: number
    _all: number
  }


  export type CountTasksAvgAggregateInputType = {
    CREATED?: true
    READY?: true
    ASSIGNED?: true
    ING?: true
    DONE?: true
  }

  export type CountTasksSumAggregateInputType = {
    CREATED?: true
    READY?: true
    ASSIGNED?: true
    ING?: true
    DONE?: true
  }

  export type CountTasksMinAggregateInputType = {
    createdAt?: true
    CREATED?: true
    READY?: true
    ASSIGNED?: true
    ING?: true
    DONE?: true
  }

  export type CountTasksMaxAggregateInputType = {
    createdAt?: true
    CREATED?: true
    READY?: true
    ASSIGNED?: true
    ING?: true
    DONE?: true
  }

  export type CountTasksCountAggregateInputType = {
    createdAt?: true
    CREATED?: true
    READY?: true
    ASSIGNED?: true
    ING?: true
    DONE?: true
    _all?: true
  }

  export type CountTasksAggregateArgs = {
    /**
     * Filter which countTasks to aggregate.
     * 
    **/
    where?: countTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTasks to fetch.
     * 
    **/
    orderBy?: Enumerable<countTasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: countTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countTasks
    **/
    _count?: true | CountTasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountTasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountTasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountTasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountTasksMaxAggregateInputType
  }

  export type GetCountTasksAggregateType<T extends CountTasksAggregateArgs> = {
        [P in keyof T & keyof AggregateCountTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountTasks[P]>
      : GetScalarType<T[P], AggregateCountTasks[P]>
  }




  export type CountTasksGroupByArgs = {
    where?: countTasksWhereInput
    orderBy?: Enumerable<countTasksOrderByWithAggregationInput>
    by: Array<CountTasksScalarFieldEnum>
    having?: countTasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountTasksCountAggregateInputType | true
    _avg?: CountTasksAvgAggregateInputType
    _sum?: CountTasksSumAggregateInputType
    _min?: CountTasksMinAggregateInputType
    _max?: CountTasksMaxAggregateInputType
  }


  export type CountTasksGroupByOutputType = {
    createdAt: string
    CREATED: number
    READY: number
    ASSIGNED: number
    ING: number
    DONE: number
    _count: CountTasksCountAggregateOutputType | null
    _avg: CountTasksAvgAggregateOutputType | null
    _sum: CountTasksSumAggregateOutputType | null
    _min: CountTasksMinAggregateOutputType | null
    _max: CountTasksMaxAggregateOutputType | null
  }

  type GetCountTasksGroupByPayload<T extends CountTasksGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CountTasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountTasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountTasksGroupByOutputType[P]>
            : GetScalarType<T[P], CountTasksGroupByOutputType[P]>
        }
      >
    >


  export type countTasksSelect = {
    createdAt?: boolean
    CREATED?: boolean
    READY?: boolean
    ASSIGNED?: boolean
    ING?: boolean
    DONE?: boolean
  }

  export type countTasksGetPayload<
    S extends boolean | null | undefined | countTasksArgs,
    U = keyof S
      > = S extends true
        ? countTasks
    : S extends undefined
    ? never
    : S extends countTasksArgs | countTasksFindManyArgs
    ?'include' extends U
    ? countTasks 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof countTasks ? countTasks[P] : never
  } 
    : countTasks
  : countTasks


  type countTasksCountArgs = Merge<
    Omit<countTasksFindManyArgs, 'select' | 'include'> & {
      select?: CountTasksCountAggregateInputType | true
    }
  >

  export interface countTasksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CountTasks that matches the filter.
     * @param {countTasksFindUniqueArgs} args - Arguments to find a CountTasks
     * @example
     * // Get one CountTasks
     * const countTasks = await prisma.countTasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends countTasksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, countTasksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'countTasks'> extends True ? CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>> : CheckSelect<T, Prisma__countTasksClient<countTasks | null, null>, Prisma__countTasksClient<countTasksGetPayload<T> | null, null>>

    /**
     * Find the first CountTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTasksFindFirstArgs} args - Arguments to find a CountTasks
     * @example
     * // Get one CountTasks
     * const countTasks = await prisma.countTasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends countTasksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, countTasksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'countTasks'> extends True ? CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>> : CheckSelect<T, Prisma__countTasksClient<countTasks | null, null>, Prisma__countTasksClient<countTasksGetPayload<T> | null, null>>

    /**
     * Find zero or more CountTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTasksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountTasks
     * const countTasks = await prisma.countTasks.findMany()
     * 
     * // Get first 10 CountTasks
     * const countTasks = await prisma.countTasks.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const countTasksWithCreatedAtOnly = await prisma.countTasks.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends countTasksFindManyArgs>(
      args?: SelectSubset<T, countTasksFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<countTasks>>, PrismaPromise<Array<countTasksGetPayload<T>>>>

    /**
     * Create a CountTasks.
     * @param {countTasksCreateArgs} args - Arguments to create a CountTasks.
     * @example
     * // Create one CountTasks
     * const CountTasks = await prisma.countTasks.create({
     *   data: {
     *     // ... data to create a CountTasks
     *   }
     * })
     * 
    **/
    create<T extends countTasksCreateArgs>(
      args: SelectSubset<T, countTasksCreateArgs>
    ): CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>>

    /**
     * Create many CountTasks.
     *     @param {countTasksCreateManyArgs} args - Arguments to create many CountTasks.
     *     @example
     *     // Create many CountTasks
     *     const countTasks = await prisma.countTasks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends countTasksCreateManyArgs>(
      args?: SelectSubset<T, countTasksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CountTasks.
     * @param {countTasksDeleteArgs} args - Arguments to delete one CountTasks.
     * @example
     * // Delete one CountTasks
     * const CountTasks = await prisma.countTasks.delete({
     *   where: {
     *     // ... filter to delete one CountTasks
     *   }
     * })
     * 
    **/
    delete<T extends countTasksDeleteArgs>(
      args: SelectSubset<T, countTasksDeleteArgs>
    ): CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>>

    /**
     * Update one CountTasks.
     * @param {countTasksUpdateArgs} args - Arguments to update one CountTasks.
     * @example
     * // Update one CountTasks
     * const countTasks = await prisma.countTasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends countTasksUpdateArgs>(
      args: SelectSubset<T, countTasksUpdateArgs>
    ): CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>>

    /**
     * Delete zero or more CountTasks.
     * @param {countTasksDeleteManyArgs} args - Arguments to filter CountTasks to delete.
     * @example
     * // Delete a few CountTasks
     * const { count } = await prisma.countTasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends countTasksDeleteManyArgs>(
      args?: SelectSubset<T, countTasksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountTasks
     * const countTasks = await prisma.countTasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends countTasksUpdateManyArgs>(
      args: SelectSubset<T, countTasksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CountTasks.
     * @param {countTasksUpsertArgs} args - Arguments to update or create a CountTasks.
     * @example
     * // Update or create a CountTasks
     * const countTasks = await prisma.countTasks.upsert({
     *   create: {
     *     // ... data to create a CountTasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountTasks we want to update
     *   }
     * })
    **/
    upsert<T extends countTasksUpsertArgs>(
      args: SelectSubset<T, countTasksUpsertArgs>
    ): CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>>

    /**
     * Find one CountTasks that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {countTasksFindUniqueOrThrowArgs} args - Arguments to find a CountTasks
     * @example
     * // Get one CountTasks
     * const countTasks = await prisma.countTasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends countTasksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, countTasksFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>>

    /**
     * Find the first CountTasks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTasksFindFirstOrThrowArgs} args - Arguments to find a CountTasks
     * @example
     * // Get one CountTasks
     * const countTasks = await prisma.countTasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends countTasksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, countTasksFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__countTasksClient<countTasks>, Prisma__countTasksClient<countTasksGetPayload<T>>>

    /**
     * Count the number of CountTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTasksCountArgs} args - Arguments to filter CountTasks to count.
     * @example
     * // Count the number of CountTasks
     * const count = await prisma.countTasks.count({
     *   where: {
     *     // ... the filter for the CountTasks we want to count
     *   }
     * })
    **/
    count<T extends countTasksCountArgs>(
      args?: Subset<T, countTasksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountTasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountTasksAggregateArgs>(args: Subset<T, CountTasksAggregateArgs>): PrismaPromise<GetCountTasksAggregateType<T>>

    /**
     * Group by CountTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountTasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountTasksGroupByArgs['orderBy'] }
        : { orderBy?: CountTasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountTasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountTasksGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for countTasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__countTasksClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * countTasks base type for findUnique actions
   */
  export type countTasksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
    /**
     * Filter, which countTasks to fetch.
     * 
    **/
    where: countTasksWhereUniqueInput
  }

  /**
   * countTasks: findUnique
   */
  export interface countTasksFindUniqueArgs extends countTasksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countTasks base type for findFirst actions
   */
  export type countTasksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
    /**
     * Filter, which countTasks to fetch.
     * 
    **/
    where?: countTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTasks to fetch.
     * 
    **/
    orderBy?: Enumerable<countTasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countTasks.
     * 
    **/
    cursor?: countTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countTasks.
     * 
    **/
    distinct?: Enumerable<CountTasksScalarFieldEnum>
  }

  /**
   * countTasks: findFirst
   */
  export interface countTasksFindFirstArgs extends countTasksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countTasks findMany
   */
  export type countTasksFindManyArgs = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
    /**
     * Filter, which countTasks to fetch.
     * 
    **/
    where?: countTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTasks to fetch.
     * 
    **/
    orderBy?: Enumerable<countTasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countTasks.
     * 
    **/
    cursor?: countTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTasks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CountTasksScalarFieldEnum>
  }


  /**
   * countTasks create
   */
  export type countTasksCreateArgs = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
    /**
     * The data needed to create a countTasks.
     * 
    **/
    data: XOR<countTasksCreateInput, countTasksUncheckedCreateInput>
  }


  /**
   * countTasks createMany
   */
  export type countTasksCreateManyArgs = {
    /**
     * The data used to create many countTasks.
     * 
    **/
    data: Enumerable<countTasksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * countTasks update
   */
  export type countTasksUpdateArgs = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
    /**
     * The data needed to update a countTasks.
     * 
    **/
    data: XOR<countTasksUpdateInput, countTasksUncheckedUpdateInput>
    /**
     * Choose, which countTasks to update.
     * 
    **/
    where: countTasksWhereUniqueInput
  }


  /**
   * countTasks updateMany
   */
  export type countTasksUpdateManyArgs = {
    /**
     * The data used to update countTasks.
     * 
    **/
    data: XOR<countTasksUpdateManyMutationInput, countTasksUncheckedUpdateManyInput>
    /**
     * Filter which countTasks to update
     * 
    **/
    where?: countTasksWhereInput
  }


  /**
   * countTasks upsert
   */
  export type countTasksUpsertArgs = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
    /**
     * The filter to search for the countTasks to update in case it exists.
     * 
    **/
    where: countTasksWhereUniqueInput
    /**
     * In case the countTasks found by the `where` argument doesn't exist, create a new countTasks with this data.
     * 
    **/
    create: XOR<countTasksCreateInput, countTasksUncheckedCreateInput>
    /**
     * In case the countTasks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<countTasksUpdateInput, countTasksUncheckedUpdateInput>
  }


  /**
   * countTasks delete
   */
  export type countTasksDeleteArgs = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
    /**
     * Filter which countTasks to delete.
     * 
    **/
    where: countTasksWhereUniqueInput
  }


  /**
   * countTasks deleteMany
   */
  export type countTasksDeleteManyArgs = {
    /**
     * Filter which countTasks to delete
     * 
    **/
    where?: countTasksWhereInput
  }


  /**
   * countTasks: findUniqueOrThrow
   */
  export type countTasksFindUniqueOrThrowArgs = countTasksFindUniqueArgsBase
      

  /**
   * countTasks: findFirstOrThrow
   */
  export type countTasksFindFirstOrThrowArgs = countTasksFindFirstArgsBase
      

  /**
   * countTasks without action
   */
  export type countTasksArgs = {
    /**
     * Select specific fields to fetch from the countTasks
     * 
    **/
    select?: countTasksSelect | null
  }



  /**
   * Model countTG
   */


  export type AggregateCountTG = {
    _count: CountTGCountAggregateOutputType | null
    _avg: CountTGAvgAggregateOutputType | null
    _sum: CountTGSumAggregateOutputType | null
    _min: CountTGMinAggregateOutputType | null
    _max: CountTGMaxAggregateOutputType | null
  }

  export type CountTGAvgAggregateOutputType = {
    CREATED: number | null
    READY: number | null
    UPLOADED: number | null
    GENERATED: number | null
  }

  export type CountTGSumAggregateOutputType = {
    CREATED: number | null
    READY: number | null
    UPLOADED: number | null
    GENERATED: number | null
  }

  export type CountTGMinAggregateOutputType = {
    createdAt: string | null
    CREATED: number | null
    READY: number | null
    UPLOADED: number | null
    GENERATED: number | null
  }

  export type CountTGMaxAggregateOutputType = {
    createdAt: string | null
    CREATED: number | null
    READY: number | null
    UPLOADED: number | null
    GENERATED: number | null
  }

  export type CountTGCountAggregateOutputType = {
    createdAt: number
    CREATED: number
    READY: number
    UPLOADED: number
    GENERATED: number
    _all: number
  }


  export type CountTGAvgAggregateInputType = {
    CREATED?: true
    READY?: true
    UPLOADED?: true
    GENERATED?: true
  }

  export type CountTGSumAggregateInputType = {
    CREATED?: true
    READY?: true
    UPLOADED?: true
    GENERATED?: true
  }

  export type CountTGMinAggregateInputType = {
    createdAt?: true
    CREATED?: true
    READY?: true
    UPLOADED?: true
    GENERATED?: true
  }

  export type CountTGMaxAggregateInputType = {
    createdAt?: true
    CREATED?: true
    READY?: true
    UPLOADED?: true
    GENERATED?: true
  }

  export type CountTGCountAggregateInputType = {
    createdAt?: true
    CREATED?: true
    READY?: true
    UPLOADED?: true
    GENERATED?: true
    _all?: true
  }

  export type CountTGAggregateArgs = {
    /**
     * Filter which countTG to aggregate.
     * 
    **/
    where?: countTGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTGS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTGOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: countTGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTGS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTGS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countTGS
    **/
    _count?: true | CountTGCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountTGAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountTGSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountTGMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountTGMaxAggregateInputType
  }

  export type GetCountTGAggregateType<T extends CountTGAggregateArgs> = {
        [P in keyof T & keyof AggregateCountTG]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountTG[P]>
      : GetScalarType<T[P], AggregateCountTG[P]>
  }




  export type CountTGGroupByArgs = {
    where?: countTGWhereInput
    orderBy?: Enumerable<countTGOrderByWithAggregationInput>
    by: Array<CountTGScalarFieldEnum>
    having?: countTGScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountTGCountAggregateInputType | true
    _avg?: CountTGAvgAggregateInputType
    _sum?: CountTGSumAggregateInputType
    _min?: CountTGMinAggregateInputType
    _max?: CountTGMaxAggregateInputType
  }


  export type CountTGGroupByOutputType = {
    createdAt: string
    CREATED: number
    READY: number
    UPLOADED: number
    GENERATED: number
    _count: CountTGCountAggregateOutputType | null
    _avg: CountTGAvgAggregateOutputType | null
    _sum: CountTGSumAggregateOutputType | null
    _min: CountTGMinAggregateOutputType | null
    _max: CountTGMaxAggregateOutputType | null
  }

  type GetCountTGGroupByPayload<T extends CountTGGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CountTGGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountTGGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountTGGroupByOutputType[P]>
            : GetScalarType<T[P], CountTGGroupByOutputType[P]>
        }
      >
    >


  export type countTGSelect = {
    createdAt?: boolean
    CREATED?: boolean
    READY?: boolean
    UPLOADED?: boolean
    GENERATED?: boolean
  }

  export type countTGGetPayload<
    S extends boolean | null | undefined | countTGArgs,
    U = keyof S
      > = S extends true
        ? countTG
    : S extends undefined
    ? never
    : S extends countTGArgs | countTGFindManyArgs
    ?'include' extends U
    ? countTG 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof countTG ? countTG[P] : never
  } 
    : countTG
  : countTG


  type countTGCountArgs = Merge<
    Omit<countTGFindManyArgs, 'select' | 'include'> & {
      select?: CountTGCountAggregateInputType | true
    }
  >

  export interface countTGDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CountTG that matches the filter.
     * @param {countTGFindUniqueArgs} args - Arguments to find a CountTG
     * @example
     * // Get one CountTG
     * const countTG = await prisma.countTG.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends countTGFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, countTGFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'countTG'> extends True ? CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>> : CheckSelect<T, Prisma__countTGClient<countTG | null, null>, Prisma__countTGClient<countTGGetPayload<T> | null, null>>

    /**
     * Find the first CountTG that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTGFindFirstArgs} args - Arguments to find a CountTG
     * @example
     * // Get one CountTG
     * const countTG = await prisma.countTG.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends countTGFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, countTGFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'countTG'> extends True ? CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>> : CheckSelect<T, Prisma__countTGClient<countTG | null, null>, Prisma__countTGClient<countTGGetPayload<T> | null, null>>

    /**
     * Find zero or more CountTGS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTGFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountTGS
     * const countTGS = await prisma.countTG.findMany()
     * 
     * // Get first 10 CountTGS
     * const countTGS = await prisma.countTG.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const countTGWithCreatedAtOnly = await prisma.countTG.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends countTGFindManyArgs>(
      args?: SelectSubset<T, countTGFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<countTG>>, PrismaPromise<Array<countTGGetPayload<T>>>>

    /**
     * Create a CountTG.
     * @param {countTGCreateArgs} args - Arguments to create a CountTG.
     * @example
     * // Create one CountTG
     * const CountTG = await prisma.countTG.create({
     *   data: {
     *     // ... data to create a CountTG
     *   }
     * })
     * 
    **/
    create<T extends countTGCreateArgs>(
      args: SelectSubset<T, countTGCreateArgs>
    ): CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>>

    /**
     * Create many CountTGS.
     *     @param {countTGCreateManyArgs} args - Arguments to create many CountTGS.
     *     @example
     *     // Create many CountTGS
     *     const countTG = await prisma.countTG.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends countTGCreateManyArgs>(
      args?: SelectSubset<T, countTGCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CountTG.
     * @param {countTGDeleteArgs} args - Arguments to delete one CountTG.
     * @example
     * // Delete one CountTG
     * const CountTG = await prisma.countTG.delete({
     *   where: {
     *     // ... filter to delete one CountTG
     *   }
     * })
     * 
    **/
    delete<T extends countTGDeleteArgs>(
      args: SelectSubset<T, countTGDeleteArgs>
    ): CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>>

    /**
     * Update one CountTG.
     * @param {countTGUpdateArgs} args - Arguments to update one CountTG.
     * @example
     * // Update one CountTG
     * const countTG = await prisma.countTG.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends countTGUpdateArgs>(
      args: SelectSubset<T, countTGUpdateArgs>
    ): CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>>

    /**
     * Delete zero or more CountTGS.
     * @param {countTGDeleteManyArgs} args - Arguments to filter CountTGS to delete.
     * @example
     * // Delete a few CountTGS
     * const { count } = await prisma.countTG.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends countTGDeleteManyArgs>(
      args?: SelectSubset<T, countTGDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountTGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTGUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountTGS
     * const countTG = await prisma.countTG.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends countTGUpdateManyArgs>(
      args: SelectSubset<T, countTGUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CountTG.
     * @param {countTGUpsertArgs} args - Arguments to update or create a CountTG.
     * @example
     * // Update or create a CountTG
     * const countTG = await prisma.countTG.upsert({
     *   create: {
     *     // ... data to create a CountTG
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountTG we want to update
     *   }
     * })
    **/
    upsert<T extends countTGUpsertArgs>(
      args: SelectSubset<T, countTGUpsertArgs>
    ): CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>>

    /**
     * Find one CountTG that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {countTGFindUniqueOrThrowArgs} args - Arguments to find a CountTG
     * @example
     * // Get one CountTG
     * const countTG = await prisma.countTG.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends countTGFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, countTGFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>>

    /**
     * Find the first CountTG that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTGFindFirstOrThrowArgs} args - Arguments to find a CountTG
     * @example
     * // Get one CountTG
     * const countTG = await prisma.countTG.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends countTGFindFirstOrThrowArgs>(
      args?: SelectSubset<T, countTGFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__countTGClient<countTG>, Prisma__countTGClient<countTGGetPayload<T>>>

    /**
     * Count the number of CountTGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTGCountArgs} args - Arguments to filter CountTGS to count.
     * @example
     * // Count the number of CountTGS
     * const count = await prisma.countTG.count({
     *   where: {
     *     // ... the filter for the CountTGS we want to count
     *   }
     * })
    **/
    count<T extends countTGCountArgs>(
      args?: Subset<T, countTGCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountTGCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountTG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTGAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountTGAggregateArgs>(args: Subset<T, CountTGAggregateArgs>): PrismaPromise<GetCountTGAggregateType<T>>

    /**
     * Group by CountTG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTGGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountTGGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountTGGroupByArgs['orderBy'] }
        : { orderBy?: CountTGGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountTGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountTGGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for countTG.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__countTGClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * countTG base type for findUnique actions
   */
  export type countTGFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
    /**
     * Filter, which countTG to fetch.
     * 
    **/
    where: countTGWhereUniqueInput
  }

  /**
   * countTG: findUnique
   */
  export interface countTGFindUniqueArgs extends countTGFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countTG base type for findFirst actions
   */
  export type countTGFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
    /**
     * Filter, which countTG to fetch.
     * 
    **/
    where?: countTGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTGS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTGOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countTGS.
     * 
    **/
    cursor?: countTGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTGS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTGS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countTGS.
     * 
    **/
    distinct?: Enumerable<CountTGScalarFieldEnum>
  }

  /**
   * countTG: findFirst
   */
  export interface countTGFindFirstArgs extends countTGFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countTG findMany
   */
  export type countTGFindManyArgs = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
    /**
     * Filter, which countTGS to fetch.
     * 
    **/
    where?: countTGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTGS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTGOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countTGS.
     * 
    **/
    cursor?: countTGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTGS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTGS.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CountTGScalarFieldEnum>
  }


  /**
   * countTG create
   */
  export type countTGCreateArgs = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
    /**
     * The data needed to create a countTG.
     * 
    **/
    data: XOR<countTGCreateInput, countTGUncheckedCreateInput>
  }


  /**
   * countTG createMany
   */
  export type countTGCreateManyArgs = {
    /**
     * The data used to create many countTGS.
     * 
    **/
    data: Enumerable<countTGCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * countTG update
   */
  export type countTGUpdateArgs = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
    /**
     * The data needed to update a countTG.
     * 
    **/
    data: XOR<countTGUpdateInput, countTGUncheckedUpdateInput>
    /**
     * Choose, which countTG to update.
     * 
    **/
    where: countTGWhereUniqueInput
  }


  /**
   * countTG updateMany
   */
  export type countTGUpdateManyArgs = {
    /**
     * The data used to update countTGS.
     * 
    **/
    data: XOR<countTGUpdateManyMutationInput, countTGUncheckedUpdateManyInput>
    /**
     * Filter which countTGS to update
     * 
    **/
    where?: countTGWhereInput
  }


  /**
   * countTG upsert
   */
  export type countTGUpsertArgs = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
    /**
     * The filter to search for the countTG to update in case it exists.
     * 
    **/
    where: countTGWhereUniqueInput
    /**
     * In case the countTG found by the `where` argument doesn't exist, create a new countTG with this data.
     * 
    **/
    create: XOR<countTGCreateInput, countTGUncheckedCreateInput>
    /**
     * In case the countTG was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<countTGUpdateInput, countTGUncheckedUpdateInput>
  }


  /**
   * countTG delete
   */
  export type countTGDeleteArgs = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
    /**
     * Filter which countTG to delete.
     * 
    **/
    where: countTGWhereUniqueInput
  }


  /**
   * countTG deleteMany
   */
  export type countTGDeleteManyArgs = {
    /**
     * Filter which countTGS to delete
     * 
    **/
    where?: countTGWhereInput
  }


  /**
   * countTG: findUniqueOrThrow
   */
  export type countTGFindUniqueOrThrowArgs = countTGFindUniqueArgsBase
      

  /**
   * countTG: findFirstOrThrow
   */
  export type countTGFindFirstOrThrowArgs = countTGFindFirstArgsBase
      

  /**
   * countTG without action
   */
  export type countTGArgs = {
    /**
     * Select specific fields to fetch from the countTG
     * 
    **/
    select?: countTGSelect | null
  }



  /**
   * Model countTD
   */


  export type AggregateCountTD = {
    _count: CountTDCountAggregateOutputType | null
    _avg: CountTDAvgAggregateOutputType | null
    _sum: CountTDSumAggregateOutputType | null
    _min: CountTDMinAggregateOutputType | null
    _max: CountTDMaxAggregateOutputType | null
  }

  export type CountTDAvgAggregateOutputType = {
    READY: number | null
    DONE: number | null
    NOT_FOUND: number | null
    DELETED: number | null
    ING: number | null
  }

  export type CountTDSumAggregateOutputType = {
    READY: number | null
    DONE: number | null
    NOT_FOUND: number | null
    DELETED: number | null
    ING: number | null
  }

  export type CountTDMinAggregateOutputType = {
    createdAt: string | null
    READY: number | null
    DONE: number | null
    NOT_FOUND: number | null
    DELETED: number | null
    ING: number | null
  }

  export type CountTDMaxAggregateOutputType = {
    createdAt: string | null
    READY: number | null
    DONE: number | null
    NOT_FOUND: number | null
    DELETED: number | null
    ING: number | null
  }

  export type CountTDCountAggregateOutputType = {
    createdAt: number
    READY: number
    DONE: number
    NOT_FOUND: number
    DELETED: number
    ING: number
    _all: number
  }


  export type CountTDAvgAggregateInputType = {
    READY?: true
    DONE?: true
    NOT_FOUND?: true
    DELETED?: true
    ING?: true
  }

  export type CountTDSumAggregateInputType = {
    READY?: true
    DONE?: true
    NOT_FOUND?: true
    DELETED?: true
    ING?: true
  }

  export type CountTDMinAggregateInputType = {
    createdAt?: true
    READY?: true
    DONE?: true
    NOT_FOUND?: true
    DELETED?: true
    ING?: true
  }

  export type CountTDMaxAggregateInputType = {
    createdAt?: true
    READY?: true
    DONE?: true
    NOT_FOUND?: true
    DELETED?: true
    ING?: true
  }

  export type CountTDCountAggregateInputType = {
    createdAt?: true
    READY?: true
    DONE?: true
    NOT_FOUND?: true
    DELETED?: true
    ING?: true
    _all?: true
  }

  export type CountTDAggregateArgs = {
    /**
     * Filter which countTD to aggregate.
     * 
    **/
    where?: countTDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTDS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTDOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: countTDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTDS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTDS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countTDS
    **/
    _count?: true | CountTDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountTDAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountTDSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountTDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountTDMaxAggregateInputType
  }

  export type GetCountTDAggregateType<T extends CountTDAggregateArgs> = {
        [P in keyof T & keyof AggregateCountTD]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountTD[P]>
      : GetScalarType<T[P], AggregateCountTD[P]>
  }




  export type CountTDGroupByArgs = {
    where?: countTDWhereInput
    orderBy?: Enumerable<countTDOrderByWithAggregationInput>
    by: Array<CountTDScalarFieldEnum>
    having?: countTDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountTDCountAggregateInputType | true
    _avg?: CountTDAvgAggregateInputType
    _sum?: CountTDSumAggregateInputType
    _min?: CountTDMinAggregateInputType
    _max?: CountTDMaxAggregateInputType
  }


  export type CountTDGroupByOutputType = {
    createdAt: string
    READY: number
    DONE: number
    NOT_FOUND: number
    DELETED: number
    ING: number
    _count: CountTDCountAggregateOutputType | null
    _avg: CountTDAvgAggregateOutputType | null
    _sum: CountTDSumAggregateOutputType | null
    _min: CountTDMinAggregateOutputType | null
    _max: CountTDMaxAggregateOutputType | null
  }

  type GetCountTDGroupByPayload<T extends CountTDGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CountTDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountTDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountTDGroupByOutputType[P]>
            : GetScalarType<T[P], CountTDGroupByOutputType[P]>
        }
      >
    >


  export type countTDSelect = {
    createdAt?: boolean
    READY?: boolean
    DONE?: boolean
    NOT_FOUND?: boolean
    DELETED?: boolean
    ING?: boolean
  }

  export type countTDGetPayload<
    S extends boolean | null | undefined | countTDArgs,
    U = keyof S
      > = S extends true
        ? countTD
    : S extends undefined
    ? never
    : S extends countTDArgs | countTDFindManyArgs
    ?'include' extends U
    ? countTD 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof countTD ? countTD[P] : never
  } 
    : countTD
  : countTD


  type countTDCountArgs = Merge<
    Omit<countTDFindManyArgs, 'select' | 'include'> & {
      select?: CountTDCountAggregateInputType | true
    }
  >

  export interface countTDDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CountTD that matches the filter.
     * @param {countTDFindUniqueArgs} args - Arguments to find a CountTD
     * @example
     * // Get one CountTD
     * const countTD = await prisma.countTD.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends countTDFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, countTDFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'countTD'> extends True ? CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>> : CheckSelect<T, Prisma__countTDClient<countTD | null, null>, Prisma__countTDClient<countTDGetPayload<T> | null, null>>

    /**
     * Find the first CountTD that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTDFindFirstArgs} args - Arguments to find a CountTD
     * @example
     * // Get one CountTD
     * const countTD = await prisma.countTD.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends countTDFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, countTDFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'countTD'> extends True ? CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>> : CheckSelect<T, Prisma__countTDClient<countTD | null, null>, Prisma__countTDClient<countTDGetPayload<T> | null, null>>

    /**
     * Find zero or more CountTDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTDFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountTDS
     * const countTDS = await prisma.countTD.findMany()
     * 
     * // Get first 10 CountTDS
     * const countTDS = await prisma.countTD.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const countTDWithCreatedAtOnly = await prisma.countTD.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends countTDFindManyArgs>(
      args?: SelectSubset<T, countTDFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<countTD>>, PrismaPromise<Array<countTDGetPayload<T>>>>

    /**
     * Create a CountTD.
     * @param {countTDCreateArgs} args - Arguments to create a CountTD.
     * @example
     * // Create one CountTD
     * const CountTD = await prisma.countTD.create({
     *   data: {
     *     // ... data to create a CountTD
     *   }
     * })
     * 
    **/
    create<T extends countTDCreateArgs>(
      args: SelectSubset<T, countTDCreateArgs>
    ): CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>>

    /**
     * Create many CountTDS.
     *     @param {countTDCreateManyArgs} args - Arguments to create many CountTDS.
     *     @example
     *     // Create many CountTDS
     *     const countTD = await prisma.countTD.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends countTDCreateManyArgs>(
      args?: SelectSubset<T, countTDCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CountTD.
     * @param {countTDDeleteArgs} args - Arguments to delete one CountTD.
     * @example
     * // Delete one CountTD
     * const CountTD = await prisma.countTD.delete({
     *   where: {
     *     // ... filter to delete one CountTD
     *   }
     * })
     * 
    **/
    delete<T extends countTDDeleteArgs>(
      args: SelectSubset<T, countTDDeleteArgs>
    ): CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>>

    /**
     * Update one CountTD.
     * @param {countTDUpdateArgs} args - Arguments to update one CountTD.
     * @example
     * // Update one CountTD
     * const countTD = await prisma.countTD.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends countTDUpdateArgs>(
      args: SelectSubset<T, countTDUpdateArgs>
    ): CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>>

    /**
     * Delete zero or more CountTDS.
     * @param {countTDDeleteManyArgs} args - Arguments to filter CountTDS to delete.
     * @example
     * // Delete a few CountTDS
     * const { count } = await prisma.countTD.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends countTDDeleteManyArgs>(
      args?: SelectSubset<T, countTDDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountTDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountTDS
     * const countTD = await prisma.countTD.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends countTDUpdateManyArgs>(
      args: SelectSubset<T, countTDUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CountTD.
     * @param {countTDUpsertArgs} args - Arguments to update or create a CountTD.
     * @example
     * // Update or create a CountTD
     * const countTD = await prisma.countTD.upsert({
     *   create: {
     *     // ... data to create a CountTD
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountTD we want to update
     *   }
     * })
    **/
    upsert<T extends countTDUpsertArgs>(
      args: SelectSubset<T, countTDUpsertArgs>
    ): CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>>

    /**
     * Find one CountTD that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {countTDFindUniqueOrThrowArgs} args - Arguments to find a CountTD
     * @example
     * // Get one CountTD
     * const countTD = await prisma.countTD.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends countTDFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, countTDFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>>

    /**
     * Find the first CountTD that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTDFindFirstOrThrowArgs} args - Arguments to find a CountTD
     * @example
     * // Get one CountTD
     * const countTD = await prisma.countTD.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends countTDFindFirstOrThrowArgs>(
      args?: SelectSubset<T, countTDFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__countTDClient<countTD>, Prisma__countTDClient<countTDGetPayload<T>>>

    /**
     * Count the number of CountTDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTDCountArgs} args - Arguments to filter CountTDS to count.
     * @example
     * // Count the number of CountTDS
     * const count = await prisma.countTD.count({
     *   where: {
     *     // ... the filter for the CountTDS we want to count
     *   }
     * })
    **/
    count<T extends countTDCountArgs>(
      args?: Subset<T, countTDCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountTDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountTD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountTDAggregateArgs>(args: Subset<T, CountTDAggregateArgs>): PrismaPromise<GetCountTDAggregateType<T>>

    /**
     * Group by CountTD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTDGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountTDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountTDGroupByArgs['orderBy'] }
        : { orderBy?: CountTDGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountTDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountTDGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for countTD.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__countTDClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * countTD base type for findUnique actions
   */
  export type countTDFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
    /**
     * Filter, which countTD to fetch.
     * 
    **/
    where: countTDWhereUniqueInput
  }

  /**
   * countTD: findUnique
   */
  export interface countTDFindUniqueArgs extends countTDFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countTD base type for findFirst actions
   */
  export type countTDFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
    /**
     * Filter, which countTD to fetch.
     * 
    **/
    where?: countTDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTDS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTDOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countTDS.
     * 
    **/
    cursor?: countTDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTDS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTDS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countTDS.
     * 
    **/
    distinct?: Enumerable<CountTDScalarFieldEnum>
  }

  /**
   * countTD: findFirst
   */
  export interface countTDFindFirstArgs extends countTDFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countTD findMany
   */
  export type countTDFindManyArgs = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
    /**
     * Filter, which countTDS to fetch.
     * 
    **/
    where?: countTDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTDS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTDOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countTDS.
     * 
    **/
    cursor?: countTDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTDS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTDS.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CountTDScalarFieldEnum>
  }


  /**
   * countTD create
   */
  export type countTDCreateArgs = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
    /**
     * The data needed to create a countTD.
     * 
    **/
    data: XOR<countTDCreateInput, countTDUncheckedCreateInput>
  }


  /**
   * countTD createMany
   */
  export type countTDCreateManyArgs = {
    /**
     * The data used to create many countTDS.
     * 
    **/
    data: Enumerable<countTDCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * countTD update
   */
  export type countTDUpdateArgs = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
    /**
     * The data needed to update a countTD.
     * 
    **/
    data: XOR<countTDUpdateInput, countTDUncheckedUpdateInput>
    /**
     * Choose, which countTD to update.
     * 
    **/
    where: countTDWhereUniqueInput
  }


  /**
   * countTD updateMany
   */
  export type countTDUpdateManyArgs = {
    /**
     * The data used to update countTDS.
     * 
    **/
    data: XOR<countTDUpdateManyMutationInput, countTDUncheckedUpdateManyInput>
    /**
     * Filter which countTDS to update
     * 
    **/
    where?: countTDWhereInput
  }


  /**
   * countTD upsert
   */
  export type countTDUpsertArgs = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
    /**
     * The filter to search for the countTD to update in case it exists.
     * 
    **/
    where: countTDWhereUniqueInput
    /**
     * In case the countTD found by the `where` argument doesn't exist, create a new countTD with this data.
     * 
    **/
    create: XOR<countTDCreateInput, countTDUncheckedCreateInput>
    /**
     * In case the countTD was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<countTDUpdateInput, countTDUncheckedUpdateInput>
  }


  /**
   * countTD delete
   */
  export type countTDDeleteArgs = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
    /**
     * Filter which countTD to delete.
     * 
    **/
    where: countTDWhereUniqueInput
  }


  /**
   * countTD deleteMany
   */
  export type countTDDeleteManyArgs = {
    /**
     * Filter which countTDS to delete
     * 
    **/
    where?: countTDWhereInput
  }


  /**
   * countTD: findUniqueOrThrow
   */
  export type countTDFindUniqueOrThrowArgs = countTDFindUniqueArgsBase
      

  /**
   * countTD: findFirstOrThrow
   */
  export type countTDFindFirstOrThrowArgs = countTDFindFirstArgsBase
      

  /**
   * countTD without action
   */
  export type countTDArgs = {
    /**
     * Select specific fields to fetch from the countTD
     * 
    **/
    select?: countTDSelect | null
  }



  /**
   * Model countT
   */


  export type AggregateCountT = {
    _count: CountTCountAggregateOutputType | null
    _avg: CountTAvgAggregateOutputType | null
    _sum: CountTSumAggregateOutputType | null
    _min: CountTMinAggregateOutputType | null
    _max: CountTMaxAggregateOutputType | null
  }

  export type CountTAvgAggregateOutputType = {
    CREATED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTSumAggregateOutputType = {
    CREATED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTMinAggregateOutputType = {
    createdAt: string | null
    CREATED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTMaxAggregateOutputType = {
    createdAt: string | null
    CREATED: number | null
    ING: number | null
    DONE: number | null
  }

  export type CountTCountAggregateOutputType = {
    createdAt: number
    CREATED: number
    ING: number
    DONE: number
    _all: number
  }


  export type CountTAvgAggregateInputType = {
    CREATED?: true
    ING?: true
    DONE?: true
  }

  export type CountTSumAggregateInputType = {
    CREATED?: true
    ING?: true
    DONE?: true
  }

  export type CountTMinAggregateInputType = {
    createdAt?: true
    CREATED?: true
    ING?: true
    DONE?: true
  }

  export type CountTMaxAggregateInputType = {
    createdAt?: true
    CREATED?: true
    ING?: true
    DONE?: true
  }

  export type CountTCountAggregateInputType = {
    createdAt?: true
    CREATED?: true
    ING?: true
    DONE?: true
    _all?: true
  }

  export type CountTAggregateArgs = {
    /**
     * Filter which countT to aggregate.
     * 
    **/
    where?: countTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: countTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countTS
    **/
    _count?: true | CountTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountTMaxAggregateInputType
  }

  export type GetCountTAggregateType<T extends CountTAggregateArgs> = {
        [P in keyof T & keyof AggregateCountT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountT[P]>
      : GetScalarType<T[P], AggregateCountT[P]>
  }




  export type CountTGroupByArgs = {
    where?: countTWhereInput
    orderBy?: Enumerable<countTOrderByWithAggregationInput>
    by: Array<CountTScalarFieldEnum>
    having?: countTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountTCountAggregateInputType | true
    _avg?: CountTAvgAggregateInputType
    _sum?: CountTSumAggregateInputType
    _min?: CountTMinAggregateInputType
    _max?: CountTMaxAggregateInputType
  }


  export type CountTGroupByOutputType = {
    createdAt: string
    CREATED: number
    ING: number
    DONE: number
    _count: CountTCountAggregateOutputType | null
    _avg: CountTAvgAggregateOutputType | null
    _sum: CountTSumAggregateOutputType | null
    _min: CountTMinAggregateOutputType | null
    _max: CountTMaxAggregateOutputType | null
  }

  type GetCountTGroupByPayload<T extends CountTGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CountTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountTGroupByOutputType[P]>
            : GetScalarType<T[P], CountTGroupByOutputType[P]>
        }
      >
    >


  export type countTSelect = {
    createdAt?: boolean
    CREATED?: boolean
    ING?: boolean
    DONE?: boolean
  }

  export type countTGetPayload<
    S extends boolean | null | undefined | countTArgs,
    U = keyof S
      > = S extends true
        ? countT
    : S extends undefined
    ? never
    : S extends countTArgs | countTFindManyArgs
    ?'include' extends U
    ? countT 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof countT ? countT[P] : never
  } 
    : countT
  : countT


  type countTCountArgs = Merge<
    Omit<countTFindManyArgs, 'select' | 'include'> & {
      select?: CountTCountAggregateInputType | true
    }
  >

  export interface countTDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CountT that matches the filter.
     * @param {countTFindUniqueArgs} args - Arguments to find a CountT
     * @example
     * // Get one CountT
     * const countT = await prisma.countT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends countTFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, countTFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'countT'> extends True ? CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>> : CheckSelect<T, Prisma__countTClient<countT | null, null>, Prisma__countTClient<countTGetPayload<T> | null, null>>

    /**
     * Find the first CountT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTFindFirstArgs} args - Arguments to find a CountT
     * @example
     * // Get one CountT
     * const countT = await prisma.countT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends countTFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, countTFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'countT'> extends True ? CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>> : CheckSelect<T, Prisma__countTClient<countT | null, null>, Prisma__countTClient<countTGetPayload<T> | null, null>>

    /**
     * Find zero or more CountTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountTS
     * const countTS = await prisma.countT.findMany()
     * 
     * // Get first 10 CountTS
     * const countTS = await prisma.countT.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const countTWithCreatedAtOnly = await prisma.countT.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends countTFindManyArgs>(
      args?: SelectSubset<T, countTFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<countT>>, PrismaPromise<Array<countTGetPayload<T>>>>

    /**
     * Create a CountT.
     * @param {countTCreateArgs} args - Arguments to create a CountT.
     * @example
     * // Create one CountT
     * const CountT = await prisma.countT.create({
     *   data: {
     *     // ... data to create a CountT
     *   }
     * })
     * 
    **/
    create<T extends countTCreateArgs>(
      args: SelectSubset<T, countTCreateArgs>
    ): CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>>

    /**
     * Create many CountTS.
     *     @param {countTCreateManyArgs} args - Arguments to create many CountTS.
     *     @example
     *     // Create many CountTS
     *     const countT = await prisma.countT.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends countTCreateManyArgs>(
      args?: SelectSubset<T, countTCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CountT.
     * @param {countTDeleteArgs} args - Arguments to delete one CountT.
     * @example
     * // Delete one CountT
     * const CountT = await prisma.countT.delete({
     *   where: {
     *     // ... filter to delete one CountT
     *   }
     * })
     * 
    **/
    delete<T extends countTDeleteArgs>(
      args: SelectSubset<T, countTDeleteArgs>
    ): CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>>

    /**
     * Update one CountT.
     * @param {countTUpdateArgs} args - Arguments to update one CountT.
     * @example
     * // Update one CountT
     * const countT = await prisma.countT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends countTUpdateArgs>(
      args: SelectSubset<T, countTUpdateArgs>
    ): CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>>

    /**
     * Delete zero or more CountTS.
     * @param {countTDeleteManyArgs} args - Arguments to filter CountTS to delete.
     * @example
     * // Delete a few CountTS
     * const { count } = await prisma.countT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends countTDeleteManyArgs>(
      args?: SelectSubset<T, countTDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountTS
     * const countT = await prisma.countT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends countTUpdateManyArgs>(
      args: SelectSubset<T, countTUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CountT.
     * @param {countTUpsertArgs} args - Arguments to update or create a CountT.
     * @example
     * // Update or create a CountT
     * const countT = await prisma.countT.upsert({
     *   create: {
     *     // ... data to create a CountT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountT we want to update
     *   }
     * })
    **/
    upsert<T extends countTUpsertArgs>(
      args: SelectSubset<T, countTUpsertArgs>
    ): CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>>

    /**
     * Find one CountT that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {countTFindUniqueOrThrowArgs} args - Arguments to find a CountT
     * @example
     * // Get one CountT
     * const countT = await prisma.countT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends countTFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, countTFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>>

    /**
     * Find the first CountT that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTFindFirstOrThrowArgs} args - Arguments to find a CountT
     * @example
     * // Get one CountT
     * const countT = await prisma.countT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends countTFindFirstOrThrowArgs>(
      args?: SelectSubset<T, countTFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__countTClient<countT>, Prisma__countTClient<countTGetPayload<T>>>

    /**
     * Count the number of CountTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countTCountArgs} args - Arguments to filter CountTS to count.
     * @example
     * // Count the number of CountTS
     * const count = await prisma.countT.count({
     *   where: {
     *     // ... the filter for the CountTS we want to count
     *   }
     * })
    **/
    count<T extends countTCountArgs>(
      args?: Subset<T, countTCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountTAggregateArgs>(args: Subset<T, CountTAggregateArgs>): PrismaPromise<GetCountTAggregateType<T>>

    /**
     * Group by CountT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountTGroupByArgs['orderBy'] }
        : { orderBy?: CountTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountTGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for countT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__countTClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * countT base type for findUnique actions
   */
  export type countTFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
    /**
     * Filter, which countT to fetch.
     * 
    **/
    where: countTWhereUniqueInput
  }

  /**
   * countT: findUnique
   */
  export interface countTFindUniqueArgs extends countTFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countT base type for findFirst actions
   */
  export type countTFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
    /**
     * Filter, which countT to fetch.
     * 
    **/
    where?: countTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countTS.
     * 
    **/
    cursor?: countTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countTS.
     * 
    **/
    distinct?: Enumerable<CountTScalarFieldEnum>
  }

  /**
   * countT: findFirst
   */
  export interface countTFindFirstArgs extends countTFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * countT findMany
   */
  export type countTFindManyArgs = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
    /**
     * Filter, which countTS to fetch.
     * 
    **/
    where?: countTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countTS to fetch.
     * 
    **/
    orderBy?: Enumerable<countTOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countTS.
     * 
    **/
    cursor?: countTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countTS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countTS.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CountTScalarFieldEnum>
  }


  /**
   * countT create
   */
  export type countTCreateArgs = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
    /**
     * The data needed to create a countT.
     * 
    **/
    data: XOR<countTCreateInput, countTUncheckedCreateInput>
  }


  /**
   * countT createMany
   */
  export type countTCreateManyArgs = {
    /**
     * The data used to create many countTS.
     * 
    **/
    data: Enumerable<countTCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * countT update
   */
  export type countTUpdateArgs = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
    /**
     * The data needed to update a countT.
     * 
    **/
    data: XOR<countTUpdateInput, countTUncheckedUpdateInput>
    /**
     * Choose, which countT to update.
     * 
    **/
    where: countTWhereUniqueInput
  }


  /**
   * countT updateMany
   */
  export type countTUpdateManyArgs = {
    /**
     * The data used to update countTS.
     * 
    **/
    data: XOR<countTUpdateManyMutationInput, countTUncheckedUpdateManyInput>
    /**
     * Filter which countTS to update
     * 
    **/
    where?: countTWhereInput
  }


  /**
   * countT upsert
   */
  export type countTUpsertArgs = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
    /**
     * The filter to search for the countT to update in case it exists.
     * 
    **/
    where: countTWhereUniqueInput
    /**
     * In case the countT found by the `where` argument doesn't exist, create a new countT with this data.
     * 
    **/
    create: XOR<countTCreateInput, countTUncheckedCreateInput>
    /**
     * In case the countT was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<countTUpdateInput, countTUncheckedUpdateInput>
  }


  /**
   * countT delete
   */
  export type countTDeleteArgs = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
    /**
     * Filter which countT to delete.
     * 
    **/
    where: countTWhereUniqueInput
  }


  /**
   * countT deleteMany
   */
  export type countTDeleteManyArgs = {
    /**
     * Filter which countTS to delete
     * 
    **/
    where?: countTWhereInput
  }


  /**
   * countT: findUniqueOrThrow
   */
  export type countTFindUniqueOrThrowArgs = countTFindUniqueArgsBase
      

  /**
   * countT: findFirstOrThrow
   */
  export type countTFindFirstOrThrowArgs = countTFindFirstArgsBase
      

  /**
   * countT without action
   */
  export type countTArgs = {
    /**
     * Select specific fields to fetch from the countT
     * 
    **/
    select?: countTSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CountTDScalarFieldEnum: {
    createdAt: 'createdAt',
    READY: 'READY',
    DONE: 'DONE',
    NOT_FOUND: 'NOT_FOUND',
    DELETED: 'DELETED',
    ING: 'ING'
  };

  export type CountTDScalarFieldEnum = (typeof CountTDScalarFieldEnum)[keyof typeof CountTDScalarFieldEnum]


  export const CountTGScalarFieldEnum: {
    createdAt: 'createdAt',
    CREATED: 'CREATED',
    READY: 'READY',
    UPLOADED: 'UPLOADED',
    GENERATED: 'GENERATED'
  };

  export type CountTGScalarFieldEnum = (typeof CountTGScalarFieldEnum)[keyof typeof CountTGScalarFieldEnum]


  export const CountTScalarFieldEnum: {
    createdAt: 'createdAt',
    CREATED: 'CREATED',
    ING: 'ING',
    DONE: 'DONE'
  };

  export type CountTScalarFieldEnum = (typeof CountTScalarFieldEnum)[keyof typeof CountTScalarFieldEnum]


  export const CountTasksScalarFieldEnum: {
    createdAt: 'createdAt',
    CREATED: 'CREATED',
    READY: 'READY',
    ASSIGNED: 'ASSIGNED',
    ING: 'ING',
    DONE: 'DONE'
  };

  export type CountTasksScalarFieldEnum = (typeof CountTasksScalarFieldEnum)[keyof typeof CountTasksScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type countTasksWhereInput = {
    AND?: Enumerable<countTasksWhereInput>
    OR?: Enumerable<countTasksWhereInput>
    NOT?: Enumerable<countTasksWhereInput>
    createdAt?: StringFilter | string
    CREATED?: IntFilter | number
    READY?: IntFilter | number
    ASSIGNED?: IntFilter | number
    ING?: IntFilter | number
    DONE?: IntFilter | number
  }

  export type countTasksOrderByWithRelationInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    ASSIGNED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTasksWhereUniqueInput = {
    createdAt?: string
  }

  export type countTasksOrderByWithAggregationInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    ASSIGNED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
    _count?: countTasksCountOrderByAggregateInput
    _avg?: countTasksAvgOrderByAggregateInput
    _max?: countTasksMaxOrderByAggregateInput
    _min?: countTasksMinOrderByAggregateInput
    _sum?: countTasksSumOrderByAggregateInput
  }

  export type countTasksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<countTasksScalarWhereWithAggregatesInput>
    OR?: Enumerable<countTasksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<countTasksScalarWhereWithAggregatesInput>
    createdAt?: StringWithAggregatesFilter | string
    CREATED?: IntWithAggregatesFilter | number
    READY?: IntWithAggregatesFilter | number
    ASSIGNED?: IntWithAggregatesFilter | number
    ING?: IntWithAggregatesFilter | number
    DONE?: IntWithAggregatesFilter | number
  }

  export type countTGWhereInput = {
    AND?: Enumerable<countTGWhereInput>
    OR?: Enumerable<countTGWhereInput>
    NOT?: Enumerable<countTGWhereInput>
    createdAt?: StringFilter | string
    CREATED?: IntFilter | number
    READY?: IntFilter | number
    UPLOADED?: IntFilter | number
    GENERATED?: IntFilter | number
  }

  export type countTGOrderByWithRelationInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    UPLOADED?: SortOrder
    GENERATED?: SortOrder
  }

  export type countTGWhereUniqueInput = {
    createdAt?: string
  }

  export type countTGOrderByWithAggregationInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    UPLOADED?: SortOrder
    GENERATED?: SortOrder
    _count?: countTGCountOrderByAggregateInput
    _avg?: countTGAvgOrderByAggregateInput
    _max?: countTGMaxOrderByAggregateInput
    _min?: countTGMinOrderByAggregateInput
    _sum?: countTGSumOrderByAggregateInput
  }

  export type countTGScalarWhereWithAggregatesInput = {
    AND?: Enumerable<countTGScalarWhereWithAggregatesInput>
    OR?: Enumerable<countTGScalarWhereWithAggregatesInput>
    NOT?: Enumerable<countTGScalarWhereWithAggregatesInput>
    createdAt?: StringWithAggregatesFilter | string
    CREATED?: IntWithAggregatesFilter | number
    READY?: IntWithAggregatesFilter | number
    UPLOADED?: IntWithAggregatesFilter | number
    GENERATED?: IntWithAggregatesFilter | number
  }

  export type countTDWhereInput = {
    AND?: Enumerable<countTDWhereInput>
    OR?: Enumerable<countTDWhereInput>
    NOT?: Enumerable<countTDWhereInput>
    createdAt?: StringFilter | string
    READY?: IntFilter | number
    DONE?: IntFilter | number
    NOT_FOUND?: IntFilter | number
    DELETED?: IntFilter | number
    ING?: IntFilter | number
  }

  export type countTDOrderByWithRelationInput = {
    createdAt?: SortOrder
    READY?: SortOrder
    DONE?: SortOrder
    NOT_FOUND?: SortOrder
    DELETED?: SortOrder
    ING?: SortOrder
  }

  export type countTDWhereUniqueInput = {
    createdAt?: string
  }

  export type countTDOrderByWithAggregationInput = {
    createdAt?: SortOrder
    READY?: SortOrder
    DONE?: SortOrder
    NOT_FOUND?: SortOrder
    DELETED?: SortOrder
    ING?: SortOrder
    _count?: countTDCountOrderByAggregateInput
    _avg?: countTDAvgOrderByAggregateInput
    _max?: countTDMaxOrderByAggregateInput
    _min?: countTDMinOrderByAggregateInput
    _sum?: countTDSumOrderByAggregateInput
  }

  export type countTDScalarWhereWithAggregatesInput = {
    AND?: Enumerable<countTDScalarWhereWithAggregatesInput>
    OR?: Enumerable<countTDScalarWhereWithAggregatesInput>
    NOT?: Enumerable<countTDScalarWhereWithAggregatesInput>
    createdAt?: StringWithAggregatesFilter | string
    READY?: IntWithAggregatesFilter | number
    DONE?: IntWithAggregatesFilter | number
    NOT_FOUND?: IntWithAggregatesFilter | number
    DELETED?: IntWithAggregatesFilter | number
    ING?: IntWithAggregatesFilter | number
  }

  export type countTWhereInput = {
    AND?: Enumerable<countTWhereInput>
    OR?: Enumerable<countTWhereInput>
    NOT?: Enumerable<countTWhereInput>
    createdAt?: StringFilter | string
    CREATED?: IntFilter | number
    ING?: IntFilter | number
    DONE?: IntFilter | number
  }

  export type countTOrderByWithRelationInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTWhereUniqueInput = {
    createdAt?: string
  }

  export type countTOrderByWithAggregationInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
    _count?: countTCountOrderByAggregateInput
    _avg?: countTAvgOrderByAggregateInput
    _max?: countTMaxOrderByAggregateInput
    _min?: countTMinOrderByAggregateInput
    _sum?: countTSumOrderByAggregateInput
  }

  export type countTScalarWhereWithAggregatesInput = {
    AND?: Enumerable<countTScalarWhereWithAggregatesInput>
    OR?: Enumerable<countTScalarWhereWithAggregatesInput>
    NOT?: Enumerable<countTScalarWhereWithAggregatesInput>
    createdAt?: StringWithAggregatesFilter | string
    CREATED?: IntWithAggregatesFilter | number
    ING?: IntWithAggregatesFilter | number
    DONE?: IntWithAggregatesFilter | number
  }

  export type countTasksCreateInput = {
    createdAt: string
    CREATED: number
    READY: number
    ASSIGNED: number
    ING: number
    DONE: number
  }

  export type countTasksUncheckedCreateInput = {
    createdAt: string
    CREATED: number
    READY: number
    ASSIGNED: number
    ING: number
    DONE: number
  }

  export type countTasksUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    ASSIGNED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type countTasksUncheckedUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    ASSIGNED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type countTasksCreateManyInput = {
    createdAt: string
    CREATED: number
    READY: number
    ASSIGNED: number
    ING: number
    DONE: number
  }

  export type countTasksUpdateManyMutationInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    ASSIGNED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type countTasksUncheckedUpdateManyInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    ASSIGNED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type countTGCreateInput = {
    createdAt: string
    CREATED: number
    READY: number
    UPLOADED: number
    GENERATED: number
  }

  export type countTGUncheckedCreateInput = {
    createdAt: string
    CREATED: number
    READY: number
    UPLOADED: number
    GENERATED: number
  }

  export type countTGUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    UPLOADED?: IntFieldUpdateOperationsInput | number
    GENERATED?: IntFieldUpdateOperationsInput | number
  }

  export type countTGUncheckedUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    UPLOADED?: IntFieldUpdateOperationsInput | number
    GENERATED?: IntFieldUpdateOperationsInput | number
  }

  export type countTGCreateManyInput = {
    createdAt: string
    CREATED: number
    READY: number
    UPLOADED: number
    GENERATED: number
  }

  export type countTGUpdateManyMutationInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    UPLOADED?: IntFieldUpdateOperationsInput | number
    GENERATED?: IntFieldUpdateOperationsInput | number
  }

  export type countTGUncheckedUpdateManyInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    READY?: IntFieldUpdateOperationsInput | number
    UPLOADED?: IntFieldUpdateOperationsInput | number
    GENERATED?: IntFieldUpdateOperationsInput | number
  }

  export type countTDCreateInput = {
    createdAt: string
    READY: number
    DONE: number
    NOT_FOUND: number
    DELETED: number
    ING: number
  }

  export type countTDUncheckedCreateInput = {
    createdAt: string
    READY: number
    DONE: number
    NOT_FOUND: number
    DELETED: number
    ING: number
  }

  export type countTDUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    READY?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
    NOT_FOUND?: IntFieldUpdateOperationsInput | number
    DELETED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
  }

  export type countTDUncheckedUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    READY?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
    NOT_FOUND?: IntFieldUpdateOperationsInput | number
    DELETED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
  }

  export type countTDCreateManyInput = {
    createdAt: string
    READY: number
    DONE: number
    NOT_FOUND: number
    DELETED: number
    ING: number
  }

  export type countTDUpdateManyMutationInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    READY?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
    NOT_FOUND?: IntFieldUpdateOperationsInput | number
    DELETED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
  }

  export type countTDUncheckedUpdateManyInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    READY?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
    NOT_FOUND?: IntFieldUpdateOperationsInput | number
    DELETED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
  }

  export type countTCreateInput = {
    createdAt: string
    CREATED: number
    ING: number
    DONE: number
  }

  export type countTUncheckedCreateInput = {
    createdAt: string
    CREATED: number
    ING: number
    DONE: number
  }

  export type countTUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type countTUncheckedUpdateInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type countTCreateManyInput = {
    createdAt: string
    CREATED: number
    ING: number
    DONE: number
  }

  export type countTUpdateManyMutationInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type countTUncheckedUpdateManyInput = {
    createdAt?: StringFieldUpdateOperationsInput | string
    CREATED?: IntFieldUpdateOperationsInput | number
    ING?: IntFieldUpdateOperationsInput | number
    DONE?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type countTasksCountOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    ASSIGNED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTasksAvgOrderByAggregateInput = {
    CREATED?: SortOrder
    READY?: SortOrder
    ASSIGNED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTasksMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    ASSIGNED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTasksMinOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    ASSIGNED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTasksSumOrderByAggregateInput = {
    CREATED?: SortOrder
    READY?: SortOrder
    ASSIGNED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type countTGCountOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    UPLOADED?: SortOrder
    GENERATED?: SortOrder
  }

  export type countTGAvgOrderByAggregateInput = {
    CREATED?: SortOrder
    READY?: SortOrder
    UPLOADED?: SortOrder
    GENERATED?: SortOrder
  }

  export type countTGMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    UPLOADED?: SortOrder
    GENERATED?: SortOrder
  }

  export type countTGMinOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    READY?: SortOrder
    UPLOADED?: SortOrder
    GENERATED?: SortOrder
  }

  export type countTGSumOrderByAggregateInput = {
    CREATED?: SortOrder
    READY?: SortOrder
    UPLOADED?: SortOrder
    GENERATED?: SortOrder
  }

  export type countTDCountOrderByAggregateInput = {
    createdAt?: SortOrder
    READY?: SortOrder
    DONE?: SortOrder
    NOT_FOUND?: SortOrder
    DELETED?: SortOrder
    ING?: SortOrder
  }

  export type countTDAvgOrderByAggregateInput = {
    READY?: SortOrder
    DONE?: SortOrder
    NOT_FOUND?: SortOrder
    DELETED?: SortOrder
    ING?: SortOrder
  }

  export type countTDMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    READY?: SortOrder
    DONE?: SortOrder
    NOT_FOUND?: SortOrder
    DELETED?: SortOrder
    ING?: SortOrder
  }

  export type countTDMinOrderByAggregateInput = {
    createdAt?: SortOrder
    READY?: SortOrder
    DONE?: SortOrder
    NOT_FOUND?: SortOrder
    DELETED?: SortOrder
    ING?: SortOrder
  }

  export type countTDSumOrderByAggregateInput = {
    READY?: SortOrder
    DONE?: SortOrder
    NOT_FOUND?: SortOrder
    DELETED?: SortOrder
    ING?: SortOrder
  }

  export type countTCountOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTAvgOrderByAggregateInput = {
    CREATED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTMinOrderByAggregateInput = {
    createdAt?: SortOrder
    CREATED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type countTSumOrderByAggregateInput = {
    CREATED?: SortOrder
    ING?: SortOrder
    DONE?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}