import { useState, useRef, useLayoutEffect, useEffect } from "react";
import svgPaths from "../../imports/MarketplaceMatchingStep1Page/svg-eet7rizb0s";
import { imgVector, imgVector1, imgVector2 } from "../../imports/MarketplaceMatchingStep1Page/svg-zmvjy";

// ============================================================
// Interactive Tag Components
// ============================================================

function TagInput({ onAdd, onCancel }: { onAdd: (v: string) => void; onCancel: () => void }) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => { inputRef.current?.focus(); }, []);

  useLayoutEffect(() => {
    if (measureRef.current) setWidth(measureRef.current.offsetWidth);
  }, [value]);

  const confirm = () => {
    if (value.trim()) onAdd(value.trim());
    else onCancel();
  };

  return (
    <div
      className="flex items-center pb-[2px] pt-[3px] px-[10px] rounded-[6px] shrink-0 relative"
      style={{ outline: "1.5px solid #CACACA" }}
    >
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: "absolute", visibility: "hidden", whiteSpace: "pre",
          fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, lineHeight: "21px",
        }}
      >
        {value || "typing..."}
      </span>
      <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") confirm(); else if (e.key === "Escape") onCancel(); }}
        onBlur={confirm}
        placeholder="typing..."
        style={{
          width: width > 0 ? `${width}px` : "auto",
          fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500,
          lineHeight: "21px", transition: "width 0.06s ease",
          border: "none", outline: "none", background: "transparent",
          padding: 0, margin: 0, color: "#434343", minWidth: "1px",
        }}
      />
    </div>
  );
}

function TagChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px] cursor-pointer" onClick={onRemove}>
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute inset-0">
            <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }}>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                <path d={svgPaths.p2dc32500} fill="var(--fill-0, #191919)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">{label}</p>
    </div>
  );
}

function AddNewButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0 cursor-pointer" onClick={onClick}>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]">
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute inset-0">
            <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }}>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                <path d={svgPaths.p3d6a5100} fill="var(--fill-0, #191919)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Add New</p>
    </div>
  );
}

function InteractiveTags({ initialTags }: { initialTags: string[] }) {
  const [tags, setTags] = useState(initialTags);
  const [adding, setAdding] = useState(false);
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-px relative size-full flex-wrap">
          {tags.map((tag, i) => (
            <TagChip key={i} label={tag} onRemove={() => setTags(t => t.filter((_, j) => j !== i))} />
          ))}
          {adding
            ? <TagInput onAdd={v => { setTags(t => [...t, v]); setAdding(false); }} onCancel={() => setAdding(false)} />
            : <AddNewButton onClick={() => setAdding(true)} />
          }
        </div>
      </div>
    </div>
  );
}

function KeyHints() {
  return (
    <div className="h-[29px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[13px] relative size-full">
        <div className="h-[16px] relative shrink-0 w-full">
          <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-0 px-[7px] py-[3px] rounded-[4px] top-0 w-[44.109px]">
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Enter</p>
          </div>
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[44.11px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to add • `}</p>
          <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-[96px] px-[7px] py-[3px] rounded-[4px] top-0 w-[32.063px]">
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Esc</p>
          </div>
          <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[128.06px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to cancel `}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Static Structural Components
// ============================================================

function PageHeader() {
  return (
    <div className="bg-white shrink-0 w-full" style={{ minHeight: 89 }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between py-[24px] px-8 relative w-full max-w-[1100px] mx-auto">
          <div className="content-stretch flex gap-[12px] h-[56px] items-center relative shrink-0 w-[294.891px]">
            <div className="bg-[#d42a1d] relative rounded-[10px] shrink-0 size-[40px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[24px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute inset-[12.5%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }}>
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                        <path d={svgPaths.p2fb94400} fill="var(--fill-0, white)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] h-[56px] min-w-px relative">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
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

function Breadcrumbs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] text-center whitespace-nowrap">Step 1 of 3</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute flex inset-[29.17%_16.67%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-4.69%_-7.5%_-3.39%_-7.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 17.2927">
                  <g>
                    <path d="M5.7499 15.75L5.7499 0.75" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p152244b0} stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] text-center whitespace-nowrap">Review Brand Profile</p>
      </div>
    </div>
  );
}

