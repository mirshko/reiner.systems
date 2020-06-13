const isProduction = process.env.NODE_ENV === "production" ? true : false;

export const SITE_ID = isProduction ? "REDRNHLE" : undefined;

export const GOALS = {
  DOWNLOAD_RESUME: isProduction ? "C8Z7PGH7" : undefined,
  CLICK_SOCIAL_INSTAGRAM: isProduction ? "O2KPUELC" : undefined,
  CLICK_SOCIAL_TWITTER: isProduction ? "S0DLXEEV" : undefined,
  CLICK_SOCIAL_GITHUB: isProduction ? "PDFTCSJU" : undefined,
};

/**
 * Enqueues a command to dispatch to fathom when the library is loaded.
 *
 * @param command - A set of arguments to dispatch to fathom later.
 */
const enqueue = (command) => {
  window.__fathomClientQueue = window.__fathomClientQueue || [];
  window.__fathomClientQueue.push(command);
};

/**
 * Tracks a goal.
 *
 * @param code - The goal ID.
 * @param cents - The value in cents.
 */
export const trackGoal = (code, cents = 0) => {
  if (window.fathom) {
    window.fathom.trackGoal(code, cents);
  } else {
    enqueue({ type: "trackGoal", code, cents });
  }
};
