import svgPaths from "./svg-cg9k8f0jx7";
import imgMap from "figma:asset/cc802f2fc72abc63f4194fee6161405d8026b6fb.png";

function IconHome() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon/Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon/Home">
          <path clipRule="evenodd" d={svgPaths.p36a89e70} fill="var(--fill-0, black)" fillRule="evenodd" id="home" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%-299px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconHome />
    </div>
  );
}

function IconCalendar() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon/Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon/Calendar">
          <path d={svgPaths.p119ecd80} fill="var(--fill-0, black)" id="calendar" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%-149px)] pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconCalendar />
    </div>
  );
}

function IconTrips() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon/Trips">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon/Trips">
          <path d={svgPaths.p2efc3e00} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%+1px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconTrips />
    </div>
  );
}

function IconHeart() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon/Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon/Heart">
          <path d={svgPaths.p3f368ac0} fill="var(--fill-0, black)" id="heart" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%+151px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconHeart />
    </div>
  );
}

function IconPerson() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon/Person">
          <path d={svgPaths.p3496ed00} fill="var(--fill-0, black)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%+301px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconPerson />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[88px] left-0 overflow-clip right-0 top-0" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <TabBarItem2 />
      <TabBarItem3 />
      <TabBarItem4 />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[68px] left-1/2 translate-x-[-50%] w-[750px]" data-name="Home Indicator">
      <div className="absolute bg-black bottom-[16px] h-[10px] left-[calc(50%+1px)] rounded-[200px] translate-x-[-50%] w-[268px]" data-name="Home Indicator" />
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute backdrop-blur-[20px] backdrop-filter bg-white h-[156px] left-0 top-[1468px] w-[750px]" data-name="Tab Bar">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[2px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)] top-[-1px]" />
      <Tabs />
      <HomeIndicator />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[22.673px] right-[29.34px] top-[34.66px] w-[133.323px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 23">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p27afd400} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p26df7880} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p369c600} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p4ba7670} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p869dec0} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[42px] left-[42px] top-[24px] w-[108px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 42">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p10810c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p250c5480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35c6a600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3ca3280} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[42px] top-[24px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[88px] left-0 overflow-clip top-0 w-[750px]" data-name="Status Bar">
      <RightSide />
      <LeftSide />
    </div>
  );
}

function RightSide1() {
  return (
    <div className="absolute h-[22.672px] right-[29.34px] top-[34.66px] w-[133.323px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 23">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p1ff97600} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p3d65ed80} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p16eab80} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p3e40b980} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.pe5b5300} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="absolute h-[42px] left-[42px] top-[24px] w-[108px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 42">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p10810c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p250c5480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35c6a600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3ca3280} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="absolute contents left-[42px] top-[24px]" data-name="Left Side">
      <Time1 />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute h-[88px] left-0 overflow-clip top-0 w-[750px]" data-name="Status Bar">
      <RightSide1 />
      <LeftSide1 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Search">
          <rect fill="var(--fill-0, white)" height="47" width="47" x="0.5" y="0.5" />
          <rect height="47" stroke="var(--stroke-0, #F5F5F5)" width="47" x="0.5" y="0.5" />
          <g id="Icon">
            <path d={svgPaths.p377bac00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2a6c0300} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TabBarItem5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%-299px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Search />
    </div>
  );
}

function IconPerson1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon/Person">
          <rect fill="white" height="48" width="48" />
          <path d={svgPaths.p3496ed00} fill="var(--fill-0, #BBBBBB)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%-149px)] pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconPerson1 />
    </div>
  );
}

function Square() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Square">
          <path d={svgPaths.p12eaf2f0} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%+1px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Square />
    </div>
  );
}

function BookOpen() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Book open">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Book open">
          <path d={svgPaths.p34ed2100} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%+151px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <BookOpen />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Clock">
          <path d={svgPaths.p149ca700} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[20px] items-start left-[calc(50%+301px)] opacity-30 pb-[16px] pt-[24px] px-[52px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Clock />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="absolute h-[88px] left-0 overflow-clip right-0 top-0" data-name="Tabs">
      <TabBarItem5 />
      <TabBarItem6 />
      <TabBarItem7 />
      <TabBarItem8 />
      <TabBarItem9 />
    </div>
  );
}

function HomeIndicator1() {
  return (
    <div className="absolute bottom-0 h-[68px] left-1/2 translate-x-[-50%] w-[750px]" data-name="Home Indicator">
      <div className="absolute bg-black bottom-[16px] h-[10px] left-[calc(50%+1px)] rounded-[200px] translate-x-[-50%] w-[268px]" data-name="Home Indicator" />
    </div>
  );
}

function TabBar1() {
  return (
    <div className="absolute backdrop-blur-[20px] backdrop-filter bg-white h-[156px] left-0 top-[1468px] w-[750px]" data-name="Tab Bar">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[2px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)] top-[-1px]" />
      <Tabs1 />
      <HomeIndicator1 />
    </div>
  );
}

