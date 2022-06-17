const MintingLayout = (props: MintingType) => {
  return <div className=''>{props.children}</div>;
};

interface MintingType {
  children?: any;
}

export default MintingLayout;
