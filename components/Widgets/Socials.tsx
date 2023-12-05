import { FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const Socials = () => {
  const iconStyles = {
    color: 'white',
    fontSize: '3em',
    cursor: 'pointer',
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row h-[20vh] md:h-[30vh] pt-[10%] ml-[0%] gap-5 pb-5">
        <FaLinkedin
          style={iconStyles}
          onClick={() =>
            window.open('https://www.linkedin.com/in/nikita-voronin-4b6758293/', '_blank')
          }
        />
        <FaInstagramSquare
          style={iconStyles}
          onClick={() => window.open('https://www.instagram.com/loground', '_blank')}
        />
        <FaTwitterSquare
          style={iconStyles}
          onClick={() => window.open('https://twitter.com/nickvrnn', '_blank')}
        />
        <FaGithubSquare
          style={iconStyles}
          onClick={() => window.open('https://github.com/loground', '_blank')}
        />
      </div>
    </div>
  );
};

export default Socials;
