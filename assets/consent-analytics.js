(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  // Consent Mode v2: start denied until the visitor explicitly opts in.
  gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });

  gtag("js", new Date());
  gtag("config", window.GA_MEASUREMENT_ID);

  window.grantAnalyticsConsent = function () {
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied"
    });
    try {
      localStorage.setItem("analytics_consent", "granted");
    } catch (e) {}
  };

  window.revokeAnalyticsConsent = function () {
    gtag("consent", "update", {
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied"
    });
    try {
      localStorage.setItem("analytics_consent", "denied");
    } catch (e) {}
  };

  try {
    if (localStorage.getItem("analytics_consent") === "granted") {
      window.grantAnalyticsConsent();
    }
  } catch (e) {}

  function setupConsentBanner() {
    var banner = document.getElementById("consent-banner");
    var accept = document.getElementById("consent-accept");
    var decline = document.getElementById("consent-decline");
    var settingsLink = document.getElementById("cookie-settings-link");

    if (!banner || !accept || !decline) {
      return;
    }

    var savedConsent;
    try {
      savedConsent = localStorage.getItem("analytics_consent");
    } catch (e) {
      savedConsent = null;
    }

    if (savedConsent !== "granted" && savedConsent !== "denied") {
      banner.hidden = false;
    }

    accept.addEventListener("click", function () {
      window.grantAnalyticsConsent();
      banner.hidden = true;
    });

    decline.addEventListener("click", function () {
      window.revokeAnalyticsConsent();
      banner.hidden = true;
    });

    if (settingsLink) {
      settingsLink.addEventListener("click", function (event) {
        event.preventDefault();
        banner.hidden = false;
        accept.focus();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupConsentBanner);
  } else {
    setupConsentBanner();
  }
})();
