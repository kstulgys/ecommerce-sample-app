import { Box, Button, Icon, Stack, Text, Grid, Image, VStack, HStack, Link } from '@chakra-ui/core'
import Head from 'next/head'
import { AiOutlineShopping } from 'react-icons/ai'
import { FiRefreshCw, FiLock, FiUmbrella } from 'react-icons/fi'

export default function Home(): JSX.Element {
  return (
    <Stack spacing={0} color="gray.900" fontFamily="Josefin Sans" mt="24">
      <Head>
        <title>Nextjs ecommerce demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Hero />
      <NewArivals />
      <PopularItem />
      <SubFooter />
      <Footer />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </Stack>
  )
}

function SubFooter(): JSX.Element {
  return (
    <Stack>
      <Container>
        <Stack spacing={0} isInline width="full" fontSize="xl" color="white" bg="red.500" py="24">
          <Stack justifyContent="center" alignItems="center" rounded="md" flex={1}>
            <Icon as={FiRefreshCw} fontSize="40px" mb="4" />
            <Text fontWeight="bold">Free Shipping and Returns</Text>
          </Stack>
          <Stack justifyContent="center" alignItems="center" rounded="md" flex={1}>
            <Icon as={FiLock} fontSize="40px" mb="4" />
            <Text fontWeight="bold">Secured Payments</Text>
          </Stack>
          <Stack justifyContent="center" alignItems="center" rounded="md" flex={1}>
            <Icon as={FiUmbrella} fontSize="40px" mb="4" />
            <Text fontWeight="bold">Customer Service</Text>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

function PopularItem(): JSX.Element {
  const products = [
    {
      id: 1,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png',
      title: 'top',
      price: '$ 129.99',
    },
    {
      id: 3,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png',
      title: 'bag',
      price: '$ 69.99',
    },
    {
      id: 3,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png',
      title: 'shoes',
      price: '$ 149.99',
    },
    {
      id: 3,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png',
      title: 'shoes',
      price: '$ 149.99',
    },
    {
      id: 3,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png',
      title: 'shoes',
      price: '$ 149.99',
    },
    {
      id: 3,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png',
      title: 'shoes',
      price: '$ 149.99',
    },
  ]
  return (
    <Stack as="section" pb="40" width="full" id="popular">
      <Container>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          Popular Items
        </Text>
        <Grid py="16" pb="32" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={[10]}>
          {products.map(({ id, src, title, price }) => (
            <Stack key={id} bg="white" spacing={0} height="450px">
              <Box role="group" height="full" position="relative" overflow="hidden" boxShadow="md">
                <Box borderBottom="4px solid" borderColor="red.500" height="full">
                  <Image src={src} width="full" height="full" objectFit="cover" />
                </Box>
                <Button
                  rounded="none"
                  opacity={0}
                  transform="translateY(4rem)"
                  _groupHover={{
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: 'all .3s ease-in-out',
                  }}
                  _hover={{
                    bg: 'red.400',
                  }}
                  height="4rem"
                  bg="red.500"
                  position="absolute"
                  bottom={0}
                  left={0}
                  width="full"
                  color="white"
                >
                  Add to cart
                </Button>
              </Box>
              <Stack p="3" pt="6" textTransform="capitalize" textAlign="center">
                <Text color="red.500" fontSize="xl" fontWeight="medium">
                  {price}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button
            px="8"
            bg="red.500"
            height="4rem"
            rounded="none"
            fontSize="lg"
            textTransform="uppercase"
            color="white"
            _hover={{
              bg: 'red.400',
            }}
          >
            view more products
          </Button>
        </Box>
      </Container>
    </Stack>
  )
}

function NewArivals(): JSX.Element {
  const products = [
    {
      id: 1,
      src:
        'https://preview.colorlib.com/theme/timezone/assets/img/gallery/xnew_product1.png.pagespeed.ic.GC30TWVUh9.webp',
      title: 'top',
      price: '$ 129.99',
    },
    {
      id: 3,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp',
      title: 'bag',
      price: '$ 69.99',
    },
    {
      id: 3,
      src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png',
      title: 'shoes',
      price: '$ 149.99',
    },
  ]
  return (
    <Stack as="section" py="40" width="full" id="new-arrivals">
      <Container>
        <Text fontSize="5xl" fontWeight="bold">
          New Arrivals
        </Text>
        <Grid pt="16" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={[10]}>
          {products.map(({ id, src, title, price }) => (
            <Stack key={id} bg="white" spacing={0}>
              <Box role="group" position="relative" overflow="hidden" boxShadow="md">
                <Box borderBottom="4px solid" borderColor="red.500">
                  <Image src={src} height="500px" width="full" objectFit="cover" />
                </Box>
                <Button
                  rounded="none"
                  opacity={0}
                  transform="translateY(4rem)"
                  _groupHover={{
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: 'all .3s ease-in-out',
                  }}
                  _hover={{
                    bg: 'red.400',
                  }}
                  height="4rem"
                  bg="red.500"
                  position="absolute"
                  bottom={0}
                  left={0}
                  width="full"
                  color="white"
                >
                  Add to cart
                </Button>
              </Box>
              <Stack p="3" pt="6" textTransform="capitalize" textAlign="center">
                <Text color="red.500" fontSize="xl" fontWeight="medium">
                  {price}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Stack>
  )
}

function Container({ children, ...rest }): JSX.Element {
  return (
    <Stack spacing={0} maxW="7xl" width="full" height="full" mx="auto" px="4" {...rest}>
      {children}
    </Stack>
  )
}

function Navigation(): JSX.Element {
  return (
    <Stack
      as="nav"
      isInline
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={10}
      bg="white"
      height="24"
      boxShadow="xl"
    >
      <Container>
        <Stack height="full" width="full" isInline alignItems="center" justifyContent="space-between">
          <HStack>
            <Button variant="link" color="gray.900" fontSize="3xl">
              <Box as="span">Time</Box>
              <Box as="span" color="red.500">
                Zone
              </Box>
            </Button>
          </HStack>
          <HStack spacing={10}>
            <Box>
              <Button variant="link" color="gray.900" fontSize="lg">
                Home
              </Button>
            </Box>
            <Box>
              <Button variant="link" color="gray.900" fontSize="lg">
                Shop
              </Button>
            </Box>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#new-arrivals">
                New Arrivals
              </Button>
            </Box>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#popular">
                Popular
              </Button>
            </Box>
          </HStack>
          <HStack>
            <Box>
              <Icon as={AiOutlineShopping} fontSize="32px" />
            </Box>
          </HStack>
        </Stack>
      </Container>
    </Stack>
  )
}

function Hero(): JSX.Element {
  return (
    <Stack height="calc(100vh - 6rem)" bg="gray.100">
      <Container px={[0, 0, 4]} isInline>
        <Stack flex="1">
          <Stack my="auto">
            <Text lineHeight="7rem" fontSize={['5xl', '6rem']} fontWeight="bold">
              Select Your New Perfect Style
            </Text>
          </Stack>
        </Stack>
        <Box ml="auto">
          <Image
            height="calc(100vh - 6rem)"
            width="375px"
            objectFit="cover"
            src="https://preview.colorlib.com/theme/timezone/assets/img/hero/xwatch.png.pagespeed.ic.LlRtijfV2T.webp"
          />
        </Box>
      </Container>
    </Stack>
  )
}

function Footer(): JSX.Element {
  return (
    <Stack as="footer" py="40">
      <Container>
        <Stack spacing={4} fontSize="lg">
          <Box>
            <Text>Home</Text>
          </Box>
          <Box>
            <Text>Shop</Text>
          </Box>
          <Box>
            <Text>New Arrivals</Text>
          </Box>
          <Box>
            <Text>Popular</Text>
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}
