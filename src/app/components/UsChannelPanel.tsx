import { useEffect, useState } from "react";
import svgPaths from "../../imports/UsChannelsSection/svg-8mmuq59uoi";
import { imgVector, imgVector1 } from "../../imports/UsChannelsSection/svg-gb9j5";

// Order matches the Figma column-first 5×2 layout (left col then right col)
const STANDARD_MARKETPLACES: { id: string; label: string }[] = [
  { id: "grainger",       label: "Grainger" },
  { id: "motion",         label: "Motion Industries" },
  { id: "mcmaster",       label: "McMaster-Carr" },
  { id: "northerntool",   label: "Northern Tool" },
  { id: "fastenal",       label: "Fastenal" },
  { id: "fisher",         label: "Fisher Scientific" },
  { id: "msc",            label: "MSC Industrial" },
  { id: "homedepot",      label: "Home Depot" },
  { id: "tractorsupply",  label: "Tractor Supply" },
  { id: "amazonbusiness", label: "Amazon Business" },
];

const MIN_SLOTS = 6;

function mkRange(n: number): number[] {
  const r: number[] = [];
  for (let i = 0; i < n; i++) r.push(i);
  return r;
}

// ── Icons ─────────────────────────────────────────────────────────────────────

// Matches the Figma "Icon Left" exactly:
// 18×18 container → inset-[20.83%] mask div → ~10.5×10.5 effective + icon
// so the plus reads at cap-height of the 14px label text alongside it.
function SmallPlusIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
      <div className="absolute inset-0" data-name="Icons/plus">
        <div
          className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]"
          style={{ maskImage: `url("${imgVector}")` }}
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 10.5 10.5"
          >
            <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AddButtonPlusIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
      <div className="absolute inset-0" data-name="Icons/plus">
        <div
          className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]"
          style={{ maskImage: `url("${imgVector1}")` }}
          data-name="Vector"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 11.6667 11.6667"
          >
            <path d={svgPaths.pe7cde70} fill="var(--fill-0, #929292)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Drag handles ───────────────────────────────────────────────────────────────

// Active drag handle (populated slots) — darker dots, matches DragHandle/Icon in import
function ActiveDragHandle() {
  // 6 dots in 2 cols × 3 rows, using p18033f00 (slightly larger, #545454)
  return (
    <div className="relative shrink-0 size-[20px] cursor-grab active:cursor-grabbing" data-name="DragHandle">
      <div className="h-[20px] overflow-clip relative w-full">
        {/* Left column: top, middle, bottom */}
        <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]">
          <div className="absolute inset-[-30%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
              <path d={svgPaths.p18033f00} fill="#545454" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]">
          <div className="absolute inset-[-30%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
              <path d={svgPaths.p18033f00} fill="#545454" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4">
          <div className="absolute inset-[-30%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
              <path d={svgPaths.p18033f00} fill="#545454" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Right column: top, middle, bottom */}
        <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]">
          <div className="absolute inset-[-30%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
              <path d={svgPaths.p18033f00} fill="#545454" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]">
          <div className="absolute inset-[-30%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
              <path d={svgPaths.p18033f00} fill="#545454" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4">
          <div className="absolute inset-[-30%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.66667">
              <path d={svgPaths.p18033f00} fill="#545454" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Empty slot drag handle — lighter dots, matches DragHandle2/Icon4 in import
function EmptyDragHandle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DragHandle">
      <div className="h-[20px] overflow-clip relative w-full">
        <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
            <path d={svgPaths.p2aff7c00} fill="#929292" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
            <path d={svgPaths.p2aff7c00} fill="#929292" />
          </svg>
        </div>
        <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
            <path d={svgPaths.p2aff7c00} fill="#929292" />
          </svg>
        </div>
        <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
            <path d={svgPaths.p2aff7c00} fill="#929292" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
            <path d={svgPaths.p2aff7c00} fill="#929292" />
          </svg>
        </div>
        <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
            <path d={svgPaths.p2aff7c00} fill="#929292" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Ranked slot sub-components ────────────────────────────────────────────────

