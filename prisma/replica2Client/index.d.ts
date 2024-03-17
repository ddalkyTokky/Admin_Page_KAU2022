
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
 * Model lands
 * 
 */
export type lands = {
  id: number
  created_at: Date
  updated_at: Date
  type: string
  village_name: string
  status: string
  geometry: Prisma.JsonValue
  x: string
  y: string
  area: Prisma.Decimal
  extra: Prisma.JsonValue
  user_id: number
  address: string
}

/**
 * Model orders
 * 
 */
export type orders = {
  id: number
  name: string
  external_uid: string
  customer_uid: string
  merchant_uid: string
  req_amount: number
  paid_amount: number
  source: string
  status: string
  extra: Prisma.JsonValue
  user_id: number
  task_id: number
  issued_at: Date | null
  expired_at: Date | null
  created_at: Date
  updated_at: Date
  cancel_amount: number
}

/**
 * Model schema_migrations
 * 
 */
export type schema_migrations = {
  version: bigint
  dirty: boolean
}

/**
 * Model services
 * 
 */
export type services = {
  id: number
  service_key: string
  source: string
  created_at: Date
  updated_at: Date
  uri: string
}

/**
 * Model tasks
 * 
 */
export type tasks = {
  id: number
  name: string
  status: string
  user_id: number
  extra: Prisma.JsonValue
  source: string
  external_id: number
  created_at: Date
  updated_at: Date
  expected_start_date: Date
  expected_end_date: Date
}

/**
 * Model tasks_lands
 * 
 */
export type tasks_lands = {
  id: number
  created_at: Date
  updated_at: Date
  task_id: number
  land_id: number
  external_id: number
  sync: boolean
}

/**
 * Model users
 * 
 */
