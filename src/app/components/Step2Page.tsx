import { useState } from "react";
import svgPaths from "../../imports/MarketplaceMatchingStep1Page/svg-eet7rizb0s";
import { imgVector, imgVector1 } from "../../imports/MarketplaceMatchingStep1Page/svg-zmvjy";
import { UsChannelPanel } from "./UsChannelPanel";

// ============================================================
// Data
// ============================================================

const MAJOR_MARKETS = ["UK", "DE", "FR", "IT", "ES", "NL"];
const OTHER_COUNTRIES = [
  "PL", "AT", "CZ", "CH", "BE", "SE", "NO",
  "DK", "FI", "IE", "PT", "RO", "HU", "GR",
  "SK", "BG", "HR",
];
const ALL_COUNTRIES = [...MAJOR_MARKETS, ...OTHER_COUNTRIES];

// ============================================================
// Primitives
// ============================================================

function RadioCircle({ selected }: { selected: boolean }) {
  return selected ? (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="9" fill="#F5F5F5" r="8" stroke="#006ED8" strokeWidth="2" />
        <circle cx="9" cy="9" fill="#006ED8" r="4.5" />
      </svg>
    </div>
  ) : (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="9" fill="white" r="8.5" stroke="#929292" />
      </svg>
    </div>
  );
}

