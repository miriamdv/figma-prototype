import { useState } from "react";
import svgPaths from "../../imports/MarketplaceMatchingStep3Page/svg-4hc1bkz0hg";
import { imgVector, imgVector1, imgVector2 } from "../../imports/MarketplaceMatchingStep3Page/svg-y7bp9";
import PriorityList from "../../imports/PriorityList/PriorityList";

// ── Shared icon primitives ────────────────────────────────────────────────────

function CheckmarkCircleIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]"
          style={{ maskImage: `url("${imgVector2}")` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p389e8400} fill={color} stroke="#0064C5" strokeWidth="0.025" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckmarkCircleIconSolid({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]"
          style={{ maskImage: `url("${imgVector2}")` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pbd95600} fill={color} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AlertShieldIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0 overflow-clip">
        <div className="absolute inset-[8.33%_10.42%]">
          <div className="absolute inset-[-4.5%_-4.73%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3311 18.1667">
              <path d={svgPaths.pbce7400} stroke="#5088B4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M8.6654 12.4167H8.67288" stroke="#5088B4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p37770ce0} stroke="#5088B4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

function SiteHeader() {
  return (
    <div className="bg-white shrink-0 w-full" style={{ minHeight: 89 }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between py-[24px] px-8 relative w-full max-w-[1100px] mx-auto">
          <div className="content-stretch flex gap-[12px] h-[56px] items-center relative shrink-0 w-[294.891px]">
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
            <div className="flex-[1_0_0] h-[56px] min-w-px relative">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="h-[36px] relative shrink-0 w-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#434343] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Marketplace Matching</p>
                </div>
                <div className="h-[20px] relative shrink-0 w-full">
                  <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#434343] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Mercury team project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[32px] items-center relative shrink-0">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#434343] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Ingersoll Rand</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Analysis Summary Section ──────────────────────────────────────────────────

function AnalysisSummarySection() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[10px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        {/* Header row */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="h-[30px] relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic text-[#434343] text-[24px] tracking-[-0.25px] whitespace-nowrap">Analysis Summary</p>
          </div>
          <div className="content-stretch flex items-center justify-center min-h-[32px] min-w-[32px] p-[8px] relative rounded-[6px] shrink-0">
            <div aria-hidden className="absolute border border-transparent border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="relative shrink-0 size-[18px]">
              <div className="absolute inset-0">
                <div
                  className="absolute bottom-[35.94%] left-1/4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-7.975px] mask-size-[24px_24px] right-1/4 top-[33.23%]"
                  style={{ maskImage: `url("${imgVector1}")` }}
                >
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5.55">
                    <path d={svgPaths.p1c5eb600} fill="#545454" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="mt-[12px] shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#434343] text-[16px]">
            This marketplace analysis examined <span>8 registered markets</span>, operating in <span>3 flexible deployment solutions</span> primarily for the <span>marketplace/e-com and under conservatives</span>. We've analyzed its core of execution and discovered with specialty: hire vendors a wide range of products to various sectors safely compliant as of the 21st.
          </p>
        </div>
        {/* Key Strengths */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full mt-[12px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Key Strengths</p>
          <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
            {["Technology", "Quality", "Fast Delivery", "Specialized Solutions", "Range of Products"].map(tag => (
              <div key={tag} className="bg-white content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0">
                <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Marketplace Score Card ────────────────────────────────────────────────────

interface ScoreCardProps {
  rank: string;
  name: string;
  tag?: string;
  status: "verified" | "inferred";
  score: number;
  scoreLabel: string;
  scoreColor: string;
  countries: string;
  barFill: number; // 0–100
}

function MarketplaceScoreCard({ rank, name, tag, status, score, scoreLabel, scoreColor, countries, barFill }: ScoreCardProps) {
  return (
    <div className="bg-white drop-shadow-[0px_3px_5px_rgba(0,0,0,0.15)] flex-[1_0_0] min-w-px relative rounded-[14px]">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[18px] items-start pb-[16px] pt-[24px] px-[24px] relative size-full">
        {/* Header row */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic text-[#434343] text-[24px] tracking-[-0.25px] whitespace-nowrap">{rank}</p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[#434343] text-[16px] whitespace-nowrap">{name}</p>
          </div>
          {tag && (
            <div className="bg-[#d42a1d] content-stretch flex h-[24px] items-center justify-center px-[12px] py-[4px] relative rounded-[33554400px] shrink-0">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{tag}</p>
            </div>
          )}
        </div>
        {/* Divider */}
        <div className="h-px w-full bg-black/10 shrink-0" />
        {/* Body */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          {/* Status + Score */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {status === "verified" ? (
              <div className="bg-[#e6f3ef] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0">
                <CheckmarkCircleIcon color="#048E39" />
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#048e39] text-[14px] whitespace-nowrap">Verified</p>
              </div>
            ) : (
              <div className="bg-[#e6f1fb] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0">
                <AlertShieldIcon />
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#5088b4] text-[14px] whitespace-nowrap">Inferred</p>
              </div>
            )}
            <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] not-italic relative shrink-0 text-[30px] tracking-[-0.25px] whitespace-nowrap" style={{ color: scoreColor }}>{score}%</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-right whitespace-nowrap" style={{ color: scoreColor }}>{scoreLabel}</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-[4px] relative shrink-0 w-full">
            <div className="absolute bg-[rgba(0,0,0,0.15)] inset-0 rounded-[9999px]" />
            <div className="absolute bg-[#048e39] inset-y-0 left-0 rounded-[9999px]" style={{ right: `${100 - barFill}%` }} />
          </div>
          {/* Countries */}
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative text-[#777] text-[14px] w-full">{countries}</p>
          {/* Details link */}
          <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
            <div className="bg-transparent content-stretch flex gap-[2px] items-center justify-center min-h-[32px] px-[8px] py-[2px] relative rounded-[6px] shrink-0 cursor-pointer">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#777] text-[14px] whitespace-nowrap">Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Top Marketplace Matches ───────────────────────────────────────────────────

function TopMarketplaceMatchesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic text-[#434343] text-[24px] tracking-[-0.25px]">Top Marketplace Matches</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px]">Your best opportunities based on fit score, market reach, and strategic alignment</p>
      </div>
      <div className="content-stretch flex gap-[16px] items-stretch relative shrink-0 w-full">
        <MarketplaceScoreCard rank="#1" name="Dedham LAN" tag="Best Match" status="verified" score={78} scoreLabel="Good Fit" scoreColor="#048e39" countries="UK | DE | FR" barFill={74} />
        <MarketplaceScoreCard rank="#2" name="Dedham LAN" status="verified" score={70} scoreLabel="Good Fit" scoreColor="#048e39" countries="UK | DE | FR" barFill={74} />
        <MarketplaceScoreCard rank="#3" name="Dedham LAN" status="inferred" score={66} scoreLabel="Good Fit" scoreColor="#048e39" countries="UK | DE | FR" barFill={74} />
      </div>
    </div>
  );
}

// ── Entry Strategy (Book a Call) CTA ─────────────────────────────────────────

function EntryStrategyCTA({ title, description }: { title: string; description: React.ReactNode }) {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[10px] shrink-0 w-full">
      <div className="content-stretch flex items-center p-[24px] relative size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] not-italic text-[#434343] text-[20px]">{title}</p>
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px]">{description}</div>
        </div>
        <div className="bg-[#d42a1d] content-stretch flex gap-[4px] items-center justify-center min-h-[44px] px-[12px] py-[10px] relative rounded-[8px] shrink-0 cursor-pointer">
          <div aria-hidden className="absolute border border-[#d42a1d] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Book a Call</p>
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-0">
              <div
                className="absolute inset-[8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]"
                style={{ maskImage: `url("${imgVector2}")` }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
                  <path d={svgPaths.p2bdc2b00} fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Circular Score Widget ─────────────────────────────────────────────────────

interface ScoringProps { value: number; color: string; arcPath: string; arcViewBox: string; arcInset: string }

function ScoringWidget({ value, color, arcPath, arcViewBox, arcInset }: ScoringProps) {
  return (
    <div className="relative shrink-0 size-[43px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
          <path d={svgPaths.p296377a0} fill="black" fillOpacity="0.1" />
        </svg>
        <div className={`absolute ${arcInset}`}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={arcViewBox}>
            <path d={arcPath} fill={color} />
          </svg>
        </div>
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-normal relative shrink-0 text-[14px] whitespace-nowrap" style={{ color, fontVariationSettings: '"wdth" 100' }}>{value}</p>
      </div>
    </div>
  );
}

// ── All Marketplaces — List ────────────────────────────────────────────────────

interface ListItemData {
  rank: string;
  rankColor: string;
  name: string;
  statusType: "verified" | "inferred";
  fitLabel: string;
  fitBg: string;
  fitColor: string;
  scoreValue: number;
  scoreColor: string;
  arcPath: string;
  arcViewBox: string;
  arcInset: string;
  isFirst?: boolean;
  badgeLabel?: string;
  scores: Array<{ label: string; score: string }>;
  strengths: string[];
  weaknesses: string[];
}

const LIST_ITEMS: ListItemData[] = [
  {
    rank: "#1", rankColor: "#d42a1d", name: "Dedham LAN", statusType: "verified", fitLabel: "Good Fit", fitBg: "#e6f3ef", fitColor: "#048e39",
    scoreValue: 90, scoreColor: "#048E39", arcPath: svgPaths.pb784500, arcViewBox: "0 0 41.0401 43", arcInset: "inset-[0_0_0_4.56%]", isFirst: true,
    badgeLabel: "Best Match",
    scores: [{ label: "Category Match", score: "7/15" }, { label: "Customer Type", score: "10/15" }, { label: "Price Point", score: "2/15" }, { label: "Brand Maturity", score: "3/15" }, { label: "Geographic Fit", score: "14/15" }, { label: "B2B Readiness", score: "9/15" }, { label: "Logistics", score: "5/15" }, { label: "Competition", score: "10/15" }],
    strengths: ["Excellent customer type alignment", "US channel success translates here (via Prime)", "Strong geographic coverage of target markets", "Established brand presence in category"],
    weaknesses: ["High competition in industrial category", "Complex fee structure"],
  },
  {
    rank: "#2", rankColor: "#d42a1d", name: "Newton LAN", statusType: "inferred", fitLabel: "Good Fit", fitBg: "#e6f3ef", fitColor: "#048e39",
    scoreValue: 75, scoreColor: "#048E39", arcPath: svgPaths.p1a2b6f00, arcViewBox: "0 0 42.8552 43", arcInset: "inset-[0_0_0_0.34%]",
    scores: [{ label: "Category Match", score: "6/15" }, { label: "Customer Type", score: "9/15" }, { label: "Price Point", score: "3/15" }, { label: "Brand Maturity", score: "4/15" }, { label: "Geographic Fit", score: "12/15" }, { label: "B2B Readiness", score: "8/15" }, { label: "Logistics", score: "5/15" }, { label: "Competition", score: "9/15" }],
    strengths: ["Strong B2B customer segment alignment", "Broad EU market coverage", "Reliable logistics infrastructure"],
    weaknesses: ["Lower brand recognition than top match", "Moderate fee complexity", "Limited specialized category support"],
  },
  {
    rank: "#3", rankColor: "#d42a1d", name: "Cambridge LAN", statusType: "verified", fitLabel: "Good Fit", fitBg: "#e6f3ef", fitColor: "#048e39",
    scoreValue: 60, scoreColor: "#048E39", arcPath: svgPaths.pb784500, arcViewBox: "0 0 41.0401 43", arcInset: "inset-[0_0_0_4.56%]",
    scores: [{ label: "Category Match", score: "5/15" }, { label: "Customer Type", score: "8/15" }, { label: "Price Point", score: "2/15" }, { label: "Brand Maturity", score: "5/15" }, { label: "Geographic Fit", score: "11/15" }, { label: "B2B Readiness", score: "7/15" }, { label: "Logistics", score: "4/15" }, { label: "Competition", score: "8/15" }],
    strengths: ["Good geographic reach in UK & EU", "Competitive commission rates", "Strong technology sector presence"],
    weaknesses: ["Weaker industrial category traffic", "Limited hazmat support", "Smaller seller ecosystem"],
  },
  {
    rank: "#4", rankColor: "#545454", name: "Oxford LAN", statusType: "verified", fitLabel: "Good Fit", fitBg: "#e6f3ef", fitColor: "#048e39",
    scoreValue: 75, scoreColor: "#048E39", arcPath: svgPaths.pb784500, arcViewBox: "0 0 41.0401 43", arcInset: "inset-[0_0_0_4.56%]",
    scores: [{ label: "Category Match", score: "7/15" }, { label: "Customer Type", score: "8/15" }, { label: "Price Point", score: "3/15" }, { label: "Brand Maturity", score: "6/15" }, { label: "Geographic Fit", score: "10/15" }, { label: "B2B Readiness", score: "7/15" }, { label: "Logistics", score: "6/15" }, { label: "Competition", score: "9/15" }],
    strengths: ["Solid academic and research B2B alignment", "Good UK and EU coverage", "Established trust in scientific equipment"],
    weaknesses: ["Niche customer base limits reach", "Higher listing complexity", "Slower onboarding process"],
  },
  {
    rank: "#5", rankColor: "#545454", name: "Stanford LAN", statusType: "inferred", fitLabel: "Good Fit", fitBg: "#e6f3ef", fitColor: "#048e39",
    scoreValue: 60, scoreColor: "#048E39", arcPath: svgPaths.pa059000, arcViewBox: "0 0 32.0367 43", arcInset: "inset-[0_0_0_25.5%]",
    scores: [{ label: "Category Match", score: "5/15" }, { label: "Customer Type", score: "7/15" }, { label: "Price Point", score: "3/15" }, { label: "Brand Maturity", score: "4/15" }, { label: "Geographic Fit", score: "9/15" }, { label: "B2B Readiness", score: "6/15" }, { label: "Logistics", score: "5/15" }, { label: "Competition", score: "7/15" }],
    strengths: ["Strong research institution alignment", "Good US cross-market familiarity", "Reliable payment processing"],
    weaknesses: ["Limited European market penetration", "Lower volume of industrial buyers", "Weak hazardous materials support"],
  },
  {
    rank: "#6", rankColor: "#545454", name: "Harvard Network", statusType: "verified", fitLabel: "Good Fit", fitBg: "#e6f3ef", fitColor: "#048e39",
    scoreValue: 50, scoreColor: "#048E39", arcPath: svgPaths.p2bb3b600, arcViewBox: "0 0 23.9914 42.8552", arcInset: "inset-[0_0_0.34%_44.21%]",
    scores: [{ label: "Category Match", score: "4/15" }, { label: "Customer Type", score: "6/15" }, { label: "Price Point", score: "2/15" }, { label: "Brand Maturity", score: "3/15" }, { label: "Geographic Fit", score: "8/15" }, { label: "B2B Readiness", score: "6/15" }, { label: "Logistics", score: "4/15" }, { label: "Competition", score: "7/15" }],
    strengths: ["Reputable brand association", "Solid B2B buyer base", "Good category breadth"],
    weaknesses: ["Low market share in target EU countries", "Complex fee tiers", "Limited cross-border shipping tools", "Slower dispute resolution"],
  },
  {
    rank: "#7", rankColor: "#545454", name: "MIT Internet", statusType: "verified", fitLabel: "Moderate Fit", fitBg: "#e6f3ef", fitColor: "#048e39",
    scoreValue: 43, scoreColor: "#006ED8", arcPath: svgPaths.p11188380, arcViewBox: "0 0 23.9914 39.762", arcInset: "inset-[0_0_7.53%_44.21%]",
    scores: [{ label: "Category Match", score: "4/15" }, { label: "Customer Type", score: "5/15" }, { label: "Price Point", score: "2/15" }, { label: "Brand Maturity", score: "3/15" }, { label: "Geographic Fit", score: "7/15" }, { label: "B2B Readiness", score: "5/15" }, { label: "Logistics", score: "3/15" }, { label: "Competition", score: "6/15" }],
    strengths: ["Technology-sector buyer alignment", "Decent brand authority", "Good API integration support"],
    weaknesses: ["Limited industrial B2B traffic", "Moderate geographic coverage", "High competition from established players", "Inconsistent EU logistics"],
  },
  {
    rank: "#8", rankColor: "#545454", name: "Berkeley WiFi", statusType: "inferred", fitLabel: "Moderate Fit", fitBg: "#e6f1fb", fitColor: "#5088b4",
    scoreValue: 38, scoreColor: "#006ED8", arcPath: svgPaths.p1b07d370, arcViewBox: "0 0 23.9914 35.3618", arcInset: "inset-[0_0_17.76%_44.21%]",
    scores: [{ label: "Category Match", score: "3/15" }, { label: "Customer Type", score: "5/15" }, { label: "Price Point", score: "2/15" }, { label: "Brand Maturity", score: "2/15" }, { label: "Geographic Fit", score: "6/15" }, { label: "B2B Readiness", score: "4/15" }, { label: "Logistics", score: "3/15" }, { label: "Competition", score: "5/15" }],
    strengths: ["Moderate category match", "Reasonable commission rates", "Growing West Coast brand presence"],
    weaknesses: ["Very limited EU presence", "Low industrial product traffic", "No dedicated B2B tools", "Poor hazardous material compliance"],
  },
  {
    rank: "#9", rankColor: "#545454", name: "Caltech Connection", statusType: "verified", fitLabel: "Moderate Fit", fitBg: "#e6f1fb", fitColor: "#5088b4",
    scoreValue: 33, scoreColor: "#006ED8", arcPath: svgPaths.peae7300, arcViewBox: "0 0 23.9914 29.6047", arcInset: "inset-[0_0_31.15%_44.21%]",
    scores: [{ label: "Category Match", score: "3/15" }, { label: "Customer Type", score: "4/15" }, { label: "Price Point", score: "1/15" }, { label: "Brand Maturity", score: "2/15" }, { label: "Geographic Fit", score: "5/15" }, { label: "B2B Readiness", score: "4/15" }, { label: "Logistics", score: "2/15" }, { label: "Competition", score: "5/15" }],
    strengths: ["Niche scientific community alignment", "Low competition in specialty listings", "Transparent pricing model"],
    weaknesses: ["Minimal EU market access", "Very low buyer volume", "Limited category visibility", "No dedicated account management"],
  },
  {
    rank: "#10", rankColor: "#545454", name: "UCLA Network", statusType: "inferred", fitLabel: "Moderate Fit", fitBg: "#e6f1fb", fitColor: "#5088b4",
    scoreValue: 30, scoreColor: "#006ED8", arcPath: svgPaths.p3e2c7bc0, arcViewBox: "0 0 23.9914 25.7296", arcInset: "inset-[0_0_40.16%_44.21%]",
    scores: [{ label: "Category Match", score: "2/15" }, { label: "Customer Type", score: "4/15" }, { label: "Price Point", score: "1/15" }, { label: "Brand Maturity", score: "2/15" }, { label: "Geographic Fit", score: "4/15" }, { label: "B2B Readiness", score: "3/15" }, { label: "Logistics", score: "2/15" }, { label: "Competition", score: "4/15" }],
    strengths: ["Emerging marketplace potential", "Low entry cost", "Growing tech-adjacent buyer base"],
    weaknesses: ["Lowest overall match score", "No significant EU footprint", "Very limited industrial buyer volume", "Immature seller tools and support"],
  },
];

function MarketplaceListItem({ item, isLast, isSelected, onClick }: { item: ListItemData; isLast: boolean; isSelected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer h-[68.797px] relative shrink-0 w-full transition-colors ${isSelected ? "bg-[#f5f5f5]" : "hover:bg-[#fafafa]"}`}
    >
      {!isLast && <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[6px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
            {/* Left: rank + info */}
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] not-italic relative shrink-0 text-[20px] whitespace-nowrap" style={{ color: isSelected ? "#d42a1d" : "#545454" }}>{item.rank}</p>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">{item.name}</p>
                  {item.statusType === "verified"
                    ? <CheckmarkCircleIconSolid color="#048E39" />
                    : <AlertShieldIcon />
                  }
                </div>
                <div className="rounded-[9999px] shrink-0" style={{ background: item.fitBg }}>
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" style={{ color: item.fitColor }}>{item.fitLabel}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: scoring widget */}
            <ScoringWidget
              value={item.scoreValue}
              color={item.scoreColor}
              arcPath={item.arcPath}
              arcViewBox={item.arcViewBox}
              arcInset={item.arcInset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Marketplace Analysis Panel ────────────────────────────────────────────────

function ScoreGridItem({ label, score }: { label: string; score: string }) {
  return (
    <div className="bg-[#f5f5f5] h-[48px] justify-self-stretch relative rounded-[4px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#434343] text-[14px]">{label}</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">{score}</p>
        </div>
      </div>
    </div>
  );
}

function MarketplaceAnalysisPanel({ item }: { item: ListItemData }) {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 flex-[1_0_0] min-w-px">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative w-full">
        {/* Header row */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 flex-wrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] not-italic relative shrink-0 text-[#d42a1d] text-[20px] whitespace-nowrap">{item.rank}</p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">{item.name}</p>
            {item.statusType === "verified" ? <CheckmarkCircleIconSolid color="#048E39" /> : <AlertShieldIcon />}
            {item.badgeLabel && (
              <div className="bg-[#d42a1d] content-stretch flex h-[24px] items-center justify-center px-[12px] py-[4px] relative rounded-[33554400px] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{item.badgeLabel}</p>
              </div>
            )}
          </div>
        </div>
        {/* Score breakdown */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[#434343] text-[16px] whitespace-nowrap">Score Breakdown</p>
          <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-2 relative shrink-0 w-full">
            {item.scores.map(s => (
              <ScoreGridItem key={s.label + s.score} label={s.label} score={s.score} />
            ))}
          </div>
        </div>
        {/* Strengths & Weaknesses */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[#434343] text-[16px] whitespace-nowrap">Strengths and Weaknesses Analysis</p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Strengths */}
            <div className="bg-white relative rounded-[10px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#048e39] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="content-stretch flex flex-col gap-[4px] items-center pb-[17px] pt-[9px] px-[13px] relative size-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[36px]">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                      <div className="absolute inset-[29.17%_8.33%]">
                        <div className="absolute inset-[-10%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
                            <path d={svgPaths.p1f5e580} stroke="#048E39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]">
                        <div className="absolute inset-[-16.67%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
                            <path d={svgPaths.p26fac1f0} stroke="#048E39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Strengths</p>
                </div>
                <ul className="font-['Inter:Regular',sans-serif] font-normal list-disc not-italic text-[#434343] text-[14px] relative shrink-0 w-full">
                  {item.strengths.map(s => (
                    <li key={s} className="ms-[21px]"><span className="leading-[21px]">{s}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Weaknesses */}
            <div className="bg-white relative rounded-[10px] shrink-0 w-full">
              <div aria-hidden className="absolute border border-[#e22028] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="content-stretch flex flex-col gap-[4px] items-center pb-[17px] pt-[9px] px-[13px] relative size-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[36px]">
                    <div className="flex items-center justify-center relative shrink-0 w-full">
                      <div className="-scale-y-100 flex-none w-full">
                        <div className="h-[20px] overflow-clip relative w-full">
                          <div className="absolute inset-[29.17%_8.33%]">
                            <div className="absolute inset-[-10%_-5%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
                                <path d={svgPaths.p1f5e580} stroke="#D42A1D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]">
                            <div className="absolute inset-[-16.67%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
                                <path d={svgPaths.p26fac1f0} stroke="#D42A1D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Weaknesses</p>
                </div>
                <ul className="font-['Inter:Regular',sans-serif] font-normal list-disc not-italic text-[#434343] text-[14px] relative shrink-0 w-full">
                  {item.weaknesses.map(w => (
                    <li key={w} className="ms-[21px]"><span className="leading-[21px]">{w}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── All Marketplaces Section ──────────────────────────────────────────────────

function AllMarketplacesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = LIST_ITEMS[selectedIndex];

  return (
    <div className="content-stretch flex gap-[24px] items-start py-[24px] relative rounded-[14px] shrink-0 w-full">
      {/* Left: list */}
      <div className="bg-white content-stretch flex flex-col gap-[31px] items-start p-[24px] relative rounded-[14px] shrink-0 w-[457px]">
        <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
        {/* Section header */}
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
          <div className="bg-[#d42a1d] content-stretch flex flex-col items-start pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[36px]">
            <div className="h-[20px] overflow-clip relative shrink-0 w-[18px]">
              <div className="absolute inset-[8.33%]">
                <div className="absolute inset-[-4.5%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18.1667">
                    <path d={svgPaths.p2a313500} stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                    <path d={svgPaths.p21a5ab80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p20a26497} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p1cb1cc40} stroke="white" strokeLinecap="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic text-[#434343] text-[24px] tracking-[-0.25px] whitespace-nowrap">All Marketplaces</p>
        </div>
        {/* List */}
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
          {LIST_ITEMS.map((item, idx) => (
            <MarketplaceListItem
              key={item.rank}
              item={item}
              isLast={idx === LIST_ITEMS.length - 1}
              isSelected={idx === selectedIndex}
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      </div>
      {/* Right: analysis */}
      <MarketplaceAnalysisPanel item={selectedItem} />
    </div>
  );
}

// ── Key Insights Section ──────────────────────────────────────────────────────

function KeyInsightsSection() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[25px] pt-[25px] px-[25px] relative size-full">
        {/* Header */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]">
            <div className="relative shrink-0 size-[24px]">
              <div
                className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]"
                style={{ maskImage: `url("${imgVector}")` }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p301741f0} fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] not-italic text-[#434343] text-[20px] whitespace-nowrap">Key Insights</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Quick overview of your marketplace analysis</p>
          </div>
        </div>
        {/* Stat cards */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] h-[88px] relative shrink-0 w-full">
          {[
            { value: "5",   label: "Strong matches" },
            { value: "78%", label: "Top match score" },
            { value: "3",   label: "Priority markets" },
          ].map(stat => (
            <div key={stat.label} className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] justify-self-stretch relative rounded-[10px] self-stretch shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start pt-[16px] px-[16px] relative size-full">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[38px] not-italic text-[#d42a1d] text-[30px] tracking-[-0.25px] whitespace-nowrap">{stat.value}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Geographic Coverage Section ───────────────────────────────────────────────

function GeographicCoverageSection() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        {/* Header */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]">
            <div className="relative shrink-0 size-[24px]">
              <div
                className="absolute inset-[8.33%_20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-2px] mask-size-[24px_24px]"
                style={{ maskImage: `url("${imgVector}")` }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
                  <path d={svgPaths.p16edaf00} fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] not-italic text-[#434343] text-[20px] whitespace-nowrap">Geographic Coverage</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Market Coverage Analysis</p>
          </div>
        </div>
        {/* Coverage stat cards */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] h-[114px] relative shrink-0 w-full">
          {[
            { value: "100%", label: "US Coverage",    desc: "All major marketplaces" },
            { value: "11",   label: "EU Countries",   desc: "Major markets covered" },
            { value: "23",   label: "Total Markets",  desc: "Global reach potential" },
          ].map(stat => (
            <div key={stat.label} className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] justify-self-stretch relative rounded-[10px] self-stretch shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start pt-[16px] px-[16px] relative size-full">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[38px] not-italic text-[#d42a1d] text-[30px] tracking-[-0.25px]">{stat.value}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">{stat.label}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic text-[#434343] text-[12px]">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Recommended Priority */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Recommended Priority</p>
          <PriorityList />
        </div>
      </div>
    </div>
  );
}

// ── Next Steps Roadmap ────────────────────────────────────────────────────────

interface RoadmapItemData {
  title: string;
  body: string;
  week: string;
  isLast?: boolean;
  iconPaths: React.ReactNode;
}

function RoadmapItemRow({ item }: { item: RoadmapItemData }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      {/* Timeline connector */}
      <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0">
        <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[16777200px] shrink-0 size-[40px]">
          <div aria-hidden className="absolute border border-[#d42a1d] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
          {item.iconPaths}
        </div>
        {!item.isLast && <div className="bg-[#c0c0c0] flex-[1_0_0] min-h-px relative w-[2px]" />}
      </div>
      {/* Text */}
      <div className="content-stretch flex flex-[1_0_0] min-w-px pb-[8px] items-center relative">
        <div className="flex-[1_0_0] min-w-px not-italic text-[#434343]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[16px]">{item.title}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] mb-0 text-[16px]">{item.body}</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[16px]">{item.week}</p>
        </div>
      </div>
    </div>
  );
}

function NextStepsRoadmapSection() {
  const roadmapItems: RoadmapItemData[] = [
    {
      title: "Prioritize Rubix for vendor outreach",
      body: "Highest scoring match at 78/100 with STRONG FIT recommendation",
      week: "Week 1-2",
      iconPaths: (
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pcddfd00} stroke="#D42A1D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M17.5 17.5L13.9167 13.9167" stroke="#D42A1D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      ),
    },
    {
      title: "Use US channel relationships to warm-introduce to EU equivalents",
      body: "Your 7 US channels have direct EU equivalents in our database",
      week: "Week 2-4",
      iconPaths: (
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p25397b80} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p2c4f400} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p2241fff0} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.pae3c380} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      ),
    },
    {
      title: "Explore additional marketplace ideas",
      body: "Consider other detailed reports and insights from the discovery phase, backed by supporting results and current positions.",
      week: "Week 4-6",
      iconPaths: (
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pdf995c0} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M7.5 15H12.5" stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M8.33333 18.3333H11.6667" stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      ),
    },
    {
      title: "Undertake deeper research",
      body: "Investigate marketplace positioning and partnering goals in relation to customer challenges; gather comprehensive information to support clear collaboration and goal alignment.",
      week: "Week 4-6",
      isLast: true,
      iconPaths: (
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g clipPath="url(#clip0_s3)">
              <path d={svgPaths.p14d24500} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p240d7000} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p25499600} stroke="#C1261A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </g>
            <defs><clipPath id="clip0_s3"><rect fill="white" height="20" width="20" /></clipPath></defs>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#f5f5f5] relative rounded-[14px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
        {/* Header row */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]">
              <div className="relative shrink-0 size-[24px]">
                <div
                  className="absolute bottom-1/4 left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-6px] mask-size-[24px_24px] right-[20.83%] top-1/4"
                  style={{ maskImage: `url("${imgVector}")` }}
                >
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
                    <path d={svgPaths.pbbbd100} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] not-italic text-[#434343] text-[20px] whitespace-nowrap">Next Steps Roadmap</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Market Coverage Analysis</p>
            </div>
          </div>
          {/* Download Report button */}
          <div className="bg-white min-h-[44px] relative rounded-[8px] shrink-0 cursor-pointer">
            <div aria-hidden className="absolute border border-[#545454] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] px-[12px] py-[10px] relative size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#545454] text-[16px] whitespace-nowrap">Download Report</p>
              <div className="relative shrink-0 size-[20px]">
                <div
                  className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]"
                  style={{ maskImage: `url("${imgVector2}")` }}
                >
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                    <path d={svgPaths.p1e1ce8a0} fill="#545454" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Roadmap items */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pt-[24px] relative w-full">
          {roadmapItems.map((item, i) => <RoadmapItemRow key={i} item={item} />)}
        </div>
      </div>
    </div>
  );
}

// ── Main Step3Page ────────────────────────────────────────────────────────────

export default function Step3Page({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-[#f9fafb] flex flex-col items-start min-h-full w-full overflow-x-hidden">
      <SiteHeader />
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-[24px] items-start py-[32px] w-full max-w-[1100px] mx-auto px-8">

          {/* Back link */}
          <div
            onClick={onBack}
            className="h-[20px] relative shrink-0 w-full cursor-pointer flex items-center gap-[8px]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p203476e0} fill="#434343" />
              <path d="M12.6667 8H3.33333" fill="#434343" />
            </svg>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic text-[#434343] text-[14px] whitespace-nowrap">Back to questionnaire</p>
          </div>

          {/* Page header */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic text-[#434343] text-[30px] tracking-[0.3955px]">Marketplace Analysis Results</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#434343] text-[16px]">
              <span className="font-bold">LC Dover</span>{" - 10 marketplaces scored"}
            </p>
          </div>

          <AnalysisSummarySection />
          <TopMarketplaceMatchesSection />

          <EntryStrategyCTA
            title="Want to learn more about marketplace score?"
            description={<p>Get a custom consultation with our marketplace team to discuss implementation strategy, timelines, and partnership opportunities.</p>}
          />

          <AllMarketplacesSection />
          <KeyInsightsSection />
          <GeographicCoverageSection />
          <NextStepsRoadmapSection />

          <EntryStrategyCTA
            title="Get Your Complete Marketplace Entry Strategy"
            description={<><p className="mb-0">Our automated analysis covers about 70% of the picture.</p><p>A 1-hour strategy session fills the remaining gaps with tailored recommendations for your business.</p></>}
          />

          {/* Footer */}
          <div className="h-[20px] relative shrink-0 w-full flex items-center justify-center">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#434343] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">© 2026 Ingersoll Rand. Internal use only.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
