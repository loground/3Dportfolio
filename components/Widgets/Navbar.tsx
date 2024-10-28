import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

interface LinkLineProps {
  mouseY: any;
  isHovered: boolean;
  title?: string;
  path?: string;
  router: NextRouter;
}
const Navbar = () => {
  return <SideStaggerNavigation />;
};

const NUM_LINES = 30;

const navItems = [
  { position: 2, title: 'Home', path: '/' },
  { position: 7, title: 'Surf/Skate', path: '/Footjobs' },
  { position: 11, title: 'Building', path: '/Handjobs' },
  { position: 15, title: 'Web.3.0', path: '/Brainjobs/Web3' },
  { position: 19, title: 'Marketing', path: '/Brainjobs/Experience' },
  { position: 23, title: 'Coding', path: '/Brainjobs/Programming' },
  { position: 27, title: 'Modeling', path: '/Facejobs' },
];

const SideStaggerNavigation = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const mouseY = useMotionValue(Infinity);
  const router = useRouter();

  return (
    <motion.nav
      onMouseMove={(e) => {
        mouseY.set(e.clientY);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        mouseY.set(Infinity);
        setIsHovered(false);
      }}
      className="fixed right-0 top-0 flex h-screen flex-col items-end justify-between py-6 pl-8">
      {Array.from(Array(NUM_LINES).keys()).map((i) => {
        const linkContent = navItems.find((item) => item.position === i + 1);

        return (
          <LinkLine
            title={linkContent?.title}
            isHovered={isHovered}
            mouseY={mouseY}
            key={i}
            path={linkContent?.path}
            router={router}
          />
        );
      })}
    </motion.nav>
  );
};

const SPRING_OPTIONS = {
  mass: 1,
  stiffness: 100,
  damping: 7,
};

const LinkLine: React.FC<LinkLineProps> = ({ mouseY, isHovered, title, path, router }) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect();

    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  const lineWidthRaw = useTransform(distance, [-80, 0, 80], [15, 60, 15]);
  const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

  const linkWidth = useSpring(25, SPRING_OPTIONS);

  useEffect(() => {
    if (isHovered) {
      linkWidth.set(150);
    } else {
      linkWidth.set(25);
    }
  }, [isHovered, linkWidth]);

  const handleNavigation = (event: any) => {
    event.preventDefault();
    if (path) {
      router.push(path);
    }
  };

  if (title) {
    return (
      <a href="#" onClick={(event) => handleNavigation(event)}>
        <motion.div
          ref={ref}
          className="group relative bg-neutral-500 transition-colors hover:bg-white"
          style={{ width: linkWidth, height: 2 }}>
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-0 z-10 w-full pt-2 font-bold uppercase text-neutral-500 transition-colors group-hover:text-white">
                {title}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </a>
    );
  } else {
    return (
      <motion.div
        ref={ref}
        className="relative bg-neutral-500"
        style={{ width: lineWidth, height: 2 }}
      />
    );
  }
};

export default Navbar;
