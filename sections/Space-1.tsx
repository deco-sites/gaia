interface Props {
    text_1?: string;
    text_2?: string;
  }
  
  function Spacer1({
    text_1 = "Made with",
    text_2 = "Made with",
  }: Props) {
    return (
      <div class="bg-black h-[150px]"></div>
    );
  }
  
  export default Spacer1;
  