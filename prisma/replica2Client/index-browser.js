
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.LandsScalarFieldEnum = makeEnum({
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
});

exports.Prisma.OrdersScalarFieldEnum = makeEnum({
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
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.Schema_migrationsScalarFieldEnum = makeEnum({
  version: 'version',
  dirty: 'dirty'
});

exports.Prisma.ServicesScalarFieldEnum = makeEnum({
  id: 'id',
  service_key: 'service_key',
  source: 'source',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uri: 'uri'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TasksScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Tasks_landsScalarFieldEnum = makeEnum({
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  task_id: 'task_id',
  land_id: 'land_id',
  external_id: 'external_id',
  sync: 'sync'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
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
});


exports.Prisma.ModelName = makeEnum({
  lands: 'lands',
  orders: 'orders',
  schema_migrations: 'schema_migrations',
  services: 'services',
  tasks: 'tasks',
  tasks_lands: 'tasks_lands',
  users: 'users'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
