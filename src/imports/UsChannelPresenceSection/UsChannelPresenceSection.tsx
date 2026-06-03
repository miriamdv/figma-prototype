import svgPaths from "./svg-4hmm3a7nd2";
import { imgVector, imgVector1 } from "./svg-knh33";

function SectionNumber() {
  return (
    <div className="bg-[#d42a1d] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[32px]" data-name="SectionNumber">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#434343] text-[24px] top-0 tracking-[-0.25px] w-[1023px]">Does your brand currently sell on US marketplaces or distributors?</p>
    </div>
  );
}

function SectionDescription() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="SectionDescription">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#434343] text-[14px] top-0 w-[1023px]">US channel success is a strong predictor of EU marketplace fit</p>
    </div>
  );
}

function SectionHeaderText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="SectionHeaderText">
      <SectionTitle />
      <SectionDescription />
    </div>
  );
}

function SectionHeaderRow() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_16px] items-start relative shrink-0 w-full" data-name="SectionHeaderRow">
      <SectionNumber />
      <SectionHeaderText />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 1">
          <circle cx="9" cy="9" fill="var(--fill-0, #F5F5F5)" id="Ellipse 3" r="8" stroke="var(--stroke-0, #006ED8)" strokeWidth="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #006ED8)" id="Ellipse 4" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function RadioButtonCardYesUsChannels() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="RadioButtonCardYesUSChannels">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] px-[12px] py-[24px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0" data-name="Radio Button">
            <Group />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
              Yes, we sell on US channels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonCardNoUsChannels() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="RadioButtonCardNoUSChannels">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-h-[inherit] px-[12px] py-[24px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0" data-name="Radio Button">
            <div className="relative shrink-0 size-[18px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 2" r="8.5" stroke="var(--stroke-0, #929292)" />
              </svg>
            </div>
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
              No, not yet / non US-brand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[973px]" data-name="RadioButtonGroup">
      <RadioButtonCardYesUsChannels />
      <RadioButtonCardNoUsChannels />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#434343] text-[24px] top-0 tracking-[-0.25px] w-[1023px]">Which US channels do you sell on? (select all that apply)</p>
    </div>
  );
}

function SectionDescription1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="SectionDescription">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#434343] text-[14px] top-0 w-[1023px]">Which US channels do you sell on? (select all that apply)</p>
    </div>
  );
}

function SectionHeaderRow1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="SectionHeaderRow">
      <SectionTitle1 />
      <SectionDescription1 />
    </div>
  );
}

function HeaderSubSection() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeaderSubSection">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-w-px not-italic relative text-[#434343] text-[12px]">Available Marketplaces</p>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Fastenal</p>
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Grainger</p>
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Motion Industries</p>
    </div>
  );
}

function TextWrapper3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Northern Tool</p>
    </div>
  );
}

function TextWrapper4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">McMaster-Carr</p>
    </div>
  );
}

function TextWrapper5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Fisher Scientific</p>
    </div>
  );
}

function TextWrapper6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">MSC Industrial</p>
    </div>
  );
}

function TextWrapper7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Home Depot</p>
    </div>
  );
}

function TextWrapper8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Tractor Supply</p>
    </div>
  );
}

function TextWrapper9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">Amazon Business</p>
    </div>
  );
}

