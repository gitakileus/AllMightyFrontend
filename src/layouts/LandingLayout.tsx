const LandingLayout = (props: LandingType) => {
  return <div className=''>{props.children}</div>;
};

interface LandingType {
  children?: any;
}

export default LandingLayout;
