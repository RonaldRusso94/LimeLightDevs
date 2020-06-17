if (process.env.NODE_ENV === "production") {
  module.exports = ({ env }) => ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "mongoose",
        settings: {
          uri: env("DATABASE_URI"),
        },
        options: {
          authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
          ssl: env.bool("DATABASE_SSL", true),
        },
      },
    },
  });
} else {
  module.exports = ({ env }) => ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "mongoose",
        settings: {
          host: env("DATABASE_HOST", "cluster0-snqjz.mongodb.net/"),
          srv: env.bool("DATABASE_SRV", true),
          port: env.int("DATABASE_PORT", 27017),
          database: env("DATABASE_NAME", "LimeLightDevs"),
          username: env("DATABASE_USERNAME", "Ronald"),
          password: env("DATABASE_PASSWORD", "abcd1234"),
        },
        options: {
          authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
          ssl: env.bool("DATABASE_SSL", true),
        },
      },
    },
  });
}
