import Container from "../components/Container";

const Desktop = () => {
  return (
    <div className="w-full h-[1752px] relative bg-whitesmoke overflow-hidden leading-[normal] tracking-[normal]">
      <img
        className="absolute top-[-877px] left-[calc(50%_-_1407px)] w-[2813px] h-[1869px]"
        alt=""
        src="/background-visual.svg"
      />
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-center justify-start py-[120px] px-5 box-border max-w-full z-[1] mq675:gap-[24px]">
        <Container />
      </div>
    </div>
  );
};

export default Desktop;
