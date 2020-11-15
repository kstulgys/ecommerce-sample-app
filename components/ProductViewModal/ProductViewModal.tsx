import React from 'react'
import {
  Box,
  Button,
  Stack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { useCart } from '../../useCart'
import { PrimaryButton } from '../../shared/components'

export function ProductViewModal(props): JSX.Element {
  const { src } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { addItem } = useCart()
  const [counter, setCount] = React.useState<number>(1)
  const [key, rerender] = React.useState<number>(0)

  // Rerender to fix the "View Product" button animation  after closing the modal
  React.useEffect(() => {
    rerender((prev) => prev + 1)
  }, [isOpen])

  const handleAddToCart = (): void => {
    if (counter <= 0) return
    addItem(Array(counter).fill(props))
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
          <ModalHeader></ModalHeader>
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
                <Box mb="6">
                  <Text mb="2">Quantity</Text>
                  <Stack isInline spacing="0" alignItems="center">
                    <Button rounded="none" onClick={() => setCount((prev) => prev - 1)}>
                      -
                    </Button>
                    <Input
                      onChange={(e) => setCount(+e.target.value)}
                      rounded="none"
                      p="0"
                      border="none"
                      width="10"
                      textAlign="center"
                      type="number"
                      value={counter}
                    />
                    <Button rounded="none" onClick={() => setCount((prev) => prev + 1)}>
                      +
                    </Button>
                  </Stack>
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
