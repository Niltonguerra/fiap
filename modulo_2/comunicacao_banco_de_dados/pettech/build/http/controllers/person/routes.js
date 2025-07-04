"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/controllers/person/routes.ts
var routes_exports = {};
__export(routes_exports, {
  personRoutes: () => personRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/http/controllers/person/create.ts
var import_zod2 = require("zod");

// src/lib/pg/db.ts
var import_pg = require("pg");

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3e3),
  DATABASE_USER: import_zod.z.string(),
  DATABASE_HOST: import_zod.z.string(),
  DATABASE_NAME: import_zod.z.string(),
  DATABASE_PASSWORD: import_zod.z.string(),
  DATABASE_PORT: import_zod.z.coerce.number()
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/lib/pg/db.ts
var CONFIG = {
  user: env.DATABASE_USER,
  host: env.DATABASE_HOST,
  database: env.DATABASE_NAME,
  password: env.DATABASE_PASSWORD,
  port: env.DATABASE_PORT
};
var Database = class {
  constructor() {
    this.pool = new import_pg.Pool(CONFIG);
    this.connection();
  }
  async connection() {
    try {
      this.client = await this.pool.connect();
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw new Error("Database connection failed, error: " + error);
    }
  }
  get clientInstance() {
    return this.client;
  }
};
var database = new Database();

// src/repositories/pg/person.repository.ts
var PersonRepository = class {
  async create({ cpf, name, birth, email, user_id }) {
    const result = await database.clientInstance?.query(
      "INSERT INTO person (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [cpf, name, birth, email, user_id]
    );
    return result?.rows[0];
  }
};

// src/use-cases/create-person.ts
var CreatePersonUseCase = class {
  constructor(personRepository) {
    this.personRepository = personRepository;
  }
  handler(person) {
    return this.personRepository.create(person);
  }
};

// src/use-cases/factory/make-create-person-use-case.ts
function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository();
  const createPersonUseCase = new CreatePersonUseCase(personRepository);
  return createPersonUseCase;
}

// src/http/controllers/person/create.ts
async function create(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    cpf: import_zod2.z.string(),
    name: import_zod2.z.string(),
    birth: import_zod2.z.coerce.date(),
    email: import_zod2.z.string().email(),
    user_id: import_zod2.z.coerce.number()
  });
  const { cpf, name, birth, email, user_id } = registerBodySchema.parse(request.body);
  const createPersonUseCase = makeCreatePersonUseCase();
  await createPersonUseCase.handler({ cpf, name, birth, email, user_id });
  return reply.status(201).send({ message: "Person created successfully" });
}

// src/http/controllers/person/routes.ts
async function personRoutes(app) {
  app.post("/person", create);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  personRoutes
});
