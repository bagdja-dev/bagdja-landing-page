import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CreditCard,
  KeyRound,
  LineChart,
  PackageCheck,
  Rocket,
  Store,
  Users,
  Wrench,
  Handshake,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDirection, type Locale, type Messages } from "@/src/lib/i18n";

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[var(--border-default)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <div className="mb-3 inline-flex items-center rounded-full border border-[var(--border-default)] bg-[color:rgba(92,126,154,0.12)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-5">
      <div className="text-2xl font-semibold text-[var(--text-primary)]">{value}</div>
      <div className="mt-1 text-sm text-[var(--text-secondary)]">{label}</div>
    </div>
  );
}

function Card({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:rgba(229,160,68,0.16)] text-[var(--action-primary)]">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color:rgba(92,126,154,0.16)] text-[var(--action-secondary)]">
              <BadgeCheck className="h-3.5 w-3.5" />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LandingPage({ locale, t }: { locale: Locale; t: Messages }) {
  const dir = getDirection(locale);

  return (
    <div className="min-h-screen bg-[var(--bg-main)]" lang={locale} dir={dir}>
      <Header locale={locale} t={t} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_30%_20%,rgba(229,160,68,0.20),transparent_60%),radial-gradient(700px_circle_at_70%_35%,rgba(92,126,154,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,29,33,0.25),rgba(26,29,33,1))]" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="animate-float-up">
              <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                {t.hero.pill}
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
                {t.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/6285188448383"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--action-primary)] px-5 py-3 text-sm font-medium text-[#111] hover:brightness-105"
                >
                  {t.hero.ctaWhatsApp}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contact@bagdja.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)]"
                >
                  {t.hero.ctaEmail}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat value="1 SDK" label={t.hero.stats.sdk} />
                <Stat value="< 5 min" label={t.hero.stats.setup} />
                <Stat value="80%" label={t.hero.stats.speed} />
                <Stat value="60%" label={t.hero.stats.cost} />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.65)] p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:rgba(229,160,68,0.16)] text-[var(--action-primary)]">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {t.hero.right.title}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">{t.hero.right.subtitle}</div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                      <Store className="h-4 w-4 text-[var(--action-secondary)]" />
                      {t.hero.right.storeTitle}
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {t.hero.right.storeDesc}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                      <KeyRound className="h-4 w-4 text-[var(--action-secondary)]" />
                      {t.hero.right.identityTitle}
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {t.hero.right.identityDesc}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                      <CreditCard className="h-4 w-4 text-[var(--action-secondary)]" />
                      {t.hero.right.monetizeTitle}
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {t.hero.right.monetizeDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-[color:rgba(229,160,68,0.22)] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-[color:rgba(92,126,154,0.22)] blur-3xl" />
            </div>
          </div>
        </section>

        <Section
          id="problem"
          eyebrow={t.sections.problemEyebrow}
          title={t.sections.problemTitle}
          subtitle={t.sections.problemSubtitle}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.sections.developerDilemma}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="text-xl font-semibold text-[var(--text-primary)]">40–60%</div>
                  <div className="text-xs text-[var(--text-secondary)]">{t.sections.devStats.marketing}</div>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="text-xl font-semibold text-[var(--text-primary)]">3–6 mo</div>
                  <div className="text-xs text-[var(--text-secondary)]">{t.sections.devStats.auth}</div>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="text-xl font-semibold text-[var(--text-primary)]">2–4 mo</div>
                  <div className="text-xs text-[var(--text-secondary)]">{t.sections.devStats.billing}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                {t.sections.devStats.footnote}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.sections.userFriction}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="text-xl font-semibold text-[var(--text-primary)]">100+</div>
                  <div className="text-xs text-[var(--text-secondary)]">{t.sections.userStats.passwords}</div>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="text-xl font-semibold text-[var(--text-primary)]">67%</div>
                  <div className="text-xs text-[var(--text-secondary)]">{t.sections.userStats.abandon}</div>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="text-xl font-semibold text-[var(--text-primary)]">94%</div>
                  <div className="text-xs text-[var(--text-secondary)]">{t.sections.userStats.ssoPref}</div>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="text-xl font-semibold text-[var(--text-primary)]">23%</div>
                  <div className="text-xs text-[var(--text-secondary)]">{t.sections.userStats.ssoOffer}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                {t.sections.userStats.footnote}
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="solution"
          eyebrow={t.sections.solutionEyebrow}
          title={t.sections.solutionTitle}
          subtitle={t.sections.solutionSubtitle}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              icon={<Store className="h-5 w-5" />}
              title={t.sections.pillars.storeTitle}
              items={t.sections.pillars.storeItems}
            />
            <Card
              icon={<KeyRound className="h-5 w-5" />}
              title={t.sections.pillars.identityTitle}
              items={t.sections.pillars.identityItems}
            />
            <Card
              icon={<CreditCard className="h-5 w-5" />}
              title={t.sections.pillars.monetizeTitle}
              items={t.sections.pillars.monetizeItems}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.65)] p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  {t.sections.journeyTitle}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {t.sections.journeySubtitle}
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 md:mt-0 md:grid-cols-3">
                <Stat value="30 sec" label={t.sections.journeyStats.time} />
                <Stat value="3.5×" label={t.sections.journeyStats.onboarding} />
                <Stat value="67% → 8%" label={t.sections.journeyStats.abandonment} />
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="platform"
          eyebrow={t.sections.platformEyebrow}
          title={t.sections.platformTitle}
          subtitle={t.sections.platformSubtitle}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.sections.devExpTitle}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                    <KeyRound className="h-4 w-4 text-[var(--action-secondary)]" />
                    {t.sections.devExp.authTitle}
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {t.sections.devExp.authDesc}
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                    <CreditCard className="h-4 w-4 text-[var(--action-secondary)]" />
                    {t.sections.devExp.payTitle}
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {t.sections.devExp.payDesc}
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                    <Users className="h-4 w-4 text-[var(--action-secondary)]" />
                    {t.sections.devExp.userTitle}
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {t.sections.devExp.userDesc}
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                    <LineChart className="h-4 w-4 text-[var(--action-secondary)]" />
                    {t.sections.devExp.analyticsTitle}
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {t.sections.devExp.analyticsDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.65)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.sections.integrationTitle}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {t.sections.integrationSubtitle}
              </p>
              <pre className="mt-4 overflow-x-auto rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4 text-xs text-[color:rgba(224,226,229,0.92)]">
                <code>{`import { Bagdja } from '@bagdja/sdk';

const bagdja = new Bagdja({ apiKey: 'your-api-key' });

await bagdja.auth.init();
await bagdja.billing.configure(/* ... */);`}</code>
              </pre>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Stat value="< 1 week" label={t.sections.integrationStats.launch} />
                <Stat value="9–11 mo" label={t.sections.integrationStats.saved} />
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow={t.sections.servicesEyebrow}
          title={t.sections.servicesTitle}
          subtitle={t.sections.servicesSubtitle}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              icon={<Wrench className="h-5 w-5" />}
              title={t.sections.services.customTitle}
              items={t.sections.services.customItems}
            />
            <Card
              icon={<PackageCheck className="h-5 w-5" />}
              title={t.sections.services.procurementTitle}
              items={t.sections.services.procurementItems}
            />
            <Card
              icon={<Handshake className="h-5 w-5" />}
              title={t.sections.services.partnershipTitle}
              items={t.sections.services.partnershipItems}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.65)] p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:rgba(229,160,68,0.16)] text-[var(--action-primary)]">
                  <Boxes className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {t.sections.services.consultTitle}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {t.sections.services.consultDesc}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/6285188448383"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--action-primary)] px-5 py-3 text-sm font-medium text-[#111] hover:brightness-105"
                >
                  {t.sections.services.consultWhatsApp}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contact@bagdja.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)]"
                >
                  {t.sections.services.consultEmail}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="market"
          eyebrow={t.sections.marketEyebrow}
          title={t.sections.marketTitle}
          subtitle={t.sections.marketSubtitle}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Stat value="$432B → $1.8T" label={t.sections.marketStats.growth} />
            <Stat value="2.5M+" label={t.sections.marketStats.customers} />
            <Stat value="4.2×" label={t.sections.marketStats.multiple} />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.sections.segmentsTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                {t.sections.segmentsItems.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.65)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.sections.whyNowTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {t.sections.whyNowBody}
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="business"
          eyebrow={t.sections.businessEyebrow}
          title={t.sections.businessTitle}
          subtitle={t.sections.businessSubtitle}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              icon={<CreditCard className="h-5 w-5" />}
              title={t.sections.revenueShareTitle}
              items={t.sections.revenueShareItems}
            />
            <Card
              icon={<LineChart className="h-5 w-5" />}
              title={t.sections.subscriptionsTitle}
              items={t.sections.subscriptionsItems}
            />
            <Card
              icon={<Rocket className="h-5 w-5" />}
              title={t.sections.enterpriseTitle}
              items={t.sections.enterpriseItems}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <Stat value="$500K" label={t.sections.projection.y1} />
              <Stat value="$3M" label={t.sections.projection.y2} />
              <Stat value="$12M" label={t.sections.projection.y3} />
              <Stat value="Month 18" label={t.sections.projection.breakeven} />
            </div>
          </div>
        </Section>

        <Section
          id="gtm"
          eyebrow={t.sections.gtmEyebrow}
          title={t.sections.gtmTitle}
          subtitle={t.sections.gtmSubtitle}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                <Rocket className="h-4 w-4 text-[var(--action-primary)]" />
                {t.sections.phases.p1}
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{t.sections.phases.p1Body}</p>
            </div>
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                <Users className="h-4 w-4 text-[var(--action-primary)]" />
                {t.sections.phases.p2}
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{t.sections.phases.p2Body}</p>
            </div>
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                <LineChart className="h-4 w-4 text-[var(--action-primary)]" />
                {t.sections.phases.p3}
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{t.sections.phases.p3Body}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Stat value="1,000" label={t.sections.gtmStats.apps} />
            <Stat value="100K" label={t.sections.gtmStats.users} />
            <Stat value="NPS 50+" label={t.sections.gtmStats.nps} />
          </div>
        </Section>

        {/* Vision + CTA */}
        <section className="border-t border-[var(--border-default)]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.65)] p-8 md:p-10">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_20%_30%,rgba(229,160,68,0.20),transparent_55%),radial-gradient(650px_circle_at_80%_40%,rgba(92,126,154,0.18),transparent_50%)]" />
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                    {t.sections.ctaTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                    {t.sections.ctaBody}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/6285188448383"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--action-primary)] px-5 py-3 text-sm font-medium text-[#111] hover:brightness-105"
                  >
                    {t.sections.ctaPrimary}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:contact@bagdja.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)]"
                  >
                    contact@bagdja.com
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                <Image src="/icon-logo.png" alt="Bagdja" width={28} height={28} />
                <span>Store</span>
                <span className="opacity-50">•</span>
                <span>Identity</span>
                <span className="opacity-50">•</span>
                <span>Monetize</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
