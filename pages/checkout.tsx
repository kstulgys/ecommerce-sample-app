import React from 'react'
import { Layout, CartItem, Container } from 'components'
import { useCart } from 'shared/state/useCart'
import { Stack, Divider, Text } from '@chakra-ui/react'
import { CheckoutForm } from 'components'
import { useRouter } from 'next/router'

export default function Checkout(): JSX.Element {
  const router = useRouter()
  const { cartItems, totalSum, totalCount } = useCart()

  const shouldShowCheckout = totalSum && totalCount

  React.useEffect(() => {
    if (shouldShowCheckout) router.push('/')
  }, [shouldShowCheckout, router])

  if (!shouldShowCheckout) return null

  return (
    <Layout>
      <Stack as="section" pt="40" width="full">
        <Container maxW="5xl">
          <Stack isInline height="full" spacing={20}>
            <Stack spacing={6} width="50%" justifyContent="space-between">
              <Stack spacing={6}>
                {Object.entries(cartItems)?.map(([key, cartItem]) => (
                  <CartItem key={key} {...cartItem} />
                ))}
              </Stack>
              <Stack pt="10">
                <Text fontSize="xl" fontWeight="semibold">
                  Total: ${totalSum.toFixed(2)}
                </Text>
              </Stack>
            </Stack>
            <Stack>
              <Divider orientation="vertical" height="full" />
            </Stack>
            <Stack spacing={6} width="50%">
              <CheckoutForm />
            </Stack>
          </Stack>
        </Container>
      </Stack>
      {/* <Hero /> */}
      {/* <Products products={newProducts} title="New Arrivals" id="new-products" />
      <Products products={popularProducts} title="Popular Products" id="popular-products" />
      <ViewMoreProductsButton />
      <SubFooter /> */}
    </Layout>
  )
}
