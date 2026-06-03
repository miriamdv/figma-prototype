import svgPaths from "./svg-eet7rizb0s";
import { imgVector, imgVector1, imgVector2 } from "./svg-zmvjy";

function HomeIcon() {
  return (
    <div className="bg-[#d42a1d] relative rounded-[10px] shrink-0 size-[40px]" data-name="HomeIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Icons/home">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute inset-[12.5%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                <path d={svgPaths.p2fb94400} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#434343] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Marketplace Matching</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#434343] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Mercury team project</p>
    </div>
  );
}

function ProjectName() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="ProjectName">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[56px] items-center relative shrink-0 w-[294.891px]" data-name="Container">
      <HomeIcon />
      <ProjectName />
    </div>
  );
}

function OrganizationName() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="OrganizationName">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#434343] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Ingersoll Rand</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Container />
          <OrganizationName />
        </div>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Step1">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] text-center whitespace-nowrap">Step 1 of 3</p>
    </div>
  );
}

function Elements() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-4.69%_-7.5%_-3.39%_-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 17.2927">
          <g id="elements">
            <path d="M5.7499 15.75L5.7499 0.75" id="Vector" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p152244b0} id="Vector_2" stroke="var(--stroke-0, #191919)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Step2">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] text-center whitespace-nowrap">Review Brand Profile</p>
    </div>
  );
}

function Bradcrumbs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bradcrumbs">
      <Step />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right-02-sharp">
        <div className="absolute flex inset-[29.17%_16.67%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
            <Elements />
          </div>
        </div>
      </div>
      <Step1 />
    </div>
  );
}

function PageTitle() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="PageTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#434343] text-[30px] top-0 tracking-[0.3955px] w-[1023px]">Review Extracted Brand Profile</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-start px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[421.008px]" data-name="Text">
      <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">{`https://uat-shop.welchvacuum.com/en-us/industries`}</p>
    </div>
  );
}

function PageMeta() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="PageMeta">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">{`We analyzed `}</p>
      <Text />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap">. Review and edit any fields before scoring.</p>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="PageHeader">
      <PageTitle />
      <PageMeta />
    </div>
  );
}

function BrandName() {
  return (
    <div className="content-stretch flex h-[30px] items-start relative shrink-0" data-name="brandName">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] not-italic relative shrink-0 text-[#434343] text-[24px] tracking-[-0.25px] whitespace-nowrap">WELCH</p>
    </div>
  );
}

function ConfidenceLabel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="confidenceLabel">
      <div className="bg-[#e6f3ef] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Status Tag">
        <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 80% Confident`}</p>
        </div>
      </div>
    </div>
  );
}

function SectionHeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="SectionHeaderRow">
      <BrandName />
      <ConfidenceLabel />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-[105.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">United States</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute inset-0" data-name="Icons/globe">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector1}")` }} data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p20fa00} fill="var(--fill-0, #191919)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text1 />
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Description Tag">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">US-Based Brand</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="SectionHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <SectionHeaderRow />
        <Container1 />
      </div>
    </div>
  );
}

function BrandDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="BrandDescription">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#434343] text-[16px]">WELCH specializes in vacuum technology and laboratory equipment, providing innovative solutions for chemical, healthcare, and industrial sectors. Known for their high-quality, engineered products and fast delivery, they serve both individual customers and B2B clients.</p>
      </div>
    </div>
  );
}

function BlockTitle() {
  return (
    <div className="h-[21px] relative shrink-0 w-[96px]" data-name="BlockTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#434343] text-[14px] top-0 whitespace-nowrap">Key Strengths</p>
    </div>
  );
}

function StrengthTagList() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[1054px]" data-name="StrengthTagList">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Technology</p>
      </div>
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Quality</p>
      </div>
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Fast Delivery</p>
      </div>
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Specialized Solutions</p>
      </div>
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
        <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Range of Products</p>
      </div>
    </div>
  );
}

function KeyStrengthsBlock() {
  return (
    <div className="relative shrink-0 w-full" data-name="KeyStrengthsBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <BlockTitle />
        <StrengthTagList />
      </div>
    </div>
  );
}

