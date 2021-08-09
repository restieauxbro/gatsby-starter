import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Link } from "gatsby"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const shaded = useIsTopOfPage()
  const hidden = useUserIsScrollingDown()
  return (
    <>
      <motion.header variants={stagger} initial="initial" animate="animate">
        <div
          className={shaded ? "header-cnt shaded" : "header-cnt"}
          style={hidden ? { top: "-100%" } : { top: 0 }}
        >
          <div className="header">
            <HeaderLogo />

            <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </motion.header>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}
export default Header

// --------- THINGS IN THE COMPONENT ---------

const HeaderLogo = () => {
  return (
    <Link to="/">
      <motion.div className="logo-cnt" variants={fadeIn}>
        <div className="logo">TR</div>
      </motion.div>
    </Link>
  )
}

const Nav = ({ menuOpen, setMenuOpen }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 800px" })

  return (
    <nav>
      {isDesktop ? (
        <motion.ul variants={stagger} initial="initial" animate="animate">
          {menuItems.map(({ title, link }) => (
            <motion.li variants={fadeIn}>
              <Link to={link}>{title}</Link>
            </motion.li>
          ))}
          <motion.li variants={fadeIn}>
            <Switcher />
          </motion.li>
        </motion.ul>
      ) : (
        <div className="hamburger-cnt" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div
            className="hamburger"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="line" />
            <motion.div variants={fadeIn} className="line" />
            <motion.div variants={fadeIn} className="line" />
          </motion.div>
        </div>
      )}
    </nav>
  )
}

const Menu = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState(false)

  const isActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? setActive(true) : setActive(false)
  }
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="menu-cnt"
          initial={{ x: "100%" }}
          animate={{ x: 0, transition: { ease: "circOut" } }}
          exit={{ x: "100%" }}
        >
          <div className="exit-button" onClick={() => setMenuOpen(!menuOpen)}>
            +
          </div>
          <div className="menu">
            <motion.div
              className="menu-contents"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {menuItems.map(({ title, link }) => (
                <Link to={link} className="mobile-menu-items">
                  <div>{title}</div>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Switcher = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="theme-switcher">
          <label>
            <input
              className="theme-switcher"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
          </label>
        </div>
      )}
    </ThemeToggler>
  )
}

const menuItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

// ----------------- HOOKS--------------

// IS TOP OF PAGE

const useIsTopOfPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop
    setIsScrolled(top !== 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isScrolled
}

// SCROLLING DOWN

const useUserIsScrollingDown = () => {
  const [scrollDir, setScrollDir] = useState(false) // True is scrolling down, false is scrolling up

  useEffect(() => {
    const threshold = 20
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      // decides ticking true or false
      const scrollY = window.pageYOffset
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? true : false)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    console.log(scrollDir)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollDir])

  return scrollDir
}

const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}
