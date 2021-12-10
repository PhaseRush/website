import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-5xl font-bold leading-tight tracking-tighter text-center lg:text-3xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with love and ramen.
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
            <a
              href="https://nohello.net/"
              className="px-12 py-3 mx-3 mb-6 font-bold text-white transition-colors duration-200 bg-black border border-black hover:bg-white hover:text-black lg:px-8 lg:mb-0"
            >
              nohello
            </a>
            <a
              href="https://www.youtube.com/watch?v=J1wSMTWKLao"
              className="px-12 py-3 mx-3 mb-6 font-bold text-white transition-colors duration-200 bg-black border border-black hover:bg-white hover:text-black lg:px-8 lg:mb-0"
            >
              Anthem
            </a>
            {/* <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
