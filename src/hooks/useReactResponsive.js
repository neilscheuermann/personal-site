import { useMediaQuery } from 'react-responsive'
// TODO>>>: Try not to need this ^ package

const TABLET_WIDTH_MAX = '768px'

const useReactResponsive = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: ${TABLET_WIDTH_MAX})`,
  })
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${TABLET_WIDTH_MAX})`,
  })

  return { isMobile: isTabletOrMobileDevice || isTabletOrMobile }
}

export default useReactResponsive
