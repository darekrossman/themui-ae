/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { useSpring, animated } from "react-spring"
import { ArrowBack } from "material-react-icons"
import navItems from "./nav-data"

const Level1Text = ({ children, ...props }) => (
  <Styled.h2
    as="p"
    sx={{
      py: 3,
      m: 0,
      cursor: "default",
      color: children === "Sale" ? "brand.tier1.contrast" : "text"
    }}
    {...props}
  >
    {children}
  </Styled.h2>
)

const Level2Text = ({ children, ...props }) => (
  <Styled.p
    sx={{
      py: 3,
      m: 0,
      fontWeight: "heading",
      cursor: "default"
    }}
    {...props}
  >
    {children}
  </Styled.p>
)

const NavSection = p => (
  <div
    sx={{
      variant: "containerStyles.cover",
      px: 5,
      py: 5,
      overflow: "auto"
    }}
    {...p}
  />
)

const navReducer = (state, { type, payload }) => {
  if (type === "next") {
    return {
      ...state,
      level: state.level + 1,
      selectedItem: payload.item,
      itemBounds: payload.bounds
    }
  }

  if (type === "back") {
    return {
      ...state,
      level: state.level - 1,
      selectedItem: null,
      itemBounds: null
    }
  }

  return state
}

const Item = ({ state, dispatch }) => {
  const item = state.selectedItem
  const y = state.itemBounds ? state.itemBounds.y : 0
  const [savedItem, setSavedItem] = React.useState(item)
  const [savedY, setSavedY] = React.useState(y)

  const itemTeleportProps = useSpring({
    to: { transform: `translateY(${0}px)`, opacity: 0.99 },
    from: {
      transform: `translateY(${savedY || y}px)`,
      opacity: !item ? 0.75 : 0.99
    },
    config: { tension: 400, friction: 34 },
    delay: 200,
    reverse: !item,
    reset: true
  })

  const itemChildrenProps = useSpring({
    from: { opacity: 0.01, transform: `translateY(${item ? 25 : 0}px)` },
    to: { opacity: 0.99, transform: `translateY(0px)` },
    config: { mass: 7, tension: 2000, friction: 200 },
    delay: item ? 500 : 0,
    reverse: !item,
    reset: true
  })

  const iconProps = useSpring({
    opacity: item ? 1 : 0,
    position: "absolute",
    top: "50%",
    left: -40,
    transform: "translateY(-50%)",
    delay: item ? 500 : 0
  })

  React.useEffect(() => {
    if ((!savedY && y) || (savedY && y && savedY !== y)) {
      setSavedY(y)
    }

    if (!savedItem && item) {
      setSavedItem(item)
    }

    if (savedItem && !item) {
      setTimeout(() => {
        setSavedItem(null)
        setSavedY(null)
      }, 700)
    }
  }, [item, savedItem, y, savedY, setSavedY])

  if (!savedItem) {
    return null
  }

  return (
    <NavSection>
      <div sx={{ position: "relative" }}>
        <animated.div
          style={itemTeleportProps}
          onClick={() => dispatch({ type: "back" })}
        >
          <animated.div style={iconProps}>
            <ArrowBack styles={{ width: 24, height: 24, display: "block" }} />
          </animated.div>
          <Level1Text>{savedItem.label}</Level1Text>
        </animated.div>

        <div sx={{ position: "absolute", top: 64 }}>
          {savedItem.children.map(child => (
            <animated.div style={itemChildrenProps} key={child.id}>
              <div sx={{ cursor: "default" }}>
                <Level2Text>{child.label}</Level2Text>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </NavSection>
  )
}

const NavRoot = ({ state, ...p }) => (
  <div
    sx={{
      backgroundColor:
        state.selectedItem && state.selectedItem.label === "Sale"
          ? "brand.saleNavBg"
          : "white",
      transition: "all 280ms 100ms",
      width: 375,
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 100
    }}
    {...p}
  />
)

const Nav = () => {
  const [refMap] = React.useState(() => new WeakMap())
  const [state, dispatch] = React.useReducer(navReducer, {
    level: 1,
    selectedItem: null,
    itemBounds: null
  })

  const level1Props = useSpring({
    opacity: state.level === 1 ? 1 : 0,
    delay: state.level === 1 ? 380 : 0
  })

  const onSelect = item => {
    const { offsetTop, parentElement } = refMap.get(item)
    const bounds = { y: offsetTop - parentElement.offsetTop }
    dispatch({ type: "next", payload: { item, bounds } })
  }

  return (
    <NavRoot state={state}>
      <NavSection>
        <animated.div style={level1Props}>
          {navItems.map(item => (
            <div
              key={item.id}
              ref={ref => ref && refMap.set(item, ref)}
              sx={{ cursor: "default" }}
              onClick={() => onSelect(item)}
              style={{
                opacity:
                  state.selectedItem && state.selectedItem.id === item.id
                    ? 0
                    : 1,
                transition: `opacity ${
                  state.selectedItem ? "50ms" : "300ms 500ms"
                }`
              }}
            >
              <Level1Text>{item.label}</Level1Text>
            </div>
          ))}
        </animated.div>
      </NavSection>

      <Item state={state} dispatch={dispatch} />
    </NavRoot>
  )
}

export default Nav
