"use client";

import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

const googleTranslateScriptId = "google-translate-script";

export function LanguageSelector() {
  const [error, setError] = useState(false);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      const TranslateElement =
        window.google?.translate?.TranslateElement;

      if (!TranslateElement) {
        setError(true);
        return;
      }

      new TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element",
      );
    };

    if (document.getElementById(googleTranslateScriptId)) return;

    const script = document.createElement("script");
    script.id = googleTranslateScriptId;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => setError(true);
    document.head.appendChild(script);
  }, []);

  return (
    <details className="language-selector">
      <summary aria-label="Translate this page with Google">
        <Globe2 aria-hidden="true" size={18} />
        <span>Translate</span>
      </summary>
      <div className="language-selector-panel">
        <p>Choose a language for an automatic translation by Google.</p>
        <div id="google_translate_element" />
        {error && (
          <p className="language-selector-error" role="status">
            Google Translate could not load. Try your browser&apos;s translation
            option instead.
          </p>
        )}
      </div>
    </details>
  );
}
