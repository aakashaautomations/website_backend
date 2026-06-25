import express from "express";
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';


// import userRoutes from "./routes/user.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import enquiryRoutes from "./routes/enquiry.routes.js";


const app = express();
/* ----------------------------------
   Trust Proxy (for VPS / Load Balancer)
----------------------------------- */
app.set('trust proxy', 1);
/* ----------------------------------
   Security Headers
----------------------------------- */
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const allowedOrigins = [
  "http://localhost:5173",
//   "https://yourdomain.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* ----------------------------------
   Body Parsing (with limits)
----------------------------------- */
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

/* ----------------------------------
   HTTP Request Logger
----------------------------------- */
morgan.token('body', (req) => JSON.stringify(req.body));

app.use(
  morgan(
    ':remote-addr | :method :url | :status | :response-time ms'
  )
);

/* ----------------------------------
   Health Check
----------------------------------- */
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'OK',
    app: 'Rafia World Backend',
    timestamp: new Date().toISOString(),
  });
});
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Aakasha automations API running",
  });
});


// app.use("/api/users", userRoutes);
app.use("/api/v1/contact-us", contactRoutes);
app.use("/api/v1/enquiries", enquiryRoutes);




/* ----------------------------------
   404 Handler
----------------------------------- */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    path: req.originalUrl,
  });
});

export default app;