function BrandProfileSection() {
  return (
    <div className="bg-white h-[292px] relative rounded-[14px] shrink-0 w-full" data-name="BrandProfileSection">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[17px] py-[25px] relative size-full">
        <SectionHeader />
        <BrandDescription />
        <KeyStrengthsBlock />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3774)" id="Icon">
          <path d={svgPaths.p39961300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 5H17.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2f53ac80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3774">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="h-[25px] relative shrink-0 w-[188px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Product Categories</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <SectionTitle />
      </div>
    </div>
  );
}

function SectionHeaderRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="SectionHeaderRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Header1 />
        <div className="bg-[#e6f3ef] h-[25px] relative rounded-[9999px] shrink-0" data-name="Status Tag">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 80% Confident`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/cross">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p2dc32500} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/plus">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p3d6a5100} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-px relative size-full">
          <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0" data-name="ProductCategoryTag">
            <div className="bg-[#e0e0e0] content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
              <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Icon2 />
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Pumps</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <Icon3 />
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Add New</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function KeyHintEnter() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-0 px-[7px] py-[3px] rounded-[4px] top-0 w-[44.109px]" data-name="keyHint (Enter)">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Enter</p>
    </div>
  );
}

function KeyHintEsc() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-[96px] px-[7px] py-[3px] rounded-[4px] top-0 w-[32.063px]" data-name="keyHint (Esc)">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Esc</p>
    </div>
  );
}

function HelperText() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="helperText">
      <KeyHintEnter />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[44.11px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to add • `}</p>
      <KeyHintEsc />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[128.06px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to cancel `}</p>
    </div>
  );
}

function TagInputHelper() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="TagInputHelper">
      <div aria-hidden className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[13px] relative size-full">
        <HelperText />
      </div>
    </div>
  );
}

function ProductCategorySection() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-start shrink-0" data-name="ProductCategorySection">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <SectionHeaderRow1 />
        <Tags />
        <TagInputHelper />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
            <path d={svgPaths.p159fd500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[20px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#d42a1d] relative rounded-[10px] shrink-0 size-[36px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[160px]" data-name="SectionTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Customer Types</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon4 />
        <SectionTitle1 />
      </div>
    </div>
  );
}

function SectionHeaderRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="SectionHeaderRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Header2 />
        <div className="bg-[#e6f1fb] h-[25px] relative rounded-[9999px] shrink-0" data-name="Status Tag">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#004e99] text-[14px] whitespace-nowrap">{` 60% Confident`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/cross">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p2dc32500} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/cross">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p2dc32500} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/plus">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p3d6a5100} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-px relative size-full">
          <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0" data-name="CustomerTypesTag">
            <div className="bg-[#e0e0e0] content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
              <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Icon6 />
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Industrial B2B</p>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0" data-name="CustomerTypesTag">
            <div className="bg-[#e0e0e0] content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
              <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Icon7 />
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Lab Scientist</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <Icon8 />
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Add New</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function KeyHintEnter1() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-0 px-[7px] py-[3px] rounded-[4px] top-0 w-[44.109px]" data-name="keyHint (Enter)">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Enter</p>
    </div>
  );
}

function KeyHintEsc1() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-[96px] px-[7px] py-[3px] rounded-[4px] top-0 w-[32.063px]" data-name="keyHint (Esc)">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Esc</p>
    </div>
  );
}

function HelperText1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="helperText">
      <KeyHintEnter1 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[44.11px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to add • `}</p>
      <KeyHintEsc1 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[128.06px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to cancel `}</p>
    </div>
  );
}

function TagInputHelper1() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="TagInputHelper">
      <div aria-hidden className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[13px] relative size-full">
        <HelperText1 />
      </div>
    </div>
  );
}

function CustomerTypesSection() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="CustomerTypesSection">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <SectionHeaderRow2 />
        <Tags1 />
        <TagInputHelper1 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Icon">
      <Icon10 />
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="h-[25px] relative shrink-0 w-[163px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Price Positioning</p>
    </div>
  );
}

function SectionHeaderRow3() {
  return (
    <div className="relative shrink-0 w-[201px]" data-name="SectionHeaderRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon9 />
        <SectionTitle2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <SectionHeaderRow3 />
        <div className="bg-[#e6f3ef] relative rounded-[9999px] shrink-0" data-name="Status Tag">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 80% Confident`}</p>
            </div>
          </div>
        </div>
      </div>
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