// Red rounded square — populated slot number badge
function RedRankBadge({ n }: { n: number }) {
  return (
    <div className="bg-[#d42a1d] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px] whitespace-nowrap">
          {n}
        </p>
      </div>
    </div>
  );
}

// Gray rounded square — empty slot number badge
function GrayRankBadge({ n }: { n: number }) {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#929292] text-[14px] whitespace-nowrap">
          {n}
        </p>
      </div>
    </div>
  );
}

// Pill tag — matches Figma Tag: h-[24px] rounded-[33554400px] px-[12px] py-[4px]
function BiggestMarketTag() {
  return (
    <div className="bg-[#d42a1d] h-[24px] relative rounded-[33554400px] shrink-0" data-name="Tag">
      <div className="flex items-center justify-center px-[12px] py-[4px] size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          Biggest Market
        </p>
      </div>
    </div>
  );
}

// Remove ✕ button — matches Figma RemoveButton / Icon1
function RemoveButton({ onRemove }: { onRemove: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); onRemove(); }}
      className="relative shrink-0 size-[20px] hover:opacity-60 transition-opacity"
      data-name="RemoveButton"
    >
      <div className="h-[20px] overflow-clip relative w-full">
        <div className="absolute inset-1/4">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d="M10.5 0.5L0.5 10.5" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d="M0.5 0.5L10.5 10.5" stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function UsChannelPanel({ onRankedChange }: { onRankedChange?: (ranked: string[]) => void }) {
  const [ranked, setRanked] = useState<string[]>([]);

  useEffect(() => { onRankedChange?.(ranked); }, [ranked]);
  const [customInput, setCustomInput] = useState<string>("");
  const [extras, setExtras] = useState<{ id: string; label: string }[]>([]);
  const [dragFrom, setDragFrom] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  const allMarkets = [...STANDARD_MARKETPLACES, ...extras];

  function labelOf(id: string): string {
    return allMarkets.find((m) => m.id === id)?.label ?? id;
  }

  const atLimit = ranked.length >= 6;

  function addToRanked(id: string) {
    if (atLimit || ranked.includes(id)) return;
    setRanked((p) => [...p, id]);
  }

  function removeFromRanked(id: string) {
    setRanked((p) => p.filter((r) => r !== id));
  }

  function handleAdd() {
    const val = customInput.trim();
    if (!val || atLimit) return;
    const id = `extra-${Date.now()}`;
    setExtras((p) => [...p, { id, label: val }]);
    setRanked((p) => [...p, id]);
    setCustomInput("");
  }

  function onDragStart(i: number) { setDragFrom(i); }

  function onDragOver(e: React.DragEvent<HTMLDivElement>, i: number) {
    e.preventDefault();
    if (dragFrom !== null && i < ranked.length) setDragOver(i);
  }

  function onDrop(i: number) {
    if (dragFrom !== null && dragFrom !== i && i < ranked.length) {
      setRanked((prev) => {
        const next = [...prev];
        const [item] = next.splice(dragFrom, 1);
        next.splice(i, 0, item);
        return next;
      });
    }
    setDragFrom(null);
    setDragOver(null);
  }

  function onDragEnd() { setDragFrom(null); setDragOver(null); }

  const totalSlots = Math.max(MIN_SLOTS, ranked.length);
  const numRows = Math.ceil(totalSlots / 2);
  const slotIndices = mkRange(totalSlots);

  // Unselected standard marketplaces (available to click)
  const availableStandard = STANDARD_MARKETPLACES.filter((m) => !ranked.includes(m.id));
  // Custom extras that were removed from ranked (available again)
  const availableExtras = extras.filter((e) => !ranked.includes(e.id));
  const availableAll = [...availableStandard, ...availableExtras];

  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[10px] w-full">

      {/* ── Available Marketplaces ──────────────────────────────────────────── */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic text-[#434343] text-[12px]">
          Available Marketplaces
        </p>

        {/*
          Simple 2-column grid — items reflow naturally when one is selected
          and removed. No placeholder cells, no fixed row count.
        */}
        {availableAll.length > 0 ? (
          <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] w-full">
            {availableAll.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => addToRanked(item.id)}
                disabled={atLimit}
                className={`justify-self-stretch min-h-[40px] relative rounded-[6px] text-left transition-colors ${
                  atLimit
                    ? "bg-[#f5f5f5] cursor-not-allowed"
                    : "bg-white cursor-pointer hover:bg-[#fafafa]"
                }`}
              >
                <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
                  <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
                    <SmallPlusIcon />
                    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${
                        atLimit ? "text-[#b0b0b0]" : "text-[#545454]"
                      }`}>
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#929292] leading-[20px] italic">
            All marketplaces have been added to your list.
          </p>
        )}
      </div>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="h-px relative shrink-0 w-full bg-black/10" />

      {/* ── Add custom marketplace ─────────────────────────────────────────── */}
      <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
        <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic text-[#434343] text-[12px] flex-1 min-w-px">
            Add marketplace if it is missing
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <div className="bg-[#f5f5f5] flex-1 min-h-[44px] min-w-px relative rounded-[8px]">
            <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
                  placeholder="Add custom marketplace..."
                  className="bg-transparent border-none outline-none w-full font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#434343] text-[14px] placeholder:text-[#6c6c6c]"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={atLimit}
            className={`min-h-[44px] relative rounded-[8px] shrink-0 transition-colors ${
              atLimit ? "bg-[#ebebeb] cursor-not-allowed" : "bg-[#e0e0e0] cursor-pointer hover:bg-[#d0d0d0]"
            }`}
          >
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] px-[12px] py-[10px] relative size-full">
              <AddButtonPlusIcon />
              <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#929292] text-[16px] whitespace-nowrap">
                  Add
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ── Your Marketplaces (ranked) ─────────────────────────────────────── */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic text-[#434343] text-[12px] flex-1 min-w-px">
            Your Marketplaces (Arrange by size. Drag to reorder.)
          </p>
        </div>

        {/*
          Column-first grid: left col gets ranks 1…numRows, right col gets
          ranks numRows+1…totalSlots — matching the Figma reference layout.
        */}
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[8px] grid-flow-row sm:grid-flow-col"
          style={{ gridTemplateRows: `repeat(${numRows}, auto)` }}
        >
          {slotIndices.map((i) => {
            const marketId = ranked[i];
            const populated = Boolean(marketId);
            const isDragging = dragFrom === i;
            const isDropTarget = dragOver === i && dragFrom !== null && dragFrom !== i;

            return populated ? (
              /* ── Populated slot ──────────────────────────── */
              <div
                key={i}
                draggable
                onDragStart={() => onDragStart(i)}
                onDragOver={(e) => onDragOver(e, i)}
                onDrop={() => onDrop(i)}
                onDragEnd={onDragEnd}
                className={`bg-white h-[52px] justify-self-stretch relative rounded-[10px] shrink-0 transition-opacity ${
                  isDragging ? "opacity-40" : ""
                }`}
                style={{ outline: isDropTarget ? "2px solid #006ED8" : undefined }}
              >
                <div aria-hidden className="absolute border-2 border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
                    <ActiveDragHandle />
                    <RedRankBadge n={i + 1} />
                    <div className="flex-1 h-[24px] min-w-px relative overflow-hidden">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#434343] text-[16px] tracking-[-0.3125px] whitespace-nowrap truncate">
                        {labelOf(marketId)}
                      </p>
                    </div>
                    {i === 0 && <BiggestMarketTag />}
                    <RemoveButton onRemove={() => removeFromRanked(marketId)} />
                  </div>
                </div>
              </div>
            ) : (
              /* ── Empty slot ──────────────────────────────── */
              <div
                key={i}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => onDrop(i)}
                className="bg-[#f9fafb] justify-self-stretch relative rounded-[10px] self-stretch shrink-0"
              >
                <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="flex flex-row items-center size-full" style={{ minHeight: 52 }}>
                  <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
                    <EmptyDragHandle />
                    <GrayRankBadge n={i + 1} />
                    <div className="flex-1 h-[24px] min-w-px relative">
                      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] text-[#929292] text-[14px] tracking-[-0.3125px] whitespace-nowrap">
                        Your second marketplace
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