function CheckboxIcon({ checked, indeterminate }: { checked: boolean; indeterminate: boolean }) {
  const filled = checked || indeterminate;
  return (
    <div className={`shrink-0 size-[16px] rounded-[3px] border flex items-center justify-center ${filled ? "bg-[#006ED8] border-[#006ED8]" : "bg-white border-[#929292]"}`}>
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 3.5L3.8 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {indeterminate && !checked && (
        <svg width="8" height="2" viewBox="0 0 8 2" fill="none">
          <path d="M1 1H7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}

function NumberBadge({ n }: { n: number }) {
  return (
    <div className="bg-[#d42a1d] rounded-full shrink-0 flex items-center justify-center size-[28px]">
      <span className="text-white font-['Inter:Bold',sans-serif] font-bold text-[13px] leading-none">{n}</span>
    </div>
  );
}

function CountryBox({ code, selected, onClick }: { code: string; selected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer relative rounded-[6px] flex items-center justify-center py-2 md:py-[6px] w-[125px] min-w-[100px] max-w-[130px] ${selected ? "bg-[#434343]" : "bg-white"}`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 rounded-[6px] border pointer-events-none ${selected ? "border-[#434343]" : "border-[#e0e0e0]"}`}
      />
      <p className={`font-['Inter:Medium',sans-serif] font-medium text-sm md:text-[14px] leading-[21px] whitespace-nowrap ${selected ? "text-white" : "text-[#434343]"}`}>
        {code}
      </p>
    </div>
  );
}

// ============================================================
// Shared structural elements (identical to Step 1)
// ============================================================

function SiteHeader() {
  return (
    <div className="bg-white shrink-0 w-full" style={{ minHeight: 89 }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-1 py-[24px] px-4 md:px-6 lg:px-8 relative w-full max-w-[1100px] mx-auto">
          <div className="flex gap-[12px] items-center shrink-0">
            <div className="bg-[#d42a1d] relative rounded-[10px] shrink-0 size-[40px]">
              <div className="flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[24px]">
                  <div className="relative size-full">
                    <div
                      className="absolute inset-[12.5%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-3px] mask-size-[24px_24px]"
                      style={{ maskImage: `url("${imgVector}")` }}
                    >
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                        <path d={svgPaths.p2fb94400} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#434343] text-[24px] leading-[36px] tracking-[0.0703px] whitespace-nowrap">Marketplace Matching</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#434343] text-[14px] leading-[20px] tracking-[-0.1504px] whitespace-nowrap">Mercury team project</p>
            </div>
          </div>
          <div className="flex items-center shrink-0 order-first self-end md:order-none md:self-auto md:h-[32px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic shrink-0 text-sm text-gray-400 md:text-[14px] md:text-[#434343] tracking-[-0.1504px] whitespace-nowrap">
              Ingersoll Rand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="flex gap-[8px] items-center shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic shrink-0 text-[#434343] text-[14px] whitespace-nowrap">
        Step 2 of 3
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute flex inset-[29.17%_16.67%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-4.69%_-7.5%_-3.39%_-7.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 17.2927">
                  <path d="M5.7499 15.75L5.7499 0.75" stroke="#191919" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p152244b0} stroke="#191919" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic shrink-0 text-[#434343] text-[14px] whitespace-nowrap">
        Strategic Questions
      </p>
    </div>
  );
}

function SiteFooter() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#434343] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap w-full">
          © 2026 Ingersoll Rand. Internal use only.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// Question card wrapper
// ============================================================

function QuestionCard({ n, title, subtitle, children }: {
  n: number; title: string; subtitle: string; children: React.ReactNode;
}) {
  return (
    <div className="bg-white w-full rounded-[14px] relative">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col gap-[20px] p-3 md:p-[24px] relative">
        <div className="flex flex-col gap-[4px]">
          <div className="flex items-start gap-[12px]">
            <div className="shrink-0 mt-[3px]"><NumberBadge n={n} /></div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] md:text-[18px] text-[#434343] leading-[22px] md:leading-[25px]">{title}</p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#434343] leading-[20px] pl-[40px]">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

// ============================================================
// Main page
// ============================================================

export default function Step2Page({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const [usChannel, setUsChannel] = useState<string | null>(null);
  const [rankedMarketplaces, setRankedMarketplaces] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Set<string>>(new Set());
  const [showMore, setShowMore] = useState(true);
  const [channelStrategy, setChannelStrategy] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const toggleCountry = (code: string) => {
    setSelectedCountries(prev => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code); else next.add(code);
      return next;
    });
  };

  const allSelected = selectedCountries.size === ALL_COUNTRIES.length;
  const someSelected = selectedCountries.size > 0 && !allSelected;

  const toggleAll = () => {
    if (allSelected || someSelected) setSelectedCountries(new Set());
    else setSelectedCountries(new Set(ALL_COUNTRIES));
  };

  const selectedList = ALL_COUNTRIES.filter(c => selectedCountries.has(c));

  const isFormComplete =
    usChannel !== null &&
    (usChannel === "no" || rankedMarketplaces.length >= 1) &&
    selectedCountries.size > 0 &&
    channelStrategy !== null;

  return (
    <div className="bg-[#f9fafb] flex flex-col items-start min-h-full w-full overflow-x-hidden">
      <SiteHeader />
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-[24px] items-start py-[32px] w-full max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">

          <Breadcrumbs />

          {/* Page title */}
          <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-xl md:text-[30px] text-[#434343] tracking-[0.3955px] leading-tight md:leading-[36px]">
              Tell Us About Your Strategy
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#434343] leading-[24px]">
              These 4 questions help us match your brand to the right European marketplaces.
            </p>
          </div>

          {/* Q1 — US Channels */}
          <QuestionCard
            n={1}
            title="Does your brand currently sell on US marketplaces or distributors?"
            subtitle="US channel success is a strong predictor of EU marketplace fit"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {[
                { value: "yes", label: "Yes, we sell on US channels" },
                { value: "no",  label: "No, not yet / non US-brand" },
              ].map(opt => (
                <div
                  key={opt.value}
                  onClick={() => { setUsChannel(opt.value); if (opt.value !== "yes") setRankedMarketplaces([]); }}
                  className="relative cursor-pointer rounded-[8px] flex items-center gap-[12px] px-[16px] py-[16px] bg-white"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-[8px] border border-[#e0e0e0] pointer-events-none"
                  />
                  <RadioCircle selected={usChannel === opt.value} />
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#434343] leading-[21px]">
                    {opt.label}
                  </span>
                </div>
              ))}
            </div>

            {usChannel === "yes" && (
              <UsChannelPanel onRankedChange={setRankedMarketplaces} />
            )}
          </QuestionCard>

          {/* Q2 — European countries */}
          <QuestionCard
            n={2}
            title="Which European countries are you targeting?"
            subtitle="Select all countries where you want marketplace presence"
          >
            {/* Select all */}
            <div className="flex items-center gap-[8px] cursor-pointer" onClick={toggleAll}>
              <CheckboxIcon checked={allSelected} indeterminate={someSelected} />
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#434343] leading-[21px]">
                Select all markets (23)
              </span>
            </div>

            {/* Major Markets */}
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[#434343] leading-[20px]">
                Major Markets
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {MAJOR_MARKETS.map(code => (
                  <CountryBox
                    key={code}
                    code={code}
                    selected={selectedCountries.has(code)}
                    onClick={() => toggleCountry(code)}
                  />
                ))}
              </div>
            </div>

            {/* Expand/collapse toggle */}
            <div
              className="flex items-center gap-[6px] cursor-pointer"
              onClick={() => setShowMore(v => !v)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ transition: "transform 0.2s", transform: showMore ? "rotate(0deg)" : "rotate(-90deg)" }}
              >
                <path d="M3 5L7 9L11 5" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#434343] leading-[21px]">
                Show more countries (17)
              </span>
            </div>

            {/* Other Countries (collapsible) */}
            {showMore && (
              <div className="flex flex-col gap-[10px]">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[#434343] leading-[20px]">
                  Other Countries
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {OTHER_COUNTRIES.map(code => (
                    <CountryBox
                      key={code}
                      code={code}
                      selected={selectedCountries.has(code)}
                      onClick={() => toggleCountry(code)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Selection status */}
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[21px] text-[#929292]">
              {selectedList.length === 0
                ? "No countries selected"
                : `${selectedList.length} countries selected`}
            </p>
          </QuestionCard>

          {/* Q3 — Channel strategy */}
          <QuestionCard
            n={3}
            title="What is your preferred channel strategy?"
            subtitle="How selectively do you want to distribute?"
          >
            <div className="flex flex-col">
              {[
                { value: "exclusive", label: "Exclusive", desc: "1-2 key marketplaces per country, tight control" },
                { value: "selective", label: "Selective", desc: "3-5 marketplaces per country, balanced reach" },
                { value: "open",      label: "Open",      desc: "Maximum reach, list on all viable marketplaces" },
              ].map(opt => (
                <div
                  key={opt.value}
                  onClick={() => setChannelStrategy(opt.value)}
                  className="flex items-start gap-[10px] py-[10px] cursor-pointer"
                >
                  <div className="mt-[3px] shrink-0">
                    <RadioCircle selected={channelStrategy === opt.value} />
                  </div>
                  <div className="flex flex-col gap-[1px]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-[#434343] leading-[22px]">
                      {opt.label}
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#434343] leading-[20px]">
                      {opt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </QuestionCard>

          {/* Q4 — Notes */}
          <QuestionCard
            n={4}
            title="Anything else we should know?"
            subtitle="Special requirements, restrictions, or strategic priorities"
          >
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="e.g., 'We need marketplaces that support hazardous materials' or 'Already in talks with RS Online'"
              className="w-full rounded-[8px] border border-[#e0e0e0] resize-none outline-none p-[12px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#434343] leading-[20px] placeholder:text-[#929292] focus:border-[#CACACA]"
              style={{ minHeight: 120 }}
            />
          </QuestionCard>

          {/* Bottom actions */}
          <div className="flex items-center justify-between w-full py-[4px] gap-3">
            {/* Back to Profile */}
            <div
              onClick={onBack}
              className="relative cursor-pointer min-h-[44px] rounded-[8px] flex-1 lg:flex-none flex items-center justify-center"
            >
              <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex gap-[4px] items-center justify-center min-h-[inherit] px-[12px] py-[10px]">
                <div className="relative shrink-0 size-[20px] flex items-center justify-center">
                  <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M5.5 1L1 5.5L5.5 10" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex items-center justify-center px-[6px]">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic shrink-0 text-[16px] text-[#434343] whitespace-nowrap">
                    Back to Profile
                  </p>
                </div>
              </div>
            </div>

            {/* Score Marketplaces */}
            <div
              onClick={isFormComplete ? onNext : undefined}
              className={`min-h-[44px] relative rounded-[8px] flex-1 lg:flex-none transition-opacity ${
                isFormComplete
                  ? "bg-[#d42a1d] cursor-pointer opacity-100"
                  : "bg-[#d42a1d] cursor-not-allowed opacity-30 pointer-events-none"
              }`}
            >
              <div aria-hidden className="absolute border border-[#d42a1d] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex gap-[4px] items-center justify-center min-h-[inherit] px-[12px] py-[10px] relative">
                <div className="flex items-center justify-center px-[6px]">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic shrink-0 text-[16px] text-white whitespace-nowrap">
                    Score Marketplaces
                  </p>
                </div>
                <div className="relative shrink-0 size-[20px]">
                  <div className="absolute inset-0">
                    <div
                      className="absolute bottom-1/4 left-[33.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8px_-6px] mask-size-[24px_24px] right-[35.83%] top-1/4"
                      style={{ maskImage: `url("${imgVector1}")` }}
                    >
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                        <path d={svgPaths.pd581500} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
