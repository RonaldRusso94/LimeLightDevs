module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "LimeLightDevs@gmail.com",
      defaultReplyTo: "LimeLightDevs@gmail.com",
    },
  },
});
