import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

type Lang = "KO" | "EN";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THÉONÉ — LEGAL TECH & CROSS-BORDER OPERATIONS" },
      {
        name: "description",
        content:
          "THÉONÉ Co., Ltd. — Premium legal tech and cross-border operations, governed by accountable human experts.",
      },
      { property: "og:title", content: "THÉONÉ" },
      {
        property: "og:description",
        content: "LEGAL TECH & CROSS-BORDER OPERATIONS.",
      },
    ],
  }),
  component: Index,
});

const content = {
  KO: {
    contact: "Contact",
    heroTagline: "LEGAL TECH & CROSS-BORDER OPERATIONS",
    heroEntity: "법인 설립 준비 중",
    venturesLabel: "Professional Venture",
    venture1Title: "서울 데스크",
    venture1Body:
      "리걸테크 기반으로 국내외 로펌 네트워크 연계 및 NDA 법무 검토를 원스톱으로 지원하며, 해외 기업의 국내 인바운드·국내 기업의 글로벌 아웃바운드를 지원하는 크로스보더 비즈니스 오퍼레이션(LPO) 서비스를 구축합니다.",
    venture2Title: "서울 프록시",
    venture2Body:
      "해외 거주 자산가 및 교포를 대상으로 서울 주요 자산에 대한 맞춤형 실황 분석 리포트를 비대면으로 제공하고, 국내 자산 관리를 위한 프리미엄 자산 컨설팅 서비스로 도약합니다.",
    leadershipLabel: "Leadership Profile",
    leadershipBody:
      "엔지니어로서의 정밀한 트렌드 파악 및 시장 분석 능력과, 뉴욕주 변호사로서의 국제 법무 전문성을 결합하여 주식회사 테오네의 크로스보더 오퍼레이션(LPO) 및 자산 컨설팅 인프라를 총괄합니다.",
    leadershipName: "범하나 대표 · 뉴욕주 변호사",
    addrLabel: "A.",
    address:
      "서울시 강남구 봉은사로 524, 더 웨스틴 서울 파르나스 B269-11",
    visit: "Visit",
    locale: "SEOUL, REPUBLIC OF KOREA",
  },
  EN: {
    contact: "Contact",
    heroTagline: "LEGAL TECH & CROSS-BORDER OPERATIONS",
    heroEntity: "In Development",
    venturesLabel: "Professional Venture",
    venture1Title: "Seoul Desk",
    venture1Body:
      "Leveraging legal tech to provide one-stop support for cross-border NDA reviews and law firm network coordination, building a cross-border business operations (LPO) service for inbound and outbound clients.",
    venture2Title: "Seoul Proxy",
    venture2Body:
      "Delivering bespoke, remote asset status reports on prime Seoul properties for non-residents and overseas Koreans, while scaling into a premium asset consulting service for domestic asset management.",
    leadershipLabel: "Leadership Profile",
    leadershipBody:
      "Combining an engineer's sharp eye for trends and market analysis with a New York attorney's international legal expertise to lead THÉONÉ's cross-border operations (LPO) and asset consulting infrastructure.",
    leadershipName: "Hana Beom — CEO & New York Attorney-at-Law",
    addrLabel: "A.",
    address:
      "B269-11, The Westin Seoul Parnas, Bongeunsa-ro 524, Gangnam-gu, Seoul, Republic of Korea",
    visit: "Visit",
    locale: "SEOUL, REPUBLIC OF KOREA",
  },
} as const;

