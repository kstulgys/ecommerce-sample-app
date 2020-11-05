import { Box, Button, Icon, Menu, MenuButton, MenuItem, MenuList, Stack, Text, Grid, Image } from '@chakra-ui/core'
import Head from 'next/head'
import { HiOutlineShoppingBag } from 'react-icons/hi'

function Container({ children, ...rest }): JSX.Element {
  return (
    <Stack spacing="0" maxW="1600px" width="full" mx="auto" px="4" {...rest}>
      {children}
    </Stack>
  )
}

function Navigation(): JSX.Element {
  return (
    <Stack as="nav" isInline py="8">
      <Container>
        <Stack spacing="6" isInline alignItems="center" ml="auto">
          <Box>
            <Button variant="link">Home</Button>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button}>Store</MenuButton>
              <MenuList alignItems="center">
                <MenuItem>Shoes</MenuItem>
                <MenuItem>Accessories</MenuItem>
                <MenuItem>Tops</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Icon as={HiOutlineShoppingBag} fontSize="40px" />
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}

function Hero(): JSX.Element {
  return (
    <Container as="section">
      <Box position="relative" textAlign="center" height="calc(100vh - 12rem)" width="full">
        <Image
          width="full"
          height="full"
          rounded="sm"
          src="https://static.wixstatic.com/media/9c608a_840cc8e97e8d4daf9451008b877d746b~mv2_d_5018_2563_s_4_2.jpg/v1/fill/w_3264,h_1718,al_c,q_90,usm_0.66_1.00_0.01/9c608a_840cc8e97e8d4daf9451008b877d746b~mv2_d_5018_2563_s_4_2.webp"
          objectFit="cover"
        />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Text color="white" fontSize={['5xl', '7xl']} fontWeight="black" lineHeight={['normal', 'none']} mb="12">
            New Outerwear Collection
          </Text>
          <Box textAlign="center">
            <Button
              px="10"
              borderWidth="3px"
              borderColor="white"
              rounded="full"
              variant="outline"
              bg="transparent"
              size="lg"
              fontSize="md"
              textTransform="capitalize"
              color="white"
              _hover={{ color: 'white', bg: 'yellow.700', borderColor: 'yellow.700' }}
              fontWeight="medium"
            >
              shop now
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

function PopularItems(): JSX.Element {
  const products = Array(4)
    .fill(null)
    .map((item, idx) => ({ id: idx, title: `title-${idx}` }))

  return (
    <Stack bg="gray.200" py="20">
      <Container>
        <Box>
          <Text textAlign="center" textTransform="uppercase" fontSize="xl">
            fetured products
          </Text>
        </Box>
        <Grid py="16" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="32">
          {products.map((item) => (
            <Box key={item.id} height="350px" bg="white">
              <Text>{item.title}</Text>
            </Box>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button
            borderWidth="3px"
            borderColor="yellow.700"
            rounded="full"
            variant="outline"
            bg="white"
            size="lg"
            fontSize="xl"
            textTransform="capitalize"
            color="yellow.700"
            _hover={{ color: 'white', bg: 'yellow.700' }}
            fontWeight="normal"
          >
            shop all
          </Button>
        </Box>
      </Container>
    </Stack>
  )
}

export default function Home(): JSX.Element {
  return (
    <Stack spacing="0" color="gray.800" minH="100vh">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Stack spacing="24" as="main" flex="1" flexDir="column" width="full">
        <Hero />
        <PopularItems />
        <Stack isInline width="full" spacing="12">
          <Box rounded="sm" height="500px" bg="gray.200" flex={1} />
          <Box rounded="sm" height="500px" bg="gray.200" flex={1} />
          <Box rounded="sm" height="500px" bg="gray.200" flex={1} />
        </Stack>
        <Stack height="300px" bg="gray.100">
          <Container>
            <Stack isInline width="full" fontSize="xl">
              <Stack justifyContent="center" alignItems="center" rounded="md" height="300px" flex={1}>
                <Text>Free Shipping and Returns</Text>
              </Stack>
              <Stack justifyContent="center" alignItems="center" rounded="md" height="300px" flex={1}>
                <Text>Secured Payments</Text>
              </Stack>
              <Stack justifyContent="center" alignItems="center" rounded="md" height="300px" flex={1}>
                <Text>Customer Service</Text>
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Stack>
      <Stack as="footer">
        <Text>Footer</Text>
      </Stack>
    </Stack>
  )
}
