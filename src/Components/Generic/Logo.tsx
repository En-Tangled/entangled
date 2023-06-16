import {
  chakra,
  ImageProps,
  forwardRef,
} from "@chakra-ui/react"
// Change assets
import logo from "./logo2.png"


export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  // Change the way this is handled
  return <chakra.img src={logo} ref={ref} {...props}  width={['100px']} height={['50px']} mr={[0, 0, 4]} mb={[2, 2, 0]} />
})