function AvailableMarketplacesList() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(5,minmax(0,1fr))] h-[232px] relative shrink-0 w-full" data-name="AvailableMarketplacesList">
      <div className="bg-white col-1 justify-self-stretch min-h-[40px] relative rounded-[6px] row-5 self-start shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper />
          </div>
        </div>
      </div>
      <div className="bg-white col-1 justify-self-stretch min-h-[40px] relative rounded-[6px] row-1 self-start shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper1 />
          </div>
        </div>
      </div>
      <div className="bg-white col-1 justify-self-stretch min-h-[40px] relative rounded-[6px] row-2 self-start shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper2 />
          </div>
        </div>
      </div>
      <div className="bg-white col-1 justify-self-stretch min-h-[40px] relative rounded-[6px] row-4 self-stretch shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper3 />
          </div>
        </div>
      </div>
      <div className="bg-white col-1 justify-self-stretch min-h-[40px] relative rounded-[6px] row-3 self-start shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper4 />
          </div>
        </div>
      </div>
      <div className="bg-white col-2 justify-self-stretch min-h-[40px] relative rounded-[6px] row-1 self-start shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper5 />
          </div>
        </div>
      </div>
      <div className="bg-white col-2 justify-self-stretch min-h-[40px] relative rounded-[6px] row-2 self-start shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper6 />
          </div>
        </div>
      </div>
      <div className="bg-white col-2 justify-self-stretch min-h-[40px] relative rounded-[6px] row-3 self-stretch shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper7 />
          </div>
        </div>
      </div>
      <div className="bg-white col-2 justify-self-stretch min-h-[40px] relative rounded-[6px] row-4 self-stretch shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper8 />
          </div>
        </div>
      </div>
      <div className="bg-white col-2 justify-self-stretch min-h-[40px] relative rounded-[6px] row-5 self-stretch shrink-0" data-name="MarketplaceListItem">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon Left">
              <div className="absolute inset-0" data-name="Icons/plus">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                    <path d={svgPaths.p180a9a00} fill="var(--fill-0, #545454)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <TextWrapper9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function AvailableMarketplacesContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[929px]" data-name="AvailableMarketplacesContentSection">
      <HeaderSubSection />
      <AvailableMarketplacesList />
    </div>
  );
}

function HeaderSubSection1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeaderSubSection">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-w-px not-italic relative text-[#434343] text-[12px]">Add marketplace if it is missing</p>
    </div>
  );
}

function TextWrapper10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#929292] text-[16px] whitespace-nowrap">Add</p>
    </div>
  );
}

function InputSection() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="InputSection">
      <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-[44px] min-w-px relative rounded-[8px]" data-name="Input">
        <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic overflow-hidden relative shrink-0 text-[#6c6c6c] text-[14px] text-ellipsis w-full whitespace-nowrap" dir="auto">
              Add custom marketplace...
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] min-h-[44px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] px-[12px] py-[10px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Icon Left">
            <div className="absolute inset-0" data-name="Icons/plus">
              <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector1}")` }} data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                  <path d={svgPaths.pe7cde70} fill="var(--fill-0, #929292)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <TextWrapper10 />
        </div>
      </div>
    </div>
  );
}

function ManualInputSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[929px]" data-name="ManualInputSection">
      <HeaderSubSection1 />
      <InputSection />
    </div>
  );
}

function HeaderSubSection2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeaderSubSection">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-w-px not-italic relative text-[#434343] text-[12px]">Your Marketplaces (Arrange by size. Drag to reorder.)</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DragHandle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DragHandle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function RankNumber() {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#929292] text-[14px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function TextPlaceholder() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="TextPlaceholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#929292] text-[14px] top-0 tracking-[-0.3125px] whitespace-nowrap">Your second marketplace</p>
      </div>
    </div>
  );
}

