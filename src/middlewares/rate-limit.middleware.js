import rateLimit from "express-rate-limit";

export const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 900, // 300 requests per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again after 1 minute.",
  },
});

/* ----------------------------------
   Global Rate Limiter
----------------------------------- */
// const globalRateLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 900, // 300 requests per IP
//   standardHeaders: true,
//   legacyHeaders: false,
//   message: {
//     success: false,
//     message: 'Too many requests. Please try again later.',
//   },
// });

// app.use(globalRateLimiter);