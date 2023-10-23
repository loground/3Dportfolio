import { FaLinkedinIn, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

const Socials = () => {
  const iconStyles = {
    color: 'white',
    fontSize: '3em',
    cursor: 'pointer',
  };

  return (
    <div>
      <p className="text-white text-3xl ml-[5%]"> My socials:</p>
      <div className="flex flex-row mt-2 ml-[0%] gap-5 pb-5">
        <FaLinkedinIn
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