function MarketplaceRankedEmptyListItem() {
  return (
    <div className="bg-[#f9fafb] col-1 h-[52px] justify-self-stretch relative rounded-[10px] row-1 shrink-0" data-name="MarketplaceRankedEmptyListItem">
      <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
          <DragHandle />
          <RankNumber />
          <TextPlaceholder />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DragHandle1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DragHandle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function RankNumber1() {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#929292] text-[14px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function TextPlaceholder1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="TextPlaceholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#929292] text-[14px] top-0 tracking-[-0.3125px] whitespace-nowrap">Your second marketplace</p>
      </div>
    </div>
  );
}

function MarketplaceRankedEmptyListItem1() {
  return (
    <div className="bg-[#f9fafb] col-1 h-[52px] justify-self-stretch relative rounded-[10px] row-2 shrink-0" data-name="MarketplaceRankedEmptyListItem">
      <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
          <DragHandle1 />
          <RankNumber1 />
          <TextPlaceholder1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DragHandle2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DragHandle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function RankNumber2() {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#929292] text-[14px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function TextPlaceholder2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="TextPlaceholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#929292] text-[14px] top-0 tracking-[-0.3125px] whitespace-nowrap">Your second marketplace</p>
      </div>
    </div>
  );
}

function MarketplaceRankedEmptyListItem2() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="MarketplaceRankedEmptyListItem">
      <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
          <DragHandle2 />
          <RankNumber2 />
          <TextPlaceholder2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DragHandle3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DragHandle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function RankNumber3() {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#929292] text-[14px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function TextPlaceholder3() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="TextPlaceholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#929292] text-[14px] top-0 tracking-[-0.3125px] whitespace-nowrap">Your second marketplace</p>
      </div>
    </div>
  );
}

function MarketplaceRankedEmptyListItem3() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[10px] row-2 self-stretch shrink-0" data-name="MarketplaceRankedEmptyListItem">
      <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
          <DragHandle3 />
          <RankNumber3 />
          <TextPlaceholder3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DragHandle4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DragHandle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function RankNumber4() {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#929292] text-[14px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function TextPlaceholder4() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="TextPlaceholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#929292] text-[14px] top-0 tracking-[-0.3125px] whitespace-nowrap">Your second marketplace</p>
      </div>
    </div>
  );
}

function MarketplaceRankedEmptyListItem4() {
  return (
    <div className="bg-[#f9fafb] col-2 justify-self-stretch relative rounded-[10px] row-3 self-stretch shrink-0" data-name="MarketplaceRankedEmptyListItem">
      <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
          <DragHandle4 />
          <RankNumber4 />
          <TextPlaceholder4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 1.66667">
          <path d={svgPaths.p2aff7c00} fill="var(--fill-0, #929292)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DragHandle5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DragHandle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function RankNumber5() {
  return (
    <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0 size-[24px]" data-name="RankNumber">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#929292] text-[14px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function TextPlaceholder5() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="TextPlaceholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#929292] text-[14px] top-0 tracking-[-0.3125px] whitespace-nowrap">Your second marketplace</p>
      </div>
    </div>
  );
}

function MarketplaceRankedEmptyListItem5() {
  return (
    <div className="bg-[#f9fafb] col-1 h-[52px] justify-self-stretch relative rounded-[10px] row-3 shrink-0" data-name="MarketplaceRankedEmptyListItem">
      <div aria-hidden className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[14px] py-[2px] relative size-full">
          <DragHandle5 />
          <RankNumber5 />
          <TextPlaceholder5 />
        </div>
      </div>
    </div>
  );
}

function SelectedMarketplacesSortable() {
  return (
    <div className="flex-[1_0_0] gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[____fit-content(100%)_fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[172px] min-w-px relative" data-name="SelectedMarketplacesSortable">
      <MarketplaceRankedEmptyListItem />
      <MarketplaceRankedEmptyListItem1 />
      <MarketplaceRankedEmptyListItem2 />
      <MarketplaceRankedEmptyListItem3 />
      <MarketplaceRankedEmptyListItem4 />
      <MarketplaceRankedEmptyListItem5 />
    </div>
  );
}

function SelectedMarketplacesSortableSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="SelectedMarketplacesSortableSection">
      <SelectedMarketplacesSortable />
    </div>
  );
}

function SelectedMarketplacesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[196px] items-start relative shrink-0 w-[929px]" data-name="SelectedMarketplacesSection">
      <HeaderSubSection2 />
      <SelectedMarketplacesSortableSection />
    </div>
  );
}

function UsChannelsSection() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full" data-name="USChannelsSection">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <SectionHeaderRow1 />
        <AvailableMarketplacesContentSection />
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute bottom-full left-0 right-0 top-0">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 941 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="941" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
        <ManualInputSection />
        <SelectedMarketplacesSection />
      </div>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="SectionContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <SectionHeaderRow />
        <RadioButtonGroup />
        <UsChannelsSection />
      </div>
    </div>
  );
}

export default function UsChannelPresenceSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[25px] relative rounded-[14px] size-full" data-name="USChannelPresenceSection">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <SectionContent />
    </div>
  );
}