function PageMeta() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[36px] relative shrink-0 w-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#434343] text-[30px] top-0 tracking-[0.3955px] w-full">Review Extracted Brand Profile</p>
      </div>
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">{`We analyzed `}</p>
        <div className="bg-[#e0e0e0] content-stretch flex items-start px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[421.008px]">
          <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">{`https://uat-shop.welchvacuum.com/en-us/industries`}</p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">. Review and edit any fields before scoring.</p>
      </div>
    </div>
  );
}

function BrandProfileSection() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[17px] py-[25px] relative size-full">
        {/* SectionHeader */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex h-[30px] items-start relative shrink-0">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#434343] text-[24px] tracking-[-0.25px] whitespace-nowrap">WELCH</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="bg-[#e6f3ef] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 80% Confident`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[20px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute inset-0">
                    <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector1}")` }}>
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                        <path d={svgPaths.p20fa00} fill="var(--fill-0, #191919)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-[105.344px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">United States</p>
                </div>
              </div>
              <div className="bg-white relative rounded-[6px] shrink-0">
                <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">
                    <p className="leading-[21px]">US-Based Brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BrandDescription */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#434343] text-[16px]">WELCH specializes in vacuum technology and laboratory equipment, providing innovative solutions for chemical, healthcare, and industrial sectors. Known for their high-quality, engineered products and fast delivery, they serve both individual customers and B2B clients.</p>
          </div>
        </div>
        {/* KeyStrengthsBlock */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
            <div className="h-[21px] relative shrink-0 w-[96px]">
              <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#434343] text-[14px] top-0 whitespace-nowrap">Key Strengths</p>
            </div>
            <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
              {["Technology", "Quality", "Fast Delivery", "Specialized Solutions", "Range of Products"].map(tag => (
                <div key={tag} className="bg-white content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0">
                  <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCategorySection() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-start shrink-0">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        {/* SectionHeaderRow */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip-pc)">
                        <path d={svgPaths.p39961300} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M2.5 5H17.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2f53ac80} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs><clipPath id="clip-pc"><rect fill="white" height="20" width="20" /></clipPath></defs>
                    </svg>
                  </div>
                </div>
                <div className="h-[25px] relative shrink-0 w-[188px]">
                  <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Product Categories</p>
                </div>
              </div>
            </div>
            <div className="bg-[#e6f3ef] h-[25px] relative rounded-[9999px] shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="content-stretch flex h-full items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 80% Confident`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
            <InteractiveTags initialTags={["Pumps"]} />
            <div className="h-[26px] relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full"><div className="relative size-full" /></div>
            </div>
          </div>
        </div>
        <KeyHints />
      </div>
    </div>
  );
}

function CustomerTypesSection() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        {/* SectionHeaderRow */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                <div className="bg-[#d42a1d] relative rounded-[10px] shrink-0 size-[36px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]">
                      <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                        <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]">
                          <div className="absolute inset-[-16.67%_-7.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
                              <path d={svgPaths.p6877e0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]">
                          <div className="absolute inset-[-12.5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
                              <path d={svgPaths.p3ffa2780} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]">
                          <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
                              <path d={svgPaths.p39df7200} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]">
                          <div className="absolute inset-[-12.91%_-33.25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
                              <path d={svgPaths.p159fd500} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[25px] relative shrink-0 w-[160px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Customer Types</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#e6f1fb] h-[25px] relative rounded-[9999px] shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="content-stretch flex h-full items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#004e99] text-[14px] whitespace-nowrap">{` 60% Confident`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
            <InteractiveTags initialTags={["Industrial B2B", "Lab Scientist"]} />
            <div className="h-[26px] relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full"><div className="relative size-full" /></div>
            </div>
          </div>
        </div>
        <KeyHints />
      </div>
    </div>
  );
}

function RadioCircle({ selected }: { selected: boolean }) {
  return selected ? (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <circle cx="9" cy="9" fill="var(--fill-0, #F5F5F5)" r="8" stroke="var(--stroke-0, #006ED8)" strokeWidth="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #006ED8)" r="4.5" />
        </g>
      </svg>
    </div>
  ) : (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="9" fill="var(--fill-0, white)" r="8.5" stroke="var(--stroke-0, #929292)" />
      </svg>
    </div>
  );
}

function RadioGroup({ options, defaultValue }: { options: string[]; defaultValue: string }) {
  const [selected, setSelected] = useState(defaultValue);
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        {options.map(option => (
          <div
            key={option}
            className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0 w-full cursor-pointer"
            onClick={() => setSelected(option)}
          >
            <RadioCircle selected={selected === option} />
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricePositioningSection() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-2 self-start shrink-0">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        {/* SectionHeaderRow */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        <path d="M10 1.66667V18.3333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p3055a600} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="h-[25px] relative shrink-0 w-[163px]">
                  <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Price Positioning</p>
                </div>
              </div>
            </div>
            <div className="bg-[#e6f3ef] relative rounded-[9999px] shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 80% Confident`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RadioGroup options={["Budget", "Mid-Range", "Premium"]} defaultValue="Mid-Range" />
      </div>
    </div>
  );
}

function TechCapabilitiesSection() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-2 self-start shrink-0">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        {/* SectionHeaderRow */}
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
            <div className="relative shrink-0 w-[201px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip-tc)">
                        <path d={svgPaths.p2c8a7980} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2b2ce00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M12.5 1.66667V3.33333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M12.5 16.6667V18.3333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M1.66667 12.5H3.33333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M1.66667 7.5H3.33333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M16.6667 12.5H18.3333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M16.6667 7.5H18.3333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M7.5 1.66667V3.33333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M7.5 16.6667V18.3333" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs><clipPath id="clip-tc"><rect fill="white" height="20" width="20" /></clipPath></defs>
                    </svg>
                  </div>
                </div>
                <div className="h-[25px] relative shrink-0 w-[167px]">
                  <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Tech Capabilities</p>
                </div>
              </div>
            </div>
            <div className="bg-[#e6f3ef] relative rounded-[9999px] shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 85% Confident`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RadioGroup options={["Low Tech", "Medium Tech", "High Tech"]} defaultValue="High Tech" />
      </div>
    </div>
  );
}

