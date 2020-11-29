import React from 'react'
// import { SubFooter, Products, Layout, Hero } from 'components'
// import { Book } from 'shared/types'
import axios from 'axios'
import { Image, Stack, Text, Box, Button, Grid, Badge, Spinner, Icon, Divider } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import Head from 'next/head'
import faker from 'faker'
import { useOrder, selectCategory, addToCart } from 'shared/state/useOrder'

import { FiClock, FiMapPin, FiMessageSquare } from 'react-icons/fi'

const getRandomPrice = () => faker.finance.amount(10, 20)
const getRandomWeight = () => faker.finance.amount(100, 500, 0)

async function getTopMeals() {
  const promises = Array(10)
    .fill(null)
    .map(async () => {
      const {
        data: { meals = [] },
      } = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      return meals[0]
    })

  return Promise.all(
    promises.map(async (p) => {
      return await p.then((data) => ({
        weight: getRandomWeight(),
        price: getRandomPrice(),
        ...data,
      }))
    })
  )
}

async function getCategoryMeals(category) {
  const {
    data: { meals = [] },
  } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)

  return meals.map((meal) => ({
    weight: getRandomWeight(),
    price: getRandomPrice(),
    ...meal,
  }))
}

async function getMeals(category) {
  if (category === 'Top') {
    return await getTopMeals()
  }
  return await getCategoryMeals(category)
}

const categories = [
  { id: 14, name: 'Top' },
  { name: 'Beef', id: 0 },
  { name: 'Breakfast', id: 1 },
  { name: 'Chicken', id: 2 },
  { name: 'Dessert', id: 3 },
  { name: 'Goat', id: 4 },
  { name: 'Lamb', id: 5 },
  { name: 'Miscellaneous', id: 6 },
  { name: 'Pasta', id: 7 },
  { name: 'Pork', id: 8 },
  { name: 'Seafood', id: 9 },
  { name: 'Side', id: 10 },
  { name: 'Starter', id: 11 },
  { name: 'Vegan', id: 12 },
  { name: 'Vegetarian', id: 13 },
]
// interface HomeProps {
//   books: Book[]
// }

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Navigation />
      <Meals />
      <Order />
    </Layout>
  )
}

function Navigation() {
  const [menuItem, setMenuItem] = React.useState('menu')
  console.log({ setMenuItem })

  return (
    <Stack spacing="0" py="40" width="15%" bg="gray.900" pl="8">
      {['overview', 'menu', 'transactions', 'testimonials', 'faq'].map((link) => {
        const isActive = link === menuItem

        return (
          <Box key={link} role="group" boxShadow="inner">
            <Box
              height="16"
              bg="gray.900"
              roundedTopLeft="full"
              roundedBottomLeft="full"
              _groupHover={{
                bg: isActive ? 'gray.100' : 'gray.900',
              }}
            >
              <Button
                isDisabled={!isActive}
                height="16"
                pl="10"
                justifyContent="flex-start"
                textTransform="uppercase"
                size="lg"
                fontSize="md"
                fontWeight="bold"
                roundedTopLeft="full"
                roundedBottomLeft="full"
                width="full"
                bg={isActive ? 'gray.100' : 'gray.900'}
                color={isActive ? 'gray.900' : 'white'}
                _groupHover={{
                  bg: isActive ? 'gray.100' : 'gray.900',
                  color: isActive ? 'gray.900' : 'white',
                }}
                _hover={{
                  bg: isActive ? 'gray.100' : 'gray.900',
                }}
                transition="none"
              >
                {link}
              </Button>
            </Box>
          </Box>
        )
      })}
    </Stack>
  )
}

function Meals() {
  const { category } = useOrder()

  return (
    <Stack spacing="0" width="60%" px="8" py="10" overflowY="auto">
      <Stack spacing={0} isInline flexWrap="wrap" width="full" alignItems="center" justifyContent="center">
        {categories.map(({ name, id }) => (
          <Box p="2" key={id}>
            <Button
              name={name}
              onClick={selectCategory}
              fontWeight="semibold"
              boxShadow="base"
              rounded="full"
              bg={category === name ? 'gray.900' : 'white'}
              color={category === name ? 'white' : 'gray.900'}
              _hover={{
                bg: 'gray.900',
                color: 'white',
              }}
            >
              {name}
            </Button>
          </Box>
        ))}
      </Stack>
      <CategoryMeals />
    </Stack>
  )
}

