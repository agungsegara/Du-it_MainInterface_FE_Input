import TextInput from "./TextInput";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`w-[480px] flex flex-col items-center justify-start gap-[48px] min-w-[480px] max-w-full text-center text-sm text-gray-100 font-ibm-plex-mono mq675:gap-[24px] ${className}`}
    >
      <img
        className="w-[180px] h-[180px] relative object-contain"
        loading="lazy"
        alt=""
        src="/clip-path-group@2x.png"
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-21xl">
        <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-medium font-inherit mq450:text-5xl mq450:leading-[31px] mq750:text-13xl mq750:leading-[42px]">
          <span>{`Achieve Your `}</span>
          <span className="text-lightseagreen-100">Financial Dreams</span>
        </h1>
        <div className="self-stretch relative text-sm leading-[150%] text-lightslategray">
          Answer These 5 Simple Questions to Receive Personalized Budgeting Tips
          Instantly!
        </div>
        <button className="cursor-pointer [border:none] py-2 px-6 bg-lightseagreen-200 rounded-3xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumturquoise">
          <div className="relative text-sm leading-[150%] font-medium font-ibm-plex-mono text-lightseagreen-100 text-center inline-block min-w-[110px]">
            Powered by AI
          </div>
        </button>
      </div>
      <div className="self-stretch [backdrop-filter:blur(120px)] rounded-2xl bg-gray-200 flex flex-col items-center justify-start p-6 box-border gap-[64px] max-w-full text-left text-d-colors-base-neutral mq675:gap-[32px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <TextInput
            label="What is your financial goal?"
            placeholderPlaceholder="Example: buy a new house, study abroad, etc"
          />
          <TextInput
            label="What is the value of your goal?"
            placeholderPlaceholder="Example: Rp 250.000.000"
          />
          <TextInput
            label="How much is your income per month?"
            placeholderPlaceholder="Example: Rp 25.000.000"
          />
          <TextInput
            label="How much is your expense per month?"
            placeholderPlaceholder="Example: Rp 5.000.000"
          />
          <TextInput
            label="If you already have, what is your current saving for your this goal?"
            placeholderPlaceholder="Example: Rp 105.000.000"
          />
          <div className="self-stretch flex flex-col items-start justify-start relative max-w-full">
            <div className="self-stretch flex flex-row items-center justify-center py-t-spacing-21 px-t-spacing-1 box-border max-w-full">
              <div className="flex-1 relative leading-[20px] inline-block max-w-full">
                Customize your current financial condition
              </div>
              <div className="w-[280px] relative text-xs leading-[16px] font-daisyui-text-xs text-right hidden opacity-[0.8] z-[2]">
                Top Right label
              </div>
            </div>
            <div className="self-stretch rounded-t-spacing-21 bg-t-colors-base-white box-border flex flex-row items-center justify-start py-2.5 px-[15px] max-w-full text-d-colors-base-base-300 border-[1px] border-solid border-d-colors-base-base-300">
              <div className="flex-1 relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] max-w-full">
                Example: I’m still live with my parents. But I need to provide
                stable income.
              </div>
            </div>
            <div className="w-72 !m-[0] absolute top-[48px] left-[0px] hidden flex-row items-center justify-between py-t-spacing-21 px-t-spacing-1 box-border gap-[-280px] z-[2] text-xs font-daisyui-text-xs">
              <div className="h-4 w-[280px] relative leading-[16px] inline-block shrink-0 opacity-[0.8]">
                Bottom Left label
              </div>
              <div className="w-[280px] relative leading-[16px] text-right hidden opacity-[0.8]">
                Bottom Right label
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-3 px-5 bg-lightseagreen-100 self-stretch rounded-t-borders-radius-rounded-lg flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-lightseagreen-100">
          <img
            className="h-5 w-5 relative hidden min-h-[20px]"
            alt=""
            src="/lefticon.svg"
          />
          <div className="relative text-sm leading-[20px] font-ibm-plex-mono text-t-colors-base-white text-left inline-block min-w-[68px]">
            Generate
          </div>
          <img
            className="h-5 w-5 relative hidden min-h-[20px]"
            alt=""
            src="/righticon.svg"
          />
          <div className="rounded-t-borders-radius-rounded-full bg-t-colors-base-white hidden flex-row items-center justify-center py-t-spacing-05 px-t-spacing-3">
            <div className="relative text-xs leading-[16px] font-daisyui-text-xs text-d-colors-base-neutral text-center">
              Badge
            </div>
          </div>
        </button>
      </div>
      <div className="w-[140px] flex flex-col items-center justify-center py-[3.5px] px-[9px] box-border">
        <img
          className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className="self-stretch relative leading-[150%] text-lightslategray">
        © 2024 Candi Builder at GarudaHacks 5.0
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