function RightSide2() {
  return (
    <div className="absolute h-[22.673px] right-[29.34px] top-[34.66px] w-[133.323px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 23">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p21c56500} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p22ad1420} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p355af800} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p3745e500} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p11042a00} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time2() {
  return (
    <div className="absolute h-[42px] left-[42px] top-[24px] w-[108px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 42">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p10810c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p250c5480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35c6a600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3ca3280} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide2() {
  return (
    <div className="absolute contents left-[42px] top-[24px]" data-name="Left Side">
      <Time2 />
    </div>
  );
}

function StatusBar2() {
  return (
    <div className="absolute h-[88px] left-0 overflow-clip top-0 w-[750px]" data-name="Status Bar">
      <RightSide2 />
      <LeftSide2 />
    </div>
  );
}

function LocationOn() {
  return (
    <div className="absolute left-[158px] size-[99px] top-[293px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 99">
        <g id="location_on">
          <path d={svgPaths.p208c3af0} fill="var(--fill-0, #FF0000)" id="icon" stroke="var(--stroke-0, #FF0000)" />
        </g>
      </svg>
    </div>
  );
}

function LocationOn1() {
  return (
    <div className="absolute left-[457px] size-[170px] top-[314px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 170">
        <g id="location_on">
          <path d={svgPaths.p3fd99ba0} fill="var(--fill-0, #FF0000)" id="icon" stroke="var(--stroke-0, #FF0000)" />
        </g>
      </svg>
    </div>
  );
}

function LocationOn2() {
  return (
    <div className="absolute left-[390px] size-[99px] top-[451px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 99">
        <g id="location_on">
          <path d={svgPaths.p208c3af0} fill="var(--fill-0, #FF8800)" id="icon" stroke="var(--stroke-0, #FF8800)" />
        </g>
      </svg>
    </div>
  );
}

function LocationOn3() {
  return (
    <div className="absolute left-[64px] size-[172px] top-[563px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 172">
        <g id="location_on">
          <path d={svgPaths.p4a8e980} fill="var(--fill-0, #FF8800)" id="icon" stroke="var(--stroke-0, #FF8800)" />
        </g>
      </svg>
    </div>
  );
}

function HandleShape() {
  return (
    <div className="bg-[#79747e] box-border content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[-16px] p-[4px] top-1/2 translate-y-[-50%]" data-name="Target">
      <StateLayer />
    </div>
  );
}

function Handle() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Handle">
      <Target />
    </div>
  );
}

function Switch() {
  return (
    <div className="absolute bg-[#e6e0e9] box-border content-stretch flex h-[60px] items-center left-[619px] px-[8px] py-[2px] rounded-[100px] top-[142px] w-[99px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border-2 border-[#79747e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Handle />
    </div>
  );
}

function Photo() {
  return (
    <div className="absolute left-[646px] size-[45px] top-[150px]" data-name="photo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="photo">
          <path d={svgPaths.p14f7a480} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Map() {
  return (
    <div className="absolute bottom-[214px] left-0 overflow-clip right-px top-0" data-name="Map">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMap} />
      <LocationOn />
      <LocationOn1 />
      <LocationOn2 />
      <LocationOn3 />
      <Switch />
      <Photo />
    </div>
  );
}

function Handle1() {
  return (
    <div className="absolute bottom-[592px] h-[48px] left-[calc(50%-1px)] translate-x-[-50%] w-[750px]" data-name="Handle">
      <div className="absolute bg-[rgba(0,0,0,0.2)] bottom-[24px] h-[8px] left-[calc(50%+1px)] rounded-[200px] translate-x-[-50%] w-[96px]" data-name="Handle" />
    </div>
  );
}

function Handle2() {
  return (
    <div className="absolute bottom-[503px] h-[48px] left-[calc(50%-1px)] translate-x-[-50%] w-[750px]" data-name="Handle">
      <div className="absolute bg-[rgba(0,0,0,0.2)] bottom-[-463px] h-[8px] left-1/2 rounded-[200px] translate-x-[-50%] w-[96px]" data-name="Handle" />
    </div>
  );
}

function List() {
  return (
    <div className="absolute bg-white h-[90px] left-[-3px] overflow-clip rounded-tl-[48px] rounded-tr-[48px] top-[1384px] w-[752px]" data-name="List">
      <Handle1 />
      <Handle2 />
    </div>
  );
}

function Booking() {
  return (
    <div className="absolute bg-white h-[1624px] left-0 overflow-clip top-0 w-[750px]" data-name="Booking">
      <TabBar />
      <StatusBar />
      <TabBar />
      <StatusBar1 />
      <TabBar1 />
      <StatusBar1 />
      <StatusBar2 />
      <Map />
      <List />
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="search">
          <path d={svgPaths.p377bac00} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p9037880} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex gap-[24px] h-[80px] items-center left-[32px] pl-[24px] pr-[32px] py-[16px] rounded-[16px] top-[36px] w-[686px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#3c3b3b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Search1 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[48px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[32px] text-nowrap">Search</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Booking />
      <Frame />
    </div>
  );
}