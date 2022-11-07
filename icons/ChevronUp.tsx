type ChevronUpProps = {
  className: string;
};

const ChevronUp = (props: ChevronUpProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      viewBox="0 0 512 512"
    >
      <title>Chevron Up Circle</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M352 296l-96-96-96 96"
      />
      <path
        d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
      />
    </svg>
  );
};

export default ChevronUp;