export type users = {
  id: number
  username: string
  phone: string
  hashed_password: string
  access_token: string
  verify: string
  source: string
  external_id: string
  created_at: Date
  updated_at: Date
  name: string
  is_verified: boolean
  default_card_id: string
  is_active: boolean
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lands
 * const lands = await prisma.lands.findMany()
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
   * // Fetch zero or more Lands
   * const lands = await prisma.lands.findMany()
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
   * `prisma.lands`: Exposes CRUD operations for the **lands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lands
    * const lands = await prisma.lands.findMany()
    * ```
    */
  get lands(): Prisma.landsDelegate<GlobalReject>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<GlobalReject>;

  /**
   * `prisma.schema_migrations`: Exposes CRUD operations for the **schema_migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schema_migrations
    * const schema_migrations = await prisma.schema_migrations.findMany()
    * ```
    */
  get schema_migrations(): Prisma.schema_migrationsDelegate<GlobalReject>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.servicesDelegate<GlobalReject>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<GlobalReject>;

  /**
   * `prisma.tasks_lands`: Exposes CRUD operations for the **tasks_lands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks_lands
    * const tasks_lands = await prisma.tasks_lands.findMany()
    * ```
    */
  get tasks_lands(): Prisma.tasks_landsDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
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
    lands: 'lands',
    orders: 'orders',
    schema_migrations: 'schema_migrations',
    services: 'services',
    tasks: 'tasks',
    tasks_lands: 'tasks_lands',
    users: 'users'
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
   * Count Type LandsCountOutputType
   */


  export type LandsCountOutputType = {
    tasks_lands: number
  }

  export type LandsCountOutputTypeSelect = {
    tasks_lands?: boolean
  }

  export type LandsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LandsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LandsCountOutputType
    : S extends undefined
    ? never
    : S extends LandsCountOutputTypeArgs
    ?'include' extends U
    ? LandsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LandsCountOutputType ? LandsCountOutputType[P] : never
  } 
    : LandsCountOutputType
  : LandsCountOutputType




  // Custom InputTypes

  /**
   * LandsCountOutputType without action
   */
  export type LandsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LandsCountOutputType
     * 
    **/
    select?: LandsCountOutputTypeSelect | null
  }



  /**
   * Count Type TasksCountOutputType
   */


  export type TasksCountOutputType = {
    orders: number
    tasks_lands: number
  }

  export type TasksCountOutputTypeSelect = {
    orders?: boolean
    tasks_lands?: boolean
  }

  export type TasksCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TasksCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TasksCountOutputType
    : S extends undefined
    ? never
    : S extends TasksCountOutputTypeArgs
    ?'include' extends U
    ? TasksCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TasksCountOutputType ? TasksCountOutputType[P] : never
  } 
    : TasksCountOutputType
  : TasksCountOutputType




  // Custom InputTypes

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     * 
    **/
    select?: TasksCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    lands: number
    orders: number
    tasks: number
  }

  export type UsersCountOutputTypeSelect = {
    lands?: boolean
    orders?: boolean
    tasks?: boolean
  }

  export type UsersCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UsersCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UsersCountOutputType
    : S extends undefined
    ? never
    : S extends UsersCountOutputTypeArgs
    ?'include' extends U
    ? UsersCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
    : UsersCountOutputType
  : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     * 
    **/
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model lands
   */


  export type AggregateLands = {
    _count: LandsCountAggregateOutputType | null
    _avg: LandsAvgAggregateOutputType | null
    _sum: LandsSumAggregateOutputType | null
    _min: LandsMinAggregateOutputType | null
    _max: LandsMaxAggregateOutputType | null
  }

  export type LandsAvgAggregateOutputType = {
    id: number | null
    area: Decimal | null
    user_id: number | null
  }

  export type LandsSumAggregateOutputType = {
    id: number | null
    area: Decimal | null
    user_id: number | null
  }

  export type LandsMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    type: string | null
    village_name: string | null
    status: string | null
    x: string | null
    y: string | null
    area: Decimal | null
    user_id: number | null
    address: string | null
  }

  export type LandsMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    type: string | null
    village_name: string | null
    status: string | null
    x: string | null
    y: string | null
    area: Decimal | null
    user_id: number | null
    address: string | null
  }

  export type LandsCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    type: number
    village_name: number
    status: number
    geometry: number
    x: number
    y: number
    area: number
    extra: number
    user_id: number
    address: number
    _all: number
  }


  export type LandsAvgAggregateInputType = {
    id?: true
    area?: true
    user_id?: true
  }

  export type LandsSumAggregateInputType = {
    id?: true
    area?: true
    user_id?: true
  }

  export type LandsMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    type?: true
    village_name?: true
    status?: true
    x?: true
    y?: true
    area?: true
    user_id?: true
    address?: true
  }

  export type LandsMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    type?: true
    village_name?: true
    status?: true
    x?: true
    y?: true
    area?: true
    user_id?: true
    address?: true
  }

  export type LandsCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    type?: true
    village_name?: true
    status?: true
    geometry?: true
    x?: true
    y?: true
    area?: true
    extra?: true
    user_id?: true
    address?: true
    _all?: true
  }

  export type LandsAggregateArgs = {
    /**
     * Filter which lands to aggregate.
     * 
    **/
    where?: landsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lands to fetch.
     * 
    **/
    orderBy?: Enumerable<landsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: landsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lands
    **/
    _count?: true | LandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandsMaxAggregateInputType
  }

  export type GetLandsAggregateType<T extends LandsAggregateArgs> = {
        [P in keyof T & keyof AggregateLands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLands[P]>
      : GetScalarType<T[P], AggregateLands[P]>
  }




  export type LandsGroupByArgs = {
    where?: landsWhereInput
    orderBy?: Enumerable<landsOrderByWithAggregationInput>
    by: Array<LandsScalarFieldEnum>
    having?: landsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandsCountAggregateInputType | true
    _avg?: LandsAvgAggregateInputType
    _sum?: LandsSumAggregateInputType
    _min?: LandsMinAggregateInputType
    _max?: LandsMaxAggregateInputType
  }


  export type LandsGroupByOutputType = {
    id: number
    created_at: Date
    updated_at: Date
    type: string
    village_name: string
    status: string
    geometry: JsonValue
    x: string
    y: string
    area: Decimal
    extra: JsonValue
    user_id: number
    address: string
    _count: LandsCountAggregateOutputType | null
    _avg: LandsAvgAggregateOutputType | null
    _sum: LandsSumAggregateOutputType | null
    _min: LandsMinAggregateOutputType | null
    _max: LandsMaxAggregateOutputType | null
  }

  type GetLandsGroupByPayload<T extends LandsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandsGroupByOutputType[P]>
            : GetScalarType<T[P], LandsGroupByOutputType[P]>
        }
      >
    >


  export type landsSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    type?: boolean
    village_name?: boolean
    status?: boolean
    geometry?: boolean
    x?: boolean
    y?: boolean
    area?: boolean
    extra?: boolean
    user_id?: boolean
    address?: boolean
    users?: boolean | usersArgs
    tasks_lands?: boolean | tasks_landsFindManyArgs
    _count?: boolean | LandsCountOutputTypeArgs
  }

  export type landsInclude = {
    users?: boolean | usersArgs
    tasks_lands?: boolean | tasks_landsFindManyArgs
    _count?: boolean | LandsCountOutputTypeArgs
  }

  export type landsGetPayload<
    S extends boolean | null | undefined | landsArgs,
    U = keyof S
      > = S extends true
        ? lands
    : S extends undefined
    ? never
    : S extends landsArgs | landsFindManyArgs
    ?'include' extends U
    ? lands  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? usersGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'tasks_lands' ? Array < tasks_landsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? LandsCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? usersGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'tasks_lands' ? Array < tasks_landsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? LandsCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof lands ? lands[P] : never
  } 
    : lands
  : lands


  type landsCountArgs = Merge<
    Omit<landsFindManyArgs, 'select' | 'include'> & {
      select?: LandsCountAggregateInputType | true
    }
  >

  export interface landsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Lands that matches the filter.
     * @param {landsFindUniqueArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends landsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, landsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'lands'> extends True ? CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>> : CheckSelect<T, Prisma__landsClient<lands | null, null>, Prisma__landsClient<landsGetPayload<T> | null, null>>

    /**
     * Find the first Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landsFindFirstArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends landsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, landsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'lands'> extends True ? CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>> : CheckSelect<T, Prisma__landsClient<lands | null, null>, Prisma__landsClient<landsGetPayload<T> | null, null>>

    /**
     * Find zero or more Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lands
     * const lands = await prisma.lands.findMany()
     * 
     * // Get first 10 Lands
     * const lands = await prisma.lands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landsWithIdOnly = await prisma.lands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends landsFindManyArgs>(
      args?: SelectSubset<T, landsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<lands>>, PrismaPromise<Array<landsGetPayload<T>>>>

    /**
     * Create a Lands.
     * @param {landsCreateArgs} args - Arguments to create a Lands.
     * @example
     * // Create one Lands
     * const Lands = await prisma.lands.create({
     *   data: {
     *     // ... data to create a Lands
     *   }
     * })
     * 
    **/
    create<T extends landsCreateArgs>(
      args: SelectSubset<T, landsCreateArgs>
    ): CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>>

    /**
     * Create many Lands.
     *     @param {landsCreateManyArgs} args - Arguments to create many Lands.
     *     @example
     *     // Create many Lands
     *     const lands = await prisma.lands.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends landsCreateManyArgs>(
      args?: SelectSubset<T, landsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lands.
     * @param {landsDeleteArgs} args - Arguments to delete one Lands.
     * @example
     * // Delete one Lands
     * const Lands = await prisma.lands.delete({
     *   where: {
     *     // ... filter to delete one Lands
     *   }
     * })
     * 
    **/
    delete<T extends landsDeleteArgs>(
      args: SelectSubset<T, landsDeleteArgs>
    ): CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>>

    /**
     * Update one Lands.
     * @param {landsUpdateArgs} args - Arguments to update one Lands.
     * @example
     * // Update one Lands
     * const lands = await prisma.lands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends landsUpdateArgs>(
      args: SelectSubset<T, landsUpdateArgs>
    ): CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>>

    /**
     * Delete zero or more Lands.
     * @param {landsDeleteManyArgs} args - Arguments to filter Lands to delete.
     * @example
     * // Delete a few Lands
     * const { count } = await prisma.lands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends landsDeleteManyArgs>(
      args?: SelectSubset<T, landsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lands
     * const lands = await prisma.lands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends landsUpdateManyArgs>(
      args: SelectSubset<T, landsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lands.
     * @param {landsUpsertArgs} args - Arguments to update or create a Lands.
     * @example
     * // Update or create a Lands
     * const lands = await prisma.lands.upsert({
     *   create: {
     *     // ... data to create a Lands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lands we want to update
     *   }
     * })
    **/
    upsert<T extends landsUpsertArgs>(
      args: SelectSubset<T, landsUpsertArgs>
    ): CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>>

    /**
     * Find one Lands that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {landsFindUniqueOrThrowArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends landsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, landsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>>

    /**
     * Find the first Lands that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landsFindFirstOrThrowArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends landsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, landsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__landsClient<lands>, Prisma__landsClient<landsGetPayload<T>>>

    /**
     * Count the number of Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landsCountArgs} args - Arguments to filter Lands to count.
     * @example
     * // Count the number of Lands
     * const count = await prisma.lands.count({
     *   where: {
     *     // ... the filter for the Lands we want to count
     *   }
     * })
    **/
    count<T extends landsCountArgs>(
      args?: Subset<T, landsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandsAggregateArgs>(args: Subset<T, LandsAggregateArgs>): PrismaPromise<GetLandsAggregateType<T>>

    /**
     * Group by Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsGroupByArgs} args - Group by arguments.
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
      T extends LandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandsGroupByArgs['orderBy'] }
        : { orderBy?: LandsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for lands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__landsClient<T, Null = never> implements PrismaPromise<T> {
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

    users<T extends usersArgs = {}>(args?: Subset<T, usersArgs>): CheckSelect<T, Prisma__usersClient<users | Null>, Prisma__usersClient<usersGetPayload<T> | Null>>;

    tasks_lands<T extends tasks_landsFindManyArgs = {}>(args?: Subset<T, tasks_landsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<tasks_lands>| Null>, PrismaPromise<Array<tasks_landsGetPayload<T>>| Null>>;

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
   * lands base type for findUnique actions
   */
  export type landsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
    /**
     * Filter, which lands to fetch.
     * 
    **/
    where: landsWhereUniqueInput
  }

  /**
   * lands: findUnique
   */
  export interface landsFindUniqueArgs extends landsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * lands base type for findFirst actions
   */
  export type landsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
    /**
     * Filter, which lands to fetch.
     * 
    **/
    where?: landsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lands to fetch.
     * 
    **/
    orderBy?: Enumerable<landsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lands.
     * 
    **/
    cursor?: landsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lands.
     * 
    **/
    distinct?: Enumerable<LandsScalarFieldEnum>
  }

  /**
   * lands: findFirst
   */
  export interface landsFindFirstArgs extends landsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * lands findMany
   */
  export type landsFindManyArgs = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
    /**
     * Filter, which lands to fetch.
     * 
    **/
    where?: landsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lands to fetch.
     * 
    **/
    orderBy?: Enumerable<landsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lands.
     * 
    **/
    cursor?: landsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lands.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LandsScalarFieldEnum>
  }


  /**
   * lands create
   */
  export type landsCreateArgs = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
    /**
     * The data needed to create a lands.
     * 
    **/
    data: XOR<landsCreateInput, landsUncheckedCreateInput>
  }


  /**
   * lands createMany
   */
  export type landsCreateManyArgs = {
    /**
     * The data used to create many lands.
     * 
    **/
    data: Enumerable<landsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * lands update
   */
  export type landsUpdateArgs = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
    /**
     * The data needed to update a lands.
     * 
    **/
    data: XOR<landsUpdateInput, landsUncheckedUpdateInput>
    /**
     * Choose, which lands to update.
     * 
    **/
    where: landsWhereUniqueInput
  }


  /**
   * lands updateMany
   */
  export type landsUpdateManyArgs = {
    /**
     * The data used to update lands.
     * 
    **/
    data: XOR<landsUpdateManyMutationInput, landsUncheckedUpdateManyInput>
    /**
     * Filter which lands to update
     * 
    **/
    where?: landsWhereInput
  }


  /**
   * lands upsert
   */
  export type landsUpsertArgs = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
    /**
     * The filter to search for the lands to update in case it exists.
     * 
    **/
    where: landsWhereUniqueInput
    /**
     * In case the lands found by the `where` argument doesn't exist, create a new lands with this data.
     * 
    **/
    create: XOR<landsCreateInput, landsUncheckedCreateInput>
    /**
     * In case the lands was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<landsUpdateInput, landsUncheckedUpdateInput>
  }


  /**
   * lands delete
   */
  export type landsDeleteArgs = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
    /**
     * Filter which lands to delete.
     * 
    **/
    where: landsWhereUniqueInput
  }


  /**
   * lands deleteMany
   */
  export type landsDeleteManyArgs = {
    /**
     * Filter which lands to delete
     * 
    **/
    where?: landsWhereInput
  }


  /**
   * lands: findUniqueOrThrow
   */
  export type landsFindUniqueOrThrowArgs = landsFindUniqueArgsBase
      

  /**
   * lands: findFirstOrThrow
   */
  export type landsFindFirstOrThrowArgs = landsFindFirstArgsBase
      

  /**
   * lands without action
   */
  export type landsArgs = {
    /**
     * Select specific fields to fetch from the lands
     * 
    **/
    select?: landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: landsInclude | null
  }



  /**
   * Model orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    req_amount: number | null
    paid_amount: number | null
    user_id: number | null
    task_id: number | null
    cancel_amount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    req_amount: number | null
    paid_amount: number | null
    user_id: number | null
    task_id: number | null
    cancel_amount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    name: string | null
    external_uid: string | null
    customer_uid: string | null
    merchant_uid: string | null
    req_amount: number | null
    paid_amount: number | null
    source: string | null
    status: string | null
    user_id: number | null
    task_id: number | null
    issued_at: Date | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    cancel_amount: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    external_uid: string | null
    customer_uid: string | null
    merchant_uid: string | null
    req_amount: number | null
    paid_amount: number | null
    source: string | null
    status: string | null
    user_id: number | null
    task_id: number | null
    issued_at: Date | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    cancel_amount: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    name: number
    external_uid: number
    customer_uid: number
    merchant_uid: number
    req_amount: number
    paid_amount: number
    source: number
    status: number
    extra: number
    user_id: number
    task_id: number
    issued_at: number
    expired_at: number
    created_at: number
    updated_at: number
    cancel_amount: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    req_amount?: true
    paid_amount?: true
    user_id?: true
    task_id?: true
    cancel_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    req_amount?: true
    paid_amount?: true
    user_id?: true
    task_id?: true
    cancel_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    name?: true
    external_uid?: true
    customer_uid?: true
    merchant_uid?: true
    req_amount?: true
    paid_amount?: true
    source?: true
    status?: true
    user_id?: true
    task_id?: true
    issued_at?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    cancel_amount?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    name?: true
    external_uid?: true
    customer_uid?: true
    merchant_uid?: true
    req_amount?: true
    paid_amount?: true
    source?: true
    status?: true
    user_id?: true
    task_id?: true
    issued_at?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    cancel_amount?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    name?: true
    external_uid?: true
    customer_uid?: true
    merchant_uid?: true
    req_amount?: true
    paid_amount?: true
    source?: true
    status?: true
    extra?: true
    user_id?: true
    task_id?: true
    issued_at?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    cancel_amount?: true
    _all?: true
  }

  export type OrdersAggregateArgs = {
    /**
     * Filter which orders to aggregate.
     * 
    **/
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs = {
    where?: ordersWhereInput
    orderBy?: Enumerable<ordersOrderByWithAggregationInput>
    by: Array<OrdersScalarFieldEnum>
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    id: number
    name: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount: number
    source: string
    status: string
    extra: JsonValue
    user_id: number
    task_id: number
    issued_at: Date | null
    expired_at: Date | null
    created_at: Date
    updated_at: Date
    cancel_amount: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect = {
    id?: boolean
    name?: boolean
    external_uid?: boolean
    customer_uid?: boolean
    merchant_uid?: boolean
    req_amount?: boolean
    paid_amount?: boolean
    source?: boolean
    status?: boolean
    extra?: boolean
    user_id?: boolean
    task_id?: boolean
    issued_at?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    cancel_amount?: boolean
    tasks?: boolean | tasksArgs
    users?: boolean | usersArgs
  }

  export type ordersInclude = {
    tasks?: boolean | tasksArgs
    users?: boolean | usersArgs
  }

  export type ordersGetPayload<
    S extends boolean | null | undefined | ordersArgs,
    U = keyof S
      > = S extends true
        ? orders
    : S extends undefined
    ? never
    : S extends ordersArgs | ordersFindManyArgs
    ?'include' extends U
    ? orders  & {
    [P in TrueKeys<S['include']>]:
        P extends 'tasks' ? tasksGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'users' ? usersGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'tasks' ? tasksGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'users' ? usersGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof orders ? orders[P] : never
  } 
    : orders
  : orders


  type ordersCountArgs = Merge<
    Omit<ordersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }
  >

  export interface ordersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ordersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'orders'> extends True ? CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>> : CheckSelect<T, Prisma__ordersClient<orders | null, null>, Prisma__ordersClient<ordersGetPayload<T> | null, null>>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ordersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'orders'> extends True ? CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>> : CheckSelect<T, Prisma__ordersClient<orders | null, null>, Prisma__ordersClient<ordersGetPayload<T> | null, null>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs>(
      args?: SelectSubset<T, ordersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<orders>>, PrismaPromise<Array<ordersGetPayload<T>>>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs>(
      args: SelectSubset<T, ordersCreateArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs>(
      args?: SelectSubset<T, ordersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs>(
      args: SelectSubset<T, ordersDeleteArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs>(
      args: SelectSubset<T, ordersUpdateArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs>(
      args?: SelectSubset<T, ordersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs>(
      args: SelectSubset<T, ordersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs>(
      args: SelectSubset<T, ordersUpsertArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Find one Orders that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Find the first Orders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ordersClient<orders>, Prisma__ordersClient<ordersGetPayload<T>>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ordersClient<T, Null = never> implements PrismaPromise<T> {
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

    tasks<T extends tasksArgs = {}>(args?: Subset<T, tasksArgs>): CheckSelect<T, Prisma__tasksClient<tasks | Null>, Prisma__tasksClient<tasksGetPayload<T> | Null>>;

    users<T extends usersArgs = {}>(args?: Subset<T, usersArgs>): CheckSelect<T, Prisma__usersClient<users | Null>, Prisma__usersClient<usersGetPayload<T> | Null>>;

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
   * orders base type for findUnique actions
   */
  export type ordersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     * 
    **/
    where: ordersWhereUniqueInput
  }

  /**
   * orders: findUnique
   */
  export interface ordersFindUniqueArgs extends ordersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orders base type for findFirst actions
   */
  export type ordersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     * 
    **/
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     * 
    **/
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     * 
    **/
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }

  /**
   * orders: findFirst
   */
  export interface ordersFindFirstArgs extends ordersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orders findMany
   */
  export type ordersFindManyArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     * 
    **/
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     * 
    **/
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * orders create
   */
  export type ordersCreateArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * The data needed to create a orders.
     * 
    **/
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs = {
    /**
     * The data used to create many orders.
     * 
    **/
    data: Enumerable<ordersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * The data needed to update a orders.
     * 
    **/
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     * 
    **/
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs = {
    /**
     * The data used to update orders.
     * 
    **/
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     * 
    **/
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * The filter to search for the orders to update in case it exists.
     * 
    **/
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     * 
    **/
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
    /**
     * Filter which orders to delete.
     * 
    **/
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs = {
    /**
     * Filter which orders to delete
     * 
    **/
    where?: ordersWhereInput
  }


  /**
   * orders: findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs = ordersFindUniqueArgsBase
      

  /**
   * orders: findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs = ordersFindFirstArgsBase
      

  /**
   * orders without action
   */
  export type ordersArgs = {
    /**
     * Select specific fields to fetch from the orders
     * 
    **/
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ordersInclude | null
  }



  /**
   * Model schema_migrations
   */


  export type AggregateSchema_migrations = {
    _count: Schema_migrationsCountAggregateOutputType | null
    _avg: Schema_migrationsAvgAggregateOutputType | null
    _sum: Schema_migrationsSumAggregateOutputType | null
    _min: Schema_migrationsMinAggregateOutputType | null
    _max: Schema_migrationsMaxAggregateOutputType | null
  }

  export type Schema_migrationsAvgAggregateOutputType = {
    version: number | null
  }

  export type Schema_migrationsSumAggregateOutputType = {
    version: bigint | null
  }

  export type Schema_migrationsMinAggregateOutputType = {
    version: bigint | null
    dirty: boolean | null
  }

  export type Schema_migrationsMaxAggregateOutputType = {
    version: bigint | null
    dirty: boolean | null
  }

  export type Schema_migrationsCountAggregateOutputType = {
    version: number
    dirty: number
    _all: number
  }


  export type Schema_migrationsAvgAggregateInputType = {
    version?: true
  }

  export type Schema_migrationsSumAggregateInputType = {
    version?: true
  }

  export type Schema_migrationsMinAggregateInputType = {
    version?: true
    dirty?: true
  }

  export type Schema_migrationsMaxAggregateInputType = {
    version?: true
    dirty?: true
  }

  export type Schema_migrationsCountAggregateInputType = {
    version?: true
    dirty?: true
    _all?: true
  }

  export type Schema_migrationsAggregateArgs = {
    /**
     * Filter which schema_migrations to aggregate.
     * 
    **/
    where?: schema_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schema_migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<schema_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: schema_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schema_migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schema_migrations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schema_migrations
    **/
    _count?: true | Schema_migrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Schema_migrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Schema_migrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Schema_migrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Schema_migrationsMaxAggregateInputType
  }

  export type GetSchema_migrationsAggregateType<T extends Schema_migrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchema_migrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchema_migrations[P]>
      : GetScalarType<T[P], AggregateSchema_migrations[P]>
  }




  export type Schema_migrationsGroupByArgs = {
    where?: schema_migrationsWhereInput
    orderBy?: Enumerable<schema_migrationsOrderByWithAggregationInput>
    by: Array<Schema_migrationsScalarFieldEnum>
    having?: schema_migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Schema_migrationsCountAggregateInputType | true
    _avg?: Schema_migrationsAvgAggregateInputType
    _sum?: Schema_migrationsSumAggregateInputType
    _min?: Schema_migrationsMinAggregateInputType
    _max?: Schema_migrationsMaxAggregateInputType
  }


  export type Schema_migrationsGroupByOutputType = {
    version: bigint
    dirty: boolean
    _count: Schema_migrationsCountAggregateOutputType | null
    _avg: Schema_migrationsAvgAggregateOutputType | null
    _sum: Schema_migrationsSumAggregateOutputType | null
    _min: Schema_migrationsMinAggregateOutputType | null
    _max: Schema_migrationsMaxAggregateOutputType | null
  }

  type GetSchema_migrationsGroupByPayload<T extends Schema_migrationsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Schema_migrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Schema_migrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Schema_migrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Schema_migrationsGroupByOutputType[P]>
        }
      >
    >


  export type schema_migrationsSelect = {
    version?: boolean
    dirty?: boolean
  }

  export type schema_migrationsGetPayload<
    S extends boolean | null | undefined | schema_migrationsArgs,
    U = keyof S
      > = S extends true
        ? schema_migrations
    : S extends undefined
    ? never
    : S extends schema_migrationsArgs | schema_migrationsFindManyArgs
    ?'include' extends U
    ? schema_migrations 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof schema_migrations ? schema_migrations[P] : never
  } 
    : schema_migrations
  : schema_migrations


  type schema_migrationsCountArgs = Merge<
    Omit<schema_migrationsFindManyArgs, 'select' | 'include'> & {
      select?: Schema_migrationsCountAggregateInputType | true
    }
  >

  export interface schema_migrationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Schema_migrations that matches the filter.
     * @param {schema_migrationsFindUniqueArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends schema_migrationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, schema_migrationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'schema_migrations'> extends True ? CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>> : CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations | null, null>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T> | null, null>>

    /**
     * Find the first Schema_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schema_migrationsFindFirstArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends schema_migrationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, schema_migrationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'schema_migrations'> extends True ? CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>> : CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations | null, null>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T> | null, null>>

    /**
     * Find zero or more Schema_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schema_migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findMany()
     * 
     * // Get first 10 Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findMany({ take: 10 })
     * 
     * // Only select the `version`
     * const schema_migrationsWithVersionOnly = await prisma.schema_migrations.findMany({ select: { version: true } })
     * 
    **/
    findMany<T extends schema_migrationsFindManyArgs>(
      args?: SelectSubset<T, schema_migrationsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<schema_migrations>>, PrismaPromise<Array<schema_migrationsGetPayload<T>>>>

    /**
     * Create a Schema_migrations.
     * @param {schema_migrationsCreateArgs} args - Arguments to create a Schema_migrations.
     * @example
     * // Create one Schema_migrations
     * const Schema_migrations = await prisma.schema_migrations.create({
     *   data: {
     *     // ... data to create a Schema_migrations
     *   }
     * })
     * 
    **/
    create<T extends schema_migrationsCreateArgs>(
      args: SelectSubset<T, schema_migrationsCreateArgs>
    ): CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>>

    /**
     * Create many Schema_migrations.
     *     @param {schema_migrationsCreateManyArgs} args - Arguments to create many Schema_migrations.
     *     @example
     *     // Create many Schema_migrations
     *     const schema_migrations = await prisma.schema_migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends schema_migrationsCreateManyArgs>(
      args?: SelectSubset<T, schema_migrationsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Schema_migrations.
     * @param {schema_migrationsDeleteArgs} args - Arguments to delete one Schema_migrations.
     * @example
     * // Delete one Schema_migrations
     * const Schema_migrations = await prisma.schema_migrations.delete({
     *   where: {
     *     // ... filter to delete one Schema_migrations
     *   }
     * })
     * 
    **/
    delete<T extends schema_migrationsDeleteArgs>(
      args: SelectSubset<T, schema_migrationsDeleteArgs>
    ): CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>>

    /**
     * Update one Schema_migrations.
     * @param {schema_migrationsUpdateArgs} args - Arguments to update one Schema_migrations.
     * @example
     * // Update one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends schema_migrationsUpdateArgs>(
      args: SelectSubset<T, schema_migrationsUpdateArgs>
    ): CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>>

    /**
     * Delete zero or more Schema_migrations.
     * @param {schema_migrationsDeleteManyArgs} args - Arguments to filter Schema_migrations to delete.
     * @example
     * // Delete a few Schema_migrations
     * const { count } = await prisma.schema_migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends schema_migrationsDeleteManyArgs>(
      args?: SelectSubset<T, schema_migrationsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schema_migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends schema_migrationsUpdateManyArgs>(
      args: SelectSubset<T, schema_migrationsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Schema_migrations.
     * @param {schema_migrationsUpsertArgs} args - Arguments to update or create a Schema_migrations.
     * @example
     * // Update or create a Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.upsert({
     *   create: {
     *     // ... data to create a Schema_migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schema_migrations we want to update
     *   }
     * })
    **/
    upsert<T extends schema_migrationsUpsertArgs>(
      args: SelectSubset<T, schema_migrationsUpsertArgs>
    ): CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>>

    /**
     * Find one Schema_migrations that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {schema_migrationsFindUniqueOrThrowArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends schema_migrationsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, schema_migrationsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>>

    /**
     * Find the first Schema_migrations that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schema_migrationsFindFirstOrThrowArgs} args - Arguments to find a Schema_migrations
     * @example
     * // Get one Schema_migrations
     * const schema_migrations = await prisma.schema_migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends schema_migrationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, schema_migrationsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__schema_migrationsClient<schema_migrations>, Prisma__schema_migrationsClient<schema_migrationsGetPayload<T>>>

    /**
     * Count the number of Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schema_migrationsCountArgs} args - Arguments to filter Schema_migrations to count.
     * @example
     * // Count the number of Schema_migrations
     * const count = await prisma.schema_migrations.count({
     *   where: {
     *     // ... the filter for the Schema_migrations we want to count
     *   }
     * })
    **/
    count<T extends schema_migrationsCountArgs>(
      args?: Subset<T, schema_migrationsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Schema_migrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Schema_migrationsAggregateArgs>(args: Subset<T, Schema_migrationsAggregateArgs>): PrismaPromise<GetSchema_migrationsAggregateType<T>>

    /**
     * Group by Schema_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schema_migrationsGroupByArgs} args - Group by arguments.
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
      T extends Schema_migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Schema_migrationsGroupByArgs['orderBy'] }
        : { orderBy?: Schema_migrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Schema_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchema_migrationsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for schema_migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__schema_migrationsClient<T, Null = never> implements PrismaPromise<T> {
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
   * schema_migrations base type for findUnique actions
   */
  export type schema_migrationsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
    /**
     * Filter, which schema_migrations to fetch.
     * 
    **/
    where: schema_migrationsWhereUniqueInput
  }

  /**
   * schema_migrations: findUnique
   */
  export interface schema_migrationsFindUniqueArgs extends schema_migrationsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * schema_migrations base type for findFirst actions
   */
  export type schema_migrationsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
    /**
     * Filter, which schema_migrations to fetch.
     * 
    **/
    where?: schema_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schema_migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<schema_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schema_migrations.
     * 
    **/
    cursor?: schema_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schema_migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schema_migrations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schema_migrations.
     * 
    **/
    distinct?: Enumerable<Schema_migrationsScalarFieldEnum>
  }

  /**
   * schema_migrations: findFirst
   */
  export interface schema_migrationsFindFirstArgs extends schema_migrationsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * schema_migrations findMany
   */
  export type schema_migrationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
    /**
     * Filter, which schema_migrations to fetch.
     * 
    **/
    where?: schema_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schema_migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<schema_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schema_migrations.
     * 
    **/
    cursor?: schema_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schema_migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schema_migrations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Schema_migrationsScalarFieldEnum>
  }


  /**
   * schema_migrations create
   */
  export type schema_migrationsCreateArgs = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
    /**
     * The data needed to create a schema_migrations.
     * 
    **/
    data: XOR<schema_migrationsCreateInput, schema_migrationsUncheckedCreateInput>
  }


  /**
   * schema_migrations createMany
   */
  export type schema_migrationsCreateManyArgs = {
    /**
     * The data used to create many schema_migrations.
     * 
    **/
    data: Enumerable<schema_migrationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * schema_migrations update
   */
  export type schema_migrationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
    /**
     * The data needed to update a schema_migrations.
     * 
    **/
    data: XOR<schema_migrationsUpdateInput, schema_migrationsUncheckedUpdateInput>
    /**
     * Choose, which schema_migrations to update.
     * 
    **/
    where: schema_migrationsWhereUniqueInput
  }


  /**
   * schema_migrations updateMany
   */
  export type schema_migrationsUpdateManyArgs = {
    /**
     * The data used to update schema_migrations.
     * 
    **/
    data: XOR<schema_migrationsUpdateManyMutationInput, schema_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which schema_migrations to update
     * 
    **/
    where?: schema_migrationsWhereInput
  }


  /**
   * schema_migrations upsert
   */
  export type schema_migrationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
    /**
     * The filter to search for the schema_migrations to update in case it exists.
     * 
    **/
    where: schema_migrationsWhereUniqueInput
    /**
     * In case the schema_migrations found by the `where` argument doesn't exist, create a new schema_migrations with this data.
     * 
    **/
    create: XOR<schema_migrationsCreateInput, schema_migrationsUncheckedCreateInput>
    /**
     * In case the schema_migrations was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<schema_migrationsUpdateInput, schema_migrationsUncheckedUpdateInput>
  }


  /**
   * schema_migrations delete
   */
  export type schema_migrationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
    /**
     * Filter which schema_migrations to delete.
     * 
    **/
    where: schema_migrationsWhereUniqueInput
  }


  /**
   * schema_migrations deleteMany
   */
  export type schema_migrationsDeleteManyArgs = {
    /**
     * Filter which schema_migrations to delete
     * 
    **/
    where?: schema_migrationsWhereInput
  }


  /**
   * schema_migrations: findUniqueOrThrow
   */
  export type schema_migrationsFindUniqueOrThrowArgs = schema_migrationsFindUniqueArgsBase
      

  /**
   * schema_migrations: findFirstOrThrow
   */
  export type schema_migrationsFindFirstOrThrowArgs = schema_migrationsFindFirstArgsBase
      

  /**
   * schema_migrations without action
   */
  export type schema_migrationsArgs = {
    /**
     * Select specific fields to fetch from the schema_migrations
     * 
    **/
    select?: schema_migrationsSelect | null
  }



  /**
   * Model services
   */


  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    service_key: string | null
    source: string | null
    created_at: Date | null
    updated_at: Date | null
    uri: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    service_key: string | null
    source: string | null
    created_at: Date | null
    updated_at: Date | null
    uri: string | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    service_key: number
    source: number
    created_at: number
    updated_at: number
    uri: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    service_key?: true
    source?: true
    created_at?: true
    updated_at?: true
    uri?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    service_key?: true
    source?: true
    created_at?: true
    updated_at?: true
    uri?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    service_key?: true
    source?: true
    created_at?: true
    updated_at?: true
    uri?: true
    _all?: true
  }

  export type ServicesAggregateArgs = {
    /**
     * Filter which services to aggregate.
     * 
    **/
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     * 
    **/
    orderBy?: Enumerable<servicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs = {
    where?: servicesWhereInput
    orderBy?: Enumerable<servicesOrderByWithAggregationInput>
    by: Array<ServicesScalarFieldEnum>
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }


  export type ServicesGroupByOutputType = {
    id: number
    service_key: string
    source: string
    created_at: Date
    updated_at: Date
    uri: string
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type servicesSelect = {
    id?: boolean
    service_key?: boolean
    source?: boolean
    created_at?: boolean
    updated_at?: boolean
    uri?: boolean
  }

  export type servicesGetPayload<
    S extends boolean | null | undefined | servicesArgs,
    U = keyof S
      > = S extends true
        ? services
    : S extends undefined
    ? never
    : S extends servicesArgs | servicesFindManyArgs
    ?'include' extends U
    ? services 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof services ? services[P] : never
  } 
    : services
  : services


  type servicesCountArgs = Merge<
    Omit<servicesFindManyArgs, 'select' | 'include'> & {
      select?: ServicesCountAggregateInputType | true
    }
  >

  export interface servicesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends servicesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, servicesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'services'> extends True ? CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>> : CheckSelect<T, Prisma__servicesClient<services | null, null>, Prisma__servicesClient<servicesGetPayload<T> | null, null>>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends servicesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, servicesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'services'> extends True ? CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>> : CheckSelect<T, Prisma__servicesClient<services | null, null>, Prisma__servicesClient<servicesGetPayload<T> | null, null>>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends servicesFindManyArgs>(
      args?: SelectSubset<T, servicesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<services>>, PrismaPromise<Array<servicesGetPayload<T>>>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
    **/
    create<T extends servicesCreateArgs>(
      args: SelectSubset<T, servicesCreateArgs>
    ): CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>>

    /**
     * Create many Services.
     *     @param {servicesCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const services = await prisma.services.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends servicesCreateManyArgs>(
      args?: SelectSubset<T, servicesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
    **/
    delete<T extends servicesDeleteArgs>(
      args: SelectSubset<T, servicesDeleteArgs>
    ): CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends servicesUpdateArgs>(
      args: SelectSubset<T, servicesUpdateArgs>
    ): CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends servicesDeleteManyArgs>(
      args?: SelectSubset<T, servicesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends servicesUpdateManyArgs>(
      args: SelectSubset<T, servicesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
    **/
    upsert<T extends servicesUpsertArgs>(
      args: SelectSubset<T, servicesUpsertArgs>
    ): CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>>

    /**
     * Find one Services that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, servicesFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>>

    /**
     * Find the first Services that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, servicesFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__servicesClient<services>, Prisma__servicesClient<servicesGetPayload<T>>>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
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
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__servicesClient<T, Null = never> implements PrismaPromise<T> {
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
   * services base type for findUnique actions
   */
  export type servicesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
    /**
     * Filter, which services to fetch.
     * 
    **/
    where: servicesWhereUniqueInput
  }

  /**
   * services: findUnique
   */
  export interface servicesFindUniqueArgs extends servicesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * services base type for findFirst actions
   */
  export type servicesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
    /**
     * Filter, which services to fetch.
     * 
    **/
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     * 
    **/
    orderBy?: Enumerable<servicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     * 
    **/
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     * 
    **/
    distinct?: Enumerable<ServicesScalarFieldEnum>
  }

  /**
   * services: findFirst
   */
  export interface servicesFindFirstArgs extends servicesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * services findMany
   */
  export type servicesFindManyArgs = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
    /**
     * Filter, which services to fetch.
     * 
    **/
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     * 
    **/
    orderBy?: Enumerable<servicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     * 
    **/
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ServicesScalarFieldEnum>
  }


  /**
   * services create
   */
  export type servicesCreateArgs = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
    /**
     * The data needed to create a services.
     * 
    **/
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }


  /**
   * services createMany
   */
  export type servicesCreateManyArgs = {
    /**
     * The data used to create many services.
     * 
    **/
    data: Enumerable<servicesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * services update
   */
  export type servicesUpdateArgs = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
    /**
     * The data needed to update a services.
     * 
    **/
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     * 
    **/
    where: servicesWhereUniqueInput
  }


  /**
   * services updateMany
   */
  export type servicesUpdateManyArgs = {
    /**
     * The data used to update services.
     * 
    **/
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     * 
    **/
    where?: servicesWhereInput
  }


  /**
   * services upsert
   */
  export type servicesUpsertArgs = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
    /**
     * The filter to search for the services to update in case it exists.
     * 
    **/
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     * 
    **/
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }


  /**
   * services delete
   */
  export type servicesDeleteArgs = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
    /**
     * Filter which services to delete.
     * 
    **/
    where: servicesWhereUniqueInput
  }


  /**
   * services deleteMany
   */
  export type servicesDeleteManyArgs = {
    /**
     * Filter which services to delete
     * 
    **/
    where?: servicesWhereInput
  }


  /**
   * services: findUniqueOrThrow
   */
  export type servicesFindUniqueOrThrowArgs = servicesFindUniqueArgsBase
      

  /**
   * services: findFirstOrThrow
   */
  export type servicesFindFirstOrThrowArgs = servicesFindFirstArgsBase
      

  /**
   * services without action
   */
  export type servicesArgs = {
    /**
     * Select specific fields to fetch from the services
     * 
    **/
    select?: servicesSelect | null
  }



  /**
   * Model tasks
   */


  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    external_id: number | null
  }

  export type TasksSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    external_id: number | null
  }

  export type TasksMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    user_id: number | null
    source: string | null
    external_id: number | null
    created_at: Date | null
    updated_at: Date | null
    expected_start_date: Date | null
    expected_end_date: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    user_id: number | null
    source: string | null
    external_id: number | null
    created_at: Date | null
    updated_at: Date | null
    expected_start_date: Date | null
    expected_end_date: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    name: number
    status: number
    user_id: number
    extra: number
    source: number
    external_id: number
    created_at: number
    updated_at: number
    expected_start_date: number
    expected_end_date: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    id?: true
    user_id?: true
    external_id?: true
  }

  export type TasksSumAggregateInputType = {
    id?: true
    user_id?: true
    external_id?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    user_id?: true
    source?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    expected_start_date?: true
    expected_end_date?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    user_id?: true
    source?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    expected_start_date?: true
    expected_end_date?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    user_id?: true
    extra?: true
    source?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    expected_start_date?: true
    expected_end_date?: true
    _all?: true
  }

  export type TasksAggregateArgs = {
    /**
     * Filter which tasks to aggregate.
     * 
    **/
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<tasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type TasksGroupByArgs = {
    where?: tasksWhereInput
    orderBy?: Enumerable<tasksOrderByWithAggregationInput>
    by: Array<TasksScalarFieldEnum>
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }


  export type TasksGroupByOutputType = {
    id: number
    name: string
    status: string
    user_id: number
    extra: JsonValue
    source: string
    external_id: number
    created_at: Date
    updated_at: Date
    expected_start_date: Date
    expected_end_date: Date
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends TasksGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect = {
    id?: boolean
    name?: boolean
    status?: boolean
    user_id?: boolean
    extra?: boolean
    source?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    expected_start_date?: boolean
    expected_end_date?: boolean
    users?: boolean | usersArgs
    orders?: boolean | ordersFindManyArgs
    tasks_lands?: boolean | tasks_landsFindManyArgs
    _count?: boolean | TasksCountOutputTypeArgs
  }

  export type tasksInclude = {
    users?: boolean | usersArgs
    orders?: boolean | ordersFindManyArgs
    tasks_lands?: boolean | tasks_landsFindManyArgs
    _count?: boolean | TasksCountOutputTypeArgs
  }

  export type tasksGetPayload<
    S extends boolean | null | undefined | tasksArgs,
    U = keyof S
      > = S extends true
        ? tasks
    : S extends undefined
    ? never
    : S extends tasksArgs | tasksFindManyArgs
    ?'include' extends U
    ? tasks  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? usersGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'orders' ? Array < ordersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'tasks_lands' ? Array < tasks_landsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? TasksCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? usersGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'orders' ? Array < ordersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'tasks_lands' ? Array < tasks_landsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? TasksCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof tasks ? tasks[P] : never
  } 
    : tasks
  : tasks


  type tasksCountArgs = Merge<
    Omit<tasksFindManyArgs, 'select' | 'include'> & {
      select?: TasksCountAggregateInputType | true
    }
  >

  export interface tasksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tasksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tasksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tasks'> extends True ? CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>> : CheckSelect<T, Prisma__tasksClient<tasks | null, null>, Prisma__tasksClient<tasksGetPayload<T> | null, null>>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tasksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tasksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tasks'> extends True ? CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>> : CheckSelect<T, Prisma__tasksClient<tasks | null, null>, Prisma__tasksClient<tasksGetPayload<T> | null, null>>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tasksFindManyArgs>(
      args?: SelectSubset<T, tasksFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<tasks>>, PrismaPromise<Array<tasksGetPayload<T>>>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
    **/
    create<T extends tasksCreateArgs>(
      args: SelectSubset<T, tasksCreateArgs>
    ): CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>>

    /**
     * Create many Tasks.
     *     @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const tasks = await prisma.tasks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tasksCreateManyArgs>(
      args?: SelectSubset<T, tasksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
    **/
    delete<T extends tasksDeleteArgs>(
      args: SelectSubset<T, tasksDeleteArgs>
    ): CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tasksUpdateArgs>(
      args: SelectSubset<T, tasksUpdateArgs>
    ): CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tasksDeleteManyArgs>(
      args?: SelectSubset<T, tasksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tasksUpdateManyArgs>(
      args: SelectSubset<T, tasksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
    **/
    upsert<T extends tasksUpsertArgs>(
      args: SelectSubset<T, tasksUpsertArgs>
    ): CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>>

    /**
     * Find one Tasks that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tasksFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>>

    /**
     * Find the first Tasks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tasksFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__tasksClient<tasks>, Prisma__tasksClient<tasksGetPayload<T>>>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksGroupByArgs} args - Group by arguments.
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
      T extends TasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksGroupByArgs['orderBy'] }
        : { orderBy?: TasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tasksClient<T, Null = never> implements PrismaPromise<T> {
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

    users<T extends usersArgs = {}>(args?: Subset<T, usersArgs>): CheckSelect<T, Prisma__usersClient<users | Null>, Prisma__usersClient<usersGetPayload<T> | Null>>;

    orders<T extends ordersFindManyArgs = {}>(args?: Subset<T, ordersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<orders>| Null>, PrismaPromise<Array<ordersGetPayload<T>>| Null>>;

    tasks_lands<T extends tasks_landsFindManyArgs = {}>(args?: Subset<T, tasks_landsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<tasks_lands>| Null>, PrismaPromise<Array<tasks_landsGetPayload<T>>| Null>>;

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
   * tasks base type for findUnique actions
   */
  export type tasksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
    /**
     * Filter, which tasks to fetch.
     * 
    **/
    where: tasksWhereUniqueInput
  }

  /**
   * tasks: findUnique
   */
  export interface tasksFindUniqueArgs extends tasksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tasks base type for findFirst actions
   */
  export type tasksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
    /**
     * Filter, which tasks to fetch.
     * 
    **/
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<tasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     * 
    **/
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     * 
    **/
    distinct?: Enumerable<TasksScalarFieldEnum>
  }

  /**
   * tasks: findFirst
   */
  export interface tasksFindFirstArgs extends tasksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
    /**
     * Filter, which tasks to fetch.
     * 
    **/
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<tasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     * 
    **/
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TasksScalarFieldEnum>
  }


  /**
   * tasks create
   */
  export type tasksCreateArgs = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
    /**
     * The data needed to create a tasks.
     * 
    **/
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }


  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs = {
    /**
     * The data used to create many tasks.
     * 
    **/
    data: Enumerable<tasksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tasks update
   */
  export type tasksUpdateArgs = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
    /**
     * The data needed to update a tasks.
     * 
    **/
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     * 
    **/
    where: tasksWhereUniqueInput
  }


  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs = {
    /**
     * The data used to update tasks.
     * 
    **/
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     * 
    **/
    where?: tasksWhereInput
  }


  /**
   * tasks upsert
   */
  export type tasksUpsertArgs = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
    /**
     * The filter to search for the tasks to update in case it exists.
     * 
    **/
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     * 
    **/
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }


  /**
   * tasks delete
   */
  export type tasksDeleteArgs = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
    /**
     * Filter which tasks to delete.
     * 
    **/
    where: tasksWhereUniqueInput
  }


  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs = {
    /**
     * Filter which tasks to delete
     * 
    **/
    where?: tasksWhereInput
  }


  /**
   * tasks: findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs = tasksFindUniqueArgsBase
      

  /**
   * tasks: findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs = tasksFindFirstArgsBase
      

  /**
   * tasks without action
   */
  export type tasksArgs = {
    /**
     * Select specific fields to fetch from the tasks
     * 
    **/
    select?: tasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasksInclude | null
  }



  /**
   * Model tasks_lands
   */


  export type AggregateTasks_lands = {
    _count: Tasks_landsCountAggregateOutputType | null
    _avg: Tasks_landsAvgAggregateOutputType | null
    _sum: Tasks_landsSumAggregateOutputType | null
    _min: Tasks_landsMinAggregateOutputType | null
    _max: Tasks_landsMaxAggregateOutputType | null
  }

  export type Tasks_landsAvgAggregateOutputType = {
    id: number | null
    task_id: number | null
    land_id: number | null
    external_id: number | null
  }

  export type Tasks_landsSumAggregateOutputType = {
    id: number | null
    task_id: number | null
    land_id: number | null
    external_id: number | null
  }

  export type Tasks_landsMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    task_id: number | null
    land_id: number | null
    external_id: number | null
    sync: boolean | null
  }

  export type Tasks_landsMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    task_id: number | null
    land_id: number | null
    external_id: number | null
    sync: boolean | null
  }

  export type Tasks_landsCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    task_id: number
    land_id: number
    external_id: number
    sync: number
    _all: number
  }


  export type Tasks_landsAvgAggregateInputType = {
    id?: true
    task_id?: true
    land_id?: true
    external_id?: true
  }

  export type Tasks_landsSumAggregateInputType = {
    id?: true
    task_id?: true
    land_id?: true
    external_id?: true
  }

  export type Tasks_landsMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    task_id?: true
    land_id?: true
    external_id?: true
    sync?: true
  }

  export type Tasks_landsMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    task_id?: true
    land_id?: true
    external_id?: true
    sync?: true
  }

  export type Tasks_landsCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    task_id?: true
    land_id?: true
    external_id?: true
    sync?: true
    _all?: true
  }

  export type Tasks_landsAggregateArgs = {
    /**
     * Filter which tasks_lands to aggregate.
     * 
    **/
    where?: tasks_landsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks_lands to fetch.
     * 
    **/
    orderBy?: Enumerable<tasks_landsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tasks_landsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks_lands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks_lands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks_lands
    **/
    _count?: true | Tasks_landsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tasks_landsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tasks_landsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tasks_landsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tasks_landsMaxAggregateInputType
  }

  export type GetTasks_landsAggregateType<T extends Tasks_landsAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks_lands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks_lands[P]>
      : GetScalarType<T[P], AggregateTasks_lands[P]>
  }




  export type Tasks_landsGroupByArgs = {
    where?: tasks_landsWhereInput
    orderBy?: Enumerable<tasks_landsOrderByWithAggregationInput>
    by: Array<Tasks_landsScalarFieldEnum>
    having?: tasks_landsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tasks_landsCountAggregateInputType | true
    _avg?: Tasks_landsAvgAggregateInputType
    _sum?: Tasks_landsSumAggregateInputType
    _min?: Tasks_landsMinAggregateInputType
    _max?: Tasks_landsMaxAggregateInputType
  }


  export type Tasks_landsGroupByOutputType = {
    id: number
    created_at: Date
    updated_at: Date
    task_id: number
    land_id: number
    external_id: number
    sync: boolean
    _count: Tasks_landsCountAggregateOutputType | null
    _avg: Tasks_landsAvgAggregateOutputType | null
    _sum: Tasks_landsSumAggregateOutputType | null
    _min: Tasks_landsMinAggregateOutputType | null
    _max: Tasks_landsMaxAggregateOutputType | null
  }

  type GetTasks_landsGroupByPayload<T extends Tasks_landsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Tasks_landsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tasks_landsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tasks_landsGroupByOutputType[P]>
            : GetScalarType<T[P], Tasks_landsGroupByOutputType[P]>
        }
      >
    >


  export type tasks_landsSelect = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    task_id?: boolean
    land_id?: boolean
    external_id?: boolean
    sync?: boolean
    lands?: boolean | landsArgs
    tasks?: boolean | tasksArgs
  }

  export type tasks_landsInclude = {
    lands?: boolean | landsArgs
    tasks?: boolean | tasksArgs
  }

  export type tasks_landsGetPayload<
    S extends boolean | null | undefined | tasks_landsArgs,
    U = keyof S
      > = S extends true
        ? tasks_lands
    : S extends undefined
    ? never
    : S extends tasks_landsArgs | tasks_landsFindManyArgs
    ?'include' extends U
    ? tasks_lands  & {
    [P in TrueKeys<S['include']>]:
        P extends 'lands' ? landsGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'tasks' ? tasksGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'lands' ? landsGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'tasks' ? tasksGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof tasks_lands ? tasks_lands[P] : never
  } 
    : tasks_lands
  : tasks_lands


  type tasks_landsCountArgs = Merge<
    Omit<tasks_landsFindManyArgs, 'select' | 'include'> & {
      select?: Tasks_landsCountAggregateInputType | true
    }
  >

  export interface tasks_landsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Tasks_lands that matches the filter.
     * @param {tasks_landsFindUniqueArgs} args - Arguments to find a Tasks_lands
     * @example
     * // Get one Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tasks_landsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tasks_landsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tasks_lands'> extends True ? CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>> : CheckSelect<T, Prisma__tasks_landsClient<tasks_lands | null, null>, Prisma__tasks_landsClient<tasks_landsGetPayload<T> | null, null>>

    /**
     * Find the first Tasks_lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasks_landsFindFirstArgs} args - Arguments to find a Tasks_lands
     * @example
     * // Get one Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tasks_landsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tasks_landsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tasks_lands'> extends True ? CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>> : CheckSelect<T, Prisma__tasks_landsClient<tasks_lands | null, null>, Prisma__tasks_landsClient<tasks_landsGetPayload<T> | null, null>>

    /**
     * Find zero or more Tasks_lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasks_landsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.findMany()
     * 
     * // Get first 10 Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasks_landsWithIdOnly = await prisma.tasks_lands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tasks_landsFindManyArgs>(
      args?: SelectSubset<T, tasks_landsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<tasks_lands>>, PrismaPromise<Array<tasks_landsGetPayload<T>>>>

    /**
     * Create a Tasks_lands.
     * @param {tasks_landsCreateArgs} args - Arguments to create a Tasks_lands.
     * @example
     * // Create one Tasks_lands
     * const Tasks_lands = await prisma.tasks_lands.create({
     *   data: {
     *     // ... data to create a Tasks_lands
     *   }
     * })
     * 
    **/
    create<T extends tasks_landsCreateArgs>(
      args: SelectSubset<T, tasks_landsCreateArgs>
    ): CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>>

    /**
     * Create many Tasks_lands.
     *     @param {tasks_landsCreateManyArgs} args - Arguments to create many Tasks_lands.
     *     @example
     *     // Create many Tasks_lands
     *     const tasks_lands = await prisma.tasks_lands.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tasks_landsCreateManyArgs>(
      args?: SelectSubset<T, tasks_landsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tasks_lands.
     * @param {tasks_landsDeleteArgs} args - Arguments to delete one Tasks_lands.
     * @example
     * // Delete one Tasks_lands
     * const Tasks_lands = await prisma.tasks_lands.delete({
     *   where: {
     *     // ... filter to delete one Tasks_lands
     *   }
     * })
     * 
    **/
    delete<T extends tasks_landsDeleteArgs>(
      args: SelectSubset<T, tasks_landsDeleteArgs>
    ): CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>>

    /**
     * Update one Tasks_lands.
     * @param {tasks_landsUpdateArgs} args - Arguments to update one Tasks_lands.
     * @example
     * // Update one Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tasks_landsUpdateArgs>(
      args: SelectSubset<T, tasks_landsUpdateArgs>
    ): CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>>

    /**
     * Delete zero or more Tasks_lands.
     * @param {tasks_landsDeleteManyArgs} args - Arguments to filter Tasks_lands to delete.
     * @example
     * // Delete a few Tasks_lands
     * const { count } = await prisma.tasks_lands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tasks_landsDeleteManyArgs>(
      args?: SelectSubset<T, tasks_landsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks_lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasks_landsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tasks_landsUpdateManyArgs>(
      args: SelectSubset<T, tasks_landsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks_lands.
     * @param {tasks_landsUpsertArgs} args - Arguments to update or create a Tasks_lands.
     * @example
     * // Update or create a Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.upsert({
     *   create: {
     *     // ... data to create a Tasks_lands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks_lands we want to update
     *   }
     * })
    **/
    upsert<T extends tasks_landsUpsertArgs>(
      args: SelectSubset<T, tasks_landsUpsertArgs>
    ): CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>>

    /**
     * Find one Tasks_lands that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {tasks_landsFindUniqueOrThrowArgs} args - Arguments to find a Tasks_lands
     * @example
     * // Get one Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tasks_landsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tasks_landsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>>

    /**
     * Find the first Tasks_lands that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasks_landsFindFirstOrThrowArgs} args - Arguments to find a Tasks_lands
     * @example
     * // Get one Tasks_lands
     * const tasks_lands = await prisma.tasks_lands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tasks_landsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tasks_landsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__tasks_landsClient<tasks_lands>, Prisma__tasks_landsClient<tasks_landsGetPayload<T>>>

    /**
     * Count the number of Tasks_lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasks_landsCountArgs} args - Arguments to filter Tasks_lands to count.
     * @example
     * // Count the number of Tasks_lands
     * const count = await prisma.tasks_lands.count({
     *   where: {
     *     // ... the filter for the Tasks_lands we want to count
     *   }
     * })
    **/
    count<T extends tasks_landsCountArgs>(
      args?: Subset<T, tasks_landsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tasks_landsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks_lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tasks_landsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tasks_landsAggregateArgs>(args: Subset<T, Tasks_landsAggregateArgs>): PrismaPromise<GetTasks_landsAggregateType<T>>

    /**
     * Group by Tasks_lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tasks_landsGroupByArgs} args - Group by arguments.
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
      T extends Tasks_landsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tasks_landsGroupByArgs['orderBy'] }
        : { orderBy?: Tasks_landsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tasks_landsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasks_landsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks_lands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tasks_landsClient<T, Null = never> implements PrismaPromise<T> {
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

    lands<T extends landsArgs = {}>(args?: Subset<T, landsArgs>): CheckSelect<T, Prisma__landsClient<lands | Null>, Prisma__landsClient<landsGetPayload<T> | Null>>;

    tasks<T extends tasksArgs = {}>(args?: Subset<T, tasksArgs>): CheckSelect<T, Prisma__tasksClient<tasks | Null>, Prisma__tasksClient<tasksGetPayload<T> | Null>>;

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
   * tasks_lands base type for findUnique actions
   */
  export type tasks_landsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
    /**
     * Filter, which tasks_lands to fetch.
     * 
    **/
    where: tasks_landsWhereUniqueInput
  }

  /**
   * tasks_lands: findUnique
   */
  export interface tasks_landsFindUniqueArgs extends tasks_landsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tasks_lands base type for findFirst actions
   */
  export type tasks_landsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
    /**
     * Filter, which tasks_lands to fetch.
     * 
    **/
    where?: tasks_landsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks_lands to fetch.
     * 
    **/
    orderBy?: Enumerable<tasks_landsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks_lands.
     * 
    **/
    cursor?: tasks_landsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks_lands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks_lands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks_lands.
     * 
    **/
    distinct?: Enumerable<Tasks_landsScalarFieldEnum>
  }

  /**
   * tasks_lands: findFirst
   */
  export interface tasks_landsFindFirstArgs extends tasks_landsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tasks_lands findMany
   */
  export type tasks_landsFindManyArgs = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
    /**
     * Filter, which tasks_lands to fetch.
     * 
    **/
    where?: tasks_landsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks_lands to fetch.
     * 
    **/
    orderBy?: Enumerable<tasks_landsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks_lands.
     * 
    **/
    cursor?: tasks_landsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks_lands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks_lands.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Tasks_landsScalarFieldEnum>
  }


  /**
   * tasks_lands create
   */
  export type tasks_landsCreateArgs = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
    /**
     * The data needed to create a tasks_lands.
     * 
    **/
    data: XOR<tasks_landsCreateInput, tasks_landsUncheckedCreateInput>
  }


  /**
   * tasks_lands createMany
   */
  export type tasks_landsCreateManyArgs = {
    /**
     * The data used to create many tasks_lands.
     * 
    **/
    data: Enumerable<tasks_landsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tasks_lands update
   */
  export type tasks_landsUpdateArgs = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
    /**
     * The data needed to update a tasks_lands.
     * 
    **/
    data: XOR<tasks_landsUpdateInput, tasks_landsUncheckedUpdateInput>
    /**
     * Choose, which tasks_lands to update.
     * 
    **/
    where: tasks_landsWhereUniqueInput
  }


  /**
   * tasks_lands updateMany
   */
  export type tasks_landsUpdateManyArgs = {
    /**
     * The data used to update tasks_lands.
     * 
    **/
    data: XOR<tasks_landsUpdateManyMutationInput, tasks_landsUncheckedUpdateManyInput>
    /**
     * Filter which tasks_lands to update
     * 
    **/
    where?: tasks_landsWhereInput
  }


  /**
   * tasks_lands upsert
   */
  export type tasks_landsUpsertArgs = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
    /**
     * The filter to search for the tasks_lands to update in case it exists.
     * 
    **/
    where: tasks_landsWhereUniqueInput
    /**
     * In case the tasks_lands found by the `where` argument doesn't exist, create a new tasks_lands with this data.
     * 
    **/
    create: XOR<tasks_landsCreateInput, tasks_landsUncheckedCreateInput>
    /**
     * In case the tasks_lands was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tasks_landsUpdateInput, tasks_landsUncheckedUpdateInput>
  }


  /**
   * tasks_lands delete
   */
  export type tasks_landsDeleteArgs = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
    /**
     * Filter which tasks_lands to delete.
     * 
    **/
    where: tasks_landsWhereUniqueInput
  }


  /**
   * tasks_lands deleteMany
   */
  export type tasks_landsDeleteManyArgs = {
    /**
     * Filter which tasks_lands to delete
     * 
    **/
    where?: tasks_landsWhereInput
  }


  /**
   * tasks_lands: findUniqueOrThrow
   */
  export type tasks_landsFindUniqueOrThrowArgs = tasks_landsFindUniqueArgsBase
      

  /**
   * tasks_lands: findFirstOrThrow
   */
  export type tasks_landsFindFirstOrThrowArgs = tasks_landsFindFirstArgsBase
      

  /**
   * tasks_lands without action
   */
  export type tasks_landsArgs = {
    /**
     * Select specific fields to fetch from the tasks_lands
     * 
    **/
    select?: tasks_landsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tasks_landsInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    phone: string | null
    hashed_password: string | null
    access_token: string | null
    verify: string | null
    source: string | null
    external_id: string | null
    created_at: Date | null
    updated_at: Date | null
    name: string | null
    is_verified: boolean | null
    default_card_id: string | null
    is_active: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    phone: string | null
    hashed_password: string | null
    access_token: string | null
    verify: string | null
    source: string | null
    external_id: string | null
    created_at: Date | null
    updated_at: Date | null
    name: string | null
    is_verified: boolean | null
    default_card_id: string | null
    is_active: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    phone: number
    hashed_password: number
    access_token: number
    verify: number
    source: number
    external_id: number
    created_at: number
    updated_at: number
    name: number
    is_verified: number
    default_card_id: number
    is_active: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    phone?: true
    hashed_password?: true
    access_token?: true
    verify?: true
    source?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    name?: true
    is_verified?: true
    default_card_id?: true
    is_active?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    phone?: true
    hashed_password?: true
    access_token?: true
    verify?: true
    source?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    name?: true
    is_verified?: true
    default_card_id?: true
    is_active?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    phone?: true
    hashed_password?: true
    access_token?: true
    verify?: true
    source?: true
    external_id?: true
    created_at?: true
    updated_at?: true
    name?: true
    is_verified?: true
    default_card_id?: true
    is_active?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify: string
    source: string
    external_id: string
    created_at: Date
    updated_at: Date
    name: string
    is_verified: boolean
    default_card_id: string
    is_active: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    username?: boolean
    phone?: boolean
    hashed_password?: boolean
    access_token?: boolean
    verify?: boolean
    source?: boolean
    external_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    name?: boolean
    is_verified?: boolean
    default_card_id?: boolean
    is_active?: boolean
    lands?: boolean | landsFindManyArgs
    orders?: boolean | ordersFindManyArgs
    tasks?: boolean | tasksFindManyArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type usersInclude = {
    lands?: boolean | landsFindManyArgs
    orders?: boolean | ordersFindManyArgs
    tasks?: boolean | tasksFindManyArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users  & {
    [P in TrueKeys<S['include']>]:
        P extends 'lands' ? Array < landsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'orders' ? Array < ordersGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'tasks' ? Array < tasksGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'lands' ? Array < landsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'orders' ? Array < ordersGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'tasks' ? Array < tasksGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof users ? users[P] : never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null, null>, Prisma__usersClient<usersGetPayload<T> | null, null>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null, null>, Prisma__usersClient<usersGetPayload<T> | null, null>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Find one Users that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements PrismaPromise<T> {
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

    lands<T extends landsFindManyArgs = {}>(args?: Subset<T, landsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<lands>| Null>, PrismaPromise<Array<landsGetPayload<T>>| Null>>;

    orders<T extends ordersFindManyArgs = {}>(args?: Subset<T, ordersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<orders>| Null>, PrismaPromise<Array<ordersGetPayload<T>>| Null>>;

    tasks<T extends tasksFindManyArgs = {}>(args?: Subset<T, tasksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<tasks>| Null>, PrismaPromise<Array<tasksGetPayload<T>>| Null>>;

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
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }

  /**
   * users: findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users: findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users: findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = usersFindUniqueArgsBase
      

  /**
   * users: findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = usersFindFirstArgsBase
      

  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const LandsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    type: 'type',
    village_name: 'village_name',
    status: 'status',
    geometry: 'geometry',
    x: 'x',
    y: 'y',
    area: 'area',
    extra: 'extra',
    user_id: 'user_id',
    address: 'address'
  };

  export type LandsScalarFieldEnum = (typeof LandsScalarFieldEnum)[keyof typeof LandsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    external_uid: 'external_uid',
    customer_uid: 'customer_uid',
    merchant_uid: 'merchant_uid',
    req_amount: 'req_amount',
    paid_amount: 'paid_amount',
    source: 'source',
    status: 'status',
    extra: 'extra',
    user_id: 'user_id',
    task_id: 'task_id',
    issued_at: 'issued_at',
    expired_at: 'expired_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    cancel_amount: 'cancel_amount'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const Schema_migrationsScalarFieldEnum: {
    version: 'version',
    dirty: 'dirty'
  };

  export type Schema_migrationsScalarFieldEnum = (typeof Schema_migrationsScalarFieldEnum)[keyof typeof Schema_migrationsScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    service_key: 'service_key',
    source: 'source',
    created_at: 'created_at',
    updated_at: 'updated_at',
    uri: 'uri'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TasksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    user_id: 'user_id',
    extra: 'extra',
    source: 'source',
    external_id: 'external_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    expected_start_date: 'expected_start_date',
    expected_end_date: 'expected_end_date'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const Tasks_landsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    task_id: 'task_id',
    land_id: 'land_id',
    external_id: 'external_id',
    sync: 'sync'
  };

  export type Tasks_landsScalarFieldEnum = (typeof Tasks_landsScalarFieldEnum)[keyof typeof Tasks_landsScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    phone: 'phone',
    hashed_password: 'hashed_password',
    access_token: 'access_token',
    verify: 'verify',
    source: 'source',
    external_id: 'external_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    name: 'name',
    is_verified: 'is_verified',
    default_card_id: 'default_card_id',
    is_active: 'is_active'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type landsWhereInput = {
    AND?: Enumerable<landsWhereInput>
    OR?: Enumerable<landsWhereInput>
    NOT?: Enumerable<landsWhereInput>
    id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    type?: StringFilter | string
    village_name?: StringFilter | string
    status?: StringFilter | string
    geometry?: JsonFilter
    x?: StringFilter | string
    y?: StringFilter | string
    area?: DecimalFilter | Decimal | DecimalJsLike | number | string
    extra?: JsonFilter
    user_id?: IntFilter | number
    address?: StringFilter | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
    tasks_lands?: Tasks_landsListRelationFilter
  }

  export type landsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type?: SortOrder
    village_name?: SortOrder
    status?: SortOrder
    geometry?: SortOrder
    x?: SortOrder
    y?: SortOrder
    area?: SortOrder
    extra?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    users?: usersOrderByWithRelationInput
    tasks_lands?: tasks_landsOrderByRelationAggregateInput
  }

  export type landsWhereUniqueInput = {
    id?: number
    user_id_x_y?: landsUser_idXYCompoundUniqueInput
  }

  export type landsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type?: SortOrder
    village_name?: SortOrder
    status?: SortOrder
    geometry?: SortOrder
    x?: SortOrder
    y?: SortOrder
    area?: SortOrder
    extra?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
    _count?: landsCountOrderByAggregateInput
    _avg?: landsAvgOrderByAggregateInput
    _max?: landsMaxOrderByAggregateInput
    _min?: landsMinOrderByAggregateInput
    _sum?: landsSumOrderByAggregateInput
  }

  export type landsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<landsScalarWhereWithAggregatesInput>
    OR?: Enumerable<landsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<landsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    type?: StringWithAggregatesFilter | string
    village_name?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    geometry?: JsonWithAggregatesFilter
    x?: StringWithAggregatesFilter | string
    y?: StringWithAggregatesFilter | string
    area?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    extra?: JsonWithAggregatesFilter
    user_id?: IntWithAggregatesFilter | number
    address?: StringWithAggregatesFilter | string
  }

  export type ordersWhereInput = {
    AND?: Enumerable<ordersWhereInput>
    OR?: Enumerable<ordersWhereInput>
    NOT?: Enumerable<ordersWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    external_uid?: StringFilter | string
    customer_uid?: StringFilter | string
    merchant_uid?: StringFilter | string
    req_amount?: IntFilter | number
    paid_amount?: IntFilter | number
    source?: StringFilter | string
    status?: StringFilter | string
    extra?: JsonFilter
    user_id?: IntFilter | number
    task_id?: IntFilter | number
    issued_at?: DateTimeNullableFilter | Date | string | null
    expired_at?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    cancel_amount?: IntFilter | number
    tasks?: XOR<TasksRelationFilter, tasksWhereInput>
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    external_uid?: SortOrder
    customer_uid?: SortOrder
    merchant_uid?: SortOrder
    req_amount?: SortOrder
    paid_amount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    extra?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    issued_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cancel_amount?: SortOrder
    tasks?: tasksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = {
    id?: number
  }

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    external_uid?: SortOrder
    customer_uid?: SortOrder
    merchant_uid?: SortOrder
    req_amount?: SortOrder
    paid_amount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    extra?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    issued_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cancel_amount?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ordersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ordersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ordersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    external_uid?: StringWithAggregatesFilter | string
    customer_uid?: StringWithAggregatesFilter | string
    merchant_uid?: StringWithAggregatesFilter | string
    req_amount?: IntWithAggregatesFilter | number
    paid_amount?: IntWithAggregatesFilter | number
    source?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    extra?: JsonWithAggregatesFilter
    user_id?: IntWithAggregatesFilter | number
    task_id?: IntWithAggregatesFilter | number
    issued_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    expired_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    cancel_amount?: IntWithAggregatesFilter | number
  }

  export type schema_migrationsWhereInput = {
    AND?: Enumerable<schema_migrationsWhereInput>
    OR?: Enumerable<schema_migrationsWhereInput>
    NOT?: Enumerable<schema_migrationsWhereInput>
    version?: BigIntFilter | bigint | number
    dirty?: BoolFilter | boolean
  }

  export type schema_migrationsOrderByWithRelationInput = {
    version?: SortOrder
    dirty?: SortOrder
  }

  export type schema_migrationsWhereUniqueInput = {
    version?: bigint | number
  }

  export type schema_migrationsOrderByWithAggregationInput = {
    version?: SortOrder
    dirty?: SortOrder
    _count?: schema_migrationsCountOrderByAggregateInput
    _avg?: schema_migrationsAvgOrderByAggregateInput
    _max?: schema_migrationsMaxOrderByAggregateInput
    _min?: schema_migrationsMinOrderByAggregateInput
    _sum?: schema_migrationsSumOrderByAggregateInput
  }

  export type schema_migrationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<schema_migrationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<schema_migrationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<schema_migrationsScalarWhereWithAggregatesInput>
    version?: BigIntWithAggregatesFilter | bigint | number
    dirty?: BoolWithAggregatesFilter | boolean
  }

  export type servicesWhereInput = {
    AND?: Enumerable<servicesWhereInput>
    OR?: Enumerable<servicesWhereInput>
    NOT?: Enumerable<servicesWhereInput>
    id?: IntFilter | number
    service_key?: StringFilter | string
    source?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    uri?: StringFilter | string
  }

  export type servicesOrderByWithRelationInput = {
    id?: SortOrder
    service_key?: SortOrder
    source?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
  }

  export type servicesWhereUniqueInput = {
    id?: number
    service_key?: string
  }

  export type servicesOrderByWithAggregationInput = {
    id?: SortOrder
    service_key?: SortOrder
    source?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export type servicesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<servicesScalarWhereWithAggregatesInput>
    OR?: Enumerable<servicesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<servicesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    service_key?: StringWithAggregatesFilter | string
    source?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    uri?: StringWithAggregatesFilter | string
  }

  export type tasksWhereInput = {
    AND?: Enumerable<tasksWhereInput>
    OR?: Enumerable<tasksWhereInput>
    NOT?: Enumerable<tasksWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    status?: StringFilter | string
    user_id?: IntFilter | number
    extra?: JsonFilter
    source?: StringFilter | string
    external_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    expected_start_date?: DateTimeFilter | Date | string
    expected_end_date?: DateTimeFilter | Date | string
    users?: XOR<UsersRelationFilter, usersWhereInput>
    orders?: OrdersListRelationFilter
    tasks_lands?: Tasks_landsListRelationFilter
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    extra?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expected_start_date?: SortOrder
    expected_end_date?: SortOrder
    users?: usersOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
    tasks_lands?: tasks_landsOrderByRelationAggregateInput
  }

  export type tasksWhereUniqueInput = {
    id?: number
  }

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    extra?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expected_start_date?: SortOrder
    expected_end_date?: SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tasksScalarWhereWithAggregatesInput>
    OR?: Enumerable<tasksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tasksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    user_id?: IntWithAggregatesFilter | number
    extra?: JsonWithAggregatesFilter
    source?: StringWithAggregatesFilter | string
    external_id?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    expected_start_date?: DateTimeWithAggregatesFilter | Date | string
    expected_end_date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type tasks_landsWhereInput = {
    AND?: Enumerable<tasks_landsWhereInput>
    OR?: Enumerable<tasks_landsWhereInput>
    NOT?: Enumerable<tasks_landsWhereInput>
    id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    task_id?: IntFilter | number
    land_id?: IntFilter | number
    external_id?: IntFilter | number
    sync?: BoolFilter | boolean
    lands?: XOR<LandsRelationFilter, landsWhereInput>
    tasks?: XOR<TasksRelationFilter, tasksWhereInput>
  }

  export type tasks_landsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_id?: SortOrder
    land_id?: SortOrder
    external_id?: SortOrder
    sync?: SortOrder
    lands?: landsOrderByWithRelationInput
    tasks?: tasksOrderByWithRelationInput
  }

  export type tasks_landsWhereUniqueInput = {
    id?: number
    task_id_land_id?: tasks_landsTask_idLand_idCompoundUniqueInput
  }

  export type tasks_landsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_id?: SortOrder
    land_id?: SortOrder
    external_id?: SortOrder
    sync?: SortOrder
    _count?: tasks_landsCountOrderByAggregateInput
    _avg?: tasks_landsAvgOrderByAggregateInput
    _max?: tasks_landsMaxOrderByAggregateInput
    _min?: tasks_landsMinOrderByAggregateInput
    _sum?: tasks_landsSumOrderByAggregateInput
  }

  export type tasks_landsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tasks_landsScalarWhereWithAggregatesInput>
    OR?: Enumerable<tasks_landsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tasks_landsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    task_id?: IntWithAggregatesFilter | number
    land_id?: IntWithAggregatesFilter | number
    external_id?: IntWithAggregatesFilter | number
    sync?: BoolWithAggregatesFilter | boolean
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    phone?: StringFilter | string
    hashed_password?: StringFilter | string
    access_token?: StringFilter | string
    verify?: StringFilter | string
    source?: StringFilter | string
    external_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    name?: StringFilter | string
    is_verified?: BoolFilter | boolean
    default_card_id?: StringFilter | string
    is_active?: BoolFilter | boolean
    lands?: LandsListRelationFilter
    orders?: OrdersListRelationFilter
    tasks?: TasksListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashed_password?: SortOrder
    access_token?: SortOrder
    verify?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    is_verified?: SortOrder
    default_card_id?: SortOrder
    is_active?: SortOrder
    lands?: landsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = {
    id?: number
    access_token?: string
    username_external_id?: usersUsernameExternal_idCompoundUniqueInput
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashed_password?: SortOrder
    access_token?: SortOrder
    verify?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    is_verified?: SortOrder
    default_card_id?: SortOrder
    is_active?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    hashed_password?: StringWithAggregatesFilter | string
    access_token?: StringWithAggregatesFilter | string
    verify?: StringWithAggregatesFilter | string
    source?: StringWithAggregatesFilter | string
    external_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    is_verified?: BoolWithAggregatesFilter | boolean
    default_card_id?: StringWithAggregatesFilter | string
    is_active?: BoolWithAggregatesFilter | boolean
  }

  export type landsCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    address?: string
    users: usersCreateNestedOneWithoutLandsInput
    tasks_lands?: tasks_landsCreateNestedManyWithoutLandsInput
  }

  export type landsUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    user_id: number
    address?: string
    tasks_lands?: tasks_landsUncheckedCreateNestedManyWithoutLandsInput
  }

  export type landsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    address?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutLandsNestedInput
    tasks_lands?: tasks_landsUpdateManyWithoutLandsNestedInput
  }

  export type landsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    tasks_lands?: tasks_landsUncheckedUpdateManyWithoutLandsNestedInput
  }

  export type landsCreateManyInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    user_id: number
    address?: string
  }

  export type landsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    address?: StringFieldUpdateOperationsInput | string
  }

  export type landsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ordersCreateInput = {
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
    tasks: tasksCreateNestedOneWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    user_id: number
    task_id: number
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
  }

  export type ordersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
    tasks?: tasksUpdateOneRequiredWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
  }

  export type ordersCreateManyInput = {
    id?: number
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    user_id: number
    task_id: number
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
  }

  export type ordersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
  }

  export type schema_migrationsCreateInput = {
    version: bigint | number
    dirty: boolean
  }

  export type schema_migrationsUncheckedCreateInput = {
    version: bigint | number
    dirty: boolean
  }

  export type schema_migrationsUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    dirty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type schema_migrationsUncheckedUpdateInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    dirty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type schema_migrationsCreateManyInput = {
    version: bigint | number
    dirty: boolean
  }

  export type schema_migrationsUpdateManyMutationInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    dirty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type schema_migrationsUncheckedUpdateManyInput = {
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    dirty?: BoolFieldUpdateOperationsInput | boolean
  }

  export type servicesCreateInput = {
    service_key: string
    source: string
    created_at?: Date | string
    updated_at?: Date | string
    uri?: string
  }

  export type servicesUncheckedCreateInput = {
    id?: number
    service_key: string
    source: string
    created_at?: Date | string
    updated_at?: Date | string
    uri?: string
  }

  export type servicesUpdateInput = {
    service_key?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_key?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type servicesCreateManyInput = {
    id?: number
    service_key: string
    source: string
    created_at?: Date | string
    updated_at?: Date | string
    uri?: string
  }

  export type servicesUpdateManyMutationInput = {
    service_key?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_key?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type tasksCreateInput = {
    name?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    users: usersCreateNestedOneWithoutTasksInput
    orders?: ordersCreateNestedManyWithoutTasksInput
    tasks_lands?: tasks_landsCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    id?: number
    name?: string
    status?: string
    user_id: number
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutTasksInput
    tasks_lands?: tasks_landsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    orders?: ordersUpdateManyWithoutTasksNestedInput
    tasks_lands?: tasks_landsUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutTasksNestedInput
    tasks_lands?: tasks_landsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksCreateManyInput = {
    id?: number
    name?: string
    status?: string
    user_id: number
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
  }

  export type tasksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasks_landsCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    external_id?: number
    sync?: boolean
    lands: landsCreateNestedOneWithoutTasks_landsInput
    tasks: tasksCreateNestedOneWithoutTasks_landsInput
  }

  export type tasks_landsUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    task_id: number
    land_id: number
    external_id?: number
    sync?: boolean
  }

  export type tasks_landsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUpdateOneRequiredWithoutTasks_landsNestedInput
    tasks?: tasksUpdateOneRequiredWithoutTasks_landsNestedInput
  }

  export type tasks_landsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_id?: IntFieldUpdateOperationsInput | number
    land_id?: IntFieldUpdateOperationsInput | number
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tasks_landsCreateManyInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    task_id: number
    land_id: number
    external_id?: number
    sync?: boolean
  }

  export type tasks_landsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tasks_landsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_id?: IntFieldUpdateOperationsInput | number
    land_id?: IntFieldUpdateOperationsInput | number
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersCreateInput = {
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    lands?: landsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    lands?: landsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
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

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
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
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Tasks_landsListRelationFilter = {
    every?: tasks_landsWhereInput
    some?: tasks_landsWhereInput
    none?: tasks_landsWhereInput
  }

  export type tasks_landsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type landsUser_idXYCompoundUniqueInput = {
    user_id: number
    x: string
    y: string
  }

  export type landsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type?: SortOrder
    village_name?: SortOrder
    status?: SortOrder
    geometry?: SortOrder
    x?: SortOrder
    y?: SortOrder
    area?: SortOrder
    extra?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type landsAvgOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    user_id?: SortOrder
  }

  export type landsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type?: SortOrder
    village_name?: SortOrder
    status?: SortOrder
    x?: SortOrder
    y?: SortOrder
    area?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type landsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type?: SortOrder
    village_name?: SortOrder
    status?: SortOrder
    x?: SortOrder
    y?: SortOrder
    area?: SortOrder
    user_id?: SortOrder
    address?: SortOrder
  }

  export type landsSumOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    user_id?: SortOrder
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

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
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
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type TasksRelationFilter = {
    is?: tasksWhereInput
    isNot?: tasksWhereInput
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    external_uid?: SortOrder
    customer_uid?: SortOrder
    merchant_uid?: SortOrder
    req_amount?: SortOrder
    paid_amount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    extra?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    issued_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cancel_amount?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    req_amount?: SortOrder
    paid_amount?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    cancel_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    external_uid?: SortOrder
    customer_uid?: SortOrder
    merchant_uid?: SortOrder
    req_amount?: SortOrder
    paid_amount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    issued_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cancel_amount?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    external_uid?: SortOrder
    customer_uid?: SortOrder
    merchant_uid?: SortOrder
    req_amount?: SortOrder
    paid_amount?: SortOrder
    source?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    issued_at?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cancel_amount?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    req_amount?: SortOrder
    paid_amount?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    cancel_amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type schema_migrationsCountOrderByAggregateInput = {
    version?: SortOrder
    dirty?: SortOrder
  }

  export type schema_migrationsAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type schema_migrationsMaxOrderByAggregateInput = {
    version?: SortOrder
    dirty?: SortOrder
  }

  export type schema_migrationsMinOrderByAggregateInput = {
    version?: SortOrder
    dirty?: SortOrder
  }

  export type schema_migrationsSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type servicesCountOrderByAggregateInput = {
    id?: SortOrder
    service_key?: SortOrder
    source?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
  }

  export type servicesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    service_key?: SortOrder
    source?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
  }

  export type servicesMinOrderByAggregateInput = {
    id?: SortOrder
    service_key?: SortOrder
    source?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
  }

  export type servicesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    extra?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expected_start_date?: SortOrder
    expected_end_date?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    external_id?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expected_start_date?: SortOrder
    expected_end_date?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expected_start_date?: SortOrder
    expected_end_date?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    external_id?: SortOrder
  }

  export type LandsRelationFilter = {
    is?: landsWhereInput
    isNot?: landsWhereInput
  }

  export type tasks_landsTask_idLand_idCompoundUniqueInput = {
    task_id: number
    land_id: number
  }

  export type tasks_landsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_id?: SortOrder
    land_id?: SortOrder
    external_id?: SortOrder
    sync?: SortOrder
  }

  export type tasks_landsAvgOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    land_id?: SortOrder
    external_id?: SortOrder
  }

  export type tasks_landsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_id?: SortOrder
    land_id?: SortOrder
    external_id?: SortOrder
    sync?: SortOrder
  }

  export type tasks_landsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    task_id?: SortOrder
    land_id?: SortOrder
    external_id?: SortOrder
    sync?: SortOrder
  }

  export type tasks_landsSumOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    land_id?: SortOrder
    external_id?: SortOrder
  }

  export type LandsListRelationFilter = {
    every?: landsWhereInput
    some?: landsWhereInput
    none?: landsWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type landsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersUsernameExternal_idCompoundUniqueInput = {
    username: string
    external_id: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashed_password?: SortOrder
    access_token?: SortOrder
    verify?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    is_verified?: SortOrder
    default_card_id?: SortOrder
    is_active?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashed_password?: SortOrder
    access_token?: SortOrder
    verify?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    is_verified?: SortOrder
    default_card_id?: SortOrder
    is_active?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    hashed_password?: SortOrder
    access_token?: SortOrder
    verify?: SortOrder
    source?: SortOrder
    external_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    name?: SortOrder
    is_verified?: SortOrder
    default_card_id?: SortOrder
    is_active?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutLandsInput = {
    create?: XOR<usersCreateWithoutLandsInput, usersUncheckedCreateWithoutLandsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLandsInput
    connect?: usersWhereUniqueInput
  }

  export type tasks_landsCreateNestedManyWithoutLandsInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutLandsInput>, Enumerable<tasks_landsUncheckedCreateWithoutLandsInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutLandsInput>
    createMany?: tasks_landsCreateManyLandsInputEnvelope
    connect?: Enumerable<tasks_landsWhereUniqueInput>
  }

  export type tasks_landsUncheckedCreateNestedManyWithoutLandsInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutLandsInput>, Enumerable<tasks_landsUncheckedCreateWithoutLandsInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutLandsInput>
    createMany?: tasks_landsCreateManyLandsInputEnvelope
    connect?: Enumerable<tasks_landsWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutLandsNestedInput = {
    create?: XOR<usersCreateWithoutLandsInput, usersUncheckedCreateWithoutLandsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLandsInput
    upsert?: usersUpsertWithoutLandsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutLandsInput, usersUncheckedUpdateWithoutLandsInput>
  }

  export type tasks_landsUpdateManyWithoutLandsNestedInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutLandsInput>, Enumerable<tasks_landsUncheckedCreateWithoutLandsInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutLandsInput>
    upsert?: Enumerable<tasks_landsUpsertWithWhereUniqueWithoutLandsInput>
    createMany?: tasks_landsCreateManyLandsInputEnvelope
    set?: Enumerable<tasks_landsWhereUniqueInput>
    disconnect?: Enumerable<tasks_landsWhereUniqueInput>
    delete?: Enumerable<tasks_landsWhereUniqueInput>
    connect?: Enumerable<tasks_landsWhereUniqueInput>
    update?: Enumerable<tasks_landsUpdateWithWhereUniqueWithoutLandsInput>
    updateMany?: Enumerable<tasks_landsUpdateManyWithWhereWithoutLandsInput>
    deleteMany?: Enumerable<tasks_landsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tasks_landsUncheckedUpdateManyWithoutLandsNestedInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutLandsInput>, Enumerable<tasks_landsUncheckedCreateWithoutLandsInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutLandsInput>
    upsert?: Enumerable<tasks_landsUpsertWithWhereUniqueWithoutLandsInput>
    createMany?: tasks_landsCreateManyLandsInputEnvelope
    set?: Enumerable<tasks_landsWhereUniqueInput>
    disconnect?: Enumerable<tasks_landsWhereUniqueInput>
    delete?: Enumerable<tasks_landsWhereUniqueInput>
    connect?: Enumerable<tasks_landsWhereUniqueInput>
    update?: Enumerable<tasks_landsUpdateWithWhereUniqueWithoutLandsInput>
    updateMany?: Enumerable<tasks_landsUpdateManyWithWhereWithoutLandsInput>
    deleteMany?: Enumerable<tasks_landsScalarWhereInput>
  }

  export type tasksCreateNestedOneWithoutOrdersInput = {
    create?: XOR<tasksCreateWithoutOrdersInput, tasksUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tasksCreateOrConnectWithoutOrdersInput
    connect?: tasksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type tasksUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<tasksCreateWithoutOrdersInput, tasksUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tasksCreateOrConnectWithoutOrdersInput
    upsert?: tasksUpsertWithoutOrdersInput
    connect?: tasksWhereUniqueInput
    update?: XOR<tasksUpdateWithoutOrdersInput, tasksUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersCreateNestedOneWithoutTasksInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    connect?: usersWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutTasksInput = {
    create?: XOR<Enumerable<ordersCreateWithoutTasksInput>, Enumerable<ordersUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutTasksInput>
    createMany?: ordersCreateManyTasksInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type tasks_landsCreateNestedManyWithoutTasksInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutTasksInput>, Enumerable<tasks_landsUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutTasksInput>
    createMany?: tasks_landsCreateManyTasksInputEnvelope
    connect?: Enumerable<tasks_landsWhereUniqueInput>
  }

  export type ordersUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<Enumerable<ordersCreateWithoutTasksInput>, Enumerable<ordersUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutTasksInput>
    createMany?: ordersCreateManyTasksInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type tasks_landsUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutTasksInput>, Enumerable<tasks_landsUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutTasksInput>
    createMany?: tasks_landsCreateManyTasksInputEnvelope
    connect?: Enumerable<tasks_landsWhereUniqueInput>
  }

  export type usersUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    upsert?: usersUpsertWithoutTasksInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
  }

  export type ordersUpdateManyWithoutTasksNestedInput = {
    create?: XOR<Enumerable<ordersCreateWithoutTasksInput>, Enumerable<ordersUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutTasksInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutTasksInput>
    createMany?: ordersCreateManyTasksInputEnvelope
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    connect?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutTasksInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutTasksInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type tasks_landsUpdateManyWithoutTasksNestedInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutTasksInput>, Enumerable<tasks_landsUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutTasksInput>
    upsert?: Enumerable<tasks_landsUpsertWithWhereUniqueWithoutTasksInput>
    createMany?: tasks_landsCreateManyTasksInputEnvelope
    set?: Enumerable<tasks_landsWhereUniqueInput>
    disconnect?: Enumerable<tasks_landsWhereUniqueInput>
    delete?: Enumerable<tasks_landsWhereUniqueInput>
    connect?: Enumerable<tasks_landsWhereUniqueInput>
    update?: Enumerable<tasks_landsUpdateWithWhereUniqueWithoutTasksInput>
    updateMany?: Enumerable<tasks_landsUpdateManyWithWhereWithoutTasksInput>
    deleteMany?: Enumerable<tasks_landsScalarWhereInput>
  }

  export type ordersUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<Enumerable<ordersCreateWithoutTasksInput>, Enumerable<ordersUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutTasksInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutTasksInput>
    createMany?: ordersCreateManyTasksInputEnvelope
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    connect?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutTasksInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutTasksInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type tasks_landsUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<Enumerable<tasks_landsCreateWithoutTasksInput>, Enumerable<tasks_landsUncheckedCreateWithoutTasksInput>>
    connectOrCreate?: Enumerable<tasks_landsCreateOrConnectWithoutTasksInput>
    upsert?: Enumerable<tasks_landsUpsertWithWhereUniqueWithoutTasksInput>
    createMany?: tasks_landsCreateManyTasksInputEnvelope
    set?: Enumerable<tasks_landsWhereUniqueInput>
    disconnect?: Enumerable<tasks_landsWhereUniqueInput>
    delete?: Enumerable<tasks_landsWhereUniqueInput>
    connect?: Enumerable<tasks_landsWhereUniqueInput>
    update?: Enumerable<tasks_landsUpdateWithWhereUniqueWithoutTasksInput>
    updateMany?: Enumerable<tasks_landsUpdateManyWithWhereWithoutTasksInput>
    deleteMany?: Enumerable<tasks_landsScalarWhereInput>
  }

  export type landsCreateNestedOneWithoutTasks_landsInput = {
    create?: XOR<landsCreateWithoutTasks_landsInput, landsUncheckedCreateWithoutTasks_landsInput>
    connectOrCreate?: landsCreateOrConnectWithoutTasks_landsInput
    connect?: landsWhereUniqueInput
  }

  export type tasksCreateNestedOneWithoutTasks_landsInput = {
    create?: XOR<tasksCreateWithoutTasks_landsInput, tasksUncheckedCreateWithoutTasks_landsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTasks_landsInput
    connect?: tasksWhereUniqueInput
  }

  export type landsUpdateOneRequiredWithoutTasks_landsNestedInput = {
    create?: XOR<landsCreateWithoutTasks_landsInput, landsUncheckedCreateWithoutTasks_landsInput>
    connectOrCreate?: landsCreateOrConnectWithoutTasks_landsInput
    upsert?: landsUpsertWithoutTasks_landsInput
    connect?: landsWhereUniqueInput
    update?: XOR<landsUpdateWithoutTasks_landsInput, landsUncheckedUpdateWithoutTasks_landsInput>
  }

  export type tasksUpdateOneRequiredWithoutTasks_landsNestedInput = {
    create?: XOR<tasksCreateWithoutTasks_landsInput, tasksUncheckedCreateWithoutTasks_landsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTasks_landsInput
    upsert?: tasksUpsertWithoutTasks_landsInput
    connect?: tasksWhereUniqueInput
    update?: XOR<tasksUpdateWithoutTasks_landsInput, tasksUncheckedUpdateWithoutTasks_landsInput>
  }

  export type landsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<landsCreateWithoutUsersInput>, Enumerable<landsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<landsCreateOrConnectWithoutUsersInput>
    createMany?: landsCreateManyUsersInputEnvelope
    connect?: Enumerable<landsWhereUniqueInput>
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type tasksCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<tasksCreateWithoutUsersInput>, Enumerable<tasksUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<tasksCreateOrConnectWithoutUsersInput>
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: Enumerable<tasksWhereUniqueInput>
  }

  export type landsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<landsCreateWithoutUsersInput>, Enumerable<landsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<landsCreateOrConnectWithoutUsersInput>
    createMany?: landsCreateManyUsersInputEnvelope
    connect?: Enumerable<landsWhereUniqueInput>
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: Enumerable<ordersWhereUniqueInput>
  }

  export type tasksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<tasksCreateWithoutUsersInput>, Enumerable<tasksUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<tasksCreateOrConnectWithoutUsersInput>
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: Enumerable<tasksWhereUniqueInput>
  }

  export type landsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<landsCreateWithoutUsersInput>, Enumerable<landsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<landsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<landsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: landsCreateManyUsersInputEnvelope
    set?: Enumerable<landsWhereUniqueInput>
    disconnect?: Enumerable<landsWhereUniqueInput>
    delete?: Enumerable<landsWhereUniqueInput>
    connect?: Enumerable<landsWhereUniqueInput>
    update?: Enumerable<landsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<landsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<landsScalarWhereInput>
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    connect?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type tasksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<tasksCreateWithoutUsersInput>, Enumerable<tasksUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<tasksCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<tasksUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: Enumerable<tasksWhereUniqueInput>
    disconnect?: Enumerable<tasksWhereUniqueInput>
    delete?: Enumerable<tasksWhereUniqueInput>
    connect?: Enumerable<tasksWhereUniqueInput>
    update?: Enumerable<tasksUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<tasksUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<tasksScalarWhereInput>
  }

  export type landsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<landsCreateWithoutUsersInput>, Enumerable<landsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<landsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<landsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: landsCreateManyUsersInputEnvelope
    set?: Enumerable<landsWhereUniqueInput>
    disconnect?: Enumerable<landsWhereUniqueInput>
    delete?: Enumerable<landsWhereUniqueInput>
    connect?: Enumerable<landsWhereUniqueInput>
    update?: Enumerable<landsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<landsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<landsScalarWhereInput>
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ordersCreateWithoutUsersInput>, Enumerable<ordersUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ordersCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ordersUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: Enumerable<ordersWhereUniqueInput>
    disconnect?: Enumerable<ordersWhereUniqueInput>
    delete?: Enumerable<ordersWhereUniqueInput>
    connect?: Enumerable<ordersWhereUniqueInput>
    update?: Enumerable<ordersUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ordersUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ordersScalarWhereInput>
  }

  export type tasksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<tasksCreateWithoutUsersInput>, Enumerable<tasksUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<tasksCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<tasksUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: Enumerable<tasksWhereUniqueInput>
    disconnect?: Enumerable<tasksWhereUniqueInput>
    delete?: Enumerable<tasksWhereUniqueInput>
    connect?: Enumerable<tasksWhereUniqueInput>
    update?: Enumerable<tasksUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<tasksUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<tasksScalarWhereInput>
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

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
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

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
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

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
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
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type usersCreateWithoutLandsInput = {
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    orders?: ordersCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLandsInput = {
    id?: number
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLandsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLandsInput, usersUncheckedCreateWithoutLandsInput>
  }

  export type tasks_landsCreateWithoutLandsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    external_id?: number
    sync?: boolean
    tasks: tasksCreateNestedOneWithoutTasks_landsInput
  }

  export type tasks_landsUncheckedCreateWithoutLandsInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    task_id: number
    external_id?: number
    sync?: boolean
  }

  export type tasks_landsCreateOrConnectWithoutLandsInput = {
    where: tasks_landsWhereUniqueInput
    create: XOR<tasks_landsCreateWithoutLandsInput, tasks_landsUncheckedCreateWithoutLandsInput>
  }

  export type tasks_landsCreateManyLandsInputEnvelope = {
    data: Enumerable<tasks_landsCreateManyLandsInput>
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutLandsInput = {
    update: XOR<usersUpdateWithoutLandsInput, usersUncheckedUpdateWithoutLandsInput>
    create: XOR<usersCreateWithoutLandsInput, usersUncheckedCreateWithoutLandsInput>
  }

  export type usersUpdateWithoutLandsInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type tasks_landsUpsertWithWhereUniqueWithoutLandsInput = {
    where: tasks_landsWhereUniqueInput
    update: XOR<tasks_landsUpdateWithoutLandsInput, tasks_landsUncheckedUpdateWithoutLandsInput>
    create: XOR<tasks_landsCreateWithoutLandsInput, tasks_landsUncheckedCreateWithoutLandsInput>
  }

  export type tasks_landsUpdateWithWhereUniqueWithoutLandsInput = {
    where: tasks_landsWhereUniqueInput
    data: XOR<tasks_landsUpdateWithoutLandsInput, tasks_landsUncheckedUpdateWithoutLandsInput>
  }

  export type tasks_landsUpdateManyWithWhereWithoutLandsInput = {
    where: tasks_landsScalarWhereInput
    data: XOR<tasks_landsUpdateManyMutationInput, tasks_landsUncheckedUpdateManyWithoutTasks_landsInput>
  }

  export type tasks_landsScalarWhereInput = {
    AND?: Enumerable<tasks_landsScalarWhereInput>
    OR?: Enumerable<tasks_landsScalarWhereInput>
    NOT?: Enumerable<tasks_landsScalarWhereInput>
    id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    task_id?: IntFilter | number
    land_id?: IntFilter | number
    external_id?: IntFilter | number
    sync?: BoolFilter | boolean
  }

  export type tasksCreateWithoutOrdersInput = {
    name?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    users: usersCreateNestedOneWithoutTasksInput
    tasks_lands?: tasks_landsCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutOrdersInput = {
    id?: number
    name?: string
    status?: string
    user_id: number
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    tasks_lands?: tasks_landsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutOrdersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutOrdersInput, tasksUncheckedCreateWithoutOrdersInput>
  }

  export type usersCreateWithoutOrdersInput = {
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    lands?: landsCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    lands?: landsUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type tasksUpsertWithoutOrdersInput = {
    update: XOR<tasksUpdateWithoutOrdersInput, tasksUncheckedUpdateWithoutOrdersInput>
    create: XOR<tasksCreateWithoutOrdersInput, tasksUncheckedCreateWithoutOrdersInput>
  }

  export type tasksUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    tasks_lands?: tasks_landsUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks_lands?: tasks_landsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutTasksInput = {
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    lands?: landsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTasksInput = {
    id?: number
    username: string
    phone: string
    hashed_password: string
    access_token: string
    verify?: string
    source?: string
    external_id?: string
    created_at?: Date | string
    updated_at?: Date | string
    name?: string
    is_verified?: boolean
    default_card_id?: string
    is_active?: boolean
    lands?: landsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTasksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
  }

  export type ordersCreateWithoutTasksInput = {
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutTasksInput = {
    id?: number
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    user_id: number
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
  }

  export type ordersCreateOrConnectWithoutTasksInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutTasksInput, ordersUncheckedCreateWithoutTasksInput>
  }

  export type ordersCreateManyTasksInputEnvelope = {
    data: Enumerable<ordersCreateManyTasksInput>
    skipDuplicates?: boolean
  }

  export type tasks_landsCreateWithoutTasksInput = {
    created_at?: Date | string
    updated_at?: Date | string
    external_id?: number
    sync?: boolean
    lands: landsCreateNestedOneWithoutTasks_landsInput
  }

  export type tasks_landsUncheckedCreateWithoutTasksInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    land_id: number
    external_id?: number
    sync?: boolean
  }

  export type tasks_landsCreateOrConnectWithoutTasksInput = {
    where: tasks_landsWhereUniqueInput
    create: XOR<tasks_landsCreateWithoutTasksInput, tasks_landsUncheckedCreateWithoutTasksInput>
  }

  export type tasks_landsCreateManyTasksInputEnvelope = {
    data: Enumerable<tasks_landsCreateManyTasksInput>
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTasksInput = {
    update: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
  }

  export type usersUpdateWithoutTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    verify?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    external_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    default_card_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersUpsertWithWhereUniqueWithoutTasksInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutTasksInput, ordersUncheckedUpdateWithoutTasksInput>
    create: XOR<ordersCreateWithoutTasksInput, ordersUncheckedCreateWithoutTasksInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutTasksInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutTasksInput, ordersUncheckedUpdateWithoutTasksInput>
  }

  export type ordersUpdateManyWithWhereWithoutTasksInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: Enumerable<ordersScalarWhereInput>
    OR?: Enumerable<ordersScalarWhereInput>
    NOT?: Enumerable<ordersScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    external_uid?: StringFilter | string
    customer_uid?: StringFilter | string
    merchant_uid?: StringFilter | string
    req_amount?: IntFilter | number
    paid_amount?: IntFilter | number
    source?: StringFilter | string
    status?: StringFilter | string
    extra?: JsonFilter
    user_id?: IntFilter | number
    task_id?: IntFilter | number
    issued_at?: DateTimeNullableFilter | Date | string | null
    expired_at?: DateTimeNullableFilter | Date | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    cancel_amount?: IntFilter | number
  }

  export type tasks_landsUpsertWithWhereUniqueWithoutTasksInput = {
    where: tasks_landsWhereUniqueInput
    update: XOR<tasks_landsUpdateWithoutTasksInput, tasks_landsUncheckedUpdateWithoutTasksInput>
    create: XOR<tasks_landsCreateWithoutTasksInput, tasks_landsUncheckedCreateWithoutTasksInput>
  }

  export type tasks_landsUpdateWithWhereUniqueWithoutTasksInput = {
    where: tasks_landsWhereUniqueInput
    data: XOR<tasks_landsUpdateWithoutTasksInput, tasks_landsUncheckedUpdateWithoutTasksInput>
  }

  export type tasks_landsUpdateManyWithWhereWithoutTasksInput = {
    where: tasks_landsScalarWhereInput
    data: XOR<tasks_landsUpdateManyMutationInput, tasks_landsUncheckedUpdateManyWithoutTasks_landsInput>
  }

  export type landsCreateWithoutTasks_landsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    address?: string
    users: usersCreateNestedOneWithoutLandsInput
  }

  export type landsUncheckedCreateWithoutTasks_landsInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    user_id: number
    address?: string
  }

  export type landsCreateOrConnectWithoutTasks_landsInput = {
    where: landsWhereUniqueInput
    create: XOR<landsCreateWithoutTasks_landsInput, landsUncheckedCreateWithoutTasks_landsInput>
  }

  export type tasksCreateWithoutTasks_landsInput = {
    name?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    users: usersCreateNestedOneWithoutTasksInput
    orders?: ordersCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutTasks_landsInput = {
    id?: number
    name?: string
    status?: string
    user_id: number
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutTasks_landsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutTasks_landsInput, tasksUncheckedCreateWithoutTasks_landsInput>
  }

  export type landsUpsertWithoutTasks_landsInput = {
    update: XOR<landsUpdateWithoutTasks_landsInput, landsUncheckedUpdateWithoutTasks_landsInput>
    create: XOR<landsCreateWithoutTasks_landsInput, landsUncheckedCreateWithoutTasks_landsInput>
  }

  export type landsUpdateWithoutTasks_landsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    address?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutLandsNestedInput
  }

  export type landsUncheckedUpdateWithoutTasks_landsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type tasksUpsertWithoutTasks_landsInput = {
    update: XOR<tasksUpdateWithoutTasks_landsInput, tasksUncheckedUpdateWithoutTasks_landsInput>
    create: XOR<tasksCreateWithoutTasks_landsInput, tasksUncheckedCreateWithoutTasks_landsInput>
  }

  export type tasksUpdateWithoutTasks_landsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTasksNestedInput
    orders?: ordersUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutTasks_landsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type landsCreateWithoutUsersInput = {
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    address?: string
    tasks_lands?: tasks_landsCreateNestedManyWithoutLandsInput
  }

  export type landsUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    address?: string
    tasks_lands?: tasks_landsUncheckedCreateNestedManyWithoutLandsInput
  }

  export type landsCreateOrConnectWithoutUsersInput = {
    where: landsWhereUniqueInput
    create: XOR<landsCreateWithoutUsersInput, landsUncheckedCreateWithoutUsersInput>
  }

  export type landsCreateManyUsersInputEnvelope = {
    data: Enumerable<landsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
    tasks: tasksCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    task_id: number
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: Enumerable<ordersCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsersInput = {
    name?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    orders?: ordersCreateNestedManyWithoutTasksInput
    tasks_lands?: tasks_landsCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutTasksInput
    tasks_lands?: tasks_landsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksCreateManyUsersInputEnvelope = {
    data: Enumerable<tasksCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type landsUpsertWithWhereUniqueWithoutUsersInput = {
    where: landsWhereUniqueInput
    update: XOR<landsUpdateWithoutUsersInput, landsUncheckedUpdateWithoutUsersInput>
    create: XOR<landsCreateWithoutUsersInput, landsUncheckedCreateWithoutUsersInput>
  }

  export type landsUpdateWithWhereUniqueWithoutUsersInput = {
    where: landsWhereUniqueInput
    data: XOR<landsUpdateWithoutUsersInput, landsUncheckedUpdateWithoutUsersInput>
  }

  export type landsUpdateManyWithWhereWithoutUsersInput = {
    where: landsScalarWhereInput
    data: XOR<landsUpdateManyMutationInput, landsUncheckedUpdateManyWithoutLandsInput>
  }

  export type landsScalarWhereInput = {
    AND?: Enumerable<landsScalarWhereInput>
    OR?: Enumerable<landsScalarWhereInput>
    NOT?: Enumerable<landsScalarWhereInput>
    id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    type?: StringFilter | string
    village_name?: StringFilter | string
    status?: StringFilter | string
    geometry?: JsonFilter
    x?: StringFilter | string
    y?: StringFilter | string
    area?: DecimalFilter | Decimal | DecimalJsLike | number | string
    extra?: JsonFilter
    user_id?: IntFilter | number
    address?: StringFilter | string
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutTasksInput>
  }

  export type tasksScalarWhereInput = {
    AND?: Enumerable<tasksScalarWhereInput>
    OR?: Enumerable<tasksScalarWhereInput>
    NOT?: Enumerable<tasksScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    status?: StringFilter | string
    user_id?: IntFilter | number
    extra?: JsonFilter
    source?: StringFilter | string
    external_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    expected_start_date?: DateTimeFilter | Date | string
    expected_end_date?: DateTimeFilter | Date | string
  }

  export type tasks_landsCreateManyLandsInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    task_id: number
    external_id?: number
    sync?: boolean
  }

  export type tasks_landsUpdateWithoutLandsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
    tasks?: tasksUpdateOneRequiredWithoutTasks_landsNestedInput
  }

  export type tasks_landsUncheckedUpdateWithoutLandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_id?: IntFieldUpdateOperationsInput | number
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tasks_landsUncheckedUpdateManyWithoutTasks_landsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_id?: IntFieldUpdateOperationsInput | number
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ordersCreateManyTasksInput = {
    id?: number
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    user_id: number
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
  }

  export type tasks_landsCreateManyTasksInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    land_id: number
    external_id?: number
    sync?: boolean
  }

  export type ordersUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
  }

  export type ordersUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    user_id?: IntFieldUpdateOperationsInput | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
  }

  export type tasks_landsUpdateWithoutTasksInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
    lands?: landsUpdateOneRequiredWithoutTasks_landsNestedInput
  }

  export type tasks_landsUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    land_id?: IntFieldUpdateOperationsInput | number
    external_id?: IntFieldUpdateOperationsInput | number
    sync?: BoolFieldUpdateOperationsInput | boolean
  }

  export type landsCreateManyUsersInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    type?: string
    village_name?: string
    status: string
    geometry: JsonNullValueInput | InputJsonValue
    x: string
    y: string
    area: Decimal | DecimalJsLike | number | string
    extra: JsonNullValueInput | InputJsonValue
    address?: string
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    name?: string
    external_uid: string
    customer_uid: string
    merchant_uid: string
    req_amount: number
    paid_amount?: number
    source?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    task_id: number
    issued_at?: Date | string | null
    expired_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    cancel_amount?: number
  }

  export type tasksCreateManyUsersInput = {
    id?: number
    name?: string
    status?: string
    extra?: JsonNullValueInput | InputJsonValue
    source?: string
    external_id?: number
    created_at?: Date | string
    updated_at?: Date | string
    expected_start_date?: Date | string
    expected_end_date?: Date | string
  }

  export type landsUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    address?: StringFieldUpdateOperationsInput | string
    tasks_lands?: tasks_landsUpdateManyWithoutLandsNestedInput
  }

  export type landsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    address?: StringFieldUpdateOperationsInput | string
    tasks_lands?: tasks_landsUncheckedUpdateManyWithoutLandsNestedInput
  }

  export type landsUncheckedUpdateManyWithoutLandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    geometry?: JsonNullValueInput | InputJsonValue
    x?: StringFieldUpdateOperationsInput | string
    y?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    extra?: JsonNullValueInput | InputJsonValue
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ordersUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
    tasks?: tasksUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    external_uid?: StringFieldUpdateOperationsInput | string
    customer_uid?: StringFieldUpdateOperationsInput | string
    merchant_uid?: StringFieldUpdateOperationsInput | string
    req_amount?: IntFieldUpdateOperationsInput | number
    paid_amount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    task_id?: IntFieldUpdateOperationsInput | number
    issued_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expired_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cancel_amount?: IntFieldUpdateOperationsInput | number
  }

  export type tasksUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutTasksNestedInput
    tasks_lands?: tasks_landsUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutTasksNestedInput
    tasks_lands?: tasks_landsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    extra?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    external_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
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