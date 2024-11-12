import BaseLayout from '@/components/BaseLayout';
import NotFoundPage from '@/components/NotFoundPage';
import {routing} from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  /**
   * `setRequestLocale` fixes static rendering of all pages (and the build
   * error). But then it no longer seems possible to have localized error pages.
   * E.g. https://localhost:3000/en/unknown-route and
   * https://localhost:3000/de/unknown-route) are both showing translations and
   * routing for `en`.
   */
  // setRequestLocale(routing.defaultLocale)
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
