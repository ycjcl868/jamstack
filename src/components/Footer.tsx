export interface FooterProps {
  date: string;
}

const Footer: React.FunctionComponent<FooterProps> = props => {
  const { date = '' } = props;
  return (
    <footer className="flex items-center justify-center flex-wrap bg-gray-800 p-6 w-full z-10 top-0">
      <p className="text-gray-200">
        Power by{' '}
        <a
          href="https://github.com/ycjcl868"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ycjcl868
        </a>
        <span className="ml-2">(buildTime: {date})</span>
      </p>
    </footer>
  );
};

export default Footer;
