import React from 'react'
import { Box, Stack, Text, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { useCart } from '../../useCart'
import { PrimaryButton } from '../../shared/components'
import { ItemCounter } from '../ItemCounter/ItemCounter'

export function ProductViewModal(props): JSX.Element {
  const { id, src, price } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { addToCart } = useCart()
  const [count, setCount] = React.useState<number>(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCount(e.target.valueAsNumber)
  }
  const handleInc = (): void => {
    setCount((prev) => prev + 1)
  }

  const handleDec = (): void => {
    setCount((prev) => (prev - 1 ? prev - 1 : 1))
  }

  // Rerender to fix the "View Product" button animation after closing the modal
  const [key, setKey] = React.useState<number>(0)
  const rerender = (): void => setKey((prev) => prev + 1)
  React.useEffect(rerender, [isOpen])

  const handleAddToCart = (): void => {
    addToCart({ productId: id, count, product: props })
    setCount(1)
    onClose()
  }

  return (
    <>
      <PrimaryButton
        key={key}
        position="absolute"
        bottom={0}
        left={0}
        opacity={0}
        transform="translateY(4rem)"
        _groupHover={{
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'all .3s ease-in-out',
        }}
        onClick={onOpen}
      >
        View Product
      </PrimaryButton>

      <Modal size="3xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody pb="6" pt="1" fontFamily="Josefin Sans">
            <Stack isInline spacing={6}>
              <Box height="full" width="50%">
                <Image src={src} width="full" height="400px" objectFit="cover" />
              </Box>
              <Stack width="50%">
                <Box flex="1">
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </Text>
                </Box>
                <Box mb="2">
                  <ItemCounter price={price} onChange={handleChange} handleInc={handleInc} handleDec={handleDec} count={count} />
                </Box>
                <Box>
                  <PrimaryButton onClick={handleAddToCart}>Add to cart</PrimaryButton>
                </Box>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
