import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import {notFound} from 'next/navigation';

type Props = {
  params: {locale: string; slug: string};
};

const slugs = [
  {slug: 'test-page', locale: 'en'},
  {slug: 'test-seite', locale: 'de'}
];

export default function PathnamesPage({params: {locale, slug}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  if (!slugs.find((s) => s.locale === locale && s.slug === slug)) notFound();

  const t = useTranslations('PathnamesPage');

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        <pre>{JSON.stringify(slug)}</pre>
      </div>
    </PageLayout>
  );
}

export const generateStaticParams = () => slugs;