function Order() {
  const state = useOrder()
  return (
    <Stack spacing={8} justifyContent="space-between" bg="white" width="25%" boxShadow="base" py="10" pb="8" px="8">
      <Text fontSize="3xl" fontWeight="semibold">
        Order
      </Text>
      <OrderDetails />
      <Divider borderColor="gray.300" />
      <Stack spacing={6} flex="1" overflowY="auto">
        {state.cartItems.map(({ product, subtotal, weight }) => {
          const { strMealThumb, strMeal, idMeal } = product

          return (
            <Stack spacing={6} isInline key={idMeal} alignItems="center">
              <Box width="25%">
                <Image rounded="md" boxShadow="base" height="20" width="20" src={strMealThumb} />
              </Box>
              <Box fontSize="sm" width="30%">
                <Text isTruncated>{strMeal}</Text>
                <Text>{weight} g</Text>
              </Box>
              <Box width="25%">
                <Counter />
              </Box>
              <Box width="20%" fontSize="sm">
                <Text>€ {subtotal.toFixed(2)}</Text>
              </Box>
            </Stack>
          )
        })}
      </Stack>
      <Box>
        <Button color="white" bg="gray.900" width="full" height="16">
          Checkout
        </Button>
      </Box>
    </Stack>
  )
}

function OrderDetails() {
  return (
    <Stack spacing={6}>
      <Stack isInline alignItems="center" spacing={4}>
        <Box>
          <Icon as={FiClock} fontSize="24px" />
        </Box>
        <Box>
          <Text lineHeight="none">14:30 PM</Text>
        </Box>
      </Stack>
      <Stack isInline alignItems="center" spacing={4}>
        <Box>
          <Icon as={FiMapPin} fontSize="24px" />
        </Box>
        <Box>
          <Text lineHeight="none">Some address</Text>
        </Box>
      </Stack>
      <Stack isInline alignItems="center" spacing={4}>
        <Box>
          <Icon as={FiMessageSquare} fontSize="24px" />
        </Box>
        <Box>
          <Text lineHeight="none">Some message</Text>
        </Box>
      </Stack>
    </Stack>
  )
}

function Counter() {
  return (
    <Stack fontWeight="medium" isInline alignItems="center">
      <Button
        variant="unstyled"
        p="0"
        rounded="full"
        size="xs"
        bg="white"
        border="1px solid"
        borderColor="gray.900"
        _hover={{
          bg: 'gray.900',
          color: 'white',
        }}
      >
        -
      </Button>
      <Box>
        <Text fontSize="sm">2</Text>
      </Box>
      <Button
        variant="unstyled"
        p="0"
        rounded="full"
        size="xs"
        bg="white"
        border="1px solid"
        borderColor="gray.900"
        _hover={{
          bg: 'gray.900',
          color: 'white',
        }}
      >
        +
      </Button>
    </Stack>
  )
}

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Stack spacing="0" width="full" isInline height="100vh" bg="gray.100" fontFamily="Montserrat">
        {children}
      </Stack>
      {/* <style global jsx>{`
        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar: {
          display: "none";
        }
      `}</style> */}
    </>
  )
}

function CategoryMeals() {
  const { category } = useOrder()
  const { isLoading, data: meals } = useQuery([category, category], getMeals, {
    staleTime: Infinity,
  })

  if (isLoading)
    return (
      <Stack isInline>
        <Spinner mx="auto" mt="20" />
      </Stack>
    )
  console.log({ meals })

  return (
    <Stack>
      {/* <Text fontSize="3xl" fontWeight="bold">
        {state.category}
      </Text> */}
      <Grid pt="16" gridTemplateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={8}>
        {meals.map((product) => {
          const { strMealThumb, price, weight, strMeal } = product
          return (
            <Stack
              key={strMealThumb}
              cursor="pointer"
              role="group"
              spacing={3}
              boxShadow="base"
              bg="white"
              rounded="2xl"
              p="3"
              position="relative"
              overflow="hidden"
            >
              <Image width="full" height="40" rounded="xl" src={strMealThumb} objectFit="cover" />
              <Box>
                <Text isTruncated fontSize="md" lineHeight="none" fontWeight="semibold">
                  {strMeal}
                </Text>
              </Box>
              <Stack isInline justifyContent="space-between" alignItems="center" fontSize="sm" fontWeight="medium">
                <Box>
                  <Text color="gray.600">€ {price}</Text>
                </Box>

                <Badge fontSize="sm" variant="subtle" colorScheme="gray" rounded="full" px="2" textTransform="lowercase" color="gray.600">
                  {weight} g
                </Badge>
              </Stack>

              <Button
                boxShadow="base"
                height="16"
                width="full"
                bg="gray.900"
                color="white"
                position="absolute"
                rounded="2xl"
                bottom={0}
                left={0}
                opacity={0}
                transform="translateY(4rem)"
                _groupHover={{
                  opacity: 1,
                  transform: 'translateY(0)',
                  transition: 'all .3s ease-in-out',
                }}
                _hover={{
                  bg: 'gray.800',
                }}
                onClick={() => addToCart({ product })}
              >
                add to cart
              </Button>
            </Stack>
          )
        })}
      </Grid>
    </Stack>
  )
}

{
  /* <Hero />
<Products products={books} title="All books" />
<SubFooter /> */
}

// export async function getServerSideProps(): Promise<{ props: { books: Book[] } }> {
//   const {
//     data: { books = [] },
//   } = await axios.get('http://localhost:3000/api/books')
//   return {
//     props: { books },
//   }
// }
