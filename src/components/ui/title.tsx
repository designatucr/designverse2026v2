type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <div className="font-inter text-landing-brown-300 text-center text-4xl font-bold md:text-7xl">
      {children}
    </div>
  );
};

export default Title;