function RadioButtons() {
  return (
    <div className="relative shrink-0 w-full" data-name="RadioButtons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0" data-name="Radio Button">
          <div className="relative shrink-0 size-[18px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 2" r="8.5" stroke="var(--stroke-0, #929292)" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
            Budget
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0 w-full" data-name="Radio Button">
          <Group />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
            Mid-Range
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0" data-name="Radio Button">
          <div className="relative shrink-0 size-[18px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 2" r="8.5" stroke="var(--stroke-0, #929292)" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
            Premium
          </p>
        </div>
      </div>
    </div>
  );
}

function PricePositioningSection() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-2 self-start shrink-0" data-name="PricePositioningSection">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <Container7 />
        <RadioButtons />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3779)" id="Icon">
          <path d={svgPaths.p2c8a7980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b2ce00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 1.66667V3.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 16.6667V18.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 12.5H3.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 7.5H3.33333" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 12.5H18.3333" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 7.5H18.3333" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 1.66667V3.33333" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 16.6667V18.3333" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3779">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="bg-[#d42a1d] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="Icon">
      <Icon12 />
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="h-[25px] relative shrink-0 w-[167px]" data-name="SectionTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-0 whitespace-nowrap">Tech Capabilities</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-[201px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon11 />
        <SectionTitle3 />
      </div>
    </div>
  );
}

function SectionHeaderRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="SectionHeaderRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Header3 />
        <div className="bg-[#e6f3ef] relative rounded-[9999px] shrink-0" data-name="Status Tag">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
              <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#00855d] text-[14px] whitespace-nowrap">{` 85% Confident`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
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

function RadioButtons1() {
  return (
    <div className="relative shrink-0 w-full" data-name="RadioButtons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0" data-name="Radio Button">
          <div className="relative shrink-0 size-[18px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 2" r="8.5" stroke="var(--stroke-0, #929292)" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
            Low Tech
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0 w-full" data-name="Radio Button">
          <div className="relative shrink-0 size-[18px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 2" r="8.5" stroke="var(--stroke-0, #929292)" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
            Medium Tech
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center py-[10px] relative shrink-0 w-full" data-name="Radio Button">
          <Group1 />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#434343] text-[16px] whitespace-nowrap" dir="auto">
            High Tech
          </p>
        </div>
      </div>
    </div>
  );
}

function TechCapabilitiesSection() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-2 self-start shrink-0" data-name="TechCapabilitiesSection">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <SectionHeaderRow4 />
        <RadioButtons1 />
      </div>
    </div>
  );
}

function BrandProfileSections() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full" data-name="BrandProfileSections">
      <ProductCategorySection />
      <CustomerTypesSection />
      <PricePositioningSection />
      <TechCapabilitiesSection />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[1070px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#434343] text-[20px] top-[0.5px] whitespace-nowrap">Competitors Identified</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/cross">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p2dc32500} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/cross">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p2dc32500} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/cross">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p2dc32500} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
      <div className="relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-0" data-name="Icons/plus">
          <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgVector2}")` }} data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p3d6a5100} fill="var(--fill-0, #191919)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tags2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-px relative size-full">
          <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0" data-name="CompetitorsIdentifiedTag">
            <div className="bg-[#e0e0e0] content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
              <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Icon13 />
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Edwards</p>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0" data-name="CompetitorsIdentifiedTag">
            <div className="bg-[#e0e0e0] content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
              <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Icon14 />
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Pfeiffer Vacuum</p>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0" data-name="CompetitorsIdentifiedTag">
            <div className="bg-[#e0e0e0] content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Description Tag">
              <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Icon15 />
              <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Leybold</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center pb-[2px] pt-[3px] px-[10px] relative rounded-[6px] shrink-0" data-name="Button">
            <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <Icon16 />
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#434343] text-[14px] whitespace-nowrap">Add New</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyHintEnter2() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-0 px-[7px] py-[3px] rounded-[4px] top-0 w-[44.109px]" data-name="keyHint (Enter)">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Enter</p>
    </div>
  );
}

