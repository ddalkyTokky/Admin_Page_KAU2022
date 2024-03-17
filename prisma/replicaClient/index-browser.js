
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

exports.Prisma.AccountsScalarFieldEnum = makeEnum({
  id: 'id',
  phone: 'phone',
  verifyToken: 'verifyToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  profile: 'profile',
  isAdmin: 'isAdmin',
  email: 'email',
  password: 'password',
  name: 'name',
  isVerify: 'isVerify',
  isApprove: 'isApprove',
  ServiceKey: 'ServiceKey'
});

exports.Prisma.AlertsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  type: 'type',
  category: 'category',
  AccountId: 'AccountId',
  ReferenceId: 'ReferenceId',
  isRead: 'isRead',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  data: 'data'
});

exports.Prisma.CareersScalarFieldEnum = makeEnum({
  id: 'id',
  AccountId: 'AccountId',
  title: 'title',
  startDate: 'startDate',
  endDate: 'endDate',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CouponsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  code: 'code',
  quantity: 'quantity',
  maxRetry: 'maxRetry',
  unit: 'unit',
  value: 'value',
  startedAt: 'startedAt',
  endedAt: 'endedAt',
  createdAt: 'createdAt',
  extra: 'extra',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustomerTaskDetailsScalarFieldEnum = makeEnum({
  id: 'id',
  AccountId: 'AccountId',
  CustomerId: 'CustomerId',
  type: 'type',
  address: 'address',
  villageName: 'villageName',
  category: 'category',
  etc: 'etc',
  geometry: 'geometry',
  x: 'x',
  y: 'y',
  area: 'area',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustomersScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  crops: 'crops',
  AccountId: 'AccountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DiscountsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  AccountId: 'AccountId',
  OrderId: 'OrderId',
  CouponId: 'CouponId',
  ProductId: 'ProductId',
  filters: 'filters'
});

exports.Prisma.EventsScalarFieldEnum = makeEnum({
  id: 'id',
  table: 'table',
  action: 'action',
  createdBy: 'createdBy',
  data: 'data',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GeosScalarFieldEnum = makeEnum({
  id: 'id',
  address: 'address',
  geometry: 'geometry',
  x: 'x',
  y: 'y',
  pnu: 'pnu',
  area: 'area',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.LandsScalarFieldEnum = makeEnum({
  id: 'id',
  AccountId: 'AccountId',
  is_active: 'is_active',
  type: 'type',
  villageName: 'villageName',
  status: 'status',
  geometry: 'geometry',
  x: 'x',
  y: 'y',
  area: 'area',
  extra: 'extra',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.NoticesScalarFieldEnum = makeEnum({
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  imageURL: 'imageURL',
  externalURL: 'externalURL',
  order: 'order',
  active: 'active',
  deletedDate: 'deletedDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name'
});

exports.Prisma.NotificationsScalarFieldEnum = makeEnum({
  id: 'id',
  AccountId: 'AccountId',
  fcmToken: 'fcmToken',
  sendedAt: 'sendedAt',
  isSuccess: 'isSuccess',
  failReason: 'failReason',
  eventCode: 'eventCode',
  sendCode: 'sendCode',
  reservationCode: 'reservationCode',
  sendCycleCode: 'sendCycleCode',
  title: 'title',
  message: 'message',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.OrderHistoriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  payment: 'payment',
  paymentMethod: 'paymentMethod',
  externalUid: 'externalUid',
  customerUid: 'customerUid',
  merchantUid: 'merchantUid',
  reqAmount: 'reqAmount',
  paidAmount: 'paidAmount',
  status: 'status',
  extra: 'extra',
  AccountId: 'AccountId',
  ProductId: 'ProductId',
  OrderId: 'OrderId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.OrdersScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  payment: 'payment',
  paymentMethod: 'paymentMethod',
  externalUid: 'externalUid',
  customerUid: 'customerUid',
  merchantUid: 'merchantUid',
  reqAmount: 'reqAmount',
  paidAmount: 'paidAmount',
  status: 'status',
  extra: 'extra',
  AccountId: 'AccountId',
  ProductId: 'ProductId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  expiredAt: 'expiredAt',
  isSubscribe: 'isSubscribe',
  issuedAt: 'issuedAt'
});

exports.Prisma.PermissionsScalarFieldEnum = makeEnum({
  id: 'id',
  resource: 'resource',
  key: 'key',
  resourceId: 'resourceId',
  AccountId: 'AccountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PostAccountsScalarFieldEnum = makeEnum({
  id: 'id',
  AccountId: 'AccountId',
  PostId: 'PostId',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PostsScalarFieldEnum = makeEnum({
  id: 'id',
  category: 'category',
  type: 'type',
  content: 'content',
  unit: 'unit',
  price: 'price',
  location: 'location',
  area: 'area',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  viewCount: 'viewCount',
  AccountId: 'AccountId',
  contactName: 'contactName',
  contactPhone: 'contactPhone',
  contactEmail: 'contactEmail',
  qualifications: 'qualifications'
});

exports.Prisma.ProductsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  duration: 'duration',
  filters: 'filters',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isSubscribe: 'isSubscribe'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReportsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  isActive: 'isActive',
  isPrivate: 'isPrivate',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  TaskId: 'TaskId',
  AccountId: 'AccountId'
});

exports.Prisma.SequelizeMetaScalarFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.ServicesScalarFieldEnum = makeEnum({
  key: 'key',
  description: 'description',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StatisticsScalarFieldEnum = makeEnum({
  id: 'id',
  AgentId: 'AgentId',
  TeamId: 'TeamId',
  TaskId: 'TaskId',
  dailyWorkload: 'dailyWorkload',
  completedByOwner: 'completedByOwner',
  completedBySelf: 'completedBySelf',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SubscribesScalarFieldEnum = makeEnum({
  id: 'id',
  AccountId: 'AccountId',
  fcmToken: 'fcmToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TaskDetailResourcesScalarFieldEnum = makeEnum({
  id: 'id',
  content: 'content',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  TaskDetailId: 'TaskDetailId',
  AccountId: 'AccountId',
  group: 'group'
});

exports.Prisma.TaskDetailsScalarFieldEnum = makeEnum({
  id: 'id',
  AccountId: 'AccountId',
  TaskId: 'TaskId',
  type: 'type',
  address: 'address',
  villageName: 'villageName',
  pushUser: 'pushUser',
  category: 'category',
  etc: 'etc',
  status: 'status',
  geometry: 'geometry',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  assignedDays: 'assignedDays',
  assignedUser: 'assignedUser',
  TeamId: 'TeamId',
  y: 'y',
  x: 'x',
  area: 'area',
  pushPhone: 'pushPhone',
  startedAt: 'startedAt',
  endedAt: 'endedAt',
  memo: 'memo',
  extra: 'extra'
});

exports.Prisma.TaskGroupsScalarFieldEnum = makeEnum({
  id: 'id',
  path: 'path',
  name: 'name',
  status: 'status',
  AccountId: 'AccountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  area: 'area',
  createType: 'createType',
  extra: 'extra'
});

exports.Prisma.TasksScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  status: 'status',
  AccountId: 'AccountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  workingDays: 'workingDays',
  workingTeamsCnt: 'workingTeamsCnt',
  TaskGroupId: 'TaskGroupId',
  startDate: 'startDate',
  endDate: 'endDate',
  area: 'area',
  isPaid: 'isPaid',
  createType: 'createType',
  extra: 'extra',
  real_area: 'real_area'
});

exports.Prisma.TeamAgentsScalarFieldEnum = makeEnum({
  AgentId: 'AgentId',
  TeamId: 'TeamId',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TeamsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  AccountId: 'AccountId',
  AgentId: 'AgentId',
  TaskId: 'TaskId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status',
  area: 'area',
  alias: 'alias'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.enum_Permissions_key = makeEnum({
  read: 'read',
  create: 'create',
  update: 'update',
  delete: 'delete'
});

exports.Prisma.ModelName = makeEnum({
  Accounts: 'Accounts',
  Alerts: 'Alerts',
  Careers: 'Careers',
  Coupons: 'Coupons',
  CustomerTaskDetails: 'CustomerTaskDetails',
  Customers: 'Customers',
  Discounts: 'Discounts',
  Events: 'Events',
  Geos: 'Geos',
  Lands: 'Lands',
  Notices: 'Notices',
  Notifications: 'Notifications',
  OrderHistories: 'OrderHistories',
  Orders: 'Orders',
  Permissions: 'Permissions',
  PostAccounts: 'PostAccounts',
  Posts: 'Posts',
  Products: 'Products',
  Reports: 'Reports',
  SequelizeMeta: 'SequelizeMeta',
  Services: 'Services',
  Statistics: 'Statistics',
  Subscribes: 'Subscribes',
  TaskDetailResources: 'TaskDetailResources',
  TaskDetails: 'TaskDetails',
  TaskGroups: 'TaskGroups',
  Tasks: 'Tasks',
  TeamAgents: 'TeamAgents',
  Teams: 'Teams'
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
