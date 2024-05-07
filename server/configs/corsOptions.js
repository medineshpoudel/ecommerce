const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }

    if (
      origin === "http://127.0.0.1:3000" ||
      origin === "http://localhost:3000" ||
      origin === "http://localhost:8000"
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

module.exports = corsOptions;
