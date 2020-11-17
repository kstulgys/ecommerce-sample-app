import React from 'react'
import { Button, Stack, Input, Text, Box } from '@chakra-ui/react'

interface ItemCounterProps {
  handleInc: (e) => void
  handleDec: (e) => void
  onChange: (e) => void
  count: number
  price: string
}

export function ItemCounter(props: ItemCounterProps): JSX.Element {
  const { handleInc, handleDec, count, price, onChange } = props
  const [valueEmpty, setValueEmpty] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.valueAsNumber) {
      onChange(e)
      setValueEmpty(false)
    } else {
      setValueEmpty(true)
    }
  }

  const value = valueEmpty ? '' : count

  return (
    <Stack>
      <Box>
        <Text lineHeight="none">Quantity</Text>
      </Box>
      <Stack isInline>
        <Stack rounded="sm" isInline spacing={0} alignItems="center" border="1px solid" borderColor="gray.900">
          <Button width={10} bg="white" rounded="none" onClick={handleDec}>
            -
          </Button>
          <Input
            bg="white"
            onBlur={() => setValueEmpty(false)}
            type="number"
            width={10}
            value={value}
            onChange={handleChange}
            rounded="none"
            p={0}
            border="none"
            textAlign="center"
          />
          <Button width={10} bg="white" rounded="none" onClick={handleInc}>
            +
          </Button>
        </Stack>
      </Stack>
      <Box overfllowX="auto">
        <Text width="full" lineHeight="none">
          ${(+price * count).toFixed(2)}
        </Text>
      </Box>
    </Stack>
  )
}
