import { Box, Button, Icon, Menu, MenuButton, MenuItem, MenuList, Stack, Text, Grid, Image } from '@chakra-ui/core'
import Head from 'next/head'
import { AiOutlineShopping } from 'react-icons/ai'
import { FiRefreshCw, FiLock, FiUmbrella } from 'react-icons/fi'

const products = [{id:1, imageUrl:'https://preview.colorlib.com/theme/timezone/assets/img/hero/xwatch.png.pagespeed.ic.LlRtijfV2T.webp'}]

export default function Home(): JSX.Element {
  return (
    <Stack spacing="0" color="gray.800" fontFamily="Josefin Sans">
      <Head>
        <title>Nextjs ecommerce demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Navigation />
      <Hero />
      <Stack as="main" spacing="0" flex="1" flexDir="column" width="full">
        <FeaturedProducts />
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="10" py="10">
          <Box>
            <Image rounded="sm" src="/shoes-1.jpg" height="500px" width="full" objectFit="cover" />
          </Box>
          <Box>
            <Image rounded="sm" src="/bag-1.jpg" height="500px" width="full" objectFit="cover" />
          </Box>
          <Box>
            <Image rounded="sm" src="/tops-1.jpg" height="500px" width="full" objectFit="cover" />
          </Box>
        </Grid>
        <Stack height="300px" bg="gray.100">
          <Container>
            <Stack spacing={0} isInline width="full" fontSize="xl">
              <Stack justifyContent="center" alignItems="center" rounded="md" height="300px" flex={1}>
                <Icon as={FiRefreshCw} fontSize="32px" mb="4" />
                <Text fontWeight="medium" letterSpacing="wider">
                  Free Shipping and Returns
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems="center" rounded="md" height="300px" flex={1}>
                <Icon as={FiLock} fontSize="32px" mb="4" />
                <Text fontWeight="medium" letterSpacing="wider">
                  Secured Payments
                </Text>
              </Stack>
              <Stack justifyContent="center" alignItems="center" rounded="md" height="300px" flex={1}>
                <Icon as={FiUmbrella} fontSize="32px" mb="4" />
                <Text fontWeight="medium" letterSpacing="wider">
                  Customer Service
                </Text>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  )
}

function Container({ children, ...rest }): JSX.Element {
  return (
    <Stack spacing="0" maxW="1600px" width="full" height="full" mx="auto" px="4" {...rest}>
      {children}
    </Stack>
  )
}

function Navigation(): JSX.Element {
  return (
    <Stack as="nav" isInline position="fixed" top="0" width="100%" zIndex={10} bg="white" height="20">
      <Container>
        <Stack height="full" spacing="6" isInline alignItems="center" ml="auto">
          <Box>
            <Button variant="link">Home</Button>
          </Box>
          <Box>
            <Button variant="link">Shop</Button>
          </Box>
          <Box>
            <Button variant="link">New Arivals</Button>
          </Box>
          <Box>
            <Button variant="link">Popular</Button>
          </Box>
          {/* <Box>
            <Menu>
              <MenuButton as={Button}>Store</MenuButton>
              <MenuList alignItems="center">
                <MenuItem>Shoes</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem>Tops</MenuItem>
              </MenuList>
            </Menu>
          </Box> */}
          <Box>
            <Icon as={AiOutlineShopping} fontSize="40px" />
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}

function Hero(): JSX.Element {
  return (

    <Stack height='100vh' bg='gray.100' pt='20'>
     <Container px={[0, 0, 4]} isInline >

       <Stack flex='1'>
       <Stack my='auto'>

       <Text maxWidth='80%' lineHeight='8rem' fontSize={['6xl', '6.5rem']} fontWeight='bold'>Select Your New Perfect Style</Text>
       </Stack>
       </Stack>


<Box
      ml='auto'

>
      <Image
      height='full'
      width='350px'
      objectFit='cover'
         src="https://preview.colorlib.com/theme/timezone/assets/img/hero/xwatch.png.pagespeed.ic.LlRtijfV2T.webp"
      />
</Box>

      </Container>
    </Stack>

    // <Stack>
    //   <Container px={[0, 0, 4]}>
    //     <Box position="relative" textAlign="center" width="full">
    //       {/* <Image
    //         mt="20"
    //         width="full"
    //         height="calc(100vh - 7rem)"
    //         rounded="sm"
    //         src="https://preview.colorlib.com/theme/timezone/assets/img/hero/xwatch.png.pagespeed.ic.LlRtijfV2T.webp"
    //         objectFit="cover"
    //       /> */}
    //       <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
    //         <Text color="white" fontSize={['5xl', '7xl']} fontWeight="black" lineHeight={['normal', 'none']} mb="12">
    //           New Outerwear Collection
    //         </Text>
    //         <Box textAlign="center">
    //           <Button
    //             px="10"
    //             borderWidth="3px"
    //             borderColor="white"
    //             rounded="full"
    //             variant="outline"
    //             bg="transparent"
    //             size="lg"
    //             fontSize="lg"
    //             textTransform="capitalize"
    //             color="white"
    //             _hover={{ color: 'white', bg: 'yellow.700', borderColor: 'yellow.700' }}
    //             fontWeight="medium"
    //           >
    //             shop now
    //           </Button>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Container>
    // </Stack>
  )
}

function FeaturedProducts(): JSX.Element {
  const products = [
    { id: 1, src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/xnew_product1.png.pagespeed.ic.GC30TWVUh9.webp', title: 'top', price: '$129.99' },
    { id: 2, src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png', title: 'shoes', price: '$100.00' },
    { id: 3, src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp', title: 'bag', price: '$69.99' },
    { id: 3, src: 'https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png', title: 'shoes', price: '$149.99' },
  ]

  return (
    <Stack bg="gray.200" py="20">
      <Container px={[0, 4]}>
        <Box>
          <Text textAlign="center" textTransform="uppercase" fontSize="xl" fontWeight="medium" letterSpacing="wider">
            New Arrivals
          </Text>
        </Box>
        <Grid py="20" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={[10, 32]}>
          {products.map(({ id, src, title, price }) => (
            <Stack key={id} height="350px" bg="white" p="2" spacing={0}>
              <Image rounded="sm" src={src} height="250px" width="full" objectFit="cover" />
              <Stack flex="1" p="3" fontSize="lg" textTransform="capitalize">
                <Text textAlign="center">{title}</Text>
                <Text textAlign="center">{price}</Text>
              </Stack>
            </Stack>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button
            px="10"
            borderWidth="3px"
            borderColor="yellow.700"
            rounded="full"
            variant="outline"
            bg="white"
            size="lg"
            fontSize="lg"
            textTransform="capitalize"
            color="yellow.700"
            _hover={{ color: 'white', bg: 'yellow.700' }}
            fontWeight="medium"
          >
            shop all
          </Button>
        </Box>
      </Container>
    </Stack>
  )
}

function Footer() {
  return (
    <Stack as="footer" py="20">
      <Container>
        <Stack>
          <Box>
            <Text>Home</Text>
          </Box>
          <Box>
            <Text>Shoes</Text>
          </Box>
          <Box>
            <Text>Accesories</Text>
          </Box>
          <Box>
            <Text>Tops</Text>
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}
