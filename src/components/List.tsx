interface Props {
  number: string;
}

export const List = (props: Props) => {
  const { number } = props;
  return (
    <div className="flex max-w-max h-10 font-regular text-blue">
      <p className="border border-blue border-2 rounded-lg text-5xl flex h-10 items-center">
        {number}
      </p>
      <p className="text-8xl text-blue">Hello</p>
    </div>
  );
};
