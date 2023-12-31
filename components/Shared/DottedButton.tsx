interface DottedButtonProps {
  text: string;
  action: () => void;
}

const DottedButton: React.FC<DottedButtonProps> = ({ text, action }) => {
  return (
    <button
      className="rounded-2xl border-2 border-dashed border-black bg-white px-3 md:px-4 py-1 md:py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      onClick={action}>
      {text}
    </button>
  );
};

export default DottedButton;