function CompetitorsIdentifiedSection() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <div className="h-[27px] relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-[0.5px] whitespace-nowrap">Competitors Identified</p>
          </div>
        </div>
        <InteractiveTags initialTags={["Edwards", "Pfeiffer Vacuum", "Leybold"]} />
        <KeyHints />
      </div>
    </div>
  );
}

function ExtractionNotesBlock() {
  return (
    <div className="bg-[#e6f1fb] h-[105px] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#5088b4] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[17px] pr-px py-[17px] relative size-full">
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
            <div className="h-[22px] relative shrink-0 w-[20px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                <g>
                  <path d={svgPaths.p29b1f900} stroke="var(--stroke-0, #434343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M7.5 17H12.5" stroke="var(--stroke-0, #434343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M8.33333 20H11.6667" stroke="var(--stroke-0, #434343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
              </svg>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[71px] items-start min-w-px relative">
              <div className="h-[27px] relative shrink-0 w-full">
                <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#434343] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Extraction Notes</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#434343] text-[14px] tracking-[-0.1504px]">Product categories were inferred from the specific products listed; customer types are based on the industries targeted. Price and technology positioning is inferred but aligns with their specialized offerings and general market perception.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomActions({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-end relative shrink-0 w-full">
      <div className="bg-[#d42a1d] min-h-[44px] relative rounded-[8px] shrink-0 cursor-pointer" onClick={onConfirm}>
        <div aria-hidden className="absolute border border-[#d42a1d] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] px-[12px] py-[10px] relative size-full">
          <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{`Confirm & Continue`}</p>
          </div>
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-0">
              <div className="absolute bottom-1/4 left-[33.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8px_-6px] mask-size-[24px_24px] right-[35.83%] top-1/4" style={{ maskImage: `url("${imgVector1}")` }}>
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                  <path d={svgPaths.pd581500} fill="var(--fill-0, white)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageFooter() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#434343] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">© 2026 Ingersoll Rand. Internal use only.</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function MarketplaceMatchingPage({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-[#f9fafb] flex flex-col items-start min-h-full w-full overflow-x-hidden">
      <PageHeader />
      <div className="flex flex-col items-center w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start py-[32px] relative w-full max-w-[1100px] mx-auto px-8">
          <Breadcrumbs />
          <PageMeta />
          <BrandProfileSection />
          <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
            <ProductCategorySection />
            <CustomerTypesSection />
            <PricePositioningSection />
            <TechCapabilitiesSection />
          </div>
          <CompetitorsIdentifiedSection />
          <ExtractionNotesBlock />
          <BottomActions onConfirm={onNext} />
          <PageFooter />
        </div>
      </div>
    </div>
  );
}