function KeyHintEsc2() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex h-[18px] items-start left-[96px] px-[7px] py-[3px] rounded-[4px] top-0 w-[32.063px]" data-name="keyHint (Esc)">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#434343] text-[10px] whitespace-nowrap">Esc</p>
    </div>
  );
}

function HelperText2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="helperText">
      <KeyHintEnter2 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[44.11px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to add • `}</p>
      <KeyHintEsc2 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[128.06px] not-italic text-[#434343] text-[12px] top-px whitespace-nowrap">{` to cancel `}</p>
    </div>
  );
}

function TagInputHelper2() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="TagInputHelper">
      <div aria-hidden className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[13px] relative size-full">
        <HelperText2 />
      </div>
    </div>
  );
}

function CompetitorsIdentifiedSection() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="CompetitorsIdentifiedSection">
      <div aria-hidden className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[25px] relative size-full">
        <Heading1 />
        <Tags2 />
        <TagInputHelper2 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[22px] relative shrink-0 w-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Icon">
          <path d={svgPaths.p29b1f900} id="Vector" stroke="var(--stroke-0, #434343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 17H12.5" id="Vector_2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 20H11.6667" id="Vector_3" stroke="var(--stroke-0, #434343)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function BlockHeader() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="BlockHeader">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#434343] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">Extraction Notes</p>
    </div>
  );
}

function BodyBlock() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="BodyBlock">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#434343] text-[14px] tracking-[-0.1504px]">Product categories were inferred from the specific products listed; customer types are based on the industries targeted. Price and technology positioning is inferred but aligns with their specialized offerings and general market perception.</p>
    </div>
  );
}

function BlockHeaderRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[71px] items-start min-w-px relative" data-name="BlockHeaderRow">
      <BlockHeader />
      <BodyBlock />
    </div>
  );
}

function BlockContent() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="BlockContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Icon17 />
        <BlockHeaderRow />
      </div>
    </div>
  );
}

function ExtractionNotesBlock() {
  return (
    <div className="bg-[#e6f1fb] h-[105px] relative rounded-[14px] shrink-0 w-full" data-name="ExtractionNotesBlock">
      <div aria-hidden className="absolute border border-[#5088b4] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[17px] pr-px py-[17px] relative size-full">
        <BlockContent />
      </div>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="text-wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{`Confirm & Continue`}</p>
    </div>
  );
}

function BottomActions() {
  return (
    <div className="content-stretch flex h-[40px] items-start justify-end relative shrink-0 w-full" data-name="BottomActions">
      <div className="bg-[#d42a1d] min-h-[44px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#d42a1d] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center min-h-[inherit] px-[12px] py-[10px] relative size-full">
          <TextWrapper />
          <div className="relative shrink-0 size-[20px]" data-name="Icon Right">
            <div className="absolute inset-0" data-name="Icons/chevron-right">
              <div className="absolute bottom-1/4 left-[33.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8px_-6px] mask-size-[24px_24px] right-[35.83%] top-1/4" style={{ maskImage: `url("${imgVector1}")` }} data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                  <path d={svgPaths.pd581500} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[339px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#434343] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">© 2026 Ingersoll Rand. Internal use only.</p>
        </div>
      </div>
    </div>
  );
}

function PageContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[32px] relative shrink-0 w-[1023px]" data-name="PageContent">
      <Bradcrumbs />
      <PageHeader />
      <BrandProfileSection />
      <BrandProfileSections />
      <CompetitorsIdentifiedSection />
      <ExtractionNotesBlock />
      <BottomActions />
      <Footer />
    </div>
  );
}

function T() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="T0">
      <Header />
      <PageContent />
    </div>
  );
}

export default function MarketplaceMatchingStep1Page() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full" data-name="MarketplaceMatchingStep1Page">
      <T />
    </div>
  );
}