function Index() {
  const [lang, setLang] = useState<Lang>("EN");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="px-6 md:px-16 lg:px-24 pt-8 md:pt-10">
        <div className="flex items-center justify-between">
          <a href="#" className="font-serif text-2xl md:text-[28px] tracking-tight">
            THÉONÉ
          </a>
          <nav className="flex items-center gap-6 md:gap-10 text-xs md:text-[13px] uppercase tracking-[0.18em]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang("KO")}
                className={`transition-opacity ${lang === "KO" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                aria-pressed={lang === "KO"}
              >
                KO
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLang("EN")}
                className={`transition-opacity ${lang === "EN" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                aria-pressed={lang === "EN"}
              >
                EN
              </button>
            </div>
            <a href="#contact" className="hover:opacity-60 transition-opacity">
              {t.contact}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — Corporate */}
      <section className="px-6 md:px-16 lg:px-24 pt-32 md:pt-48 pb-32 md:pb-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[1.02] tracking-tight">
            THÉONÉ
          </h1>
          <p className="mt-8 md:mt-10 text-xs md:text-sm uppercase tracking-[0.32em] text-muted-foreground">
            {t.heroTagline}
          </p>
          <div className="mt-12 md:mt-16 mx-auto w-24 divider-thin" />
          <p className="mt-10 md:mt-12 font-serif text-lg md:text-xl">
            {t.heroEntity}
          </p>
        </div>
      </section>

      {/* Professional Venture */}
      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              01 / {t.venturesLabel}
            </span>
          </div>
          <div className="divider-thin mb-16 md:mb-20" />

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <VentureCard
              title={t.venture1Title}
              body={t.venture1Body}
              href="https://seoul-desk.com"
              visit={t.visit}
            />
            <VentureCard
              title={t.venture2Title}
              body={t.venture2Body}
              href="https://seoulproxy.com"
              visit={t.visit}
            />
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="px-6 md:px-16 lg:px-24 pb-32 md:pb-48">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              02 / {t.leadershipLabel}
            </span>
          </div>
          <div className="divider-thin mb-16 md:mb-20" />

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[15px] md:text-[17px] leading-[1.9] text-foreground/90">
              {t.leadershipBody}
            </p>
            <div className="mt-10 md:mt-12 mx-auto w-16 divider-thin" />
            <p className="mt-8 font-serif text-lg md:text-xl">
              {t.leadershipName}
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="divider-thin mb-12 md:mb-16" />
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-start">
            <div className="md:col-span-4">
              <div className="font-serif text-3xl md:text-4xl">THÉONÉ</div>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                {t.heroTagline}
              </p>
            </div>

            <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
              <FooterField label="E.">
                <a
                  href="mailto:hana.beom@theo-ne.com"
                  className="relative inline-block font-serif text-base md:text-lg after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-foreground hover:opacity-70 transition-opacity break-all"
                >
                  hana.beom@theo-ne.com
                </a>
              </FooterField>
              <FooterField label="W.">
                <a
                  href="https://www.theo-ne.com"
                  className="text-sm md:text-base hover:opacity-60 transition-opacity"
                >
                  www.theo-ne.com
                </a>
              </FooterField>
              <FooterField label={t.addrLabel}>
                <p className="text-sm md:text-[15px] leading-relaxed">{t.address}</p>
              </FooterField>
            </div>
          </div>

          <div className="mt-16 md:mt-24 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span>© {new Date().getFullYear()} THÉONÉ Co., Ltd.</span>
            <span>Seoul · New York</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function VentureCard({
  title,
  body,
  href,
  visit,
}: {
  title: string;
  body: string;
  href: string;
  visit: string;
}) {
  return (
    <article className="group border border-foreground/20 p-8 md:p-12 flex flex-col h-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-serif text-2xl md:text-[32px] leading-tight hover:opacity-60 transition-opacity"
      >
        {title}
        <span className="ml-2 text-base align-middle">↗</span>
      </a>
      <div className="mt-6 divider-thin" />
      <p className="mt-6 text-[14px] md:text-[15px] leading-[1.85] text-foreground/85 flex-1">
        {body}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 text-[11px] uppercase tracking-[0.32em] hover:opacity-60 transition-opacity self-start"
      >
        {visit} —
      </a>
    </article>
  );
}

function FooterField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-serif text-base mb-3 text-muted-foreground">{label}</div>
      {children}
    </div>
  );
}
