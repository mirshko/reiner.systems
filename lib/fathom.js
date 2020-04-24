const isProduction = process.env.NODE_ENV === "production" ? true : false;

export const SITE_ID = isProduction ? "REDRNHLE" : undefined;

export const GOALS = {
  DOWNLOAD_RESUME: isProduction ? "C8Z7PGH7" : undefined,
  CLICK_SOCIAL_INSTAGRAM: isProduction ? "O2KPUELC" : undefined,
  CLICK_SOCIAL_TWITTER: isProduction ? "S0DLXEEV" : undefined,
  CLICK_SOCIAL_GITHUB: isProduction ? "PDFTCSJU" : undefined,
};

const getFathom = () => {
  return (window.fathom =
    window.fathom ||
    function () {
      (window.fathom.q = window.fathom.q || []).push(arguments);
    });
};

export const trackGoal = (id, cents = 0) => {
  let fathom = getFathom();
  fathom("trackGoal", id, cents);
};
