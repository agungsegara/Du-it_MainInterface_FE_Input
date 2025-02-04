import PropTypes from "prop-types";

const TextInput = ({ className = "", label, placeholderPlaceholder }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start relative max-w-full text-left text-sm text-d-colors-base-neutral font-ibm-plex-mono ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center py-t-spacing-21 px-t-spacing-1 box-border max-w-full">
        <div className="flex-1 relative leading-[20px] inline-block max-w-full">
          {label}
        </div>
        <div className="w-[280px] relative text-xs leading-[16px] font-daisyui-text-xs text-right hidden opacity-[0.8] z-[2]">
          Top Right label
        </div>
      </div>
      <div className="self-stretch rounded-t-spacing-21 bg-t-colors-base-white box-border flex flex-row items-center justify-start py-3 px-[15px] max-w-full border-[1px] border-solid border-d-colors-base-base-300">
        <input
          className="w-full [border:none] [outline:none] font-ibm-plex-mono text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-silver text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[240px] max-w-full p-0"
          placeholder={placeholderPlaceholder}
          type="text"
        />
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
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholderPlaceholder: PropTypes.string,
};

export default TextInput;
